import React from 'react';
import { 
  Smartphone, Box, Cpu, Database, 
  TerminalSquare, CircuitBoard, Apple, BrainCircuit, 
  Globe2, CheckSquare, Wrench, ShieldCheck, 
  Wand2, Target, TestTube2, Computer 
} from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const roles = [
  { title: "Android Developer", skills: "Java, Kotlin", icon: Smartphone },
  { title: "CAD/CAM Designer", skills: "Solidworks", icon: Box },
  { title: "DFT Engineer", skills: "DFT Methodologies, ATPG, JTAG", icon: Cpu },
  { title: "FARM-stack Developer", skills: "FastAPI, ReactJs, MongoDB", icon: Database },
  { title: "FPGA", skills: "VHDL, modelsim, xilinx vivado", icon: TerminalSquare },
  { title: "Hardware Design & Testing", skills: "C, Embedded C, RTOS, Kicad", icon: CircuitBoard },
  { title: "IOS Developer", skills: "Swift", icon: Apple },
  { title: "Machine Learning Engineer", skills: "Python, Keras, Opencv, Scikit, Tensorflow", icon: BrainCircuit },
  { title: "MEAN-stack Developer", skills: "AngularJs, NodeJs, MongoDB, ExpressJs", icon: Globe2 },
  { title: "MERN-stack Developer", skills: "ReactJs, NodeJs, MongoDB, ExpressJs", icon: Globe2 },
  { title: "Physical Design Engineer", skills: "RTL-to-GDSII Flow, Place and Route, Timing Closure", icon: Wrench },
  { title: "Robotics Engineer", skills: "C++, Python, ROS", icon: Target },
  { title: "Software Tester", skills: "Automation and Manual Testing", icon: CheckSquare },
  { title: "UX/UI Designer", skills: "Framer, Figma, Adobe XD, Sketch", icon: Wand2 },
  { title: "Verification Engineer", skills: "SystemVerilog, UVM, Functional Coverage", icon: ShieldCheck },
  { title: "VLSI Design Engineer", skills: "RTL Design, Verilog, Synthesis", icon: Computer }
];

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#050a14', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* Intro section */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '20px' }}>
            Build Your Career with <span style={{ background: 'linear-gradient(135deg, #FACC15, #EAB308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Techbrain</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 50px' }}>
            Explore our open roles and bring your unique skills to revolutionizing technology.
          </p>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {roles.map((role, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '30px 20px',
                textAlign: 'left',
                transition: 'transform 0.3s'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(250, 204, 21, 0.1)',
                  padding: '12px',
                  borderRadius: '12px',
                  color: '#FACC15',
                  marginBottom: '20px'
                }}>
                  <role.icon size={28} />
                </div>
                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
                  {role.title}
                </h3>
                <div style={{ display: 'inline-block', background: 'rgba(234, 179, 8, 0.2)', color: '#FDE047', padding: '6px 12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500 }}>
                  <span style={{color: '#FDE047', opacity: 0.8, fontWeight: 400}}>Skill:</span> {role.skills}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reusable Contact section */}
      <ContactSection />
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}
