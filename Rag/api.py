
from flask import Flask, request, jsonify
from helpers import WorkFlows
import os
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/api/v1/upload', methods=['POST'])
def upload_pdf():
    try:
        # Ensure a file is included in the request
        if "file" not in request.files:
            logger.warning("No file part in the request.")
            return jsonify({"error": "No file provided"}), 400

        file = request.files["file"]

        if file.filename == "":
            logger.warning("Empty filename received.")
            return jsonify({"error": "No selected file"}), 400

        # Validate file type (only PDF allowed)
        if not file.filename.lower().endswith(".pdf"):
            logger.warning("Invalid file type.")
            return jsonify({"error": "Only PDF files are allowed"}), 400

        # Save the file
        pdf_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(pdf_path)
        logger.info(f"Saved file to: {pdf_path}")

        # Process the file using WorkFlows
        workflow = WorkFlows()
        workflow.ingest_data(pdf_path)
        logger.info(f"File '{file.filename}' processed successfully.")

        return jsonify({"message": f"File '{file.filename}' processed and stored in vectorDB"}), 200

    except Exception as e:
        logger.exception("Error during PDF upload or processing")
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