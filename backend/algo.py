import pandas as pd
import numpy as np
import pickle
from datasets import load_dataset


def provideJobRecommendation(userKnowledge):

    data = pd.read_csv("Dataset/mldata.csv")

    # load prediction model from notebook
    pickleFile = open("rfweights.pkl", "rb")
    rfmodel = pickle.load(pickleFile)

    # Obtain the categorical/nominal data because it is not coded according (but based on the first occurence, first come first assign number)
    # Therefore, need to read from the file to obtain the number.
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
    # assign the datatype and automated assigned code
    for i in categorical_cols:
        data[i] = data[i].astype("category")
        data[i] = data[i].cat.codes

    # embedded nominal/ categorical values for certicates
    certificates_name = list(categorical_cols["certifications"].unique())
    certificates_code = list(data["certifications"].unique())
    certificates_references = dict(zip(certificates_name, certificates_code))

    # embedding for workshops
    workshop_name = list(categorical_cols["workshops"].unique())
    workshop_code = list(data["workshops"].unique())
    workshop_references = dict(zip(workshop_name, workshop_code))

    # embedding for subjects_interests
    subjects_interest_name = list(categorical_cols["Interested subjects"].unique())
    subjects_interest_code = list(data["Interested subjects"].unique())
    subjects_interest_references = dict(
        zip(subjects_interest_name, subjects_interest_code)
    )

    # embedding for career_interests
    career_interest_name = list(categorical_cols["interested career area "].unique())
    career_interest_code = list(data["interested career area "].unique())
    career_interest_references = dict(zip(career_interest_name, career_interest_code))

    # embedding for company_intends
    company_intends_name = list(
        categorical_cols["Type of company want to settle in?"].unique()
    )
    company_intends_code = list(data["Type of company want to settle in?"].unique())
    company_intends_references = dict(zip(company_intends_name, company_intends_code))

    # embedding for book_interests
    book_interest_name = list(categorical_cols["Interested Type of Books"].unique())
    book_interest_code = list(data["Interested Type of Books"].unique())
    book_interest_references = dict(zip(book_interest_name, book_interest_code))

    def rfprediction(
        logical_thinking,
        hackathon_attend,
        coding_skills,
        public_speaking_skills,
        self_learning,
        extra_course,
        certificate_code,
        worskhop_code,
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
                "workshop": [worskhop_code],
                "read_writing_skills": [
                    (
                        0
                        if "poor" in read_writing_skill
                        else 1 if "medium" in read_writing_skill else 2
                    )
                ],
                "memory_capability": [
                    (
                        0
                        if "poor" in memory_capability
                        else 1 if "medium" in memory_capability else 2
                    )
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

        # replace str to numeric representation, dtype chged to int8
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

        # dummy encoding
        # first we convert into list from df
        userdata_list = df.values.tolist()
        # now we append boolean based conditions
        if df["management_technical"].values == "Management":
            userdata_list[0].extend([1])
            userdata_list[0].extend([0])
            userdata_list[0].remove("Management")
        elif df["management_technical"].values == "Technical":
            userdata_list[0].extend([0])
            userdata_list[0].extend([1])
            userdata_list[0].remove("Technical")
        else:
            return "Err"

        if df["smart_hardworker"].values == "smart worker":
            userdata_list[0].extend([1])
            userdata_list[0].extend([0])
            userdata_list[0].remove("smart worker")
        elif df["smart_hardworker"].values == "hard worker":
            userdata_list[0].extend([0])
            userdata_list[0].extend([1])
            userdata_list[0].remove("hard worker")
        else:
            return "Err"

        prediction_result_all = rfmodel.predict_proba(userdata_list)
        # create a list for output
        result_list = [
    {"name": "Applications Developer", "score": float(prediction_result_all[0][0])},
    {"name": "CRM Technical Developer", "score": float(prediction_result_all[0][1])},
    {"name": "Database Developer", "score": float(prediction_result_all[0][2])},
    {"name": "Mobile Applications Developer", "score": float(prediction_result_all[0][3])},
    {"name": "Network Security Engineer", "score": float(prediction_result_all[0][4])},
    {"name": "Software Developer", "score": float(prediction_result_all[0][5])},
    {"name": "Software Engineer", "score": float(prediction_result_all[0][6])},
    {"name": "Software Quality Assurance (QA)/ Testing", "score": float(prediction_result_all[0][7])},
    {"name": "Systems Security Administrator", "score": float(prediction_result_all[0][8])},
    {"name": "Technical Support", "score": float(prediction_result_all[0][9])},
    {"name": "UX Designer", "score": float(prediction_result_all[0][10])},
    {"name": "Web Developer", "score": float(prediction_result_all[0][11])},
]

        return result_list

    return rfprediction(
        userKnowledge["logical_thinking"],
        userKnowledge["hackathon_attend"],
        userKnowledge["coding_skills"],
        userKnowledge["public_speaking_skills"],
        userKnowledge["self_learning"],
        userKnowledge["extra_course"],
        userKnowledge["certificate_code"],
        userKnowledge["workshop_code"],
        userKnowledge["read_writing_skill"],
        userKnowledge["memory_capability"],
        userKnowledge["subject_interest"],
        userKnowledge["career_interest"],
        userKnowledge["company_intend"],
        userKnowledge["senior_elder_advise"],
        userKnowledge["book_interest"],
        userKnowledge["introvert_extro"],
        userKnowledge["team_player"],
        userKnowledge["management_technical"],
        userKnowledge["smart_hardworker"],
    )
