import React from 'react';
import './contactus.css'; // Import the CSS for styling
import peopleRunning from './photos/Mask groupThree People Running.png';
import darkGreenSmallCircle from './photos/Ellipse 25DarkGreenSmallCircle.png';
import darkYellowCircle from './photos/Ellipse 28Dark Yellow Circle.png';
import halfDonutGreen from './photos/Ellipse 29Half Dounut Green Up.png';

function GettingStartedSection() {
  return (
    <div className="getting-started-container">
      <img src={darkGreenSmallCircle} alt="Decorative green circle" className="dark-green-small-circle" />
      <img src={darkYellowCircle} alt="Decorative yellow circle" className="dark-yellow-circle" />
      <img src={halfDonutGreen} alt="Decorative green half donut" className="green-half-donut" />
      <img src={peopleRunning} alt="Three people running" className="people-running" />
      <div className="contactus-content">
        <h1>Thinking of Getting Started?</h1>
        <h2>Let's Discuss</h2>
        <p>Schedule a brief informational call with one of our physicians to find out how we can support your health goals.</p>
        <button className="contact-us-btn">Contact Us</button>
      </div>
    </div>
  );
}

export default GettingStartedSection;
