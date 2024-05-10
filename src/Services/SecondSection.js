


import React from 'react';
import './SecondSection.css'; // Make sure to create and import the corresponding CSS file
// Import all the icons from the top of your file



import icon1 from './logos/Nutrition.png';
import icon2 from './logos/Genetics.png';
import icon3 from '../Logos/HomePage/Services/Lab.png';
import icon4 from './logos/Cardiac.png';
import icon5 from './logos/Hormone.png';
import icon6 from './logos/Athletic.png';
import icon7 from './logos/Cognitive.png';
import icon8 from './logos/Stress.png';
import icon9 from './logos/Sleep.png';
// ... other icons if there are more services

const services = [
  { id: 1, title: 'Nutrition', description: 'Our doctors, with their advanced training in nutrition, analyze your dietary habits to offer comprehensive recommendations for enhancing your nutrition. Whether your aim is to boost energy, manage weight, or address specific dietary concerns, our nutrition assessment and plan serves as a clear guide to healthier eating habits, ensuring every aspect of your diet aligns with your health goals.', icon: icon1 },
  { id: 2, title: 'Genetics', description: 'Discover what your genes can tell you about your health with our comprehensive genetics assessment. By examining your genetic profile, we uncover insights into health predispositions, empowering you with the knowledge to make proactive health decisions. Our experts collaborate with you to develop a plan that’s not just personalized, but deeply informed by your genetics, optimizing your medication, diet, and risk management strategies.', icon: icon2 },
  { id: 3, title: 'Advanced Lab Assessment', description: 'Go beyond conventional tests to examine your health in unmatched detail, offering a thorough examination of a broad spectrum of biomarkers. The goal? To pinpoint insights gained from in-depth understanding that connects the potential risks and reveals any anomalies are crucial in crafting a health plan that’s as unique as you are, laying a solid foundation for personalized care.', icon: icon3 },
  { id: 4, title: 'Cardiac Risk Assessment', description: 'Get a clear picture of your heart health with our Cardiac Risk Assessment, using cutting-edge tools like polygenic risk scoring and advanced markers for lipids and inflammation, complemented by advanced imaging when necessary. We evaluate your heart’s health to pinpoint potential risks and then provide you with actionable steps to mitigate these risks and improve your cardiovascular well-being.', icon: icon4 },
  { id: 5, title: 'Hormone Optimization', description: 'Balance is key to health and well-being. Our Hormone Optimization analyzes your hormone levels to offer solutions tailored to your body, addressing any imbalances with personalized treatment plans. From thyroid function to reproductive hormones, we aim to optimize your hormonal health to improve your quality of life and well-being.', icon: icon5 },
  { id: 6, title: 'Movement and Exercise', description: 'Physical activity is key to maintaining optimal health. Our Movement and Exercise Assessment crafts a fitness plan tailored to your lifestyle and goals, perfect whether you’re just starting out or already an athlete. Guided by our experts, you’ll find a balanced routine that fosters strength, flexibility, and overall well-being, ensuring your exercise path is both effective and aligned with your personal health journey.', icon: icon6 },
  { id: 7, title: 'Cognitive Assessments and Brain Health', description: "Maintaining a sharp mind is as crucial as physical health, and at Sapia Health, we prioritize your cognitive well-being. Our Total Health Assessment includes validated cognitive assessments to measure brain functions like memory, attention, and problem-solving. (add line break) Identifying areas for enhancement or potential impairments allows us to offer personalized strategies for brain health. From targeted brain exercises to lifestyle adjustments promoting cognitive vitality, we guide you towards optimizing your mental acuity. (line Break) Our comprehensive approach assesses your cognitive abilities to pinpoint where support is needed most, ensuring that our recommendations are finely tuned to support and enhance your brain health, helping you to engage in activities that keep your mind sharp and resilient.", icon: icon7 },
  { id: 8, title: 'Stress Management', description: 'Chronic stress impacts health more than you might realize. Our Stress Management Assessment pinpoints your stressors and provides strategies to lessen them. We equip you with tools and techniques for improved stress management, boosting your mental and emotional well-being.', icon: icon8 },
  { id: 9, title: 'Movement and Exercise', description: 'Physical activity is key to maintaining optimal health. Our Movement and Exercise Assessment crafts a fitness plan tailored to your lifestyle and goals, perfect whether you’re just starting out or already an athlete. Guided by our experts, you’ll find a balanced routine that fosters strength, flexibility, and overall well-being, ensuring your exercise path is both effective and aligned with your personal health journey.', icon: icon9 },

];


function ServicesList() {
  return (
    <div className="services-list-wrapper">
      {services.map((service) => (
        <div key={service.id} className="service-item">
          <div className="service-icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <div className="service-text">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <hr /> {/* This underline will now be only under the text */}
          </div>
        </div>
      ))}
    </div>
  );
}



export default ServicesList;

