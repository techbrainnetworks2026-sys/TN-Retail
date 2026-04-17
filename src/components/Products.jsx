import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';
import { productsList } from '../data/productsData';

const Products = () => {
  return (
    <section id="products" className="section bg-light" style={{ backgroundColor: '#050a14' }}>
      <div className="container">
        <h2 className="section-title text-white">Our Products</h2>
        <p className="products-subtitle text-gray-400">Transforming the future of retail with 20 innovative technology solutions.</p>
        
        <div className="products-grid grid grid-cols-4 gap-6">
          {productsList.map((product, index) => (
            <ProductCard 
              key={product.id || index} 
              product={product}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
