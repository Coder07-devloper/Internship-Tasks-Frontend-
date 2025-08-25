import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="container">
        <div className="error-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p className="lead">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p>
            The page might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              Go to Homepage
            </Link>
            <button 
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
          
          <div className="helpful-links">
            <h3>You might be looking for:</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
