import { useEffect, useState } from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className={`fade-up-element ${isVisible ? "visible" : ""}`}>
          <h1 className="hero-title">
            <span className="hero-subtitle">Welcome to</span>
            <span className="hero-main-title">Business Club</span>
          </h1>

          <p
            className={`hero-description ${
              isVisible ? "visible delay-200" : ""
            }`}
          >
            IIT(BHU), Varanasi
          </p>

          <div
            className={`hero-buttons ${isVisible ? "visible delay-400" : ""}`}
          >
            <Link to="/about">
              <button className="primary-button cursor-pointer">
                Learn More{" "}
              </button>
            </Link>

            <Link to="/about">
              <button className="secondary-button cursor-pointer">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
