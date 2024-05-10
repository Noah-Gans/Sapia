import React from 'react';
import './introworks.css'; // Ensure CSS is correctly linked

import RunnerImage from './photos/Mask groupGuyRunning.png'; // Assuming the image is in src/assets/images
import OverlayCircle from './photos/Mask groupGreenCircle.png'; // Placeholder path for the overlay circle image
import DecorativeBlob from './photos/Ellipse 24DarkGreenElipse.png'; // Placeholder path for the decorative blob image

function Introworks() {
    return (
        <div className="banner">
            <div className="content">
                
                <h1 className="member-intro-h1">Begin with care that understands you</h1>
                <h2 className="intro-h2">Your health deserves more than a one-size-fits-all approach</h2>
                <p>Get a customized health plan based on your unique symptoms and goals, and see the difference personalized care can make.</p>
                <div className="buttons">
                    <button className="contact-us">Contact Us</button>
                    <button className="sign-up">Sign Up</button>
                </div>
            </div>
            <img src={RunnerImage} alt="Healthy Runner" className="runner-image" />
            <img src={OverlayCircle} alt="Overlay Circle" className="overlay-circle" />
            <img src={DecorativeBlob} alt="Decorative Blob" className="decorative-blob" />
        </div>
    );
}

export default Introworks;
