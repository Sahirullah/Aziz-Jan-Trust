import React from 'react';
// Using card images from assets folder
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Aziz Jan Welfare Trust
          </h1>
          <p className="hero-subtitle">
            Discover thousands of high-quality handouts, assignments, and study materials 
            for Aziz Jan Welfare Trust students.
          </p>
          <div className="hero-search">
            <input 
              type="email" 
              placeholder="Enter your email to subscribe..."
              className="search-input"
            />
            <button className="search-btn">Subscribe</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Study Materials</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Downloads</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <img src={card1} alt="E-commerce Theme Preview" className="card-image" />
            </div>
            <div className="floating-card card-2">
              <img src={card2} alt="Portfolio Theme Preview" className="card-image" />
            </div>
            <div className="floating-card card-3">
              <img src={card3} alt="Business Theme Preview" className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;