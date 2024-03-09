import React, { useState } from "react";
import axios from "axios";
import "../styles/chatbot.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    try {
      setLoading(true);
      console.log(question);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/chatbot`,
        { question }
      );
      setAnswer(res.data.answer);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Chatbot</h1>
      <div>
        <input
          className="inputTextArea"
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="chatbtn" onClick={askQuestion}>
          Ask
        </button>
      </div>
      {loading && <p>Loading...</p>}
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