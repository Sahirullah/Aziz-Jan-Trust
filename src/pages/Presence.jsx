import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Presence.css';

// Import Pakistan city images
import karachiImg from '../assets/presence/Karachi.jfif';
import peshawarImg from '../assets/presence/peshawar.jpg';
import lahoreImg from '../assets/presence/lahore.jpg';
import islamabadImg from '../assets/presence/Islamabad.jpg';
import quettaImg from '../assets/presence/Quetta.webp';
import multanImg from '../assets/presence/Multan.webp';
import faisalabadImg from '../assets/presence/faisalabad.jpg';

// Import country GIFs
import uaeGif from '../assets/presence/UAE.gif';
import ukGif from '../assets/presence/UnitedKingdom.gif';
import usaGif from '../assets/presence/USA.gif';
import turkeyGif from '../assets/presence/Turkey.gif';
import bangladeshGif from '../assets/presence/Bangladesh.gif';

// Import gallery images as fallbacks
import gallery0 from '../assets/Gallery0.jpg';

const Presence = () => {
  const pakistanCities = [
    {
      id: 1,
      city: 'Karachi',
      region: 'Sindh',
      status: 'Main Headquarters',
      icon: '🏢',
      description: 'Saylani - Central headquarters for all operations',
      label: 'Karachi',
      image: karachiImg
    },
    {
      id: 2,
      city: 'Peshawar',
      region: 'Khyber Pakhtunkhwa',
      status: 'Active',
      icon: '🏢',
      description: 'Primary operational center',
      label: 'Peshawar',
      image: peshawarImg
    },
    {
      id: 3,
      city: 'Lahore',
      region: 'Punjab',
      status: 'Active',
      icon: '🌆',
      description: 'Educational and welfare hub',
      label: 'Lahore',
      image: lahoreImg
    },
    {
      id: 4,
      city: 'Islamabad',
      region: 'Federal Capital',
      status: 'Active',
      icon: '🏛️',
      description: 'Capital region operations',
      label: 'Islamabad',
      image: islamabadImg
    },
    {
      id: 5,
      city: 'Quetta',
      region: 'Balochistan',
      status: 'Active',
      icon: '🏔️',
      description: 'Community development center',
      label: 'Quetta',
      image: quettaImg
    },
    {
      id: 6,
      city: 'Multan',
      region: 'Punjab',
      status: 'Active',
      icon: '🏘️',
      description: 'Regional welfare services',
      label: 'Multan',
      image: multanImg
    },
    {
      id: 7,
      city: 'Faisalabad',
      region: 'Punjab',
      status: 'Active',
      icon: '🏭',
      description: 'Industrial city operations',
      label: 'Faisalabad',
      image: faisalabadImg
    }
  ];

  const internationalPresence = [
    {
      id: 8,
      country: 'United Arab Emirates',
      region: 'Middle East',
      status: 'Active',
      icon: '🇦🇪',
      description: 'International coordination office',
      label: 'UAE',
      image: uaeGif
    },
    {
      id: 9,
      country: 'United Kingdom',
      region: 'Europe',
      status: 'Active',
      icon: '🇬🇧',
      description: 'Official office in Nottingham',
      label: 'UK',
      image: ukGif
    },
    {
      id: 10,
      country: 'United States',
      region: 'North America',
      status: 'Active',
      icon: '🇺🇸',
      description: 'Registered 501(c)(3) charity in Chicago',
      label: 'USA',
      image: usaGif
    },
    {
      id: 11,
      country: 'Turkey',
      region: 'Middle East/Europe',
      status: 'Active',
      icon: '🇹🇷',
      description: 'Syria border relief operations',
      label: 'Turkey',
      image: turkeyGif
    },
    {
      id: 12,
      country: 'Bangladesh',
      region: 'South Asia',
      status: 'Active',
      icon: '🇧🇩',
      description: 'Rohingya refugee support',
      label: 'Bangladesh',
      image: bangladeshGif
    }
  ];

  return (
    <div className="presence-page">
      <Header />
      
      {/* Hero Section */}
      <section className="presence-hero">
        <div className="presence-hero-content">
          <h1 className="presence-hero-title">Global Presence</h1>
          <p className="presence-hero-subtitle">
            Building a strong and compassionate network across Pakistan and the world
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="presence-content">
        <div className="content-container">
          <div className="content-text">
            <h2>Our Mission Across Borders</h2>
            <p>
              Saylani Welfare International Trust (SWIT), established in 1999, has built an extensive network of humanitarian 
              and welfare services across Pakistan and beyond, touching countless lives through education, welfare, and 
              humanitarian projects.
            </p>
            
            <h3>Pakistan Operations</h3>
            <p>
              Our main headquarters is located in <strong>Karachi</strong>, serving as the central hub for all operations. 
              Saylani operates through over <strong>125 branches</strong> located in major cities such as <strong>Karachi, Lahore, 
              Islamabad, Rawalpindi, Hyderabad, and Faisalabad</strong>, ensuring that assistance reaches communities nationwide.
            </p>

            <h3>International Expansion</h3>
            <p>
              Beyond national borders, Saylani has established a global presence through official offices and active operations 
              in several countries. We maintain official offices in the <strong>United Kingdom (Nottingham), United States (Chicago - 
              Registered 501(c)(3) charity), and United Arab Emirates</strong> for international coordination.
            </p>

            <h3>Global Humanitarian Operations</h3>
            <p>
              In addition to our offices, Saylani conducts international relief and humanitarian operations in various regions, 
              including the <strong>Turkey-Syria border</strong> (providing food and essential aid to Syrian refugees) and 
              <strong>Bangladesh</strong> (delivering relief and support to Rohingya refugees).
            </p>

            <h3>Our Vision</h3>
            <p>
              Today, Saylani Welfare International Trust proudly serves in over <strong>63 areas of life</strong>, including food 
              distribution, healthcare, education, vocational training, and disaster relief. With a growing presence both locally 
              and internationally, we remain dedicated to our mission of uplifting humanity and building a better future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Main Headquarters - Saylani Karachi */}
      <section className="headquarters-section">
        <div className="section-container">
          <div className="headquarters-content">
            <div className="headquarters-image">
              <img src={gallery0} alt="Karachi - Saylani" className="hq-image" />
              <div className="headquarters-badge">Main Headquarters</div>
            </div>
            <div className="headquarters-text">
              <h2>Saylani - Main Headquarters</h2>
              <p className="location-info">📍 Karachi, Sindh, Pakistan</p>
              <p>
                Our main headquarters is strategically located in Karachi, one of Pakistan's largest and most vibrant cities. 
                This central hub serves as the operational nerve center for all Saylani Welfare International Trust initiatives 
                across the country and internationally.
              </p>
              <p>
                From this headquarters, we coordinate our education programs, welfare initiatives, and humanitarian projects 
                that reach thousands of beneficiaries every year. Operating through over 125 branches nationwide, Saylani 
                strengthens our capacity to serve communities with greater efficiency and impact.
              </p>
              <div className="headquarters-features">
                <div className="feature">
                  <span className="feature-icon">📚</span>
                  <span>Education Programs</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🤝</span>
                  <span>Welfare Services</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌍</span>
                  <span>International Coordination</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💼</span>
                  <span>Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pakistan Presence */}
      <section className="presence-section pakistan-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Presence Across Pakistan</h2>
            <p className="section-description">Operating through 125+ branches serving communities nationwide</p>
          </div>
          
          <div className="cities-grid">
            {pakistanCities.map((city) => (
              <div key={city.id} className="city-card">
                <div className="city-image-wrapper">
                  <img src={city.image} alt={city.label} className="city-image" />
                  {city.status === 'Main Headquarters' && (
                    <div className="main-badge">Main HQ</div>
                  )}
                </div>
                <div className="city-content">
                  <h3 className="city-name">{city.city}</h3>
                  <p className="city-region">{city.region}</p>
                  <p className="city-description">{city.description}</p>
                  <span className={`status-badge ${city.status === 'Main Headquarters' ? 'main' : 'active'}`}>
                    ● {city.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Presence */}
      <section className="presence-section international-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">International Presence</h2>
            <p className="section-description">Official offices and humanitarian operations worldwide</p>
          </div>
          
          <div className="countries-grid">
            {internationalPresence.map((country) => (
              <div key={country.id} className="country-card">
                <div className="country-image-wrapper">
                  <img src={country.image} alt={country.label} className="country-image" />
                </div>
                <div className="country-content">
                  <h3 className="country-name">{country.country}</h3>
                  <p className="country-region">{country.region}</p>
                  <p className="country-description">{country.description}</p>
                  <span className={`status-badge ${country.status.toLowerCase()}`}>
                    ● {country.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="presence-stats">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">125+</div>
            <div className="stat-label">Branches in Pakistan</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">3</div>
            <div className="stat-label">Official International Offices</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">63+</div>
            <div className="stat-label">Areas of Service</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1999</div>
            <div className="stat-label">Year Established</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="presence-cta">
        <div className="cta-container">
          <h3 className="cta-title">Find a Center Near You</h3>
          <p className="cta-description">
            Whether you're in Karachi, across Pakistan, or anywhere in the world, we're here to serve you.
          </p>
          <a 
            href="https://chat.whatsapp.com/LRgagp3fuaM1hk8261RiCy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Contact Us
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Presence;
