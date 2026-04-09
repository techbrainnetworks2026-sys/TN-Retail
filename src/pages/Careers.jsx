import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Zap, ArrowRight, Search, ChevronDown, ChevronRight, Star, Coffee, Heart, Lightbulb, Rocket, Users } from 'lucide-react';

const perks = [
  { icon: Rocket, title: 'Rapid Growth', desc: 'Fast-track career progression with mentorship from industry leaders.' },
  { icon: Lightbulb, title: 'Innovation First', desc: 'Work on cutting-edge AI, IoT, and cloud technologies daily.' },
  { icon: Heart, title: 'Work-Life Balance', desc: 'Flexible hours, remote options, generous PTO, and wellness programs.' },
  { icon: Coffee, title: 'Great Benefits', desc: 'Competitive salary, equity options, health insurance, and learning budget.' },
  { icon: Users, title: 'Global Team', desc: 'Collaborate with brilliant minds across India, UK, and beyond.' },
  { icon: Star, title: 'Impact at Scale', desc: 'Your work powers retail experiences for millions of consumers worldwide.' },
];

const jobs = [
  { title: 'Senior React Developer', dept: 'Engineering', location: 'Remote / India', type: 'Full-time', desc: 'Build next-gen retail UIs with React, TypeScript, and Tailwind.' },
  { title: 'Machine Learning Engineer', dept: 'AI & Data', location: 'Thanjavur, India', type: 'Full-time', desc: 'Develop predictive models for retail analytics and recommendation engines.' },
  { title: 'Cloud Solutions Architect', dept: 'Infrastructure', location: 'London, UK', type: 'Full-time', desc: 'Design and deploy scalable cloud architectures on AWS/Azure.' },
  { title: 'UI/UX Designer', dept: 'Design', location: 'Remote / India', type: 'Full-time', desc: 'Create beautiful, conversion-optimized interfaces for retail platforms.' },
  { title: 'DevOps Engineer', dept: 'Infrastructure', location: 'Remote', type: 'Full-time', desc: 'Build CI/CD pipelines and manage Kubernetes infrastructure.' },
  { title: 'Product Manager - Retail AI', dept: 'Product', location: 'London, UK', type: 'Full-time', desc: 'Own the roadmap for our AI-powered retail analytics products.' },
];

export default function Careers() {
  const [filter, setFilter] = useState('All');
  const depts = ['All', ...new Set(jobs.map(j => j.dept))];
  const filtered = filter === 'All' ? jobs : jobs.filter(j => j.dept === filter);

  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '60vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #050a16, #0a1628, #111827)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '140px 24px 80px', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}><Zap size={12} /> Careers</div>
          <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', marginBottom: '20px' }}>
            Build the Future of <span className="gradient-text">Retail Tech</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '560px', margin: '0 auto' }}>
            Join a team of innovators shaping how the world shops. We're hiring across engineering, AI, design, and more.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding dot-bg" style={{ background: '#0a0f1e' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white' }}>Why Join Techbrain?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass card-hover" style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '14px', background: 'rgba(255,107,53,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon size={24} color="var(--primary)" />
                </div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding" style={{ background: '#070c1a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><Briefcase size={12} /> Open Positions</div>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '2rem', color: 'white' }}>Find Your Next Role</h2>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
            {depts.map(d => (
              <button key={d} onClick={() => setFilter(d)} style={{
                padding: '8px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                background: filter === d ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                color: filter === d ? 'white' : 'rgba(255,255,255,0.6)',
                border: filter === d ? 'none' : '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s',
              }}>
                {d}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
            {filtered.map(job => (
              <div key={job.title} className="glass-dark card-hover" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '6px' }}>{job.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginBottom: '10px' }}>{job.desc}</p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}><Briefcase size={12} /> {job.dept}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}><MapPin size={12} /> {job.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '13px' }}>
                  Apply <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
