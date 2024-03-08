import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can also use 'fetch' if preferred
import "../styles/joblist.css"
import { useNavigate } from "react-router-dom";

function DisplayListFromBackend() {
  const [jobRoles, setJobRoles] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the dictionary from local storage
    const storedDictionary = localStorage.getItem('data');
    if (storedDictionary) {
      const dictionary = JSON.parse(storedDictionary);
      // Check if "arr" key exists and contains an array
      if (dictionary && dictionary.arr && Array.isArray(dictionary.arr)) {
        // Set the job roles state with the values of "arr"
        setJobRoles(dictionary.arr);
      }
    }
  }, []);

  const retake = () => {
    // Redirect to the assessment page for retaking the assessment
    navigate("/assessment");
  }

  const popular = () => {
    navigate("/resources");
  }

  return (
    <div className='job'>
      <h1 className='jobHeading'>Recommended job roles</h1>
      {jobRoles.map((jobRole, index) => (
        <div className='jobsdata' key={index}>
          <p className='jobroles'>{jobRole}</p>
        </div>
      ))}
      <div style={{display:'flex',justifyContent:"center",gap:"1rem"}}>
        <button style={{width:"200px"}} className='chatbtn' onClick={retake}>
          Retake Assessment
        </button>
        <button style={{width:"200px"}} className='chatbtn' onClick={popular}>
          Popular Careers
        </button>
      </div>
    </div>
  );
}

export default DisplayListFromBackend;
