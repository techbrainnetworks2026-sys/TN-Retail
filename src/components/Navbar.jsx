import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/#products' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container" style={{ alignItems: 'flex-start' }}>
        <Link to="/" className="logo-container" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span className="logo-main-text" style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '0.5px' }}>Techbrain Networks</span>
          <span className="logo-sub-text" style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '0.5px', marginLeft: '32px' }}>Retail</span>
        </Link>
        
        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'nav-links-mobile' : ''}`} style={{ marginTop: '4px' }}>
          {navLinks.map((link, index) => (
            <li key={index} style={{ margin: '0 12px' }}>
              <Link to={link.href} onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '0.5px' }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
