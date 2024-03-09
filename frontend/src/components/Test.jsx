import React, { useState } from "react";
import "../styles/Test.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Test() {
  const [var1, setVar1] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      idx: "ans1",
      name: "ans1",
      question:
        "How would you rate your proficiency in marketing strategy?",
    },
    {
      id: 2,
      idx: "ans2",
      name: "ans2",
      question:
        "How skilled are you in conducting market research?",
    },
    {
      id: 3,
      idx: "ans3",
      name: "ans3",
      question:
        "Rate your proficiency in digital marketing.",
    },
    {
      id: 4,
      idx: "ans4",
      name: "ans4",
      question:
        "How confident are you in your financial analysis skills?",
    },
    {
      id: 5,
      idx: "ans5",
      name: "ans5",
      question: "How comfortable are you with programming?",
    },
    {
      id: 6,
      idx: "ans6",
      name: "ans6",
      question:
        "Rate your problem-solving abilities.",
    },
    {
      id: 7,
      idx: "ans7",
      name: "ans7",
      question:
        "How skilled are you in using Adobe Creative Suite?",
    },
    {
      id: 8,
      idx: "ans8",
      name: "ans8",
      question: "Rate your familiarity with SQL.",
    },
    {
      id: 9,
      idx: "ans9",
      name: "ans9",
      question: "How would you rate your data analysis skills?",
    },
    {
      id: 10,
      idx: "ans10",
      name: "ans10",
      question:
        "How experienced are you in employee relations?",
    },
  ];

  const handleChange = (e) => {
    setVar1({ ...var1, [e.target.name]: e.target.value });
  };

  function Handleclick(e) {
    e.preventDefault();
    const formData = {
      ans1: document.getElementById("ans1").value,
      ans2: document.getElementById("ans2").value,
      ans3: document.getElementById("ans3").value,
      ans4: document.getElementById("ans4").value,
      ans5: document.getElementById("ans5").value,
      ans6: document.getElementById("ans6").value,
      ans7: document.getElementById("ans7").value,
      ans8: document.getElementById("ans8").value,
      ans9: document.getElementById("ans9").value,
      ans10: document.getElementById("ans10").value,
    };

    const isValid = Object.values(formData).every((value) => {
      const intValue = parseInt(value);
      return !isNaN(intValue) && intValue >= 1 && intValue <= 5;
    });

    if (!isValid) {
      setError("All input values must be integers between 1 and 5.");
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/test`, formData)
      .then((res) => {
        const data1 = JSON.stringify(res.data);
        localStorage.setItem("data", data1);

        navigate("/result");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(`${import.meta.env.VITE_BACKEND_URL}/test`);
  return (
    <>
      <form onSubmit={Handleclick} id="form-diff">
        <h1 className="title2">Test</h1>
        {questions.map(({ id, question, idx, name }) => {
          return (
            <div className="form_control" key={id}>
              <label className="question">
                {id}. {question} (Rate from 1-5)
              </label>
              <input
                type="text"
                value={var1[name] || ""}
                id={idx}
                name={name}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
        <button style={{backgroundColor: "white",color:"black"}} className="chatbtn" id="b1" type="submit">
          Submit
        </button>
        {error && (
          <p style={{ marginTop: "20px" }} className="error-message">
            {error}
          </p>
        )}
      </form>
    </>
  );
}