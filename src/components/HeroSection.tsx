import { useEffect, useState } from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-container"
    style={{
      textShadow:
        "2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(0, 0, 0, 0.3)",
    }}>
      <div className="hero-content p-10">
        <div className={`fade-up-element ${isVisible ? "visible" : ""}`}>
          <h1 className="hero-title">
            <span className="hero-subtitle">Welcome to</span>
            <span className="hero-main-title text-shadow-xl">Business Club</span>
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
              <button className="bg-[#7e28d6] text-white px-8 py-3 rounded-[5px] font-bold hover:bg-[#7e28d6] hover:shadow-md hover:scale-105 transition duration-300 cursor-pointer w-[180px]">
                Learn More{" "}
              </button>
            </Link>

            <Link to="/about">
              <button className="border-[#7e28d6] bg-[#7e28d630] border-2 text-white px-8 py-3 rounded-[5px] font-extrabold hover:shadow-md hover:scale-105 transition duration-300 cursor-pointer w-[180px]">
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
