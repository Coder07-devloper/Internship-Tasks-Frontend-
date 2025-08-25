import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Products() {
  const products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop for work and gaming' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone with advanced features' },
    { id: 3, name: 'Headphones', price: 199, description: 'Wireless noise-canceling headphones' },
    { id: 4, name: 'Tablet', price: 399, description: 'Portable tablet for entertainment and productivity' },
    { id: 5, name: 'Smartwatch', price: 299, description: 'Fitness and health tracking smartwatch' },
    { id: 6, name: 'Camera', price: 599, description: 'Professional DSLR camera for photography' }
  ];

  return (
    <div className="page products-page">
      <div className="container">
        <h1>Our Products</h1>
        <p className="lead">
          Browse our collection of amazing products. Click on any product to see more details.
        </p>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="placeholder-image">
                  {product.name.charAt(0)}
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
