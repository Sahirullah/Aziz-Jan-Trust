import logoImage from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src={logoImage} alt="Aziz Jan Trust Logo" className="footer-logo-image" />
              <div>
                <h3 className="footer-logo-text">Aziz Jan Trust</h3>
                <p className="footer-logo-subtitle">Welfare with Seylani</p>
              </div>
            </div>
            <p className="footer-description">
              Empowering communities through education, healthcare, and social welfare. 
              Aziz Jan Trust is committed to bringing positive change and sustainable development 
              to underserved populations across Pakistan.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/azizjantrust" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">f</a>
              <a href="https://twitter.com/azizjantrust" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">𝕏</a>
              <a href="https://www.instagram.com/azizjantrust" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">📷</a>
              <a href="https://www.linkedin.com/company/azizjantrust" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">in</a>
              <a href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">💬</a>
            </div>
          </div>

          {/* Our Programs */}
          <div className="footer-section">
            <h4 className="footer-title">Our Programs</h4>
            <ul className="footer-links">
              <li><a href="/programs">Education Programs</a></li>
              <li><a href="#healthcare">Healthcare Initiatives</a></li>
              <li><a href="#vocational">Vocational Training</a></li>
              <li><a href="#community">Community Development</a></li>
              <li><a href="#emergency">Emergency Relief</a></li>
              <li><a href="#women-empowerment">Women Empowerment</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer-section">
            <h4 className="footer-title">Get Involved</h4>
            <ul className="footer-links">
              <li><a href="#donate">Donate Now</a></li>
              <li><a href="#volunteer">Become a Volunteer</a></li>
              <li><a href="#partner">Partner With Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#newsletter">Subscribe</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Stay Connected</h4>
            <p className="newsletter-text">
              Subscribe to receive updates about our programs and impact stories.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe
              </button>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@azizjantrust.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+923191954292</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2024 Aziz Jan Trust. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#transparency">Transparency</a>
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="trust-badges">
              <span className="badge">🏆 Registered NGO</span>
              <span className="badge">✓ Verified Charity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;