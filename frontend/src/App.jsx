import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Sidebar from './pages/sidebar'
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import Header from "./pages/Header";
import DashboardTemplate from "./pages/DashboardTemplate";
import Application from "./pages/Application";

import Apply from "./pages/Apply";
import Difficulties from "./pages/Difficulties";
import Address from "./pages/Address";
import Resources from "./pages/ResourcePage";
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Chatbot from './pages/Chatbot'
import JobList from './pages/JobList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>

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
              path="/login"
              element={
                <PublicRoute>
                {/* <ProtectedRoute> */}
                  <Login />
                  {/* </ProtectedRoute> */}
                </PublicRoute>
              }
              />
            <Route
              path="/register"
              element={
                <PublicRoute>
                {/* <ProtectedRoute> */}
                  <Register />
                {/* </ProtectedRoute> */}
                </PublicRoute>
              }
              />
            <Route
              path="/application"
              element={
                <><Application /><Sidebar/></>
                
              }
              />
            <Route
              path="/resources"
              element={
                <><Resources /><Sidebar/></>
                
              }
              />
            <Route
              path="/diff"
              element={
                <><Difficulties /><Sidebar/></>
              }
              />
            <Route
              path="/address"
              element={
                <><Address /><Sidebar/></>
              }
              />
            <Route
              path="/about"
              element={
                <><About/><Footer/></>
              }
              />
            <Route
              path="/home1"
              element={
                <><Home/><About/><Contact/><Footer/></>
              }
              />
            <Route
              path="/contact"
              element={
                <><Contact/><Footer/></>
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
      </Provider>
    </>
  )
}

export default App
