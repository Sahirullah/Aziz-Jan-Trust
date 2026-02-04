import Gallery0 from '../assets/Gallery0.jpg';
import '../styles/HomeAbout.css';

const About = () => {
  return (
    <section className="home-about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Aziz Jan</h2>
            <p className="about-description">
              Aziz Jan Welfare Trust is a compassionate organization transforming lives through education, healthcare, and community development. For over 15 years, we've empowered underprivileged families across multiple regions. Our mission is to bridge the gap between the privileged and underprivileged. We provide quality education, medical care, and sustainable opportunities. We believe everyone deserves a chance to reach their full potential. With over 50,000 students impacted, our efforts continue to grow. Compassion, integrity, and social justice guide our work. We strive to ensure no child is left behind. Every community deserves access to resources to thrive. Aziz Jan Welfare Trust — serving humanity with heart and hope.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">50K+</span>
                <span className="highlight-label">Students Impacted</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">15+</span>
                <span className="highlight-label">Years of Service</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">100%</span>
                <span className="highlight-label">Compassion Driven</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={Gallery0} alt="Aziz Jan Trust" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
