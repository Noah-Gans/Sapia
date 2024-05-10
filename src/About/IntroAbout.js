import React from 'react';
import './IntroAbout.css'; // Import your CSS file for styles

// Import the images
import largeGreenSemiCircle from './Photos/LargeGreenSemiCricle.png';
import yellowCircle from './Photos/DarkYelloCircle.png';
import yellowSemiCircle from './Photos/DarkYellowSemiCircle.png';

function AboutUs() {
  return (
    <div className="aboutUsContainer" style={{ position: 'relative', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <img src={largeGreenSemiCircle} alt="Large Green Semi Circle" className="large-green-semi-circle" />
      <img src={yellowCircle} alt="Yellow Circle" className="yellow-circle-position" />
      <img src={yellowSemiCircle} alt="Yellow Semi Circle" className="yellow-semi-circle" />
      <div style={{ margin: '20px', position: 'relative', zIndex: 1 }}>
        <h1>About Us</h1>
        <p>"I started this practice after a decade of treating the nation’s sickest and most broken patients in emergency rooms.</p>
        <p>I now focus on preventing illness with 21st century tools that allow us to optimize your nutrition, improve your movement, mobility, and performance, and use cutting edge treatments that show real promise to increase your functional lifespan. We combine that with the best service in healthcare.</p>
        <p>I’m interested in getting to know the real you, and helping you meet your goals, whatever they are. We have patients of all shapes, sizes, and health status. I like to think it’s not where you start from, but where you’re headed that matters.</p>
        <p>I look forward to meeting with you, and helping you live a happy, healthy, and fulfilled life."</p>
      </div>
    </div>
  );
}

export default AboutUs;
