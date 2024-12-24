import React, { useEffect, useState } from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-container">
      {/* Content */}
      <div className="hero-content">
        <div className={`fade-up-element ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-subtitle">Welcome to</span>
            <span className="hero-main-title">Business Club</span>
          </h1>

          <p className={`hero-description ${isVisible ? 'visible delay-200' : ''}`}>
            IIT(BHU), Varanasi
          </p>

          <div className={`hero-buttons ${isVisible ? 'visible delay-400' : ''}`}>
            <button className="primary-button">
              Learn More
            </button>
            <button className="secondary-button">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 