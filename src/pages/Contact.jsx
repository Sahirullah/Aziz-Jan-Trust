import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImage from '../assets/logo.png';
import contactHeroImage from '../assets/Contactherosection.jpg';
import './Contact.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const BACKEND_URL = `${API_URL}/api/contact`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear validation error for this field when user starts typing
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setValidationErrors({});

    try {
<<<<<<< HEAD
      const response = await fetch(`${API_URL}/api/contact/send`, {
=======
      const response = await fetch(BACKEND_URL, {
>>>>>>> 7f510343506543107adf5ab263fe5a77e200a285
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          // Handle validation errors
          const errorMap = {};
          data.errors.forEach(error => {
            errorMap[error.path] = error.msg;
          });
          setValidationErrors(errorMap);
          setSubmitStatus({ type: 'error', message: 'Please fix the errors below and try again.' });
        } else {
          throw new Error(data.message || 'Failed to send message');
        }
        return;
      }

      setSubmitStatus({ type: 'success', message: data.message });
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `url(${contactHeroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-logo">
              <img src={logoImage} alt="Aziz Jan Welfare Trust Logo" />
            </div>
            <h1>Aziz Jan Welfare Trust</h1>
            <p>Empowering communities through education, support, and sustainable development. Connect with us for inquiries, partnerships, and assistance.</p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us for help!</h3>
              <a href="tel:+923191954292" className="contact-link">+92 319 1954292</a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Mail Us</h3>
              <a href="mailto:info@azizjantrust.com" className="contact-link">info@azizjantrust.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {submitStatus && (
                <div className={`form-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className={validationErrors.fullName ? 'error' : ''}
                  />
                  {validationErrors.fullName && (
                    <div className="field-error">{validationErrors.fullName}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className={validationErrors.email ? 'error' : ''}
                  />
                  {validationErrors.email && (
                    <div className="field-error">{validationErrors.email}</div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={validationErrors.phoneNumber ? 'error' : ''}
                  />
                  {validationErrors.phoneNumber && (
                    <div className="field-error">{validationErrors.phoneNumber}</div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={validationErrors.subject ? 'error' : ''}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Academic Help">Academic Help</option>
                    <option value="Study Materials Request">Study Materials Request</option>
                    <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                  </select>
                  {validationErrors.subject && (
                    <div className="field-error">{validationErrors.subject}</div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please describe your inquiry in detail..."
                  className={validationErrors.message ? 'error' : ''}
                ></textarea>
                {validationErrors.message && (
                  <div className="field-error">{validationErrors.message}</div>
                )}
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                <i className="fas fa-paper-plane"></i>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>Visit Us</h2>
            <p>Find us at our location in Peshawar University Town</p>
          </div>
          <div className="map-container">
            <iframe
              title="Aziz Jan Welfare Trust Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5234567890123!2d71.5789!3d34.1937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917c8d8d8d8d9%3A0x1234567890abcdef!2sPeshawar%20University%20Town!5e0!3m2!1sen!2spk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>People also ask</h2>
          <div className="faq-accordion">
            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 0 ? 'active' : ''}`}
                onClick={() => toggleFAQ(0)}
              >
                <span>What is Aziz Jan Trust?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 0 && (
                <div className="faq-answer">
                  <p>Aziz Jan Trust is a non-profit organization dedicated to promoting education, healthcare, and community welfare across Pakistan and abroad. Our mission is to empower underprivileged individuals through quality education, skill development, and humanitarian support.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 1 ? 'active' : ''}`}
                onClick={() => toggleFAQ(1)}
              >
                <span>Where is Aziz Jan Trust located?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 1 && (
                <div className="faq-answer">
                  <p>The main branch of Aziz Jan Trust is located in Peshawar, Pakistan. Through partnerships and outreach programs, our services extend to major cities across Pakistan and several foreign countries.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 2 ? 'active' : ''}`}
                onClick={() => toggleFAQ(2)}
              >
                <span>What kind of programs does Aziz Jan Trust offer?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 2 && (
                <div className="faq-answer">
                  <p>Aziz Jan Trust operates a variety of programs, including: Free education for deserving students, Healthcare and medical assistance, Food distribution and welfare support, Skill development and vocational training, and Emergency relief and community aid.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 3 ? 'active' : ''}`}
                onClick={() => toggleFAQ(3)}
              >
                <span>Is Aziz Jan Trust connected with Saylani Welfare International Trust?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 3 && (
                <div className="faq-answer">
                  <p>Yes. Aziz Jan Trust works in close collaboration with Saylani Welfare International Trust (SWIT) to extend its impact across Pakistan and internationally. This partnership helps deliver large-scale welfare and educational projects more efficiently.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 4 ? 'active' : ''}`}
                onClick={() => toggleFAQ(4)}
              >
                <span>In which countries does Aziz Jan Trust have a presence?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 4 && (
                <div className="faq-answer">
                  <p>Apart from Pakistan, Aziz Jan Trust has operational connections and outreach activities in countries such as the United Arab Emirates (UAE), Saudi Arabia, the United Kingdom (UK), Canada, and the United States (USA).</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 5 ? 'active' : ''}`}
                onClick={() => toggleFAQ(5)}
              >
                <span>How can I donate to Aziz Jan Trust?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 5 && (
                <div className="faq-answer">
                  <p>You can contribute by visiting our official website's donation page or by contacting our main branch in Peshawar. We accept donations in the form of cash, bank transfers, online contributions, and in-kind support such as food or supplies.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 6 ? 'active' : ''}`}
                onClick={() => toggleFAQ(6)}
              >
                <span>Are donations to Aziz Jan Trust tax-deductible?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 6 && (
                <div className="faq-answer">
                  <p>Yes, donations made to Aziz Jan Trust are fully transparent and utilized for charitable purposes. Tax exemption details may vary by region — please contact our support team for specific information.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 7 ? 'active' : ''}`}
                onClick={() => toggleFAQ(7)}
              >
                <span>How can I volunteer or get involved?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 7 && (
                <div className="faq-answer">
                  <p>We welcome volunteers who want to make a difference! You can apply through our Volunteer Program page or visit any nearby branch to join ongoing educational and welfare initiatives.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 8 ? 'active' : ''}`}
                onClick={() => toggleFAQ(8)}
              >
                <span>Does Aziz Jan Trust provide educational scholarships?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 8 && (
                <div className="faq-answer">
                  <p>Yes. The Trust offers educational scholarships and financial assistance to deserving and talented students, especially those from underprivileged backgrounds.</p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button 
                className={`faq-question ${expandedFAQ === 9 ? 'active' : ''}`}
                onClick={() => toggleFAQ(9)}
              >
                <span>How can I contact Aziz Jan Trust for more information?</span>
                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {expandedFAQ === 9 && (
                <div className="faq-answer">
                  <p>You can reach us through Email: info@azizjantrust.com, Phone: +92-319-1954292, or visit our Head Office: Aziz Jan Trust, Peshawar, Pakistan.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Contact;