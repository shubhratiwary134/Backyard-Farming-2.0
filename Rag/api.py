
from flask import Flask, request, jsonify
from helpers import WorkFlows
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/api/v1/upload', methods=['POST'])
def upload_pdf():

    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    
    # Define the directory where files will be saved
    uploads_dir = "./uploads"
    
    # Ensure the 'uploads' directory exists
    if not os.path.exists(uploads_dir):
        os.makedirs(uploads_dir)

    # Save the file
    pdf_path = os.path.join(uploads_dir, file.filename)
    file.save(pdf_path)

    try:
        # Process the file using WorkFlows
        workflow = WorkFlows()
        workflow.ingest_data(pdf_path)
        return jsonify({"message": f"File '{file.filename}' processed and stored in vectorDB"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


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