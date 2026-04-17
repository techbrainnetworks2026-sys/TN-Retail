import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsList } from '../data/productsData';
import Footer from '../components/Footer';
import { ChevronRight, ArrowLeft, Zap, Target, History, Sparkles, CheckCircle2 } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productsList.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail-container loading-state">
        <div className="loader"></div>
      </div>
    );
  }

  const { title, icon: Icon, color, relatedSentence, advantages, scope20Years, featureBenefits } = product;

  return (
    <div className="product-detail-wrapper bg-dark">
      <div className="pd-hero" style={{ '--pd-color': color }}>
        <div className="pd-hero-background">
           <div className="pd-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${color}33 0%, transparent 70%)` }}></div>
        </div>
        
        <div className="pd-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} /> Back to Products
          </button>
          
          <div className="pd-hero-content">
            <div className="pd-icon-box fade-up">
              <Icon size={48} color={color} strokeWidth={1.5} />
            </div>
            <h1 className="pd-title fade-up" style={{ animationDelay: '0.1s' }}>{title}</h1>
            <p className="pd-subtitle fade-up" style={{ animationDelay: '0.2s' }}>{relatedSentence}</p>
          </div>
        </div>
      </div>

      <div className="pd-container pd-main-content">
        <div className="pd-grid">
          
          <div className="pd-left-column fade-up" style={{ animationDelay: '0.3s' }}>
            <section className="pd-section pd-card">
              <div className="pd-section-header">
                <Target color={color} size={28} />
                <h2>Key Advantages</h2>
              </div>
              <ul className="pd-advantages-list">
                {advantages.map((adv, idx) => (
                  <li key={idx} className="pd-adv-item">
                    <CheckCircle2 size={24} color={color} className="pd-check-icon" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="pd-section pd-card">
              <div className="pd-section-header">
                <History color={color} size={28} />
                <h2>20-Year Horizon Scope</h2>
              </div>
              <div className="pd-scope-box">
                <Sparkles size={24} color={color} className="pd-sparkle-icon" />
                <p className="pd-scope-text">{scope20Years}</p>
              </div>
            </section>
          </div>

          <div className="pd-right-column fade-up" style={{ animationDelay: '0.4s' }}>
            <section className="pd-section">
              <div className="pd-section-header">
                <Zap color={color} size={28} />
                <h2>Core Feature Benefits</h2>
              </div>
              <div className="pd-features-grid">
                {featureBenefits.map((fb, idx) => (
                  <div key={idx} className="pd-feature-card">
                    <div className="pd-feature-indicator" style={{ backgroundColor: color }}></div>
                    <h3 className="pd-feature-title">{fb.feature}</h3>
                    <p className="pd-feature-text">{fb.benefit}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <div className="pd-cta-box" style={{ borderColor: `${color}44`, background: `linear-gradient(145deg, #0f172a 0%, #020617 100%)` }}>
              <h3>Ready to Transform Your Retail Operations?</h3>
              <p>Contact our experts to explore how {title} can scale your business.</p>
              <button className="pd-primary-btn" style={{ backgroundColor: color }} onClick={() => navigate('/contact')}>
                Request Demo <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
