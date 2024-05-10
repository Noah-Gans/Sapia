import React, { useState } from 'react';
import './faqmain.css'; // Make sure to import your CSS styles as specified
import ellipseYellowSunDown from './photos/Ellipse 25Yellow Sun Down.png';
import ellipseYellowSemiUp from './photos/Ellipse 27Yellow Semi Up.png';
import maskGroupGreenCircle from './photos/Mask groupGreen Circle.png';

const FaqMain = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});
  const [searchText, setSearchText] = useState(''); // State to hold search text

  const toggleQuestion = (sectionKey, questionIndex) => {
    const isOpen = openQuestions[sectionKey] === questionIndex;
    setOpenQuestions({ ...openQuestions, [sectionKey]: isOpen ? -1 : questionIndex });
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Future implementation for search functionality can be placed here
  };
  
  const faqs = {
    general: [
      { question: "How does Sapia Health function?", answer: "Sapia Health is an entirely online platform focused on functional and preventative medicine. We've built a medical practice centered around the idea of preventing illness before it occurs, offering the proactive, thoughtful care we'd seek out for ourselves." },
      { question: "How do I schedule an appointment?", answer: "You can schedule an appointment by visiting our website and logging into your account, where you'll find the scheduling options available." },
      { question: "How long do appointments last?", answer: "The duration of appointments can vary, but most initial consultations last approximately 60 minutes, while follow-up visits may be shorter." },
      { question: "Do I have a dedicated doctor?", answer: "Yes, each patient is assigned a dedicated physician who oversees their care and is familiar with their health history." },
      { question: "If I already have a primary care doctor, how does Sapia Health fit in?", answer: "Sapia Health can complement your existing care by providing specialized consultations and preventive care that may not be available through your primary care physician." },
      { question: "Who are the Sapia Health physicians?", answer: "Our team includes physicians who specialize in various areas of functional and preventative medicine, all of whom are licensed and have extensive experience." },
      { question: "Where can I access Sapia Health services?", answer: "Our services are accessible online through our telehealth platform, allowing you to receive care anywhere with internet access." },
      { question: "Do I need to visit in person?", answer: "There is no need for in-person visits at Sapia Health. All consultations are conducted online." },
      { question: "How do I get my labs done?", answer: "We coordinate with national lab providers to have your lab tests done at a location convenient for you." },
      { question: "Can Sapia Health prescribe medications?", answer: "Yes, our physicians can prescribe medications as part of your treatment plan, which are sent to your preferred pharmacy." },
      { question: "What benefits does Sapia Health offer?", answer: "Benefits include personalized care plans, access to specialists, preventive health services, and comprehensive management of chronic conditions." },
      { question: "I haven't focused on my health in years. Can you help?", answer: "Absolutely, our approach is designed to address health concerns at any stage and help you take proactive steps towards better health." },
      { question: "I consider myself quite healthy. How can Sapia Health assist me?", answer: "Even if you're currently healthy, Sapia Health can provide insights and plans to maintain or enhance your health and prevent future issues." }
    ],
    financial: [
      { question: "How much does Sapia Health cost?", answer: "We ensure exceptional value with transparent pricing, so unexpected bills are off the table. For detailed pricing information, please visit our Pricing page." },
      { question: "Is Sapia Health covered by insurance?", answer: "Sapia Health services may be covered by insurance. We recommend checking with your insurance provider for details." },
      { question: "What's the intake process like at Sapia Health?", answer: "The intake process includes a detailed health questionnaire, initial consultations to understand your health goals, and comprehensive lab work." },
      { question: "Are there extra fees for labs, tests, and medications?", answer: "Some specialized tests and medications may incur additional fees, which will be clearly outlined in your treatment plan." },
      { question: "Which tests are not covered by insurance?", answer: "Certain advanced or elective tests may not be covered by insurance. We provide clear cost information upfront for such tests." }
    ]
  };
  

  
  return (
    <div className="faq-container">

    <h1 className="faq-h1">FAQs</h1>  
    <img src={maskGroupGreenCircle} alt="Decorative green circle" className="mask-group-green-circle" />
    <img src={ellipseYellowSemiUp} alt="Decorative yellow semi-circle" className="ellipse-yellow-semi-up" />
    <img src={ellipseYellowSunDown} alt="Decorative yellow sun down" className="ellipse-yellow-sun-down" />
    
    <input
        type="text"
        className="faq-search"
        placeholder="Search FAQs"
        value={searchText}
        onChange={handleSearchChange}
      />

      <div className="tab-titles">
        <h2 className={`tab-title ${activeTab === 'general' ? 'active' : ''}`} onClick={() => setActiveTab('general')}>General Information</h2>
        <h2 className={`tab-title ${activeTab === 'financial' ? 'active' : ''}`} onClick={() => setActiveTab('financial')}>Financial</h2>
      </div>
      <div className="faq-sections">
        {faqs[activeTab].map((faq, index) => (
          <div key={index} className="faq-section">
            <div className="faq-section-header" onClick={() => toggleQuestion(activeTab, index)}>
              {faq.question}
              <span className="faq-icon">{openQuestions[activeTab] === index ? '-' : '+'}</span>
            </div>
            {openQuestions[activeTab] === index && (
              <div className="faq-section-content">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqMain;