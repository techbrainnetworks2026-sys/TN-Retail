import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';
import { 
  ShoppingCart, Database, Glasses, Users, LineChart, 
  Share2, Layers, Radio, Smartphone, Shirt, 
  GraduationCap, Truck, PackageCheck, Gift, MonitorPlay, 
  ClipboardList, MessageSquareText, ThumbsUp, DollarSign, Leaf 
} from 'lucide-react';

const productsList = [
  { title: "E-commerce Platforms with Personalization", icon: ShoppingCart, color: "#FACC15" },
  { title: "POS & Inventory Management Systems", icon: Database, color: "#EAB308" },
  { title: "Augmented Reality Shopping Applications", icon: Glasses, color: "#FDE047" },
  { title: "CRM Systems for Retail", icon: Users, color: "#F59E0B" },
  { title: "Retail Analytics & Predictive Merchandising", icon: LineChart, color: "#FBBF24" },
  { title: "Omnichannel Retail Management Platforms", icon: Share2, color: "#FACC15" },
  { title: "Intelligent Shelf Management Systems", icon: Layers, color: "#EAB308" },
  { title: "Beacon Technology for In-Store Engagement", icon: Radio, color: "#FDE047" },
  { title: "Mobile Shopping & Payment Applications", icon: Smartphone, color: "#F59E0B" },
  { title: "AI-Driven Virtual Stylist Applications", icon: Shirt, color: "#FBBF24" },
  { title: "Retail Employee Training Software", icon: GraduationCap, color: "#FACC15" },
  { title: "Supply Chain Visibility Platforms", icon: Truck, color: "#EAB308" },
  { title: "Order Fulfillment & Logistics Optimization", icon: PackageCheck, color: "#FDE047" },
  { title: "Loyalty Program Management Solutions", icon: Gift, color: "#F59E0B" },
  { title: "Digital Signage Platforms", icon: MonitorPlay, color: "#FBBF24" },
  { title: "Retail Merchandising & Assortment Planning", icon: ClipboardList, color: "#FACC15" },
  { title: "Customer Feedback & Survey Tools", icon: MessageSquareText, color: "#EAB308" },
  { title: "Social Commerce & Influencer Marketing", icon: ThumbsUp, color: "#FDE047" },
  { title: "Dynamic Pricing Software", icon: DollarSign, color: "#F59E0B" },
  { title: "Sustainable Retail Practices Tracking", icon: Leaf, color: "#FBBF24" }
];

const Products = () => {
  return (
    <section id="products" className="section bg-light" style={{ backgroundColor: '#050a14' }}>
      <div className="container">
        <h2 className="section-title text-white">Our Products</h2>
        <p className="products-subtitle text-gray-400">Transforming the future of retail with 20 innovative technology solutions.</p>
        
        <div className="products-grid grid grid-cols-4 gap-6">
          {productsList.map((product, index) => (
            <ProductCard 
              key={index} 
              title={product.title} 
              icon={product.icon} 
              color={product.color}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
