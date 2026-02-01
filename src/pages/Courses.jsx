import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Courses.css';

// Import course images
import agenticAI from '../assets/courses/agentic-ai.jpeg';
import cyberSecurity from '../assets/courses/cyber-security.jpg';
import digitalMarketing from '../assets/courses/digital-marketing.jpg';
import englishLanguage from '../assets/courses/english-language.webp';
import graphicDesign from '../assets/courses/graphic-design.jpg';
import python from '../assets/courses/python.webp';
import videoContentCreation from '../assets/courses/video content creation with ai.webp';
import videoEditing from '../assets/courses/video editing.avif';
import webAppDevelopment from '../assets/courses/web-app-development.jpg';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Agentic AI',
      description: 'Master the fundamentals of AI agents and autonomous systems. Learn to build intelligent applications that can make decisions and take actions independently.',
      image: agenticAI,
      duration: '8 weeks',
      level: 'Intermediate',
      price: 'PKR 15,000',
      skills: ['AI Fundamentals', 'Agent Design', 'Automation', 'Python']
    },
    {
      id: 2,
      title: 'Cyber Security',
      description: 'Comprehensive training in cybersecurity practices, threat detection, and network protection. Prepare for a career in information security.',
      image: cyberSecurity,
      duration: '10 weeks',
      level: 'Advanced',
      price: 'PKR 18,000',
      skills: ['Network Security', 'Threat Analysis', 'Ethical Hacking', 'Compliance']
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Learn modern digital marketing strategies including SEO, SEM, social media, and content marketing to grow your business online.',
      image: digitalMarketing,
      duration: '6 weeks',
      level: 'Beginner',
      price: 'PKR 12,000',
      skills: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics']
    },
    {
      id: 4,
      title: 'English Language',
      description: 'Improve your English communication skills with focus on speaking, writing, and professional communication for career advancement.',
      image: englishLanguage,
      duration: '12 weeks',
      level: 'All Levels',
      price: 'PKR 10,000',
      skills: ['Speaking', 'Writing', 'Grammar', 'Pronunciation']
    },
    {
      id: 5,
      title: 'Graphic Design',
      description: 'Create stunning visual designs using industry-standard tools. Learn design principles, typography, and branding essentials.',
      image: graphicDesign,
      duration: '8 weeks',
      level: 'Beginner',
      price: 'PKR 14,000',
      skills: ['Adobe Suite', 'Design Principles', 'Branding', 'UI/UX']
    },
    {
      id: 6,
      title: 'Python Programming',
      description: 'Learn Python from basics to advanced. Master programming fundamentals, data structures, and build real-world applications.',
      image: python,
      duration: '10 weeks',
      level: 'Beginner',
      price: 'PKR 15,000',
      skills: ['Python Basics', 'Data Structures', 'OOP', 'Web Development']
    },
    {
      id: 7,
      title: 'Video Content Creation with AI',
      description: 'Create professional video content using AI tools and techniques. Learn video production, editing, and AI-powered content generation.',
      image: videoContentCreation,
      duration: '7 weeks',
      level: 'Intermediate',
      price: 'PKR 16,000',
      skills: ['Video Production', 'AI Tools', 'Content Strategy', 'Editing']
    },
    {
      id: 8,
      title: 'Video Editing',
      description: 'Master professional video editing techniques using industry-standard software. Create engaging videos for social media and professional use.',
      image: videoEditing,
      duration: '6 weeks',
      level: 'Beginner',
      price: 'PKR 13,000',
      skills: ['Video Editing', 'Color Grading', 'Effects', 'Motion Graphics']
    },
    {
      id: 9,
      title: 'Web App Development',
      description: 'Build full-stack web applications from scratch. Learn frontend, backend, and database technologies to become a complete web developer.',
      image: webAppDevelopment,
      duration: '12 weeks',
      level: 'Intermediate',
      price: 'PKR 20,000',
      skills: ['React/Vue', 'Node.js', 'Databases', 'Deployment']
    }
  ];

  return (
    <div className="courses-page">
      <Header />
      
      <main className="courses-main">
        {/* Hero Section */}
        <section className="courses-hero">
          <div className="hero-content">
            <h1>Our Courses</h1>
            <p>Explore our comprehensive range of courses designed to equip you with in-demand skills</p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="courses-section">
          <div className="courses-container">
            <div className="courses-grid">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-level">{course.level}</div>
                  </div>
                  
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <button className="enroll-btn">Enroll Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="courses-cta">
          <div className="cta-content">
            <h2>Start Your Learning Journey Today</h2>
            <p>Choose a course and begin your path to success with expert instructors and hands-on projects</p>
            <button className="cta-btn">Browse All Courses</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
