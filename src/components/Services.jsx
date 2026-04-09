import React from 'react';
import './Services.css';
import placeholderImage from '../assets/product-placeholder.png';

import serviceSoftware from '../assets/service-software.jpg';
import serviceHardware from '../assets/service-hardware.jpg';
import serviceDesign from '../assets/service-design.jpg';
import serviceResearch from '../assets/service-research.jpg';

const servicesList = [
  {
    title: "Software Development",
    desc: "Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.",
    image: serviceSoftware
  },
  {
    title: "Hardware Engineering",
    desc: "Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.",
    image: serviceHardware
  },
  {
    title: "Product Design",
    desc: "Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.",
    image: serviceDesign
  },
  {
    title: "Research & Development",
    desc: "Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.",
    image: serviceResearch
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-subtitle">We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.</p>
        
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="card service-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-image" style={{ overflow: 'hidden', height: '200px' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = `https://via.placeholder.com/600x400/FACC15/0F172A?text=${service.title.replace(' ', '+')}` }} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
