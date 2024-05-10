import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import ServicesPage from './Services/ServicesPage';
import AboutPage from './About/AboutPage';
import HowItWorks from './HowItWorks/HowItWorks';
import FAQ from './FAQ/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} /> {/* Add this line */}
        <Route path="/about" element={<AboutPage />} /> {/* Add this line */}
        <Route path="/membership" element={<HowItWorks />} /> {/* Add this line */}
        <Route path="/faq" element={<FAQ />} /> {/* Add this line */}

        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
