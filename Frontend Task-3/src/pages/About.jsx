import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <h1>About Us</h1>
        <p className="lead">
          Learn more about our React Router demonstration application built with Vite.
        </p>
        
        <div className="content-section">
          <h2>What is React Router?</h2>
          <p>
            React Router is a powerful routing library for React applications that enables 
            client-side routing. It allows you to create single-page applications (SPAs) 
            with multiple views and navigation without page reloads.
          </p>
        </div>

        <div className="content-section">
          <h2>Why Vite?</h2>
          <p>
            Vite is a modern build tool that provides an extremely fast development server 
            and optimized builds. It offers instant hot module replacement (HMR) and 
            lightning-fast cold starts, making development much more enjoyable.
          </p>
        </div>

        <div className="content-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Declarative Routing:</strong> Define routes using JSX components</li>
            <li><strong>Dynamic Routes:</strong> Support for URL parameters and query strings</li>
            <li><strong>Nested Routes:</strong> Create complex routing hierarchies</li>
            <li><strong>Programmatic Navigation:</strong> Navigate programmatically using hooks</li>
            <li><strong>Route Guards:</strong> Protect routes with authentication</li>
            <li><strong>Fast Development:</strong> Vite's lightning-fast dev server</li>
          </ul>
        </div>

        <div className="content-section">
          <h2>This Demo Includes</h2>
          <ul>
            <li>Basic routing with multiple pages</li>
            <li>Navigation component with active state</li>
            <li>Dynamic routes with URL parameters</li>
            <li>404 Not Found page handling</li>
            <li>Modern, responsive design</li>
            <li>Vite-powered development experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
