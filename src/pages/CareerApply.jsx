import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ApplyPages.css';

const CareerApply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    qualification: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Career Application:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        qualification: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="apply-page">
        <div className="apply-container">
          <div className="apply-header">
            <h1>Career Opportunities</h1>
            <p>Build your career with Aziz Jan Trust</p>
          </div>

          {submitted && (
            <div className="success-message">
              ✓ Application submitted successfully! We'll contact you soon.
            </div>
          )}

          <form className="apply-form" onSubmit={handleSubmit}>
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
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+92 XXX XXXXXXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="position">Position Applied For *</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select a position</option>
                <option value="admin">Administrative Staff</option>
                <option value="coordinator">Program Coordinator</option>
                <option value="counselor">Career Counselor</option>
                <option value="manager">Operations Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="experience">Years of Experience *</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="0"
                  min="0"
                />
              </div>
              <div className="form-group">
                <label htmlFor="qualification">Qualification *</label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Bachelor's Degree"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Cover Letter / Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your professional background and why you'd like to join our team..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerApply;
