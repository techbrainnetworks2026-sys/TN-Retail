import React from 'react';
import './Careers.css';

const careersList = [
  { title: "Android Developer", skills: "Java, Kotlin" },
  { title: "CAD/CAM Designer", skills: "Solidworks" },
  { title: "DFT (Design for Test) Engineer", skills: "DFT Methodologies, ATPG, JTAG" },
  { title: "FARM-stack Developer", skills: "FastAPI, ReactJs, MongoDB" },
  { title: "FPGA", skills: "VHDL, modelsim, xilinc vivado" },
  { title: "Hardware Design & Testing", skills: "C, Embedded C, RTOS, Kicad" },
  { title: "IOS Developer", skills: "Swift" },
  { title: "Machine Learning Engineer", skills: "Python, Keras, Opencv, Scikit, Tensorflow" },
  { title: "MEAN-stack Developer", skills: "AngularJs, NodeJs, MongoDB, ExpressJs" },
  { title: "MERN-stack Developer", skills: "ReactJs, NodeJs, MongoDB, ExpressJs" },
  { title: "Physical Design Engineer", skills: "RTL-to-GDSII Flow, Place and Route, Timing Closure" },
  { title: "Robotics Engineer", skills: "C++, Python, ROS" },
  { title: "Software Tester", skills: "Automation and Manual Testing" },
  { title: "UX/UI Designer", skills: "Framer, Figma, Adobe XD, Sketch" },
  { title: "Verification Engineer", skills: "SystemVerilog, UVM, Functional Coverage" },
  { title: "VLSI Design Engineer", skills: "RTL Design, Verilog, Synthesi" }
];

const Careers = () => {
  return (
    <section id="careers" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Careers</h2>
        <p className="careers-subtitle">Join our team of technology innovators.</p>
        
        <div className="grid grid-cols-3 careers-grid">
          {careersList.map((job, index) => (
            <div key={index} className="card career-card fade-in" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
              <h3>{job.title}</h3>
              <p><strong>Skills:</strong> {job.skills}</p>
              <button className="btn btn-outline career-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
