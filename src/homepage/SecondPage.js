import React from 'react';
import './SecondPage.css'; // Ensure this CSS is only for SecondPage styles

function SecondPage() {
    return (
      <div className="second-page">
          <div className="second-page-content">
              <h1>We Prevent Illness</h1>
              <p>by Focusing on the Foundations of Health</p>
              <div className="second-page-buttons">
                  <button className="our-services">Our Services</button>
                  <button className="learn-more">Learn More</button>
              </div>
          </div>
      </div>
    );
  }
export default SecondPage;