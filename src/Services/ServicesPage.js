// In src/services/ServicesPage.js

import React from 'react';
import HeaderComponent from '../Headers/lightHeader';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import TotalHealthAssessment from './TotalHealthAssessment';
import Footer from '../Footer/GreenFooter';


// Import any components specific to the Services page

function ServicesPage() {
  return (
    <div>
      <HeaderComponent />
      <FirstSection />
      <SecondSection />
      <TotalHealthAssessment />
      <Footer />

    </div>
  );
}

export default ServicesPage;
