import React, { useState } from "react";
import "../diff.css";
import { questions } from "../Data/data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Difficulties() {
  const [var1, setVar1] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

    // Check if all values are integers between 1 and 5
    const isValid = Object.values(formData).every((value) => {
      const intValue = parseInt(value);
      return !isNaN(intValue) && intValue >= 1 && intValue <= 5;
    });

    if (!isValid) {
      setError("All input values must be integers between 1 and 5.");
      return;
    }

    axios
      .post("http://127.0.0.1:5000/assessment", formData)
      .then((res) => {
        const data1 = JSON.stringify(res.data);
        localStorage.setItem("data", data1);
        // Redirect to JobList page
        navigate("/joblist");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={Handleclick} id="form-diff">
        <h1 className="title2">Assessment</h1>
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
        <button className="btn btn-primary" id="b1" type="submit">
          Submit
        </button>
        {error && <p style={{marginTop: "20px"}} className="error-message">{error}</p>}
      </form>
    </>
  );
}
