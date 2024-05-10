// Footer.js
import React from 'react';
import './GreenFooter.css'; // Make sure the CSS file is in the same directory

import SapioHealthLogo from '../Logos/Footer/SapiaGreenFooter.png'; // Add the correct path to your logo
import InstagramLogo from '../Logos/Footer/Instagram.png';
import LinkedInLogo from '../Logos/Footer/Linkedin.png';
import FacebookLogo from '../Logos/Footer/Facebook.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-brand">
        <img src={SapioHealthLogo} alt="Sapio Health" className="footer-logo" />
        <span className="footer-brand-name"></span>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramLogo} alt="Instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookLogo} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
