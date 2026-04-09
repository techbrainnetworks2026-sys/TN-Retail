import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero fade-in">
      {/* Dynamic background will be defined via CSS or inline. We'll use CSS for cleaner approach */}
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h3 className="hero-subtitle">TECHBRAIN NETWORKS</h3>
        <h1 className="hero-title">
          Smart Retail Solutions for<br />Enhanced Customer Engagement
        </h1>
        <div className="hero-buttons">
          <a href="#contact" className="btn-get-started">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
