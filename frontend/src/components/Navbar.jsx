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
            <a href="/resources">Resources</a>
          </li>
        </ul>
      </header>
    </>
  );
}