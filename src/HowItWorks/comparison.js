import React from 'react';
import './comparison.css';
import sapiaHealthImage from './photos/Frame 133Sapia Checks.png'; // The path to the Sapia Health column image
import typicalCareImage from './photos/Frame 15Typlical Care Checks.png'; // The path to the Typical Care column image

function ComparisonSection() {

    const features = [
        "Doctors with expertise in prevention, nutrition, longevity, genetics, and heart disease",
        "Wait for illness to strike, then treat it with expensive medications",
        "Prevent illness through nutrition, exercise, coaching, and thoughtful use of supplements and medications",
        "Sitting in traffic and waiting rooms for brief, impersonal visits with unfamiliar doctors",
        "At-home virtual visits with attentive, comprehensive care, minus the hassle",
        "Generic health solutions, regardless of individual needs or outcomes",
        "Personalized care based on genetics, history, and personal health goals",
        "Terrible communication. The doctor’s time is more important than yours",
        "24/7 direct messaging with your doctor",
        "Online hub for all your labs, messaging, prescriptions, and easy scheduling with Healthie"
      ];

    return (
        <div className="comparison-grid-container">
          <div className="header-section">
            <div className="header-text">
              <h2>Can I Use My Insurance?</h2>
              <p>Note that some specialty tests, such as genetic sequencing and liquid biopsy cancer screenings, are available as direct-pay services with transparent, upfront pricing.</p>
              <p>Most of our labs and treatments are covered by a wide range of insurance plans.</p>
            </div>
            <div className="header-text">
              <h2>Can I Use My HSA/FSA?</h2>
              <p>Absolutely! We accept HSA and FSA cards to make it easier for you to manage your membership fees.</p>
            </div>
          </div>
            <div className="feature-section">
                <div className="feature-text">
                {features.map((feature, index) => (
                    <p key={index}>{feature}</p>
                ))}
                </div>
                <div className="feature-column">
                    <img src={sapiaHealthImage} alt="Sapia Health Features" />
                </div>
                <div className="feature-column">
                    <img src={typicalCareImage} alt="Typical Care Features" />
                </div>
            </div>
        </div>
      );
}

export default ComparisonSection;


