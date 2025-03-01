import fitz  
from langchain.text_splitter import RecursiveCharacterTextSplitter
from nomic import embed
import torch
from qdrant_client import QdrantClient
from qdrant_client.http.models import PointStruct, VectorParams, Distance
from langchain.prompts import ChatPromptTemplate
from langchain.schema import Document
from dotenv import load_dotenv
import uuid
import os
from groq import Groq

load_dotenv()

# Qdrant & Groq Configuration
QDRANT_HOST = os.getenv("QDRANT_HOST", "localhost")
QDRANT_PORT = int(os.getenv("QDRANT_PORT", 6333))
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "default_collection")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Ensure Groq client is initialized
groq_client = Groq(api_key=GROQ_API_KEY)

# Detect if CUDA is available
device = "cuda" if torch.cuda.is_available() else "cpu"

class RAG:
    def extract_text_from_pdf(self, pdf_path):
        doc = fitz.open(pdf_path)
        text = "\n".join([page.get_text("text") for page in doc])
        return text

    def split_text_into_chunks(self, text, chunk_size=500, chunk_overlap=50):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)

        chunks = text_splitter.split_text(text)
        return [Document(page_content=chunk, metadata={}) for chunk in chunks]
    
    def get_embedding_function(self, texts):
        output = embed.text(
            texts=texts,
            model='nomic-embed-text-v1.5',
            task_type='search_document',
            inference_mode='local',
            device=device,
        )
        return output
    
    def calculate_chunk_ids(self, chunks):
        for chunk in chunks:
            chunk.metadata = {}  # Ensure metadata exists
            chunk.metadata["id"] = str(uuid.uuid4())
        return chunks


class VectorDatabase(RAG):
    def add_to_qdrant(self, chunks):  
        client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)

        # Ensure collection exists
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

        chunks_with_ids = self.calculate_chunk_ids(chunks)

        # Check existing IDs
        existing_items = client.scroll(collection_name=COLLECTION_NAME, limit=10_000)
        existing_ids = set(item.id for item in existing_items[0])
        print(f"Number of existing documents in DB: {len(existing_ids)}")

        # Filter new chunks
        new_chunks = [chunk for chunk in chunks_with_ids if chunk.metadata["id"] not in existing_ids]
        
        if new_chunks:
            print(f"Adding new documents: {len(new_chunks)}")
            texts = [chunk.page_content for chunk in new_chunks]
            embeddings = self.get_embedding_function(texts)['embeddings']
            print("Embeddings Done")

            points = [
                PointStruct(
                    id=chunk.metadata["id"],
                    vector=embeddings[i], 
                    payload={
                        "source": chunk.metadata.get("source", ""),
                        "page": chunk.metadata.get("page", 0),
                        "text": chunk.page_content
                    }
                ) for i, chunk in enumerate(new_chunks)
            ]
            client.upsert(collection_name=COLLECTION_NAME, points=points)
            return True
        else:
            print("No new documents to add")
            return False
    
    def clear_database(self):
        client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)
        if COLLECTION_NAME in [col.name for col in client.get_collections().collections]:
            client.delete_collection(collection_name=COLLECTION_NAME)
            print(f"Cleared collection '{COLLECTION_NAME}'")


class Query(VectorDatabase):


    def query_rag(self, query_text: str):
        embedded_query = self.get_embedding_function([query_text])['embeddings'][0]
        client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)
        
        search_result = client.search(
            collection_name=COLLECTION_NAME, 
            query_vector=embedded_query, 
            limit=4
        )
        
        if not search_result:
            return "No relevant documents found."
        
        context_text = " ".join([doc.payload['text'] for doc in search_result])

        PROMPT_TEMPLATE = """
        Answer the question based only on the following context:
        {context}

        Answer the question based on the above context 
        ONLY in a way that you are speaking to another human being: {question}
        """

        REPORT_PROMPT_TEMPLATE = """
        Make a report in bullet Points based only on the following context:
        {context}
        include:
        1) Soil Analysis
        2) Previous Crop Data & Crop Rotation Suggestions
        3) Watering & Irrigation Plan
        4) Fertilization & Nutrient Management
        5) Pest & Disease Control
        6) Seasonal Care & Weather Protection
        7) Expected Yield & Harvesting Guidelines

        Answer the question based on the above context  in CLEAR BULLET POINTS
        
        """
       
        print("Retrieved Context:", context_text)

        prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
        prompt = prompt_template.format(context=context_text, question=query_text)
        print(prompt)
        
        response_text = self.call_groq(prompt)
        return response_text

    def call_groq(self, prompt):
        chat_completion = groq_client.chat.completions.create(
            messages=[
                {"role": "user", "content": prompt}
            ],
            model="llama3-8b-8192",
        )
        return chat_completion.choices[0].message.content


class WorkFlows(Query):

    def ingest_data(self, path):
        
        rag = RAG()
        pdf_text = rag.extract_text_from_pdf(path)
        #print(pdf_text)

        vector_db = VectorDatabase()
        chunks = vector_db.split_text_into_chunks(pdf_text)
        vector_db.add_to_qdrant(chunks)


    def get_response(self, question, doc_type):

        query_engine = Query()

        if doc_type == 'normal':
            response = query_engine.query_rag(question)
            return response
        
        elif doc_type == 'report':
            response = query_engine.query_rag(question)
            return response
