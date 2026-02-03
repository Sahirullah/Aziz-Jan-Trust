import React from 'react';
import gallery0 from '../assets/Gallery0.jpg';
import '../styles/HomeAbout.css';

const About = () => {
  return (
    <section className="home-about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Aziz Jan</h2>
            <p className="about-description">
              Aziz Jan Trust is a compassionate organization dedicated to bringing hope to people through education, healthcare, and community development. Founded with a vision to empower underprivileged communities, we have been serving thousands of families across multiple regions for over 15 years.
            </p>
            <p className="about-description">
              Our mission is to bridge the gap between privileged and underprivileged communities by providing quality education, accessible healthcare, and sustainable development initiatives. We believe that every individual deserves the opportunity to reach their full potential, regardless of their economic background.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">50K+</span>
                <span className="highlight-label">Students Educated</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100+</span>
                <span className="highlight-label">Schools Supported</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">25K+</span>
                <span className="highlight-label">Healthcare Beneficiaries</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={gallery0} alt="Aziz Jan Trust" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
