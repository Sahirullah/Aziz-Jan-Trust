import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import instructor1 from '../assets/Instructors/Instructor1.png';
import instructor2 from '../assets/Instructors/Instructor2.jfif';
import instructor4 from '../assets/Instructors/instructor4.jfif';
import instructor5 from '../assets/Instructors/insructor5.jpg';
import { EducationIcon, HealthcareIcon, CommunityIcon, FamilyIcon } from '../components/Icons';
import './About.css';

const About = () => {
  const scrollContainerRef = useRef(null);

  const leaders = [
    {
      id: 1,
      name: 'Basit Ali',
      role: 'Experienced Professional',
      position: 'Admin-MD',
      bio: 'Experienced Professional in Management Operations, Administration, Accounts, Marketing, Business Development, Social Media, and Amusement Park Operations.',
      image: instructor1
    },
    {
      id: 2,
      name: 'Tatheer Hussain',
      role: 'CEO of T4E',
      position: 'Instructor',
      bio: 'CEO of T4E, Software Developer, and International Technical Trainer associated with the University of Peshawar, SMIT, AKTI, and NAVTTC.',
      image: instructor2
    },
    {
      id: 3,
      name: 'Faisal Habib',
      role: 'Freelancer & Designer',
      position: 'Instructor',
      bio: 'Digital Marketing & Social Media Expert, Graphic & Motion Designer, UI/UX Designer, and Professional Trainer.',
      image: instructor4
    },
    {
      id: 4,
      name: 'Aqleem Orakzai',
      role: 'Frontend Engineer',
      position: 'Instructor',
      bio: 'Frontend Engineer skilled in HTML, CSS, JavaScript, React, Next.js, TypeScript, and Angular, creating dynamic and user-friendly web applications.',
      image: instructor5
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 400;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <h1 className="about-hero-title">Aziz Jan Trust</h1>
            <p className="about-hero-subtitle">
              Bringing Hope to People Through Education, Healthcare & Community Development
            </p>
          </div>
        </section>

        {/* About Aziz Jan Section */}
        <section className="about-aziz-jan">
          <div className="about-container">
            <div className="aziz-jan-content">
              <div className="aziz-jan-text">
                <h2 className="aziz-jan-title">About Aziz Jan</h2>
                <p className="aziz-jan-paragraph">
                  Aziz Jan Trust is a compassionate organization dedicated to bringing hope to people 
                  through education, healthcare, and community development. Founded with a vision to 
                  empower underprivileged communities, we have been serving thousands of families across 
                  multiple regions for over 15 years.
                </p>
                <p className="aziz-jan-paragraph">
                  Our mission is to bridge the gap between privileged and underprivileged communities 
                  by providing quality education, accessible healthcare, and sustainable development 
                  initiatives. We believe that every individual deserves the opportunity to reach their 
                  full potential, regardless of their economic background.
                </p>
              </div>
              <div className="aziz-jan-image">
                <img src={instructor1} alt="Aziz Jan Trust Community" className="aziz-jan-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="about-impact">
          <div className="about-container">
            <h2 className="section-title">Our Impact</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="impact-number">50K+</div>
                <div className="impact-label">Students Educated</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">100+</div>
                <div className="impact-label">Schools Supported</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">25K+</div>
                <div className="impact-label">Healthcare Beneficiaries</div>
              </div>
              <div className="impact-stat">
                <div className="impact-number">15+</div>
                <div className="impact-label">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Programs Section */}
        <section className="about-programs">
          <div className="about-container">
            <h2 className="section-title">Our Core Programs</h2>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-icon">
                  <EducationIcon />
                </div>
                <h3 className="program-title">Education Initiative</h3>
                <p className="program-description">
                  Providing quality education to underprivileged children through schools, scholarships, 
                  and vocational training programs.
                </p>
              </div>
              <div className="program-card">
                <div className="program-icon">
                  <HealthcareIcon />
                </div>
                <h3 className="program-title">Healthcare Services</h3>
                <p className="program-description">
                  Offering accessible medical care, health camps, and awareness programs to remote 
                  and underserved communities.
                </p>
              </div>
              <div className="program-card">
                <div className="program-icon">
                  <CommunityIcon />
                </div>
                <h3 className="program-title">Community Development</h3>
                <p className="program-description">
                  Supporting livelihood programs, skill development, and infrastructure projects 
                  that strengthen communities.
                </p>
              </div>
              <div className="program-card">
                <div className="program-icon">
                  <FamilyIcon />
                </div>
                <h3 className="program-title">Family Support</h3>
                <p className="program-description">
                  Providing emergency relief, food assistance, and social support to vulnerable 
                  families in crisis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-number">01</div>
                <h3 className="value-title">Compassion</h3>
                <p className="value-description">
                  We approach every individual with empathy and genuine care for their wellbeing.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">02</div>
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">
                  We operate with transparency and accountability in all our endeavors.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">03</div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-description">
                  We strive for the highest standards in all our programs and services.
                </p>
              </div>
              <div className="value-card">
                <div className="value-number">04</div>
                <h3 className="value-title">Sustainability</h3>
                <p className="value-description">
                  We create long-term solutions that empower communities to thrive independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="about-leadership">
          <div className="about-container">
            <h2 className="section-title">Our Leadership</h2>
            <p className="leadership-description">
              Our organization is guided by visionary leaders and supported by a dedicated team 
              committed to making a real difference in people's lives.
            </p>
            
            <div className="leadership-carousel-wrapper">
              <button className="carousel-arrow left-arrow" onClick={() => scroll('left')}>
                ←
              </button>
              
              <div className="leadership-carousel" ref={scrollContainerRef}>
                {leaders.map((leader) => (
                  <div key={leader.id} className="leadership-card">
                    <div className="leader-image-container">
                      <img src={leader.image} alt={leader.name} className="leader-image" />
                    </div>
                    <div className="leader-info">
                      <h3 className="leader-name">{leader.name}</h3>
                      <p className="leader-role">{leader.role}</p>
                      <p className="leader-bio">{leader.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-arrow right-arrow" onClick={() => scroll('right')}>
                →
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="about-cta">
          <div className="about-container">
            <div className="cta-content">
              <h2 className="cta-title">Join Us in Making a Difference</h2>
              <p className="cta-description">
                Whether through volunteering, donations, or partnerships, you can be part of our mission 
                to bring hope and opportunity to underserved communities.
              </p>
              <div className="cta-buttons">
                <a href="/join-us" className="cta-button primary">
                  Get Involved
                </a>
                <a href="/contact" className="cta-button secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
