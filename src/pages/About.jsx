import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Target, Heart, Users, Award, Globe, Zap, ArrowRight, ChevronRight, Lightbulb, Rocket } from 'lucide-react';

const values = [
  { icon: Eye, title: 'Vision', desc: 'We aspire to be a global leader in technology innovation, creating a smarter, more connected, and sustainable future through advanced digital solutions.', color: '#FF6B35' },
  { icon: Target, title: 'Mission', desc: 'To empower businesses worldwide with scalable, secure, and intelligent technology solutions that drive efficiency, innovation, and growth.', color: '#10B981' },
  { icon: Heart, title: 'Passion', desc: 'Our passion for research and innovation drives us to solve complex challenges and build impactful, future-ready technologies.', color: '#1E3A8A' },
];

const milestones = [
  { year: '2020', text: 'Company founded with a vision for AI-powered retail.' },
  { year: '2021', text: 'Launched first E-commerce Personalization Platform.' },
  { year: '2022', text: 'Expanded to 10 industries and 50+ enterprise clients.' },
  { year: '2023', text: 'Opened UK headquarters in London, Covent Garden.' },
  { year: '2024', text: 'Launched Virtual Stylist AI and Omnichannel Platform.' },
  { year: '2025', text: 'Reached 480+ products across 24 industries.' },
  { year: '2027', text: 'Targeting global presence in 30+ countries.' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '65vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #050a16 0%, #0a1628 50%, #111827 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '140px 24px 80px' }}>
          <div className="section-label"><Zap size={12} /> About Us</div>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', marginBottom: '20px', maxWidth: '700px' }}>
            Pioneering the Future of <span className="gradient-text">Retail Technology</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.8, maxWidth: '620px' }}>
            Techbrain Networks is a leading Software Product Development company specializing in AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding" style={{ background: '#0a0f1e' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="section-label"><Lightbulb size={12} /> Who We Are</div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '20px' }}>
              Driving Innovation Across Industries
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              We deliver innovative solutions that empower businesses across industries to scale, innovate, and lead in the digital era. Our team of expert engineers, data scientists, and designers work together to create technology that matters.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.8, marginBottom: '32px' }}>
              From AI-powered retail analytics to blockchain-based supply chain solutions, we're building the infrastructure for the next generation of commerce.
            </p>
            <div style={{ display: 'flex', gap: '32px' }}>
              {[{ n: '480+', l: 'Products' }, { n: '24', l: 'Industries' }, { n: '30+', l: 'Countries' }].map(i => (
                <div key={i.l}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '28px', color: 'var(--primary)' }}>{i.n}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>{i.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}>
            <img src="/about_team.png" alt="Our Team" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Vision Mission Passion */}
      <section className="section-padding dot-bg" style={{ background: '#070c1a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><Target size={12} /> Our Foundation</div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white' }}>Vision, Mission & Passion</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass card-hover" style={{ padding: '36px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '16px', background: `${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Icon size={28} color={color} />
                </div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '20px', color: 'white', marginBottom: '14px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: '#0a0f1e' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><Rocket size={12} /> Our Journey</div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white' }}>Milestones & Growth</h2>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: '24px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: i === milestones.length - 1 ? 'linear-gradient(135deg, #FF6B35, #e55a24)' : 'rgba(255,107,53,0.15)', border: '2px solid rgba(255,107,53,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins', fontWeight: 800, fontSize: '12px', color: i === milestones.length - 1 ? 'white' : 'var(--primary)', flexShrink: 0 }}>
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div style={{ width: 2, flex: 1, background: 'rgba(255,107,53,0.15)', marginTop: 4 }} />}
                </div>
                <div className="glass" style={{ padding: '18px 24px', flex: 1 }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding" style={{ background: '#070c1a' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Users size={12} /> Leadership</div>
          <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '40px' }}>Meet Our Founder</h2>
          <div className="glass" style={{ maxWidth: '500px', margin: '0 auto', padding: '48px 36px', textAlign: 'center' }}>
            <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins', fontWeight: 800, fontSize: '32px', color: 'white', boxShadow: '0 0 40px rgba(255,107,53,0.3)' }}>
              RA
            </div>
            <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '22px', color: 'white', marginBottom: '6px' }}>Ramkumar Arunachalam</h3>
            <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Founder & CEO, Techbrain Networks</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.8 }}>
              A visionary leader with deep expertise in AI, cloud computing, and enterprise software, driving Techbrain Networks' mission to transform how businesses engage with technology.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #0a1628, #1E3A8A20)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white', marginBottom: '16px' }}>
            Want to Join Our Journey?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
            We're always looking for talented people who share our passion for innovation.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/careers" className="btn-primary">View Open Positions <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
