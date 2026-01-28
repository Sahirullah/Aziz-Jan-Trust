import React from 'react';
import './Themes.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Free Study Materials',
      description: 'Access thousands of handouts, assignments, past papers, and notes from top Pakistani universities - completely free.',
      icon: '📚',
      features: [
        'Handouts & Notes',
        'Past Papers',
        'Assignments',
        'Study Guides'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 2,
      title: 'Web App Development',
      description: 'Professional web application development services for businesses, startups, and educational institutions.',
      icon: '💻',
      features: [
        'Custom Web Apps',
        'Responsive Design',
        'Modern Technologies',
        'Full-Stack Solutions'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 3,
      title: 'Online Courses',
      description: 'Comprehensive online courses designed to help students excel in their academic journey and career development.',
      icon: '🎓',
      features: [
        'Expert Instructors',
        'Interactive Content',
        'Certificates',
        'Lifetime Access'
      ],
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive solutions to support your educational and professional growth
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" style={{'--service-color': service.color}}>
              <div className="service-background" style={{background: service.bgGradient}}></div>
              
              <div className="service-content">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <div key={index} className="service-feature">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="service-action">
                  <button className="service-btn">
                    <span>Learn More</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <div className="services-cta">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-subtitle">Join thousands of students and professionals who trust our services</p>
            <a 
              href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              Contact Us Today
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;