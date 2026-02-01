import { useNavigate } from 'react-router-dom';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import './Reviews.css';

const Reviews = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/join-us');
  };
  const reviews = [
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'Web App Development Student',
      company: 'Aziz Jan Trust Institute',
      avatar: user2,
      rating: 5,
      review: 'The Web App Development Course at Aziz Jan Trust is fantastic! I learned how to build real-world web applications using modern tools and technologies. The instructors are very supportive and explain everything step by step.',
      theme: 'Web App Development',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Ali Raza',
      role: 'Agentic AI Student',
      company: 'Aziz Jan Trust Institute',
      avatar: user3,
      rating: 5,
      review: 'The Agentic AI Course opened a whole new world for me! I learned about AI agents, automation, and smart systems through hands-on sessions. Aziz Jan Trust is doing a great job bringing advanced tech education to students like us.',
      theme: 'Agentic AI',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'Ayesha Malik',
      role: 'Video Editing Student',
      company: 'Aziz Jan Trust Institute',
      avatar: user4,
      rating: 5,
      review: 'I loved the Video Editing Course at Aziz Jan Trust! The multimedia setup and practical training helped me master editing tools like Adobe Premiere and CapCut. Now I can create professional videos on my own.',
      theme: 'Video Editing',
      date: '1 week ago'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">What Our Students Say</h2>
          <p className="reviews-subtitle">
            Join thousands of students who have transformed their lives through our courses at Aziz Jan Trust
          </p>
        </div>

        <div className="reviews-stats">
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
            <div className="stat-stars">
              {renderStars(5)}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5K+</div>
            <div className="stat-label">Happy Students</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Study Materials</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-details">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <p className="reviewer-role">{review.role}</p>
                    <p className="reviewer-company">{review.company}</p>
                  </div>
                </div>
                <div className="review-meta">
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>

              <div className="review-content">
                <p className="review-text">"{review.review}"</p>
              </div>

              <div className="review-theme">
                <span className="theme-label">Course Completed:</span>
                <span className="theme-name">{review.theme}</span>
              </div>

              <div className="review-footer">
                <button className="helpful-btn">
                  👍 Helpful
                </button>
                <span className="verified-badge">
                  ✅ Verified Student
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Join Our Student Community?</h3>
            <p className="cta-subtitle">Enroll in our courses and start your journey of learning and growth</p>
            <a 
              onClick={handleEnrollClick}
              className="cta-button"
              style={{ cursor: 'pointer' }}
            >
              Enroll Now
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;