// DoctorNelson.js
import React from 'react';
import './DoctorProfile.css';
import profilePhoto from './Photos/ryan.png'; // Ensure the path is correct


function DoctorNelson() {
  return (
      <div className="doctor-profile">
          <h1>Dr. Christopher Nelson</h1>
          <div className="profile-and-credentials">
            <img src={profilePhoto} alt="Dr. Ryan Kindervater" className="profile-photo" />
              <div className="credentials">
                  <div><span className="credential-text"><strong>Education:</strong> UVM, University of New England</span></div>
                  <div><span className="credential-text"><strong>Internship:</strong> Arrowhead Regional Medical Center, Colton, CA</span></div>
                  <div><span className="credential-text"><strong>Residency:</strong> Albany Medical College, Albany, NY</span></div>
                  <div><span className="credential-text"><strong>Nutrition Certificate:</strong> Stanford Center for Health Sciences</span></div>
              </div>
          </div>
          <p>
              <strong>Dr. Christopher Nelson</strong> is a board certified physician, and one of our partners at Sapia Health. He grew up in the beautiful state of New Hampshire, rock climbing, snowboarding, and generally running around outside. Perhaps because of his rural upbringing, he always gravitated towards holistic practices and prevention in his own life. 
              <br></br> <br></br>
When it was “fringe”, he would plan his week based on getting to the local farmer’s market to get healthy, local, and pesticide free food as his health foundation. Micro-plastics concerns and widespread organic certification were still on the horizon, but Dr. Nelson has always felt the need to minimize contact with these harmful substances. 
<br></br> <br></br>
He earned his degree in outdoor recreation management at University of Vermont, and he spent his early years teaching best outdoor practices, and leading youth on outdoor trips. Here he continued to see the impact that movement and exercise has on both our physical and mental well being. 
<br></br> <br></br>
As Dr. Nelson went through his medical education, he saw the contrast between his personal health routine and the modern medical system. One was full of: yoga, good healthy food, movement, mindfulness, and select supplements. The other focused on invasive, short sighted management of problems resulting from decades of bad food, sedentary lifestyles, ignoring mental health, and a blind eye turned toward prevention. 
<br></br> <br></br>
He spent many years applying a very technical approach to complicated end stage problems in emergency departments. After years of meeting people at the end stages of disease, he wanted to merge his personal philosophy of health with his medical practice (something he was unable to find in an existing practice). 
<br></br> <br></br>
His close friend and colleague, Dr. Ryan Kindervater had just started a practice combining the best technical aspects from modern medicine and nutrition with the philosophy of building health on a foundation of nutrition, movement, and access to information. Dr. Nelson enjoys taking care of patients at Sapia Health, where he is able to provide truly holistic and advanced care.
          </p>
      </div>
  );
}


export default DoctorNelson;