import React from 'react';
import './DoctorProfile.css';
import profilePhoto from './Photos/ryan.png'; // Ensure the path is correct

function DoctorKindervater() {
    return (
        <div className="doctor-profile">
            <h1>Dr. Ryan Kindervater</h1>  {/* Doctor's name as the title */}
            <div className="profile-and-credentials">
                <img src={profilePhoto} alt="Dr. Ryan Kindervater" className="profile-photo" />
                <div className="credentials">
                    <div><span className="credential-text"><strong>Undergrad:</strong> California State University, San Bernardino</span></div>
                    <div><span className="credential-text"><strong>Med School:</strong> Western University of Health Sciences</span></div>
                    <div><span className="credential-text"><strong>Residency:</strong> Albany Medical College</span></div>
                    <div><span className="credential-text"><strong>Nutrition Certificate:</strong> Stanford Center for Health Sciences</span></div>
                </div>
            </div>
            <p> <strong>Dr. Kindervater</strong> attended medical school in Pomona, California at Western University of Health Sciences, College of Osteopathic Medicine of the Pacific.<br></br> <br></br> 

He went on to complete specialty training in Emergency Medicine at Albany Medical College. He attained board certification through the American Board of Medical Specialties and American Board of Emergency Medicine. <br></br> <br></br>

He has completed training in nutrition sciences from Stanford Center for Health Education. He has been the trauma medical director for Fremont County, Wyoming’s healthcare system since 2020. <br></br> <br></br>

His current focus is on reducing the impacts of aging, and improving longevity, while improving overall health through nutrition, exercise, select and judicious use of medications, and gaining valuable insights through precision genomics. <br></br> <br></br>

When not caring for patients, Dr. Kindervater enjoys ski mountaineering, rock climbing, cycling, cooking, and spending time with his dog, moose. He has competed in many ultra-endurance events, including the Leadville 100 Mountain Bike Race (under 8.5 hours), the Grand Traverse Ski Mountaineering Race from Crested Butte to Aspen, CO, and the Wyoming 131 Gravel Bike Race (3rd place in division), among others. He also works as a mountain guide and avalanche educator with Jackson Hole Mountain Guides, in Jackson, Wyoming. He is actively involved as a volunteer with search and rescue, and teaches wilderness medicine to medical and outdoor professionals.</p>
        </div>
    );
}

export default DoctorKindervater;
