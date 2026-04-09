import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const industries = [
    "Aerospace", "Agriculture", "Automotive", "Chemical", "Defence Technology", 
    "Education", "Energy & Utilities", "Entertainment and Media", "Finance", 
    "Food Technology", "Healthcare", "Infrastructure", "Logistics", "Manufacturing", 
    "Ocean Technology", "Oil and Gas", "Pharmaceutical", "Retail", "Sports", 
    "Technology", "Telecommunication", "Textile", "Transportation", "Travel"
  ];

  const services = [
    "Software Development", "Hardware Engineering", "Product Design", "Research & Development"
  ];

  return (
    <footer className="footer full-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <h2 className="footer-logo">TECHBRAIN NETWORKS</h2>
            <p className="footer-mission">innovating the future.</p>
          </div>
          
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <div className="footer-quick-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/#services">Services</Link>
              <Link to="/#industries">Industries</Link>
              <Link to="/#careers">Careers</Link>
              <Link to="/#contact">Contact Us</Link>
            </div>
            
            <h4 style={{marginTop: '2rem'}}>Services</h4>
            <ul className="footer-services-list">
              {services.map(service => (
                 <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-industries-col">
            <h4>Industries We Serve</h4>
            <ul className="footer-industries-list">
              {industries.map(industry => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy">Privacy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <p>&copy; 2026 Techbrain Networks. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
