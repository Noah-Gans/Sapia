// TailoredHealthPlans.js
import React from 'react';
import './HealthPlans.css'; // Make sure the CSS file is in the same directory

// Placeholder paths for logo images
import comprehensiveCareLogo from '../Logos/HomePage/HealthPlans/ComprehensiveCare.png';
import subscriptionPlanLogo from '../Logos/HomePage/HealthPlans/Subscription.png';
import functionalMedicineLogo from '../Logos/HomePage/HealthPlans/Funtional.png';

function HealthPlans() {
  return (
    <div className="tailored-plans-container">
      <div className="health-plans-header">
        <h1>Our Tailored Health Plans</h1>
        <p>Contact us to create a health plan tailored just for you</p>
        <button className="consultations-btn">Schedule A Consultation</button>
      </div>
      <div className="plan-options">
        <div className="plan">
          <img src={comprehensiveCareLogo} alt="Comprehensive Care" />
          <p>From comprehensive care to basic health maintenance</p>
        </div>
        <div className="plan">
        <img src={subscriptionPlanLogo} alt="Subscription Plan" className="subscription-plan-logo" />
          <p>Our subscription plans are designed to cater to your unique health requirements</p>
        </div>
        <div className="plan">
          <img src={functionalMedicineLogo} alt="Functional Medicine" />
          <p>Including key elements of our functional medicine approach</p>
        </div>
      </div>
    </div>
  );
}

export default HealthPlans;
