import "../styles/navbar.css";
import Logo from "../assets/logos/biz.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      if (window.scrollY > 0) {
        navbar.classList.add("shadow-lg", "backdrop-blur-2xl");
      } else {
        navbar.classList.remove("shadow-lg", "backdrop-blur-2xl");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo rounded-full shadow-[0_0_40px_rgba(255,255,255,0.9)] hover:shadow-[0_0_80px_rgba(255,255,255,0.9)] transition-all duration-300 ease-in-out">
          <Link to="/">
            <img className="w-12 h-12 rounded-full" src={Logo} alt="Business Club Logo" />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-gray-200 hover:white-black focus:outline-none"
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
          <Link to="/gallery" className={`nav-link ${location.pathname === "/gallery" ? "active" : ""}`}>
            GALLERY
          </Link>
          <Link to="/blogs" className={`nav-link ${location.pathname === "/newsletter" ? "active" : ""}`}>
            BLOGS
          </Link>
        </div>

        {/* Mobile Navigation - Dropdown */}
        <div
          className={`absolute top-16 left-0 right-0 transform ${
            isMenuOpen ? "translate-y-0 opacity-100 block" : "-translate-y-full opacity-0 hidden"
          } backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="p-4 space-y-2">
            <Link
              to="/"
              className={`block py-2 px-4 ${location.pathname === "/" ? "text-white font-bold" : "text-gray-200"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <Link
              to="/timeline"
              className={`block py-2 px-4 ${location.pathname === "/timeline" ? "text-white font-bold" : "text-gray-200"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              TIMELINE
            </Link>
            <a
              href="https://linktr.ee/businessclub_iitbhu"
              target="_blank"
              className="block py-2 px-4 text-gray-200 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              RESOURCES
            </a>
            <Link
              to="/bash"
              className={`block py-2 px-4 ${location.pathname === "/bash" ? "text-white font-bold" : "text-gray-200"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              BASH
            </Link>
            <Link
              to="/newsletter"
              className={`block py-2 px-4 ${location.pathname === "/newsletter" ? "text-white font-bold" : "text-gray-200"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              NEWSLETTER
            </Link>
            <Link
              to="/gallery"
              className={`block py-2 px-4 ${location.pathname === "/gallery" ? "text-white font-bold" : "text-gray-200"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              GALLERY
            </Link>
            <Link
              to="/blogs"
              className={`block py-2 px-4 ${location.pathname === "/blogs" ? "text-white font-bold" : "text-gray-200"} hover:bg-gray-50`}
              onClick={toggleMenu}
            >
              BLOGS
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 md:hidden z-40"
            onClick={toggleMenu}
            style={{ top: '64px' }} 
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;