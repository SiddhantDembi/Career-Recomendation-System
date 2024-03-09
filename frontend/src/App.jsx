import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import DashboardTemplate from "./components/Dashboard";
import Difficulties from "./components/Test";
import Resources from "./components/Resources";
import Chatbot from "./components/Chatbot";
import JobList from "./components/Result";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />

                  <DashboardTemplate />
                </>
              }
            />
            <Route
              path="/chatbot"
              element={
                <>
                  <Navbar />
                  <Chatbot />
                </>
              }
            />

            <Route
              path="/resources"
              element={
                <>
                  <Navbar />
                  <Resources />
                </>
              }
            />
            <Route
              path="/test"
              element={
                <>
                  <Navbar />
                  <Difficulties />
                </>
              }
            />

            <Route
              path="/result"
              element={
                <>
                  <Navbar />
                  <JobList />
                </>
              }
            />
          </Routes>
        }
      </BrowserRouter>
    </>
  );
}

export default App;