import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Header2() {

  const navigate = useNavigate();
  const dashboard = () => {
    navigate("/");
  };
  return (
    <>
      <header>
        <p className="nav-title">
          <a onClick={dashboard}>Career Wise</a>
        </p>
        <ul>
          <li>
            <a href="/test">Test</a>
          </li>
          <li>
            <a href="/chatbot">Chat Bot</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
        </ul>
        {/* <div id="user-util">
        <span>
          <img src={bellIcon} />
        </span>
        <a onClick={() => setPopup(!popup)}>SD</a>
      </div>
      {popup && (
        <div className="popup">
          <p>
            <img src={profileIcon} />
            <span>View Profile</span>
          </p>
          <p id="signout-btn">
            <img src={signoutIcon} />
            <span>Sign Out</span>
          </p>
         </div>
       )} */}
        {/* <BrowserRouter>
        { (
          <Routes>
            <Route
              path="/"
              element={
                <><Header/><Home/><Footer/></>
              }
              />
            <Route
              path="/about"
              element={
                <><Header /><About/><Footer/></>
              }
              />
            <Route
              path="/contact"
              element={
                <><Header /><Contact/><Footer/></>
              }
              />
          </Routes>
        )}
      </BrowserRouter> */}
      </header>
    </>
  );
}