import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-nav')) {
        setIsMenuOpen(false);
      }
      if (isCategoryMenuOpen && !event.target.closest('.category-nav')) {
        setIsCategoryMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isCategoryMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsCategoryMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategoryMenu = (e) => {
    e.stopPropagation();
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };


  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img src={logoImage} alt="Wolfexa Logo" className="logo-image" />
              <div>
                <h1 className="logo">AZIZ JAN TRUST</h1>
                <div className="logo-subtitle">Welfare with Seylani</div>
              </div>
            </Link>
          </div>
          
          <div className="header-right">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <span className="contact-label">Call Us for help!</span>
                  <span className="contact-value">+923191954292</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <span className="contact-label">Mail Us</span>
                  <span className="contact-value">info@azizjantrust.com</span>
                </div>
              </div>
            </div>
            
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="theme-icon">
                {isDarkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - 1st Navbar */}
      <div className="main-nav">
        <div className="nav-container">
          <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/join-us" onClick={() => setIsMenuOpen(false)}>Join Us</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Category Navigation - 2nd Header */}
      <div className="category-nav">
        <div className="category-container">
          <ul className="category-links">
            <li><Link to="/programs">Programs</Link></li>
            <li><a href="#courses">Courses</a></li>
            <li><Link to="/success-story">Successes Story</Link></li>
            <li><Link to="/presence">Presence</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
