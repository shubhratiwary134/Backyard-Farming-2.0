
import argparse
from langchain.prompts import ChatPromptTemplate
from langchain_community.llms.ollama import Ollama
from groq import Groq
from database import get_embedding_function
import os
from qdrant_client import QdrantClient
from qdrant_client.http.models import PointStruct, VectorParams, Distance
from dotenv import load_dotenv

load_dotenv()

QDRANT_HOST = os.getenv('QDRANT_HOST')
QDRANT_PORT = int(os.getenv('QDRANT_PORT'))
COLLECTION_NAME = os.getenv('COLLECTION_NAME')

client = Groq(
    api_key= os.getenv('GROQ_API'),
)

PROMPT_TEMPLATE = """
Answer the question based only on the following context:

{context}

---

Answer the question based on the above context in a way that you are speaking to another human being, keep in concise: {question}
"""

def rag_response(query_text: str):
    final_response = query_rag(query_text)
    return final_response

def call_groq(prompt):
    chat_completion = client.chat.completions.create(
    messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="llama3-8b-8192",
    )
    return chat_completion.choices[0].message.content

def query_rag(query_text: str):
    embedded_query = get_embedding_function(query_text)['embeddings'][0]
    client = QdrantClient(host=QDRANT_HOST, port=QDRANT_PORT)

    search_result = client.query_points(
        collection_name=COLLECTION_NAME, 
        query=embedded_query, 
        limit=4
    ).points

    print(search_result[0].payload['text'])
    results = search_result[0].payload['text']

    context_text = ""
    for i in range(4):
        context_text += search_result[i].payload['text']

    print(context_text)
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=query_text)

    #model = Ollama(model="llama3.1")
    #response_text = model.invoke(prompt)

    response_text = call_groq(prompt)
    # sources = [doc.metadata.get("id", None) for doc, _score in results]
    formatted_response = f"{response_text}"
    return formatted_response