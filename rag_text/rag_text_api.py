from flask import Flask, request, jsonify
import os
import requests
from flask_cors import CORS
from flasgger import Swagger
from datetime import datetime
from query import rag_response
from database import main_doc_loader
from minio import Minio
from minio.error import S3Error
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
swagger = Swagger(app, template_file='rag_text_doc.yaml')
UPLOAD_FOLDER = "docs"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


minio_client = Minio(
    "minio:9000",
    access_key=os.getenv('MINIO_ACCESS_KEY'),
    secret_key=os.getenv('MINIO_SECRET_KEY'),
    secure=False
)

bucket_name = os.getenv('MINIO_BUCKET_NAME')

if not minio_client.bucket_exists(bucket_name):
    minio_client.make_bucket(bucket_name)

print(bucket_name)

def count_tokens(text):
    return len(text.split())

@app.route("/api/rag_text/query", methods=['POST'])
def query():
    message = request.get_json()
    query_text = message.get("query", "")
    
    query_tokens = count_tokens(query_text)
    id = str(datetime.now())
    
    requests.post("http://meter_api:5006/api/meter_text", json={
        "id": id,
        "subject": "Query",
        "tokens_count": query_tokens,
        "model_name": "Chat-GPT3"
    })

    final_response = rag_response([query_text])

    response_tokens = count_tokens(final_response)
    id2 = str(datetime.now())

    requests.post("http://meter_api:5006/api/meter_text", json={
        "id": id2,  
        "subject": "Response",
        "tokens_count": response_tokens,
        "model_name": "Chat-GPT3"
    })

    return jsonify({"response": final_response}), 200

@app.route("/api/rag_text/upload_documents", methods=['POST'])
def upload_docs():
    if 'pdf_files' not in request.files:
        return jsonify({"error": "No file part"}), 400

    files = request.files.getlist('pdf_files')

    if not files:
        return jsonify({"error": "No selected file"}), 400

    saved_files = []

    for file in files:
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400
        if file and file.filename.lower().endswith('.pdf'):
            try:
                file_path = file.filename
                minio_client.put_object(
                    bucket_name,
                    file_path,
                    file.stream,
                    length=-1, 
                    part_size=10 * 1024 * 1024,  
                    content_type='application/pdf'
                )
                saved_files.append(file_path)
            except S3Error as e:
                return jsonify({"error": f"Failed to upload '{file.filename}' to MinIO: {str(e)}"}), 500
        else:
            return jsonify({"error": f"File '{file.filename}' is not a PDF."}), 400

    main_doc_loader()
    return jsonify({"message": f"{len(saved_files)} PDF files uploaded and processed successfully."}), 200

if __name__ == "__main__":
    app.run(debug=True, port=5001, host='0.0.0.0')
