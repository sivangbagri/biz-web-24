import "../styles/navbar.css";
import Logo from "../assets/logos/biz.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img className="w-12 h-12 rounded-full" src={Logo} alt="Business Club Logo" />
          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            HOME
          </Link>
          <Link to="/timeline" className={`nav-link ${location.pathname === "/timeline" ? "active" : ""}`}>
            TIMELINE
          </Link>
          <a href="https://linktr.ee/businessclub_iitbhu" target="_blank" className="nav-link">
            RESOURCES
          </a>
          <Link to="/bash" className={`nav-link ${location.pathname === "/bash" ? "active" : ""}`}>
            BASH
          </Link>
          <Link to="/newsletter" className={`nav-link ${location.pathname === "/newsletter" ? "active" : ""}`}>
            NEWSLETTER
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
