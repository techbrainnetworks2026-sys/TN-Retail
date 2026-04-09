import React from 'react';
import './ProductCard.css';
import placeholderImage from '../assets/product-placeholder.png';

const ProductCard = ({ title, index, icon: Icon, color }) => {
  const delay = (index % 4) * 0.1;
  const cardColor = color || 'var(--color-primary)';
  
  return (
    <div className="card product-card fade-in" style={{ animationDelay: `${delay}s`, '--card-accent': cardColor }}>
      <div className="product-image" style={{ background: `linear-gradient(135deg, #0A1628, #111)` }}>
        {Icon ? (
          <div className="product-icon-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: cardColor }}>
            <Icon size={64} strokeWidth={1.5} />
          </div>
        ) : (
          <img src={placeholderImage} alt={title} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300/0B172A/FFFFFF?text=Product+Image' }} />
        )}
        <div className="product-overlay">
          <span className="product-view">View Details</span>
        </div>
      </div>
      <div className="product-info">
        <h3 style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
