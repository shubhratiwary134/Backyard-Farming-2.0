
from flask import Flask, request, jsonify
from helpers import WorkFlows
from threading import Thread
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app, supports_credentials=True, origins=[
    "https://backyard-farming-2-0.onrender.com",
    "http://localhost:3000"
])

@app.route('/api/v1/upload', methods=['POST'])
def upload_pdf():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    
    uploads_dir = "./uploads"
    if not os.path.exists(uploads_dir):
        os.makedirs(uploads_dir)

    pdf_path = os.path.join(uploads_dir, file.filename)
    file.save(pdf_path)

    # Define the background ingestion function
    def async_embed(path):
        try:
            workflow = WorkFlows()
            workflow.ingest_data(path)
        except Exception as e:
            print(f"[Background Error] Embedding failed for {path}: {e}")

    # Start embedding in a separate thread
    Thread(target=async_embed, args=(pdf_path,)).start()

    return jsonify({"message": f"File '{file.filename}' upload received. Embedding started."}), 200

@app.route("/api/v1/query", methods=["POST"])
def query_rag():
    data = request.get_json()
    if not data or "question" not in data:
        return jsonify({"error": "Missing question in request"}), 400

    question = data["question"]
    
    try:
        workflow = WorkFlows()
        response = workflow.get_response(question, 'normal') 
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# endpoint to generate the report
@app.route("/api/v1/report", methods=["POST"])
def generate_report():

    data = request.get_json()
    if not data or "question" not in data:
        return jsonify({"error": "Missing question in request"}), 400

    question = data["question"]
    
    try:
        workflow = WorkFlows()
        response = workflow.get_response(question, 'report')
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port = 5000, host = '0.0.0.0')