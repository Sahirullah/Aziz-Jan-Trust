import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Presence.css';

const Presence = () => {
  const locations = [
    {
      id: 1,
      category: 'Peshawar',
      name: 'Peshawar Main Center',
      address: 'Peshawar, Khyber Pakhtunkhwa',
      description: 'Our flagship center in Peshawar offering comprehensive training programs and community services.',
      icon: '🏢',
      type: 'Main Center'
    },
    {
      id: 2,
      category: 'Peshawar',
      name: 'University Town Branch',
      address: 'University Town, Peshawar',
      description: 'Dedicated center in University Town focusing on student education and skill development.',
      icon: '🎓',
      type: 'Educational Hub'
    }
  ];

  const pakistanCities = [
    {
      id: 3,
      city: 'Islamabad',
      region: 'Federal Capital',
      status: 'Active',
      icon: '🏛️'
    },
    {
      id: 4,
      city: 'Lahore',
      region: 'Punjab',
      status: 'Active',
      icon: '🌆'
    },
    {
      id: 5,
      city: 'Karachi',
      region: 'Sindh',
      status: 'Active',
      icon: '🏙️'
    },
    {
      id: 6,
      city: 'Multan',
      region: 'Punjab',
      status: 'Active',
      icon: '🏘️'
    },
    {
      id: 7,
      city: 'Quetta',
      region: 'Balochistan',
      status: 'Active',
      icon: '🏔️'
    },
    {
      id: 8,
      city: 'Faisalabad',
      region: 'Punjab',
      status: 'Active',
      icon: '🏭'
    }
  ];

  const internationalPresence = [
    {
      id: 9,
      country: 'United States',
      region: 'North America',
      status: 'Active',
      icon: '🇺🇸'
    },
    {
      id: 10,
      country: 'United Kingdom',
      region: 'Europe',
      status: 'Active',
      icon: '🇬🇧'
    },
    {
      id: 11,
      country: 'Canada',
      region: 'North America',
      status: 'Active',
      icon: '🇨🇦'
    },
    {
      id: 12,
      country: 'Australia',
      region: 'Oceania',
      status: 'Active',
      icon: '🇦🇺'
    },
    {
      id: 13,
      country: 'United Arab Emirates',
      region: 'Middle East',
      status: 'Active',
      icon: '🇦🇪'
    },
    {
      id: 14,
      country: 'Saudi Arabia',
      region: 'Middle East',
      status: 'Active',
      icon: '🇸🇦'
    }
  ];

  return (
    <div className="presence-page">
      <Header />
      
      <section className="presence-hero">
        <div className="presence-hero-content">
          <h1 className="presence-hero-title">Our Global Presence</h1>
          <p className="presence-hero-subtitle">
            Serving communities across Pakistan and around the world with quality education and welfare services
          </p>
        </div>
      </section>

      <section className="presence-container">
        {/* Peshawar Locations */}
        <div className="presence-section">
          <div className="section-header">
            <h2 className="section-title">Peshawar Locations</h2>
            <p className="section-description">Our primary centers in Peshawar and University Town</p>
          </div>
          
          <div className="locations-grid">
            {locations.map((location) => (
              <div key={location.id} className="location-card">
                <div className="location-icon">{location.icon}</div>
                <div className="location-type">{location.type}</div>
                <h3 className="location-name">{location.name}</h3>
                <p className="location-address">{location.address}</p>
                <p className="location-description">{location.description}</p>
                <button className="location-btn">Get Directions</button>
              </div>
            ))}
          </div>
        </div>

        {/* Pakistan Cities */}
        <div className="presence-section">
          <div className="section-header">
            <h2 className="section-title">Presence Across Pakistan</h2>
            <p className="section-description">Expanding our reach to multiple cities nationwide</p>
          </div>
          
          <div className="cities-grid">
            {pakistanCities.map((city) => (
              <div key={city.id} className="city-card">
                <div className="city-icon">{city.icon}</div>
                <h3 className="city-name">{city.city}</h3>
                <p className="city-region">{city.region}</p>
                <span className={`status-badge ${city.status.toLowerCase()}`}>
                  ● {city.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* International Presence */}
        <div className="presence-section">
          <div className="section-header">
            <h2 className="section-title">International Presence</h2>
            <p className="section-description">Serving Pakistani diaspora and international communities</p>
          </div>
          
          <div className="countries-grid">
            {internationalPresence.map((country) => (
              <div key={country.id} className="country-card">
                <div className="country-flag">{country.icon}</div>
                <h3 className="country-name">{country.country}</h3>
                <p className="country-region">{country.region}</p>
                <span className={`status-badge ${country.status.toLowerCase()}`}>
                  ● {country.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="presence-stats">
          <div className="stat-box">
            <div className="stat-number">2</div>
            <div className="stat-label">Centers in Peshawar</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">6</div>
            <div className="stat-label">Cities in Pakistan</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">6</div>
            <div className="stat-label">Countries Worldwide</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">14+</div>
            <div className="stat-label">Total Locations</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="presence-cta">
          <h3 className="cta-title">Find a Center Near You</h3>
          <p className="cta-description">
            Whether you're in Peshawar, across Pakistan, or anywhere in the world, we're here to serve you.
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
