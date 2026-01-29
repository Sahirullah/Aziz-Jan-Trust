import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ApplyPages.css';

const StudentApply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    course: '',
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
    console.log('Student Application:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        education: '',
        course: '',
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
            <h1>Apply as a Student</h1>
            <p>Start your learning journey with us today</p>
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
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="18"
                  min="1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="education">Current Education Level *</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="bachelor">Bachelor's</option>
                  <option value="master">Master's</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="course">Interested Course/Program *</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                placeholder="e.g., Web Development, Digital Marketing"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Why do you want to join us?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your goals and why you're interested in our programs..."
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

export default StudentApply;
