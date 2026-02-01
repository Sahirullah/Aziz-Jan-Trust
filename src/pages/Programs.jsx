import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Programs.css';

// Import program images
import clothsImg from '../assets/program/cloths.jpg';
import educationImg from '../assets/program/education.jpg';
import ehsasImg from '../assets/program/ehsas program.png';
import floodHelpImg from '../assets/program/flood help.png';
import foodImg from '../assets/program/food.jpg';
import jobsImg from '../assets/program/jobs.jpg';
import monthlyDistributionImg from '../assets/program/monthly destibution.jpg';
import ramadanImg from '../assets/program/ramadan Afthari.jpg';
import waterImg from '../assets/program/water.jpg';

const Programs = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/join-us');
  };

  const programs = [
    {
      id: 1,
      title: 'Clothing Distribution',
      category: 'Community Support',
      description: 'Providing essential clothing to those in need',
      image: clothsImg,
      badge: 'Popular',
      badgeColor: '#ff6b35',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 2,
      title: 'Education Program',
      category: 'Education',
      description: 'Empowering communities through quality education',
      image: educationImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 3,
      title: 'Ehsas Program',
      category: 'Social Welfare',
      description: 'Supporting vulnerable populations with financial assistance',
      image: ehsasImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 4,
      title: 'Flood Relief',
      category: 'Emergency Aid',
      description: 'Rapid response and support during flood disasters',
      image: floodHelpImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 5,
      title: 'Food Distribution',
      category: 'Nutrition',
      description: 'Ensuring food security for underprivileged families',
      image: foodImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 6,
      title: 'Job Training',
      category: 'Employment',
      description: 'Skill development and employment opportunities',
      image: jobsImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 7,
      title: 'Monthly Distribution',
      category: 'Welfare',
      description: 'Regular assistance programs for sustainable support',
      image: monthlyDistributionImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 8,
      title: 'Ramadan Ifthari',
      category: 'Seasonal Support',
      description: 'Special meals and support during the holy month',
      image: ramadanImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    },
    {
      id: 9,
      title: 'Water Access',
      category: 'Basic Needs',
      description: 'Providing clean water access to remote communities',
      image: waterImg,
      badge: 'Active',
      badgeColor: '#4caf50',
      status: 'Active',
      statusColor: '#e8f5e9'
    }
  ];

  return (
    <div className="programs-page">
      <Header />
      
      <main className="programs-main">
        {/* Hero Section */}
        <section className="programs-hero">
          <div className="hero-content">
            <h1>Our Programs</h1>
            <p>Discover a wide range of educational programs designed to empower you with skills for success</p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="programs-section">
          <div className="programs-container">
            <div className="programs-grid">
              {programs.map((program) => (
                <div key={program.id} className="program-card">
                  <div className="program-image-wrapper">
                    <img src={program.image} alt={program.title} className="program-image" />
                  </div>
                  
                  <div className="program-content">
                    <h3 className="program-title">{program.title}</h3>
                    <p className="program-category">{program.category}</p>
                    <p className="program-description">{program.description}</p>

                    <button className="donate-btn" onClick={handleEnrollClick}>
                      Donate Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="programs-cta">
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Enroll in any of our programs and begin your journey to success</p>
            <button className="cta-btn" onClick={handleEnrollClick}>Enroll Now</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
