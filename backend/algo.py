def provideJobRecommendation(userKnowledge):
    skills = {
        "marketing strategy": {
            "ans1": 1,
            "ans2": 2,
            "ans3": 3,
            "ans4": 2,
            "ans5": 3,
            "ans6": 3,
            "ans7": 3,
            "ans8": 3,
            "ans9": 1,
            "ans10": 1,
        },
        "market research": {
            "ans1": 3,
            "ans2": 1,
            "ans3": 2,
            "ans4": 2,
            "ans5": 1,
            "ans6": 4,
            "ans7": 2,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "digital marketing": {
            "ans1": 2,
            "ans2": 3,
            "ans3": 3,
            "ans4": 2,
            "ans5": 4,
            "ans6": 2,
            "ans7": 3,
            "ans8": 2,
            "ans9": 3,
            "ans10": 1,
        },
        "financial analysis": {
            "ans1": 3,
            "ans2": 2,
            "ans3": 1,
            "ans4": 2,
            "ans5": 2,
            "ans6": 4,
            "ans7": 2,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "audit": {
            "ans1": 3,
            "ans2": 1,
            "ans3": 3,
            "ans4": 2,
            "ans5": 3,
            "ans6": 3,
            "ans7": 2,
            "ans8": 1,
            "ans9": 3,
            "ans10": 1,
        },
        "accounting software": {
            "ans1": 2,
            "ans2": 2,
            "ans3": 1,
            "ans4": 2,
            "ans5": 3,
            "ans6": 3,
            "ans7": 3,
            "ans8": 3,
            "ans9": 3,
            "ans10": 2,
        },
        "financial modeling": {
            "ans1": 3,
            "ans2": 2,
            "ans3": 2,
            "ans4": 1,
            "ans5": 2,
            "ans6": 3,
            "ans7": 1,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "data analysis": {
            "ans1": 4,
            "ans2": 2,
            "ans3": 1,
            "ans4": 2,
            "ans5": 2,
            "ans6": 4,
            "ans7": 1,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "investment analysis": {
            "ans1": 3,
            "ans2": 2,
            "ans3": 1,
            "ans4": 2,
            "ans5": 2,
            "ans6": 4,
            "ans7": 2,
            "ans8": 2,
            "ans9": 2,
            "ans10": 1,
        },
        "creativity": {
            "ans1": 2,
            "ans2": 2,
            "ans3": 4,
            "ans4": 2,
            "ans5": 3,
            "ans6": 3,
            "ans7": 1,
            "ans8": 3,
            "ans9": 3,
            "ans10": 2,
        },
        "visual design": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 4,
            "ans4": 2,
            "ans5": 3,
            "ans6": 2,
            "ans7": 1,
            "ans8": 2,
            "ans9": 3,
            "ans10": 2,
        },
        "adobe creative suite": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 4,
            "ans4": 2,
            "ans5": 2,
            "ans6": 2,
            "ans7": 2,
            "ans8": 2,
            "ans9": 3,
            "ans10": 1,
        },
        "recruitment": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 3,
            "ans4": 4,
            "ans5": 4,
            "ans6": 3,
            "ans7": 3,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "employee relations": {
            "ans1": 1,
            "ans2": 4,
            "ans3": 3,
            "ans4": 4,
            "ans5": 3,
            "ans6": 2,
            "ans7": 3,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "organizational development": {
            "ans1": 5,
            "ans2": 4,
            "ans3": 4,
            "ans4": 5,
            "ans5": 4,
            "ans6": 3,
            "ans7": 3,
            "ans8": 4,
            "ans9": 4,
            "ans10": 2,
        },
        "supply chain": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 1,
            "ans4": 3,
            "ans5": 3,
            "ans6": 1,
            "ans7": 4,
            "ans8": 1,
            "ans9": 1,
            "ans10": 2,
        },
        "procurement": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 2,
            "ans4": 3,
            "ans5": 4,
            "ans6": 3,
            "ans7": 3,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "logistics": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 1,
            "ans4": 2,
            "ans5": 4,
            "ans6": 3,
            "ans7": 3,
            "ans8": 1,
            "ans9": 1,
            "ans10": 2,
        },
        "teaching": {
            "ans1": 3,
            "ans2": 3,
            "ans3": 3,
            "ans4": 3,
            "ans5": 3,
            "ans6": 3,
            "ans7": 3,
            "ans8": 1,
            "ans9": 3,
            "ans10": 2,
        },
        "mentor": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 2,
            "ans4": 2,
            "ans5": 4,
            "ans6": 2,
            "ans7": 2,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "lesson planning": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 3,
            "ans4": 3,
            "ans5": 3,
            "ans6": 1,
            "ans7": 3,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "journalism": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 3,
            "ans4": 4,
            "ans5": 4,
            "ans6": 2,
            "ans7": 2,
            "ans8": 2,
            "ans9": 3,
            "ans10": 1,
        },
        "interviewing": {
            "ans1": 1,
            "ans2": 3,
            "ans3": 2,
            "ans4": 3,
            "ans5": 4,
            "ans6": 3,
            "ans7": 3,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "news": {
            "ans1": 1,
            "ans2": 2,
            "ans3": 3,
            "ans4": 3,
            "ans5": 2,
            "ans6": 2,
            "ans7": 2,
            "ans8": 1,
            "ans9": 4,
            "ans10": 1,
        },
        "programming": {
            "ans1": 3,
            "ans2": 3,
            "ans3": 2,
            "ans4": 2,
            "ans5": 2,
            "ans6": 4,
            "ans7": 1,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "problem-solving": {
            "ans1": 3,
            "ans2": 1,
            "ans3": 1,
            "ans4": 3,
            "ans5": 2,
            "ans6": 4,
            "ans7": 1,
            "ans8": 1,
            "ans9": 2,
            "ans10": 1,
        },
        "software development": {
            "ans1": 3,
            "ans2": 3,
            "ans3": 3,
            "ans4": 3,
            "ans5": 2,
            "ans6": 3,
            "ans7": 2,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "data analysis": {
            "ans1": 4,
            "ans2": 2,
            "ans3": 2,
            "ans4": 2,
            "ans5": 2,
            "ans6": 3,
            "ans7": 1,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
        "data visualization": {
            "ans1": 3,
            "ans2": 3,
            "ans3": 3,
            "ans4": 2,
            "ans5": 2,
            "ans6": 3,
            "ans7": 2,
            "ans8": 2,
            "ans9": 2,
            "ans10": 1,
        },
        "SQL": {
            "ans1": 3,
            "ans2": 2,
            "ans3": 1,
            "ans4": 2,
            "ans5": 2,
            "ans6": 3,
            "ans7": 1,
            "ans8": 1,
            "ans9": 1,
            "ans10": 1,
        },
    }

    jobs = [
        {
            "name": "Marketing Manager",
            "skills": ["marketing strategy", "market research", "digital marketing"],
        },
        {
            "name": "Accountant",
            "skills": ["financial analysis", "audit", "accounting software"],
        },
        {
            "name": "Financial Analyst",
            "skills": ["financial modeling", "data analysis", "investment analysis"],
        },
        {
            "name": "Graphic Designer",
            "skills": ["creativity", "visual design", "adobe creative suite"],
        },
        {
            "name": "Human Resources Manager",
            "skills": [
                "recruitment",
                "employee relations",
                "organizational development",
            ],
        },
        {
            "name": "Supply Chain Manager",
            "skills": ["supply chain", "procurement", "logistics"],
        },
        {"name": "Teacher", "skills": ["teaching", "mentor", "lesson planning"]},
        {"name": "Journalist", "skills": ["journalism", "interviewing", "news"]},
        {
            "name": "Software Developer",
            "skills": ["programming", "problem-solving", "software development"],
        },
        {
            "name": "Data Analyst",
            "skills": ["data analysis", "data visualization", "SQL"],
        },
    ]

    user_skill = []

    for skill in skills.keys():
        count = 0
        for skill_needs in skills[skill].keys():
            if skills[skill][skill_needs] <= int(userKnowledge[skill_needs]):
                count += 1
        if count == 10:
            user_skill.append(skill)

    suggest = []

    user_skill.sort()
    print(user_skill)
    for job in jobs:
        name = job["name"]
        job_skills = job["skills"]
        job_skills.sort()

        count = 0
        for skill in job_skills:
            if skill in user_skill:
                count += 1
        if count == len(job_skills):
            suggest.append(name)

    return suggest
