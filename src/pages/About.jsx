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
              <img src={logoImage} alt="Aziz Jan Trust Logo" className="hero-logo-image" />
            </div>
            <h1 className="about-hero-title">About Aziz Jan Trust</h1>
            <p className="about-hero-subtitle">
              Bringing Hope to People Through Education, Healthcare & Community Development
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="about-container">
            <div className="mission-content">
              <div className="mission-text">
                <div className="mission-logo">
                  <img src={logoImage} alt="Aziz Jan Trust Logo" className="mission-logo-image" />
                  <div className="mission-logo-text">
                    <h3 className="mission-logo-title">AZIZ JAN TRUST</h3>
                    <p className="mission-logo-subtitle">Bringing Hope to People</p>
                  </div>
                </div>
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-description">
                  Aziz Jan Trust is dedicated to transforming lives through comprehensive social development 
                  initiatives. We work tirelessly to provide quality education, healthcare services, and 
                  community support to underserved populations across Pakistan.
                </p>
                <p className="mission-description">
                  Our vision is to create sustainable change by empowering individuals and communities 
                  with the tools, knowledge, and resources they need to build better futures for themselves 
                  and their families.
                </p>
              </div>
              <div className="mission-stats">
                <div className="stat-card">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Lives Impacted</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Programs</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Districts</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="about-focus">
          <div className="about-container">
            <h2 className="section-title">Our Focus Areas</h2>
            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-icon">📚</div>
                <h3 className="focus-title">Education</h3>
                <p className="focus-description">
                  Providing quality education and vocational training to empower youth with skills 
                  for employment and personal growth.
                </p>
              </div>
              <div className="focus-card">
                <div className="focus-icon">🏥</div>
                <h3 className="focus-title">Healthcare</h3>
                <p className="focus-description">
                  Delivering accessible healthcare services and health awareness programs to 
                  underserved communities.
                </p>
              </div>
              <div className="focus-card">
                <div className="focus-icon">👨‍👩‍👧‍👦</div>
                <h3 className="focus-title">Community Development</h3>
                <p className="focus-description">
                  Building sustainable community infrastructure and supporting local economic 
                  development initiatives.
                </p>
              </div>
              <div className="focus-card">
                <div className="focus-icon">🤝</div>
                <h3 className="focus-title">Social Support</h3>
                <p className="focus-description">
                  Providing welfare assistance and social services to vulnerable populations 
                  including orphans and elderly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-container">
            <h2 className="section-title">Our Journey</h2>
            <div className="story-content">
              <div className="story-text">
                <p>
                  Aziz Jan Trust was founded with a simple yet powerful vision: to bring hope to people 
                  in need. Starting from humble beginnings, we recognized the critical gaps in education, 
                  healthcare, and social services affecting vulnerable communities across Pakistan.
                </p>
                <p>
                  Over the years, through the dedication of our team and support of our donors and 
                  volunteers, we have grown into a trusted organization serving thousands of families. 
                  Today, we operate across multiple districts, running schools, health clinics, vocational 
                  centers, and community support programs that are making real differences in people's lives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">❤️</div>
                <h3 className="value-title">Compassion</h3>
                <p className="value-description">
                  We approach every person with empathy and genuine care, understanding their unique 
                  challenges and needs.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">
                  We operate with transparency and accountability, ensuring resources are used 
                  effectively for maximum impact.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3 className="value-title">Sustainability</h3>
                <p className="value-description">
                  We focus on creating long-term solutions that empower communities to become 
                  self-sufficient and resilient.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🌍</div>
                <h3 className="value-title">Inclusivity</h3>
                <p className="value-description">
                  We serve all people regardless of background, ensuring no one is left behind 
                  in our development efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="about-impact">
          <div className="about-container">
            <h2 className="section-title">Our Impact</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-number">10,000+</div>
                <div className="impact-text">Students Educated</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">15,000+</div>
                <div className="impact-text">Healthcare Beneficiaries</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">5,000+</div>
                <div className="impact-text">Vocational Trainees</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">20,000+</div>
                <div className="impact-text">Welfare Recipients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="about-cta">
          <div className="about-container">
            <div className="cta-content">
              <h2 className="cta-title">Join Us in Making a Difference</h2>
              <p className="cta-description">
                Be part of our mission to bring hope and positive change to communities in need. 
                Whether through volunteering, donations, or partnerships, your support matters.
              </p>
              <div className="cta-buttons">
                <a 
                  href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  Get Involved
                </a>
                <a href="/contact" className="cta-button secondary">
                  Contact Us
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