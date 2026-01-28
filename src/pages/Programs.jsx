import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Technical Skills Training',
      description: 'Learn in-demand technical skills including web development, mobile apps, and software engineering.',
      courses: ['Web Development', 'Mobile App Development', 'Cloud Computing'],
      duration: '3-6 months',
      level: 'Beginner to Advanced'
    },
    {
      id: 2,
      title: 'Professional Development',
      description: 'Enhance your career with professional certifications and business skills.',
      courses: ['Project Management', 'Leadership', 'Business Analytics'],
      duration: '2-4 months',
      level: 'Intermediate to Advanced'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Master digital marketing strategies and tools for modern businesses.',
      courses: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy'],
      duration: '2-3 months',
      level: 'Beginner to Intermediate'
    },
    {
      id: 4,
      title: 'Vocational Training',
      description: 'Practical hands-on training for various vocational skills.',
      courses: ['Tailoring', 'Beautician', 'Cooking'],
      duration: '1-3 months',
      level: 'Beginner'
    },
    {
      id: 5,
      title: 'Language Programs',
      description: 'Learn new languages to expand your opportunities.',
      courses: ['English', 'Arabic', 'Urdu'],
      duration: '2-6 months',
      level: 'All Levels'
    },
    {
      id: 6,
      title: 'Entrepreneurship',
      description: 'Start your own business with our comprehensive entrepreneurship program.',
      courses: ['Business Planning', 'Financial Management', 'Marketing'],
      duration: '3-4 months',
      level: 'Beginner to Intermediate'
    }
  ];

  return (
    <div className="programs-page">
      <Header />
      
      <main className="programs-main">
        {/* Hero Section */}
        <section className="programs-hero">
          <div className="hero-content">
            <h1>Our Programs & Courses</h1>
            <p>Discover a wide range of educational programs designed to empower you with skills for success</p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="programs-section">
          <div className="programs-container">
            <div className="programs-grid">
              {programs.map((program) => (
                <div key={program.id} className="program-card">
                  <div className="program-header">
                    <h3>{program.title}</h3>
                  </div>
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-details">
                    <div className="detail-item">
                      <span className="detail-label">Duration:</span>
                      <span className="detail-value">{program.duration}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Level:</span>
                      <span className="detail-value">{program.level}</span>
                    </div>
                  </div>

                  <div className="courses-list">
                    <h4>Courses Included:</h4>
                    <ul>
                      {program.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="enroll-btn">Enroll Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="programs-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of students who have transformed their lives through our programs</p>
            <button className="cta-btn">Get Started Today</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
