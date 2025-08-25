import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="container">
        <h1>Welcome to React Router App</h1>
        <p className="lead">
          This is a demonstration of client-side routing using react-router-dom with Vite.
        </p>
        <div className="features">
          <div className="feature">
            <h3>🚀 Fast Navigation</h3>
            <p>Navigate between pages without page reloads</p>
          </div>
          <div className="feature">
            <h3>🔗 Clean URLs</h3>
            <p>Beautiful, shareable URLs for each page</p>
          </div>
          <div className="feature">
            <h3>⚡ Dynamic Routing</h3>
            <p>Support for dynamic routes with parameters</p>
          </div>
          <div className="feature">
            <h3>⚡ Vite Powered</h3>
            <p>Lightning-fast development with Vite bundler</p>
          </div>
        </div>
        <div className="cta-buttons">
          <Link to="/products" className="btn btn-primary">
            View Products
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
