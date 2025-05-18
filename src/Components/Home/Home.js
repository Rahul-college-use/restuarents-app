import React from 'react';
import Homeitems from './Homeitems';
import Subscribe from './Subscribe';
import Footer from './Footer';
import HomeMain from './HomeMain';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeMain/>
      <Homeitems/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default Home;
