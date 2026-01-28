import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImage from '../assets/logo.png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-logo">
              <img src={logoImage} alt="Virtual Library Logo" className="hero-logo-image" />
            </div>
            <h1 className="about-hero-title">About Virtual Library</h1>
            <p className="about-hero-subtitle">
              Empowering Pakistani students with quality educational resources since 2024
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-container">
            <div className="mission-content">
              <div className="mission-text">
                <div className="mission-logo">
                  <img src={logoImage} alt="Virtual Library Logo" className="mission-logo-image" />
                  <div className="mission-logo-text">
                    <h3 className="mission-logo-title">VIRTUAL LIBRARY</h3>
                    <p className="mission-logo-subtitle">Educational Resources</p>
                  </div>
                </div>
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-description">
                  Virtual Library is dedicated to providing Pakistani university students with 
                  easy access to high-quality educational resources. We believe that every student 
                  deserves access to comprehensive study materials, regardless of their financial 
                  situation or geographical location.
                </p>
                <p className="mission-description">
                  Our platform serves as a bridge between academic excellence and accessibility, 
                  offering handouts, assignments, past papers, and study notes from top universities 
                  across Pakistan.
                </p>
              </div>
              <div className="mission-stats">
                <div className="stat-card">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Study Materials</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5K+</div>
                  <div className="stat-label">Happy Students</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Universities</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Subjects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-container">
            <h2 className="section-title">Our Story</h2>
            <div className="story-content">
              <div className="story-text">
                <p>
                  Virtual Library was born from the shared struggles of Pakistani university students 
                  who faced difficulties accessing quality study materials. Founded by a group of 
                  passionate students and educators, we recognized the gap between academic requirements 
                  and resource availability.
                </p>
                <p>
                  What started as a small collection of shared notes among friends has grown into 
                  Pakistan's largest digital library for educational resources. Today, we serve 
                  thousands of students across the country, helping them achieve academic success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎓</div>
                <h3 className="value-title">Academic Excellence</h3>
                <p className="value-description">
                  We curate only the highest quality educational materials from top-performing 
                  students and experienced educators.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Community Support</h3>
                <p className="value-description">
                  Building a supportive community where students help each other succeed 
                  through knowledge sharing.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💡</div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  Continuously improving our platform to provide better learning experiences 
                  and easier access to resources.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌟</div>
                <h3 className="value-title">Accessibility</h3>
                <p className="value-description">
                  Making quality education accessible to all students, regardless of their 
                  background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="about-container">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="team-description">
              Our dedicated team of educators, developers, and student advocates work tirelessly 
              to bring you the best educational resources.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">👨‍💻</div>
                <h3 className="member-name">Ahmad Hassan</h3>
                <p className="member-role">Founder & CEO</p>
                <p className="member-bio">Computer Science graduate passionate about educational technology</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👩‍🏫</div>
                <h3 className="member-name">Fatima Khan</h3>
                <p className="member-role">Academic Director</p>
                <p className="member-bio">Former university lecturer with 10+ years of teaching experience</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">👨‍🎓</div>
                <h3 className="member-name">Ali Raza</h3>
                <p className="member-role">Content Manager</p>
                <p className="member-bio">Masters in Education, specializing in curriculum development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="about-cta">
          <div className="about-container">
            <div className="cta-content">
              <h2 className="cta-title">Join Our Community</h2>
              <p className="cta-description">
                Ready to access thousands of study materials and connect with fellow students?
              </p>
              <div className="cta-buttons">
                <a 
                  href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  Join WhatsApp Group
                </a>
                <a href="/" className="cta-button secondary">
                  Browse Materials
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;