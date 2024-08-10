from algo import provideJobRecommendation
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv

app = Flask(__name__)
load_dotenv(find_dotenv())

CORS(app)

@app.route("/test", methods=["POST"])
def dif():
    response = request.get_json()
    job_recommendations = provideJobRecommendation(response)
    return jsonify({"arr": job_recommendations})

if __name__ == "__main__":
    app.run(debug=True)
