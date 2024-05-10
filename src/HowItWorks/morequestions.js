import React from 'react';
import './morequestions.css';
import ellipseGray from './photos/Ellipse 28Half Dounut Gray.png';
import circleWhite from './photos/Ellipse 25White Small Circle.png';
import ellipseSmaller from './photos/Ellipse 27Final Page Smaller Elipse.png';
import halfDounutGreen from './photos/Ellipse 26Final Page Larger Elipse.png';
import groupPhoto from './photos/depositphotos_289884710-stock-photo-group-happy-fit-young-peoplePhoto Laying Down.png';

function MoreQuestions() {
  return (
    <div className="more-questions-container">
      <img src={ellipseGray} alt="Gray Half Donut" className="ellipse-gray" />
      <img src={circleWhite} alt="Small White Circle" className="circle-white" />
      <img src={ellipseSmaller} alt="Smaller Ellipse" className="ellipse-smaller" />
      <img src={halfDounutGreen} alt="Green Half Donut" className="half-dounut-green" />
      <img src={groupPhoto} alt="Group of People Laying Down" className="group-photo" />
      <div className="text-container">
        <h1>Have more questions?</h1>
        <button className="btn-consultation">Schedule A Consultation</button>
        <button className="btn-faqs">See FAQs</button>
      </div>
    </div>
  );
}

export default MoreQuestions;
