import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './pages/sidebar'
import DashboardTemplate from "./pages/DashboardTemplate";
import Difficulties from "./pages/Difficulties";
import Resources from "./pages/ResourcePage";
import Chatbot from './pages/Chatbot'
import JobList from './pages/JobList'

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
              path="/assessment"
              element={
                <><Difficulties /><Sidebar/></>
              }
              />
            
            <Route
              path="/joblist"
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
