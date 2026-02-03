import './Support.css';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  const supportOptions = [
    {
      id: 1,
      title: 'Free Courses',
      description: 'Access a wide range of free online courses to boost your IT and professional skills. Learn from expert instructors and start building your career today.',
      icon: '🎓',
      features: [
        'Web Development',
        'Graphic Design',
        'MS Office',
        'Freelancing Skills'
      ],
      action: 'Browse Courses',
      link: 'https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy',
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 2,
      title: 'Computer Lab',
      description: 'Get hands-on experience in our fully equipped computer lab with the latest systems and software. Practice coding, designing, and digital skills in a real-world environment.',
      icon: '💻',
      features: [
        'Modern Computers',
        'High-Speed Internet',
        'Software Access',
        'Technical Assistance'
      ],
      action: 'Visit Lab',
      link: 'https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy',
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    },
    {
      id: 3,
      title: 'Multimedia System',
      description: 'Enhance your learning with our advanced multimedia setup — perfect for interactive lectures, video tutorials, and presentations.',
      icon: '🎥',
      features: [
        'Smart Projectors',
        'Audio-Visual Classes',
        'Interactive Learning',
        'Digital Presentations'
      ],
      action: 'Learn More',
      link: 'https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy',
      color: '#FF741F',
      bgGradient: 'linear-gradient(135deg, #FF741F 0%, #ff8c42 100%)'
    }
  ];

  return (
    <section className="support">
      <div className="support-container">
        <div className="support-header">
          <h2 className="support-title">Why Choose Aziz Jan Trust</h2>
          <p className="support-subtitle">
            Everything you need for professional growth, all in one place
          </p>
        </div>
        
        <div className="support-grid">
          {supportOptions.map((option) => (
            <div key={option.id} className="support-card" style={{'--support-color': option.color}}>
              <div className="support-background" style={{background: option.bgGradient}}></div>
              
              <div className="support-content">
                <div className="support-icon-wrapper">
                  <div className="support-icon">{option.icon}</div>
                </div>
                
                <h3 className="support-title-card">{option.title}</h3>
                <p className="support-description">{option.description}</p>
                
                <div className="support-features">
                  {option.features.map((feature, index) => (
                    <div key={index} className="support-feature">
                      <span className="feature-dot">•</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="support-action">
                  <div className="support-buttons">
                    <button 
                      onClick={() => navigate('/contact', { state: { scrollToForm: true } })}
                      className="support-btn secondary"
                    >
                      Get Started
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
