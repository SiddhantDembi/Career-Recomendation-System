import React, { useState } from 'react';
import axios from 'axios';
import "../styles/chatbot.css"

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    try {
      setLoading(true); // Set loading to true when making the request
      console.log(question)
      const res = await axios.post('http://localhost:5000/ask', { question });
      setAnswer(res.data.answer);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Set loading back to false when the request is finished
    }
  };

  return (
    <div className="App">
      <h1>Chatbot</h1>
      <input
        className='inputTextArea'
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button className='chatbtn' onClick={askQuestion}>Ask</button>
      {loading && <p>Loading...</p>} {/* Display loading message if loading is true */}
      {answer && (
        <div className="response">
          <strong>Response:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
