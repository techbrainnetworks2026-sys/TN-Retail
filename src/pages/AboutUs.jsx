import React from 'react';
import { Eye, Target, Heart, Monitor, Server, Cloud, Cpu, Database, Network, Code } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Intro Section */}
      <section className="about-intro bg-dark-gradient section-padding">
        <div className="container">
          <div className="intro-content text-center fade-in">
            <h1 className="main-title gradient-text">About Us</h1>
            <p className="lead-text">
              Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
            </p>
          </div>
        </div>
      </section>

      {/* O U R Foundation Section */}
      <section className="our-foundation section-padding bg-dark">
        <div className="container">
          <div className="our-grid">
            {/* Vision */}
            <div className="our-row slide-up">
              <div className="our-letter">
                <span className="letter gradient-text">O</span>
              </div>
              <div className="our-content glass-card">
                <h3><Eye className="icon-inline" /> Vision:</h3>
                <p>We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.</p>
              </div>
            </div>

            {/* Mission */}
            <div className="our-row slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="our-letter">
                <span className="letter gradient-text">U</span>
              </div>
              <div className="our-content glass-card">
                <h3><Target className="icon-inline" /> Mission:</h3>
                <p>We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.</p>
              </div>
            </div>

            {/* Passion */}
            <div className="our-row slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="our-letter">
                <span className="letter gradient-text">R</span>
              </div>
              <div className="our-content glass-card">
                <h3><Heart className="icon-inline" /> Passion:</h3>
                <p>Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding bg-darker text-center">
        <div className="container">
          <h2 className="section-title">Our</h2>
          <div className="icon-row fade-in">
            <Monitor className="tech-icon" />
            <Server className="tech-icon" />
            <Cloud className="tech-icon" />
            <Cpu className="tech-icon" />
            <Database className="tech-icon" />
            <Network className="tech-icon" />
            <Code className="tech-icon" />
          </div>
          <h2 className="section-title gradient-text" style={{ marginBottom: "2rem" }}>Team</h2>
          
          <p className="team-description slide-up">
            We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
          </p>

          <div className="founder-block glass-card mt-5 slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="founder-avatar">RA</div>
            <h3 className="founder-name">Ramkumar Arunachalam</h3>
            <p className="founder-title">Founder of Techbrain Networks</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
