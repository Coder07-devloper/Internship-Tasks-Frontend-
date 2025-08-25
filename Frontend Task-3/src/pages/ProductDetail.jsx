import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Pages.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop for work and gaming', specs: 'Intel i7, 16GB RAM, 512GB SSD' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone with advanced features', specs: '6.1" Display, 128GB Storage, 5G' },
    { id: 3, name: 'Headphones', price: 199, description: 'Wireless noise-canceling headphones', specs: 'Bluetooth 5.0, 30hr Battery, ANC' },
    { id: 4, name: 'Tablet', price: 399, description: 'Portable tablet for entertainment and productivity', specs: '10.1" Display, 64GB Storage' },
    { id: 5, name: 'Smartwatch', price: 299, description: 'Fitness and health tracking smartwatch', specs: 'Heart Rate Monitor, GPS, Water Resistant' },
    { id: 6, name: 'Camera', price: 599, description: 'Professional DSLR camera for photography', specs: '24MP Sensor, 4K Video, Interchangeable Lenses' }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="page product-detail-page">
        <div className="container">
          <div className="error-message">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/products">← Back to Products</Link>
        </div>
        
        <div className="product-detail">
          <div className="product-image-large">
            <div className="placeholder-image large">
              {product.name.charAt(0)}
            </div>
          </div>
          
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <p className="product-price-large">${product.price}</p>
            <p className="product-description-large">{product.description}</p>
            
            <div className="product-specs">
              <h3>Specifications</h3>
              <p>{product.specs}</p>
            </div>
            
            <div className="product-actions">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-secondary">Add to Wishlist</button>
            </div>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button 
            className="btn btn-outline"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
          <Link to="/products" className="btn btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
