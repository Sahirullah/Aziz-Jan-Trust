import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import opportunityImage from '../assets/join us/Oppertunity.jpg';
import './JoinUs.css';

const JoinUs = () => {
  return (
    <div className="joinus-page">
      <Header />
      
      <main className="joinus-main">
        {/* Golden Opportunity Section */}
        <section className="joinus-opportunity">
          <div className="joinus-container">
            <div className="opportunity-content">
              <h2 className="section-title">Your Golden Opportunity</h2>
              <p className="opportunity-text">
                If you missed the initial registration window, this is your golden opportunity to secure your spot in one of Pakistan's most impactful IT training programs.
              </p>
              <div className="opportunity-highlight">
                <span className="highlight-icon">⏰</span>
                <div>
                  <h3>Limited Time Offer</h3>
                  <p>Don't delay — limited seats are available, and demand is high for this batch.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="joinus-why">
          <div className="joinus-container">
            <h2 className="section-title">Why Join SMIT Peshawar?</h2>
            <p className="section-subtitle">
              SMIT Peshawar, operating under the Mohsin and Huma Mass IT Training Centre in collaboration with Aziz Jan Trust, aims to empower youth through quality education and practical digital skills.
            </p>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6m0 0a8 8 0 01-15.5-1m0 0a8 8 0 1115.5 1m0 0H2m0 0a8 8 0 0015.5-1m0 0a8 8 0 01-15.5 1" />
                    <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <h3>Quality Education</h3>
                <p>Free professional training in the latest and most in-demand fields of the digital world.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                </div>
                <h3>Job Ready</h3>
                <p>Practical skills designed to prepare learners for real-world challenges and employment.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3>Career Growth</h3>
                <p>Become a successful freelancer or land your dream job in the tech industry.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h3>Community Support</h3>
                <p>Join a network of passionate learners and industry professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="joinus-courses">
          <div className="joinus-container">
            <h2 className="section-title">Courses Offered</h2>
            <p className="section-subtitle">
              Students can choose from a range of high-demand programs designed to prepare learners for real-world challenges.
            </p>
            <div className="courses-grid">
              <div className="course-card">
                <div className="course-number">01</div>
                <h3 className="course-title">Video Editing</h3>
                <p className="course-description">
                  Develop professional video editing skills for content creation and media production.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">02</div>
                <h3 className="course-title">Graphic Design</h3>
                <p className="course-description">
                  Master visual design principles and create stunning graphics for digital and print media.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">03</div>
                <h3 className="course-title">English Language</h3>
                <p className="course-description">
                  Enhance your English communication skills for professional and academic success.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">04</div>
                <h3 className="course-title">Python Programming</h3>
                <p className="course-description">
                  Learn Python programming fundamentals and build powerful applications and automation tools.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">05</div>
                <h3 className="course-title">Video Content Creation with AI</h3>
                <p className="course-description">
                  Create engaging video content using AI tools and modern production techniques.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">06</div>
                <h3 className="course-title">Cyber Security</h3>
                <p className="course-description">
                  Master cybersecurity principles and protect systems from digital threats and vulnerabilities.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">07</div>
                <h3 className="course-title">Agentic AI</h3>
                <p className="course-description">
                  Learn cutting-edge AI technologies and build intelligent systems for the future.
                </p>
              </div>
              <div className="course-card">
                <div className="course-number">08</div>
                <h3 className="course-title">Web & App Development</h3>
                <p className="course-description">
                  Master modern web technologies and mobile app development to build scalable applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="joinus-apply">
          <div className="joinus-container">
            <div className="apply-wrapper">
              <div className="apply-content">
                <h2 className="section-title">How to Apply</h2>
                <p className="apply-description">
                  Registration is open online! Visit the official SMIT website to enroll:
                </p>
                <a 
                  href="https://www.saylanimit.com/enroll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="apply-button"
                >
                  Start Your Registration
                </a>
                <p className="apply-note">
                  Whether you're a beginner or looking to upgrade your digital skills, SMIT Peshawar is the place to start your journey toward a successful tech career.
                </p>
              </div>
              <div className="apply-image">
                <img src={opportunityImage} alt="How to Apply" className="apply-img" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="joinus-cta">
          <div className="joinus-container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Career?</h2>
              <p className="cta-description">
                Don't miss this opportunity to join SMIT Batch 05 and start your journey in tech!
              </p>
              <div className="cta-buttons">
                <a 
                  href="https://www.saylanimit.com/enroll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button primary"
                >
                  Apply Now
                </a>
                <a href="/contact" className="cta-button secondary">
                  Get More Info
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

export default JoinUs;
