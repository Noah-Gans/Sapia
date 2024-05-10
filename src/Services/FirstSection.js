import React from 'react';
import './FirstSection.css'; // Make sure to create and import the corresponding CSS file

function ServiceSection() {
  return (
    <div className="service-section">
      <div className="services-content">
        <h1>Services</h1>
        <h2>Comprehensive Health Assessment and Plan</h2>
        <p>
          Get straight to the heart of your health with our tele-health services. Included in
          your membership, our Health Assessment and Plan doesn't just scratch the surface—it
          digs deep into your well-being, mapping out a clear, tailor-made path to your health goals.
        </p>
        <div className="service-buttons">
          <button className="service-contact-button">Contact Us</button>
          <button className="service-signup-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
