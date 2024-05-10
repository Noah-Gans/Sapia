// Testimonials.js
import React from 'react';
import './Testimonials.css'; // Make sure the CSS file is in the same directory

// Placeholder paths for patient images
import patient1 from '../Logos/HomePage/Testimonials/Patient1.png';
import patient2 from '../Logos/HomePage/Testimonials/Patient2.png';
import patient3 from '../Logos/HomePage/Testimonials/Patient3.png';
import patient4 from '../Logos/HomePage/Testimonials/Patient6.png';
import patient5 from '../Logos/HomePage/Testimonials/Patient5.png';
import patient6 from '../Logos/HomePage/Testimonials/Patient4.png';
import patient7 from '../Logos/HomePage/Testimonials/Patient7.png';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1>Hear from Our Patients</h1>
      <div className="patient-photos">
        <img src={patient1} alt="Patient 1" />
        <img src={patient2} alt="Patient 2" />
        <img src={patient3} alt="Patient 3" />
        <img src={patient4} alt="Patient 4" className="central-patient-photo" />
        <img src={patient5} alt="Patient 5" />
        <img src={patient6} alt="Patient 6" />
        <img src={patient7} alt="Patient 7" />
      </div>
      <div className="testimonial-highlight">
        <h2>Patrick Devon</h2>
        <p className="patient-details">36, California</p>
        <blockquote>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.”
        </blockquote>
        <button className="consultation-btn">Schedule A Consultation</button>
      </div>
    </div>
  );
}

export default Testimonials;
