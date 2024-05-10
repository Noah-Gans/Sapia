import React from 'react';
import './ThirdPage.css'; // Ensure this CSS is specific to ThirdPage

// Replace these imports with the actual paths to your icon images
import icon1 from '../Logos/HomePage/Services/Nutrition.png';
import icon2 from '../Logos/HomePage/Services/Genetics.png';
import icon3 from '../Logos/HomePage/Services/Longevity.png';
import icon4 from '../Logos/HomePage/Services/Athletic.png';
import icon5 from '../Logos/HomePage/Services/Lab.png';
import icon6 from '../Logos/HomePage/Services/Disease.png';
import icon7 from '../Logos/HomePage/Services/Roadmap.png';
import icon8 from '../Logos/HomePage/Services/Physician Access.png';
import icon9 from '../Logos/HomePage/Services/Hormone.png';

// ... import other icons

const iconDetails = [
  { src: icon1, text: 'Nutrition', description: 'Nutritional assessments and personalized guidance from experts.', className: 'icon-size-nutrition' },
  { src: icon2, text: 'Personalized Medicine & Genetics', description: 'Custom health plans based on your genetic makeup and health history.', className: 'icon-size-personalized-medicine' },
  { src: icon3, text: 'Longevity Medicine', description: 'Advanced treatments and strategies for healthy aging.', className: 'icon-size-longevity-medicine' },
  { src: icon4, text: 'Athletic Performance', description: 'Tailored programs to enhance physical performance and recovery.', className: 'icon-size-athletic-performance' },
  { src: icon5, text: 'Advanced Lab Evaluation', description: 'Utilizing state-of-the-art testing for comprehensive health insights.', className: 'icon-size-advanced-lab' },
  { src: icon6, text: 'Disease Prevention', description: 'Focused on reducing the risk of heart disease, cholesterol issues, high blood pressure, fatigue, dementia, and more.', className: 'icon-size-disease-prevention' },
  { src: icon7, text: 'Custom Health Roadmaps', description: 'Actionable steps and strategies for your unique health journey.', className: 'icon-size-custom-health' },
  { src: icon8, text: '24/7 Physician Access', description: 'Unmatched communication and support from your dedicated health expert.', className: 'icon-size-physician-access' },
  { src: icon9, text: 'Hormone Optimization', description: 'Text Text Text', className: 'icon-size-hormone' },
  // ... add other icons as necessary
];

function ThirdPage() {
  // Splitting icons into two columns based on their index
  const columns = iconDetails.reduce((result, item, index) => {
    const columnIndex = index % 2; // Left (0) or right (1) column
    if (!result[columnIndex]) {
      result[columnIndex] = []; // Initialize the column array if it doesn't exist
    }
    result[columnIndex].push(item);
    return result;
  }, []);

  return (
    <div className="third-page">
        <div className="third-page-content">
            <h1>Tailored Health Solutions</h1>
            <p>for Every Aspect of Your Life</p>
            <div className="icons-container">
                {columns.map((column, columnIndex) => (
                  <div key={columnIndex} className={`icon-column ${columnIndex === 0 ? 'left' : 'right'}`}>
                    {column.map((iconDetail, index) => (
                      <div key={index} className="icon-item">
                        <img src={iconDetail.src} alt={iconDetail.text} className={iconDetail.className} />
                        <div className="icon-text">
                          <h2>{iconDetail.text}</h2>
                          <p>{iconDetail.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
            <div className="third-page-buttons">
                <button className="our-services">Our Services</button>
                <button className="learn-more">Learn More</button>
            </div>
        </div>
    </div>
  );
}


export default ThirdPage;
