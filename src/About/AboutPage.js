// In src/services/ServicesPage.js
import React from 'react';
import HeaderComponent from '../Headers/lightHeader';
import IntroAbout from './IntroAbout';
import ReportPageHolder from './ReportPageHolder';
import Footer from '../Footer/GreenFooter';

// Import any components specific to the Services page

function ServicesPage() {
  return (
    <div>
      <HeaderComponent />
      <IntroAbout />
      <ReportPageHolder />
      <Footer />

      
      
    </div>
  );
}

export default ServicesPage;
