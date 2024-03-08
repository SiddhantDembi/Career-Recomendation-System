import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import DashboardTemplate from "./components/Dashboard";
import Difficulties from "./components/Test";
import Resources from "./components/Resources";
import Chatbot from './components/Chatbot'
import JobList from './components/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        { (
          <Routes>
            <Route
              path="/"
              element={
                <><Sidebar/><DashboardTemplate /></>
              }
              />
            <Route
              path="/chatbot"
              element={
                <><Chatbot/><Sidebar/></>
              }
              />
            
            
            <Route
              path="/resources"
              element={
                <><Resources /><Sidebar/></>
                
              }
              />
            <Route
              path="/test"
              element={
                <><Difficulties /><Sidebar/></>
              }
              />
            
            <Route
              path="/result"
              element={
                <><JobList/><Sidebar/></>
              }
              />
          </Routes>
        )}
      </BrowserRouter>
    </>
  )
}

export default App
