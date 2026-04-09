import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Brain, Cloud, Wifi, Palette, Megaphone, Zap, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const services = [
  { icon: Code, title: 'Custom Retail Software Development', desc: 'Bespoke applications built to match your unique retail workflows, from POS systems to inventory management.', features: ['Microservices Architecture', 'API-First Design', 'Agile Delivery', 'Cross-Platform'], color: '#FF6B35' },
  { icon: Brain, title: 'AI & Data Analytics Solutions', desc: 'Harness machine learning and predictive analytics to unlock customer insights and optimize operations.', features: ['Predictive Merchandising', 'Customer Segmentation', 'Demand Forecasting', 'NLP Chatbots'], color: '#10B981' },
  { icon: Cloud, title: 'Cloud & DevOps Services', desc: 'Scalable cloud infrastructure with modern CI/CD pipelines for reliable, high-performance retail platforms.', features: ['AWS / Azure / GCP', 'Kubernetes', 'Zero-Downtime Deploys', 'Auto-Scaling'], color: '#1E3A8A' },
  { icon: Wifi, title: 'IoT Smart Store Integration', desc: 'Connect physical retail spaces with digital intelligence using IoT sensors, beacons, and smart shelves.', features: ['Beacon Technology', 'Smart Shelves', 'Foot Traffic Analytics', 'Digital Signage'], color: '#FF6B35' },
  { icon: Palette, title: 'UI/UX Design for Retail', desc: 'Beautiful, conversion-optimized interfaces designed for the modern shopper across web and mobile.', features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'A/B Testing'], color: '#10B981' },
  { icon: Megaphone, title: 'Digital Marketing & Growth', desc: 'Data-driven marketing strategies that drive customer acquisition, engagement, and lifetime value.', features: ['SEO & SEM', 'Social Commerce', 'Email Campaigns', 'Performance Analytics'], color: '#1E3A8A' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your business goals, challenges, and technical landscape.' },
  { step: '02', title: 'Strategy', desc: 'Craft a tailored solution architecture and development roadmap.' },
  { step: '03', title: 'Build', desc: 'Agile development with weekly demos and continuous feedback loops.' },
  { step: '04', title: 'Launch & Scale', desc: 'Deploy, monitor, and iterate to ensure maximum impact and growth.' },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '60vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #050a16 0%, #0a1628 50%, #111827 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '140px 24px 80px' }}>
          <div className="section-label"><Zap size={12} /> Our Services</div>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', marginBottom: '20px', maxWidth: '650px' }}>
            End-to-End <span className="gradient-text">Technology Services</span> for Retail
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.8, maxWidth: '560px' }}>
            From ideation to deployment, we partner with retail brands to build, scale, and optimize their digital infrastructure.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ background: '#0a0f1e' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {services.map(({ icon: Icon, title, desc, features, color }) => (
              <div key={title} className="glass-dark card-hover" style={{ padding: '36px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle at top right, ${color}12, transparent)` }} />
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '14px', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={26} color={color} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '17px', color: 'white', marginBottom: '10px' }}>{title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {features.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                          <CheckCircle size={12} color={color} /> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding dot-bg" style={{ background: '#070c1a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><Zap size={12} /> How We Work</div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white' }}>Our Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {process.map((p, i) => (
              <div key={p.step} className="glass card-hover" style={{ padding: '32px', textAlign: 'center', position: 'relative' }}>
                <div style={{ fontFamily: 'Poppins', fontWeight: 900, fontSize: '48px', color: 'rgba(255,107,53,0.1)', position: 'absolute', top: 12, right: 16 }}>{p.step}</div>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #e55a24)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: 'Poppins', fontWeight: 800, fontSize: '16px', color: 'white' }}>{p.step}</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0a1628, #1E3A8A20)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '16px' }}>Have a Project in Mind?</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', marginBottom: '36px', maxWidth: '460px', margin: '0 auto 36px' }}>
            Let's discuss how we can build the perfect solution for your retail business.
          </p>
          <Link to="/contact" className="btn-primary">Get a Free Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
