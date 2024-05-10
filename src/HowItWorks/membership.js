import React from 'react';
import './membership.css';  // Ensure the CSS file is linked
import AccessImage from './photos/_Layer_Access.png';
import DiagnosticsImage from './photos/Layer_1Diagnostics.png';
import BlueprintImage from './photos/Frame 90Blueprint.png';
import PersonalizedImage from './photos/Frame 129Personalized.png';

function membership() {
    return (
        <div className="membership-benefits">
            <h1>Your memberships benefits</h1>
            <h2>Preventative Care, Led by Your Own Expert Physician</h2>
            <ul>
                <li>Start with our signature comprehensive intake to set your health journey on the right path.</li>
                <li>Benefit from quarterly visits with your doctor for a well-rounded approach to your health.</li>
                <li>Receive comprehensive care that spans blood pressure and cholesterol management to personalized nutrition plans, cutting-edge genetics, and the latest in longevity medicine.</li>
            </ul>
            <div className="grid-container">
                <div className="benefit">
                <img src={DiagnosticsImage} alt="Advanced Diagnostics" className="diagnostics-image" />
                    <h3>Exclusive Access to Advanced Diagnostics</h3>
                    <ul>
                        <li>Unlock insights with Whole Genome Sequencing through our partner CLIA Certified Lab.</li>
                        <li>Get advanced cardiac screening with detailed bloodwork and imaging.</li>
                        <li>Early cancer detection through the latest "liquid biopsy" cell-free DNA tests, simplifying cancer screening with just a simple blood draw.</li>
                    </ul>
                </div>
                <div className="benefit">
                <img src={PersonalizedImage} alt="Personalized Health Plans" className="personalized-image" />
                    <h3>Personalized Health Plans</h3>
                    <ul>
                        <li>Your health recommendations and plans are crafted to align perfectly with your unique genetic code.</li>
                        <li>Explore doctor-led nutrition plans, now enhanced with AI to introduce you to new, healthy foods every day.</li>
                        <li>Embark on a lifestyle assessment and plan that points out your greatest areas for potential improvement.</li>
                        <li>Enjoy the convenience of electronic prescriptions sent directly to the pharmacy of your choice, including options for online pharmacies offering home delivery.</li>
                    </ul>
                </div>
                <div className="benefit">
                <img src={BlueprintImage} alt="Detailed Blueprint" className="blueprint-image" />
                    <h3>A Detailed Blueprint for Your Health</h3>
                    <ul>
                        <li>Take a deep dive into your current health status, goals for the future, and the steps needed to achieve them.</li>
                        <li>Your roadmap will include specific goals, dates for future assessments, and key metrics to track your progress.</li>
                    </ul>
                </div>
                <div className="benefit">
                <img src={AccessImage} alt="24/7 Doctor Access" className="access-image" />
                    <h3>24/7 Doctor Access</h3>
                    <ul>
                        <li>Enjoy unprecedented access to your personal physician, ready to answer any questions and adjust your plan as necessary.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default membership;
