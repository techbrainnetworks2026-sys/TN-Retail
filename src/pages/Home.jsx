import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Products />
      <Services />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
