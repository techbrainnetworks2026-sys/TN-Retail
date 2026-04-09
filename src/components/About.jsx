import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <h2 className="section-title">About Techbrain Networks</h2>
        
        <div className="about-grid grid grid-cols-3">
          <div className="card about-card fade-in">
            <h3>Vision</h3>
            <p>We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
          </div>
          
          <div className="card about-card fade-in" style={{animationDelay: '0.2s'}}>
            <h3>Mission</h3>
            <p>We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>
          </div>
          
          <div className="card about-card fade-in" style={{animationDelay: '0.4s'}}>
            <h3>Passion</h3>
            <p>Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.</p>
          </div>
        </div>

        <div className="team-section fade-in slide-up" style={{animationDelay: '0.6s'}}>
          <h3>Our Team</h3>
          <p className="team-desc">We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.</p>
          
          <div className="founder-card">
            <h4>Ramkumar Arunachalam</h4>
            <p>Founder of Techbrain Networks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
