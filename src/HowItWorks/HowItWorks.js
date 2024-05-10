// In src/services/ServicesPage.js
import React from 'react';
import Intro from './introworks';
import HeaderComponent from '../Headers/lightHeader';
import Membership from './membership';
import ContactUs from './contactus';
import ComparisonSection from './comparison';
import Firststep from './firststep';
import MoreQuestions from './morequestions';
import Footer from '../Footer/GreenFooter';




function HowItWorks() {
  return (
    <div>
      <HeaderComponent />
      <Intro />
      <Membership />
      <ContactUs />
      <ComparisonSection />
      <Firststep />
      <MoreQuestions />
      <Footer />



      

      
      
    </div>
  );
}

export default HowItWorks;