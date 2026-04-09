import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact-extended" className="contact-extended-section section-padding bg-dark" style={{ padding: '80px 0', backgroundColor: '#111' }}>
      <div className="container">
        <div className="contact-wrapper p-6 glass-card" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '2rem' }}>
          <div className="contact-header text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title text-white" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in touch with us!</h2>
            <p className="contact-lead mx-auto" style={{ maxWidth: '800px', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Whether you are in education, finance, transportation, retail or health care, we have a solution for you. We develop both large and small projects and our solutions are always tailored to your needs - both in terms of budget and scope.
            </p>
          </div>

          <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Form Col */}
            <div className="contact-form-col">
              <form className="professional-form">
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Name *</label>
                  <input type="text" placeholder="Your Full Name" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Company Name *</label>
                  <input type="text" placeholder="Your Company" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Email Address *</label>
                  <input type="email" placeholder="you@company.com" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Mobile No *</label>
                  <input type="tel" placeholder="+1 234 567 8900" required style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Industries</label>
                  <select style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }}>
                    <option style={{ color: 'black' }}>Select an Industry...</option>
                    <option style={{ color: 'black' }}>Retail</option>
                    <option style={{ color: 'black' }}>Finance</option>
                    <option style={{ color: 'black' }}>Healthcare</option>
                    <option style={{ color: 'black' }}>Education</option>
                    <option style={{ color: 'black' }}>Transportation</option>
                    <option style={{ color: 'black' }}>Technology</option>
                    <option style={{ color: 'black' }}>Other</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Choose the service</label>
                  <select style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }}>
                    <option style={{ color: 'black' }}>Select a Service...</option>
                    <option style={{ color: 'black' }}>Software Development</option>
                    <option style={{ color: 'black' }}>Hardware Engineering</option>
                    <option style={{ color: 'black' }}>Product Design</option>
                    <option style={{ color: 'black' }}>Research & Development</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc', fontSize: '0.9rem', fontWeight: 500 }}>Special Note</label>
                  <textarea rows="4" placeholder="How can we help you?" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#fff' }}></textarea>
                </div>
                <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #FACC15, #EAB308)', color: '#0F172A', border: 'none', padding: '1rem 2rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', marginTop: '1rem' }}>Send Message</button>
              </form>
            </div>

            {/* Info Col */}
            <div className="contact-info-col" style={{ paddingLeft: '2rem' }}>
              <div className="info-block" style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FACC15' }}>Address</h3>
                
                <div className="location" style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontWeight: 600, color: 'white', fontSize: '1.1rem' }}>India</h4>
                  <p style={{ color: '#9ca3af', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    Thanjavur<br />
                    6/12 Papa vaikal Street Ayyampettai<br />
                    Papanasam Thanjavur<br />
                    Tamilnadu India.
                  </p>
                </div>

                <div className="location">
                  <h4 style={{ fontWeight: 600, color: 'white', fontSize: '1.1rem' }}>United Kingdom</h4>
                  <p style={{ color: '#9ca3af', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    London<br />
                    71-75 Shelton Street, Covent Garden,<br />
                    London, WC2H 9JQ, United Kingdom.
                  </p>
                </div>
              </div>

              <div className="info-block">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#FACC15' }}>Contact us</h3>
                <a href="mailto:contact@techbrainnetworks.com" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s' }}>
                  contact@techbrainnetworks.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
