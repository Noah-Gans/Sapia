// HeroSection.js
import React from 'react';
import './IntroText.css'; // Import the CSS for styling

// Assuming you have these images stored in the src/assets directory
import personImage from './Mask groupWomen holding tablet.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={personImage} alt="Person holding a tablet" className="person-image"/>
      <div className="home-page-intro-content">
        <h1>Empowering 
            Your Health Journey</h1>
        <p>with Expert Online Care</p>
        <button className="cta-button">Book Your Free Info Session</button>
      </div>
        
    </div>
  );
}

export default HeroSection;
