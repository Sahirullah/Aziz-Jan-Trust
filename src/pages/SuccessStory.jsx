import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/SuccessStory.css';

// Import success story images
import successStory1 from '../assets/Successes story 1.png';
import successStory2 from '../assets/sucesses story2.jpg';
import usaStudent from '../assets/USA student.webp';
import heroImage from '../assets/hero section image.jpg';
import gallery0 from '../assets/Gallery0.jpg';
import gallery1 from '../assets/Gallery1.jpg';

const SuccessStory = () => {
  const navigate = useNavigate();
  const [expandedStory, setExpandedStory] = useState(null);

  const handleEnrollClick = () => {
    navigate('/join-us');
  };

  const successStories = [
    {
      id: 1,
      name: 'Web App Developer',
      role: 'Full Stack Developer',
      organization: 'Tech Companies',
      image: successStory1,
      story: 'Hundreds of students have successfully completed our web app development program and are now working as full-stack developers in leading tech companies. They master HTML, CSS, JavaScript, React, Node.js, and databases to build scalable web applications.',
      achievement: 'Placed in Top Tech Companies',
      year: 2024,
      count: '150+ Students'
    },
    {
      id: 2,
      name: 'Graphic Designer',
      role: 'UI/UX Designer',
      organization: 'Design Studios',
      image: successStory2,
      story: 'Our graphic design program has trained hundreds of creative professionals who now work as UI/UX designers, creating stunning visual experiences. They excel in Adobe Creative Suite, Figma, and modern design principles.',
      achievement: 'Award-Winning Designers',
      year: 2024,
      count: '120+ Students'
    },
    {
      id: 3,
      name: 'Video Editor',
      role: 'Content Creator',
      organization: 'Media Companies',
      image: usaStudent,
      story: 'Hundreds of video editors have graduated from our program and are now creating professional content for YouTube, TikTok, and major media companies. They master Adobe Premiere Pro, After Effects, and DaVinci Resolve.',
      achievement: 'Professional Content Creators',
      year: 2024,
      count: '100+ Students'
    },
    {
      id: 4,
      name: 'AI & Machine Learning',
      role: 'AI Engineer',
      organization: 'AI Companies',
      image: gallery0,
      story: 'Our AI and Machine Learning program has produced hundreds of skilled engineers working on cutting-edge AI projects. They specialize in Python, TensorFlow, PyTorch, and deep learning to solve real-world problems.',
      achievement: 'AI Innovation Leaders',
      year: 2024,
      count: '80+ Students'
    },
    {
      id: 5,
      name: 'Digital Marketing',
      role: 'Marketing Specialist',
      organization: 'Marketing Agencies',
      image: gallery1,
      story: 'Hundreds of digital marketing professionals have completed our comprehensive program and are now managing successful campaigns for global brands. They master SEO, SEM, social media, and analytics.',
      achievement: 'Certified Marketing Experts',
      year: 2024,
      count: '110+ Students'
    },
    {
      id: 6,
      name: 'Mobile App Developer',
      role: 'App Developer',
      organization: 'App Development Studios',
      image: heroImage,
      story: 'Our mobile app development program has trained hundreds of developers creating iOS and Android applications. They work with Swift, Kotlin, React Native, and Flutter to build innovative mobile solutions.',
      achievement: 'Published App Developers',
      year: 2024,
      count: '95+ Students'
    }
  ];

  const toggleStory = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <div className="success-story-page">
      <Header />

      {/* Hero Section */}
      <section className="success-hero">
        <div className="success-hero-content">
          <h1 className="success-hero-title">Success Stories</h1>
          <p className="success-hero-subtitle">
            Hundreds of students transformed into skilled professionals every 6 months
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="success-stats">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🌟</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Success Stories</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">100+</div>
            <div className="stat-label">Per 6 Months</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-number">95%</div>
            <div className="stat-label">Placement Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">6</div>
            <div className="stat-label">Career Tracks</div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-section">
        <div className="stories-container">
          <h2 className="section-title">Our Training Programs</h2>
          
          <div className="stories-grid">
            {successStories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="story-image-wrapper">
                  <img src={story.image} alt={story.name} className="story-image" />
                  <div className="story-overlay">
                    <span className="student-count">{story.count}</span>
                  </div>
                </div>

                <div className="story-header">
                  <div className="story-info">
                    <h3 className="story-name">{story.name}</h3>
                    <p className="story-role">{story.role}</p>
                    <p className="story-org">{story.organization}</p>
                  </div>
                </div>

                <div className="story-content">
                  <p className="story-text">
                    {expandedStory === story.id 
                      ? story.story 
                      : story.story.substring(0, 100) + '...'}
                  </p>
                </div>

                <div className="story-footer">
                  <div className="achievement">
                    <span className="achievement-icon">🏅</span>
                    <span className="achievement-text">{story.achievement}</span>
                  </div>
                </div>

                <button 
                  className="read-more-btn"
                  onClick={() => toggleStory(story.id)}
                >
                  {expandedStory === story.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="impact-container">
          <h2 className="section-title">Why Choose Our Programs?</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">📚</div>
              <h3>Industry-Relevant Skills</h3>
              <p>Learn the latest technologies and tools used by top companies in the industry</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">💼</div>
              <h3>Job Placement Support</h3>
              <p>Get assistance with resume building, interview preparation, and job placement</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🤝</div>
              <h3>Expert Mentorship</h3>
              <p>Learn from experienced professionals working in top tech companies</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🌍</div>
              <h3>Global Opportunities</h3>
              <p>Access international job opportunities and remote work positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="success-cta">
        <div className="cta-container">
          <h2>Ready to Transform Your Career?</h2>
          <p>Join hundreds of students who have successfully completed our programs and landed their dream jobs</p>
          <a 
            onClick={handleEnrollClick}
            className="cta-button"
            style={{ cursor: 'pointer' }}
          >
            Enroll Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStory;
