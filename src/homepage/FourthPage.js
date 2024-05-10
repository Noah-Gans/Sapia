import React from 'react';
import './FourthPage.css'; // Importing the CSS file
// Import images if they are in the src directory, otherwise use the public directory
import headshotImage from '../Logos/HomePage/About/RyanHeadShot.png'; // Replace with the actual path to the headshot image
import YellowCircle from '../Logos/HomePage/About/YellowCircle.png'; // Replace with the actual path to the large shape
import SmallCircle from '../Logos/HomePage/About/SmallGreenCircle.png'; // Replace with the actual path to the medium shape
import GreenElipse from '../Logos/HomePage/About/LargeGreenElipse.png'; // Replace with the actual path to the small shape


const FourthPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Sapia Health</h2>
          <p>
            Driven by Dr. Ryan Kindervater's desire for real change,<br></br> we emphasize a direct, honest, and transparent approach to healthcare.
            <br></br><br></br><br></br>
            Our patient-focused practice is built on open communication and personalized care, stepping away from the constraints of traditional insurance-driven models.
          </p>
          <button className="about-button">About Us</button>
        </div>
        <div className="about-image-quote">
          <img src={headshotImage} alt="Dr. Ryan Kindervater" className="headshot" />
          <div className="about-quote">
          <div role="blockquote" className="custom-about-blockquote">
              “We treat our patients as partners, using advanced technologies and customized telemedicine strategies to prioritize long-term wellness over short-term fixes.”
            </div>
            <cite>Dr. Ryan Kindervater</cite>
          </div>
        </div>
      </div>
      {/* Shapes can be placed outside if they are absolutely positioned relative to the container */}
      <img src={YellowCircle} alt="Decorative Shape" className="shape-large" />
      <img src={SmallCircle} alt="Decorative Shape" className="shape-medium" />
      <img src={GreenElipse} alt="Decorative Shape" className="shape-small" />
    </div>
  );
};

export default FourthPage;
