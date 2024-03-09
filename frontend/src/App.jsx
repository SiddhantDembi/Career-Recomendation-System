import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Test from "./components/Test";
import Resources from "./components/Resources";
import Chatbot from "./components/Chatbot";
import Result from "./components/Result";
import Navbar from "./components/Navbar";

function App() {

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

                  <Dashboard />
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
                  <Test />
                </>
              }
            />

            <Route
              path="/result"
              element={
                <>
                  <Navbar />
                  <Result />
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