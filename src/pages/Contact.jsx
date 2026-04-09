import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Zap, Building2, Globe } from 'lucide-react';

const offices = [
  { flag: '🇮🇳', country: 'India — Thanjavur', address: '6/12 Papa Vaikal Street, Ayyampettai, Papanasam, Tamil Nadu, India', color: '#FF6B35' },
  { flag: '🇬🇧', country: 'United Kingdom — London', address: '71-75 Shelton Street, Covent Garden, WC2H 9JQ', color: '#10B981' },
];

const industries = ['Retail & E-commerce', 'Fashion & Apparel', 'Supermarkets', 'Electronics', 'Luxury Brands', 'FMCG', 'D2C Brands', 'Other'];
const serviceOptions = ['Custom Software Development', 'AI & Data Analytics', 'Cloud & DevOps', 'IoT Smart Store', 'UI/UX Design', 'Digital Marketing', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', mobile: '', industry: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '50vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #050a16, #0a1628, #111827)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '140px 24px 60px', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Zap size={12} /> Get In Touch</div>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '16px' }}>
            Let's Build Something <span className="gradient-text">Amazing Together</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', margin: '0 auto' }}>
            Ready to transform your retail business? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section style={{ background: '#0a0f1e', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '16px' }}>
            {offices.map(o => (
              <div key={o.country} className="glass card-hover" style={{ padding: '32px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, borderRadius: '14px', background: `${o.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>{o.flag}</div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px' }}>{o.country}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7 }}>{o.address}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass" style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
            <Mail size={16} color="var(--primary)" />
            <a href="mailto:contact@techbrainnetworks.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>contact@techbrainnetworks.com</a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding" style={{ background: '#070c1a' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><Send size={12} /> Contact Form</div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white' }}>Send Us a Message</h2>
          </div>

          {submitted ? (
            <div className="glass" style={{ padding: '60px 40px', textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px' }}>✓</div>
              <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px' }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass" style={{ padding: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label>Industry</label>
                  <select name="industry" value={form.industry} onChange={handleChange}>
                    <option value="">Select Industry</option>
                    {industries.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select Service</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: '28px', width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
