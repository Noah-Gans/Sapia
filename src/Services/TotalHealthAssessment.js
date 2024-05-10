import React from 'react';
import './TotalHealthAssessment.css'; // Make sure to create and import the corresponding CSS file

// Images have been imported at the top of the file
import smallGreenCircle from './Photos/Ellipse 25SmallGreenCircle.png';
import walkingImage from './Photos/Mask groupWalking.png';
import greenSemiCircleImage from './Photos/Ellipse 26LargeGreenSemiCricle.png';
import yellowSemiCircleImage from './Photos/Ellipse 29YellowSemiCircle.png';
import yellowCircleImage from './Photos/Ellipse 28YellowCircle.png';
import halfGreenDount from './Photos/Ellipse 29GreenHalfDount.png';

function TotalHealthAssessment() {
  return (
    <div className="assessment-container">
      <div className="total-health-assesments-content">
        <h1>Start your journey to comprehensive health </h1>
        <h2>with our Total Health Assessment and Plan</h2>
        <p>Our expert team is here to guide you every step of the way <br></br> towards achieving optimal health and vitality.</p>
        <p>Contact us today to schedule your tele-health appointment.</p>
        <button>Contact Us</button>
      </div>
      <img src={smallGreenCircle} alt="Small Green Circle" className="total-health-small-green-circle" />
      <img src={greenSemiCircleImage} alt="Large Green Semi-circle" className="total-health-large-green-semicircle" />
      <img src={yellowCircleImage} alt="Yellow Circle" className="yellow-circle" />
      <img src={halfGreenDount} alt="Green Half Donut" className="total-health-green-half-donut" />
      <img src={yellowSemiCircleImage} alt="Yellow Semi-circle" className="yellow-semicircle" />
      <img src={walkingImage} alt="Walking" className="walking-image" />
    </div>
  );
}

export default TotalHealthAssessment;
