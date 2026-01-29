import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ApplyPages.css';

const TeacherApply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    subject: '',
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
    console.log('Teacher Application:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        subject: '',
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
            <h1>Apply as a Teacher</h1>
            <p>Join our team and make a difference in students' lives</p>
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="qualification">Qualification *</label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Bachelor's in Education"
                />
              </div>
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
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject/Specialization *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="e.g., Mathematics, English, Science"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your teaching experience and why you'd like to join us..."
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

export default TeacherApply;
