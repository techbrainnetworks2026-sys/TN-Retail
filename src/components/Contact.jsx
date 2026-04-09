import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-intro text-center">
          <h3>Your all-in-one stop for digital products</h3>
          <p>We offer both digital and physical products that meet our customer's requirements. If you're looking for customized solutions to power up your business, we'll be happy to help out!</p>
        </div>
        
        <div className="contact-grid grid grid-cols-2">
          <div className="card contact-card fade-in">
            <h3>India Office</h3>
            <p className="address">
              6/12 Papa vaikal Street, Ayyampettai Post<br />
              Papanasam Taluk<br />
              Thanjavur 614201<br />
              Tamilnadu, India.
            </p>
          </div>
          
          <div className="card contact-card fade-in" style={{ animationDelay: '0.2s' }}>
            <h3>United Kingdom Office</h3>
            <p className="address">
              71-75 Shelton Street<br />
              Covent Garden<br />
              London, WC2H 9JQ<br />
              United Kingdom.
            </p>
          </div>
        </div>
        
        <div className="contact-info text-center fade-in slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="phone"><strong>Phone:</strong> +91 8754906714</p>
          <p className="email"><strong>Email:</strong> <a href="mailto:contact@techbrainnetworks.com">contact@techbrainnetworks.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
