import os
from algo import provideJobRecommendation
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv
from langchain.llms import Cohere

app = Flask(__name__)
load_dotenv(find_dotenv())
llm = Cohere(cohere_api_key=os.environ["COHERE_API_KEY"], temperature=1)
CORS(app)

@app.route("/chatbot", methods=["POST"])
def ask_question():
    data = request.get_json()
    question = data.get("question", "")
    response = llm.predict(question)
    return jsonify({"answer": response})

@app.route("/assessment", methods=["POST"])
def dif():
    response = request.get_json()
    job_recommendations = provideJobRecommendation(response)
    return jsonify({"arr": job_recommendations})

if __name__ == "__main__":
    app.run(debug=True)
