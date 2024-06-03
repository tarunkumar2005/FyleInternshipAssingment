import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './Components/HeroSection';
import WhatWeDo from './Components/WhatWeDo';
import WhyChooseUs from './Components/WhyChooseUs';
import OutProjects from './Components/OutProjects';
import Growth from './Components/Growth';
import FeedBack from './Components/FeedBack';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatWeDo />
      <WhyChooseUs />
      <OutProjects />
      <Growth />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default App;