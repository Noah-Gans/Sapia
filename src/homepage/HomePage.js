import React from 'react';
import Header from '../Headers/darkHeader';
import IntroText from './IntroText';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import HealthPlans from './HealthPlans';
import Testimonials from './Testimonials';
import Footer from '../Footer/GreenFooter';



// Import other components if necessary

function HomePage() {
  return (
    <div>
      <Header />
      <IntroText />
      <SecondPage />
      <ThirdPage/>
      <FourthPage/>
      <HealthPlans/>
      <Testimonials/>
      <Footer/>


      {/* Main content of the homepage goes here */}
    </div>
  );
}

export default HomePage;
