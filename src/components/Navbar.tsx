import "../styles/navbar.css";
import Logo from "../assets/logos/biz.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img className="w-12 h-12 rounded-full" src={Logo} alt="Business Club Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
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

        {/* Mobile Navigation - Dropdown */}
        <div
          className={`absolute top-16 left-0 right-0 transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="p-4 space-y-2">
            <Link
              to="/"
              className={`block py-2 px-4 ${location.pathname === "/" ? "text-black font-bold" : "text-gray-600"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              to="/timeline"
              className={`block py-2 px-4 ${location.pathname === "/timeline" ? "text-black font-bold" : "text-gray-600"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              TIMELINE
            </Link>
            <a
              href="https://linktr.ee/businessclub_iitbhu"
              target="_blank"
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              RESOURCES
            </a>
            <Link
              to="/bash"
              className={`block py-2 px-4 ${location.pathname === "/bash" ? "text-black font-bold" : "text-gray-600"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              BASH
            </Link>
            <Link
              to="/newsletter"
              className={`block py-2 px-4 ${location.pathname === "/newsletter" ? "text-black font-bold" : "text-gray-600"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              NEWSLETTER
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={toggleMenu}
            style={{ top: '64px' }} 
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;