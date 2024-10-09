import os
import shutil
from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.schema.document import Document
from nomic import embed
from qdrant_client import QdrantClient
from qdrant_client.http.models import PointStruct, VectorParams, Distance
import torch
import uuid
from dotenv import load_dotenv
from minio import Minio
from io import BytesIO

load_dotenv()

if torch.cuda.is_available():
    device = "gpu"
else:
    device = "cpu"

DATA_PATH = os.getenv('DATA_PATH')  
QDRANT_HOST = os.getenv('QDRANT_HOST')  
QDRANT_PORT = int(os.getenv('QDRANT_PORT'))  
COLLECTION_NAME = os.getenv('COLLECTION_NAME')
print(COLLECTION_NAME)  


minio_client = Minio(
    "minio:9000",
    access_key=os.getenv('MINIO_ACCESS_KEY'),
    secret_key=os.getenv('MINIO_SECRET_KEY'),
    secure=False
)

bucket_name = os.getenv('MINIO_BUCKET_NAME')
TEMP_DIR = "/tmp/minio_pdfs"  # Temporary local directory to store PDFs

def main_doc_loader(reset=False):
    if reset:
        print("Clearing Database")
        clear_database()

    documents = load_documents()
    chunks = split_documents(documents)
    print("chunks done")
    res = add_to_qdrant(chunks)
    print(res)
    return res

def fetch_pdfs_from_minio():
    """Fetch PDFs from MinIO and temporarily save them locally."""
    if not os.path.exists(TEMP_DIR):
        os.makedirs(TEMP_DIR)
    
    objects = minio_client.list_objects(bucket_name, prefix="", recursive=True)

    for obj in objects:
        if obj.object_name.lower().endswith('.pdf'):
            try:
                response = minio_client.get_object(bucket_name, obj.object_name)
                
                # Save the PDF temporarily in the local directory
                file_path = os.path.join(TEMP_DIR, obj.object_name)
                with open(file_path, 'wb') as file:
                    file.write(response.read())
                
                response.close()
                response.release_conn()

            except Exception as e:
                print(f"Error fetching file from MinIO: {e}")


def load_documents():
    """Load documents using PyPDFDirectoryLoader after fetching from MinIO."""
    fetch_pdfs_from_minio()  # Fetch and save PDFs locally first
    document_loader = PyPDFDirectoryLoader(TEMP_DIR)
    return document_loader.load()

def split_documents(documents: list[Document]):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=80,
        length_function=len,
        is_separator_regex=False,
    )
    return text_splitter.split_documents(documents)

def calculate_chunk_ids(chunks):
    for chunk in chunks:
        chunk_id = str(uuid.uuid4())
        chunk.metadata["id"] = chunk_id

    return chunks

def get_embedding_function(texts):
    output = embed.text(
        texts=texts,
        model='nomic-embed-text-v1.5',
        task_type='search_document',
        inference_mode='local',
        device=device,
    )
    return output

def add_to_qdrant(chunks: list[Document]):  
    client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)
    print(client)

    collections = client.get_collections().collections
    collection_names = [col.name for col in collections]

    if COLLECTION_NAME not in collection_names:
        print(f"Creating collection '{COLLECTION_NAME}'")
        client.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=VectorParams(size=768, distance=Distance.COSINE),  
        )
        print(f"Collection '{COLLECTION_NAME}' created successfully.")

    else:
        print(f"Collection '{COLLECTION_NAME}' already exists.")


    chunks_with_ids = calculate_chunk_ids(chunks)

    existing_items = client.scroll(collection_name=COLLECTION_NAME, limit=10_000)
    existing_ids = set(item.id for item in existing_items[0])
    print(f"Number of existing documents in DB: {len(existing_ids)}")

    new_chunks = []
    for chunk in chunks_with_ids:
        if chunk.metadata["id"] not in existing_ids:
            new_chunks.append(chunk)

    if len(new_chunks):
        print(f"Adding new documents: {len(new_chunks)}")

        texts = [chunk.page_content for chunk in new_chunks]
        embeddings = get_embedding_function(texts)['embeddings']
        print("Embeddings Done")

        print(len(embeddings))
        print(len(new_chunks))
        points = []
        for i in range(len(new_chunks)):
            chunk = new_chunks[i]
            point = PointStruct(
                id=chunk.metadata["id"],
                vector=embeddings[i], 
                payload={
                    "source": chunk.metadata["source"],
                    "page": chunk.metadata["page"],
                    "text": chunk.page_content
                }
            )

            points.append(point) 

        client.upsert(collection_name=COLLECTION_NAME, points=points)
        return True
    else:
        print("No new documents to add")
        return False

def clear_database():
    client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)
    if COLLECTION_NAME in [col.name for col in client.get_collections().collections]:
        client.delete_collection(collection_name=COLLECTION_NAME)
        print(f"Cleared collection '{COLLECTION_NAME}'")

if __name__ == '__main__':
    main_doc_loader(False)
