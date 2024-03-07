import os
from algo import provideJobRecommendation
from flask import Flask, jsonify, request
from flask_cors import CORS
# from flask_pymongo import PyMongo
from dotenv import load_dotenv, find_dotenv
# from langchain.llms import Cohere

app = Flask(__name__)
load_dotenv(find_dotenv())
# app.config["MONGO_URI"] = os.environ["MONGO_URI"]
# llm = Cohere(cohere_api_key=os.environ["COHERE_API_KEY"], temperature=0.5)
CORS(app)
# db = PyMongo(app).db

# @app.route("/ask", methods=["POST"])
# def ask_question():
#     data = request.get_json()
#     print(data)
#     question = data.get("question", "")
#     response = llm.predict(question)
#     return jsonify({"answer": response})

@app.route("/diff", methods=["POST"])
def dif():
    response = request.get_json()
    print(response)
    true_responses = [key for key, value in response.items() if value]
    if true_responses:
        print("True responses:", true_responses)
    
    # Get job recommendations
    job_recommendations = provideJobRecommendation(response)
    
    print("Job recommendations:", job_recommendations)
    
    return jsonify({"arr": job_recommendations})


if __name__ == "__main__":
    app.run(debug=True)
