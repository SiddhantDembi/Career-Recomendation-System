import os
import pickle
import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv, find_dotenv

app = Flask(__name__)
load_dotenv(find_dotenv())
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# Load dataset and model
data = pd.read_csv("mldata.csv")
pickleFile = open("rfweights.pkl", "rb")
rfmodel = pickle.load(pickleFile)

# Obtain the categorical/nominal data
categorical_cols = data[
    [
        "certifications",
        "workshops",
        "Interested subjects",
        "interested career area ",
        "Type of company want to settle in?",
        "Interested Type of Books",
    ]
]
# Assign the datatype and automated assigned code
for col in categorical_cols:
    data[col] = data[col].astype("category")
    data[col] = data[col].cat.codes

# Embedded nominal/ categorical values for reference
certificates_references = dict(zip(categorical_cols["certifications"].unique(), data["certifications"].unique()))
workshop_references = dict(zip(categorical_cols["workshops"].unique(), data["workshops"].unique()))
subjects_interest_references = dict(zip(categorical_cols["Interested subjects"].unique(), data["Interested subjects"].unique()))
career_interest_references = dict(zip(categorical_cols["interested career area "].unique(), data["interested career area "].unique()))
company_intends_references = dict(zip(categorical_cols["Type of company want to settle in?"].unique(), data["Type of company want to settle in?"].unique()))
book_interest_references = dict(zip(categorical_cols["Interested Type of Books"].unique(), data["Interested Type of Books"].unique()))

def rfprediction(
    logical_thinking,
    hackathon_attend,
    coding_skills,
    public_speaking_skills,
    self_learning,
    extra_course,
    certificate_code,
    workshop_code,
    read_writing_skill,
    memory_capability,
    subject_interest,
    career_interest,
    company_intend,
    senior_elder_advise,
    book_interest,
    introvert_extro,
    team_player,
    management_technical,
    smart_hardworker,
):
    df = pd.DataFrame.from_dict(
        {
            "logical_thinking": [logical_thinking],
            "hackathon_attend": [hackathon_attend],
            "coding_skills": [coding_skills],
            "public_speaking_skills": [public_speaking_skills],
            "self_learning": [self_learning],
            "extra_course": [extra_course],
            "certificate": [certificate_code],
            "workshop": [workshop_code],
            "read_writing_skills": [
                0 if "poor" in read_writing_skill else 1 if "medium" in read_writing_skill else 2
            ],
            "memory_capability": [
                0 if "poor" in memory_capability else 1 if "medium" in memory_capability else 2
            ],
            "subject_interest": [subject_interest],
            "career_interest": [career_interest],
            "company_intend": [company_intend],
            "senior_elder_advise": [senior_elder_advise],
            "book_interest": [book_interest],
            "introvert_extro": [introvert_extro],
            "team_player": [team_player],
            "management_technical": [management_technical],
            "smart_hardworker": [smart_hardworker],
        }
    )

    # Replace str to numeric representation
    df = df.replace(
        {
            "certificate": certificates_references,
            "workshop": workshop_references,
            "subject_interest": subjects_interest_references,
            "career_interest": career_interest_references,
            "company_intend": company_intends_references,
            "book_interest": book_interest_references,
        }
    )

    # Convert DataFrame to list of lists
    userdata_list = df.values.tolist()[0]

    # Handle categorical binary columns for 'management_technical' and 'smart_hardworker'
    if userdata_list[df.columns.get_loc("management_technical")] == "Management":
        userdata_list.extend([1, 0])
    elif userdata_list[df.columns.get_loc("management_technical")] == "Technical":
        userdata_list.extend([0, 1])
    else:
        return "Err"

    if userdata_list[df.columns.get_loc("smart_hardworker")] == "smart worker":
        userdata_list.extend([1, 0])
    elif userdata_list[df.columns.get_loc("smart_hardworker")] == "hard worker":
        userdata_list.extend([0, 1])
    else:
        return "Err"

    # Remove original categorical columns after encoding
    del userdata_list[df.columns.get_loc("management_technical")]
    del userdata_list[df.columns.get_loc("smart_hardworker")]

    prediction_result = rfmodel.predict([userdata_list])
    prediction_result_all = rfmodel.predict_proba([userdata_list])
    
    result_list = {
        "Applications Developer": float(prediction_result_all[0][0]),
        "CRM Technical Developer": float(prediction_result_all[0][1]),
        "Database Developer": float(prediction_result_all[0][2]),
        "Mobile Applications Developer": float(prediction_result_all[0][3]),
        "Network Security Engineer": float(prediction_result_all[0][4]),
        "Software Developer": float(prediction_result_all[0][5]),
        "Software Engineer": float(prediction_result_all[0][6]),
        "Software Quality Assurance (QA)/ Testing": float(prediction_result_all[0][7]),
        "Systems Security Administrator": float(prediction_result_all[0][8]),
        "Technical Support": float(prediction_result_all[0][9]),
        "UX Designer": float(prediction_result_all[0][10]),
        "Web Developer": float(prediction_result_all[0][11]),
    }
    return result_list

@app.route("/test", methods=["POST"])
def dif():
    response = request.get_json()
    job_recommendations = rfprediction(
        response["logical_thinking"],
        response["hackathon_attend"],
        response["coding_skills"],
        response["public_speaking_skills"],
        response["self_learning"],
        response["extra_course"],
        response["certificate_code"],
        response["workshop_code"],
        response["read_writing_skill"],
        response["memory_capability"],
        response["subject_interest"],
        response["career_interest"],
        response["company_intend"],
        response["senior_elder_advise"],
        response["book_interest"],
        response["introvert_extro"],
        response["team_player"],
        response["management_technical"],
        response["smart_hardworker"],
    )
    return jsonify({"arr": job_recommendations})

if __name__ == "__main__":
    app.run(debug=True)
