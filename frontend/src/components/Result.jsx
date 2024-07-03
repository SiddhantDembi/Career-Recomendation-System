import React, { useState, useEffect } from 'react';
import "../styles/Result.css"
import { useNavigate } from "react-router-dom";

function DisplayListFromBackend() {
  const [jobRoles, setJobRoles] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedDictionary = localStorage.getItem('data');
    if (storedDictionary) {
      const dictionary = JSON.parse(storedDictionary);
      if (dictionary && dictionary.arr && Array.isArray(dictionary.arr) && dictionary.arr.length > 0){
        dictionary.arr.sort((a, b) => b.score - a.score);
        setJobRoles(dictionary.arr);
      }
    }
  }, []);

  const retake = () => {
    navigate("/test");
  }

  const popular = () => {
    navigate("/resources");
  }

  return (
    <div className='job'>
      <h1 className='jobHeading'>Recommended job roles</h1>
      {jobRoles.map((jobRole, index) => (
        <div className='jobsdata' key={index}>
          <p className='jobroles'>{jobRole.name}</p>
          {/* <p className='jobroles'>{jobRole.score}</p> */}
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
