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
            <h1 className="about-hero-title">Aziz Jan Trust</h1>
            <p className="about-hero-subtitle">
              Bringing Hope to People Through Education, Healthcare & Community Development
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="about-mission-vision">
          <div className="about-container">
            <div className="mission-vision-grid">
              <div className="mission-vision-card">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To empower underprivileged communities through quality education, accessible healthcare, 
                  and sustainable development initiatives that create lasting positive change in society.
                </p>
              </div>
              <div className="mission-vision-card">
                <div className="card-icon">🌟</div>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  A society where every individual has access to quality education and healthcare, 
                  regardless of their economic background, enabling them to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="about-impact">
          <div className="about-container">
            <h2 className="section-title">Our Impact</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="impact-number">50K+</div>
                <div className="impact-label">Students Educated</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">100+</div>
                <div className="impact-label">Schools Supported</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">25K+</div>
                <div className="impact-label">Healthcare Beneficiaries</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">15+</div>
                <div className="impact-label">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story">
          <div className="about-container">
            <h2 className="section-title">Our Story</h2>
            <div className="story-content">
              <div className="story-text">
                <p>
                  Aziz Jan Trust was founded with a simple yet powerful vision: to bring hope to people 
                  through education, healthcare, and community development. What began as a grassroots 
                  initiative has evolved into a comprehensive organization serving thousands of families 
                  across multiple regions.
                </p>
                <p>
                  Named after the spirit of generosity and compassion, our organization has consistently 
                  worked to bridge the gap between privileged and underprivileged communities. We believe 
                  that education is the foundation of progress, healthcare is a fundamental right, and 
                  community development is the key to sustainable change.
                </p>
                <p>
                  Today, we continue our mission with unwavering commitment, supported by dedicated staff, 
                  passionate volunteers, and generous donors who share our vision of a more equitable society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Programs Section */}
        <section className="about-programs">
          <div className="about-container">
            <h2 className="section-title">Our Core Programs</h2>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-icon">📚</div>
                <h3 className="program-title">Education Initiative</h3>
                <p className="program-description">
                  Providing quality education to underprivileged children through schools, scholarships, 
                  and vocational training programs.
                </p>
              </div>
              <div className="program-card">
                <div className="program-icon">🏥</div>
                <h3 className="program-title">Healthcare Services</h3>
                <p className="program-description">
                  Offering accessible medical care, health camps, and awareness programs to remote 
                  and underserved communities.
                </p>
              </div>
              <div className="program-card">
                <div className="program-icon">🤝</div>
                <h3 className="program-title">Community Development</h3>
                <p className="program-description">
                  Supporting livelihood programs, skill development, and infrastructure projects 
                  that strengthen communities.
                </p>
              </div>
              <div className="program-card">
                <div className="program-icon">👨‍👩‍👧‍👦</div>
                <h3 className="program-title">Family Support</h3>
                <p className="program-description">
                  Providing emergency relief, food assistance, and social support to vulnerable 
                  families in crisis.
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
                <div className="value-number">01</div>
                <h3 className="value-title">Compassion</h3>
                <p className="value-description">
                  We approach every individual with empathy and genuine care for their wellbeing.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">02</div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">
                  We operate with transparency and accountability in all our endeavors.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">03</div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">
                  We strive for the highest standards in all our programs and services.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">04</div>
                <h3 className="value-title">Sustainability</h3>
                <p className="value-description">
                  We create long-term solutions that empower communities to thrive independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="about-leadership">
          <div className="about-container">
            <h2 className="section-title">Our Leadership</h2>
            <p className="leadership-description">
              Our organization is guided by visionary leaders and supported by a dedicated team 
              committed to making a real difference in people's lives.
            </p>
            <div className="leadership-grid">
              <div className="leadership-member">
                <div className="member-avatar">👨‍💼</div>
                <h3 className="member-name">Aziz Jan</h3>
                <p className="member-role">Founder & Chairman</p>
                <p className="member-bio">Visionary philanthropist dedicated to community welfare</p>
              </div>
              <div className="leadership-member">
                <div className="member-avatar">👩‍💼</div>
                <h3 className="member-name">Saira Ahmed</h3>
                <p className="member-role">Executive Director</p>
                <p className="member-bio">20+ years experience in social development and NGO management</p>
              </div>
              <div className="leadership-member">
                <div className="member-avatar">👨‍🏫</div>
                <h3 className="member-name">Dr. Hassan Khan</h3>
                <p className="member-role">Head of Education</p>
                <p className="member-bio">Education specialist with expertise in curriculum development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta">
          <div className="about-container">
            <div className="cta-content">
              <h2 className="cta-title">Join Us in Making a Difference</h2>
              <p className="cta-description">
                Whether through volunteering, donations, or partnerships, you can be part of our mission 
                to bring hope and opportunity to underserved communities.
              </p>
              <div className="cta-buttons">
                <a href="/join-us" className="cta-button primary">
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
