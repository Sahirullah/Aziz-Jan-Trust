import { useState } from 'react';
import './Categories.css';

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    {
      id: 1,
      name: 'Web App Development',
      count: '2,450+',
      icon: '🌐',
      description: 'Build modern web applications',
      color: '#FF741F'
    },
    {
      id: 2,
      name: 'UI/UX Design',
      count: '1,890+',
      icon: '🎨',
      description: 'Create beautiful user experiences',
      color: '#FF741F'
    },
    {
      id: 3,
      name: 'Cybersecurity',
      count: '1,200+',
      icon: '🔒',
      description: 'Protect systems & data',
      color: '#FF741F'
    },
    {
      id: 4,
      name: 'Video Editing',
      count: '1,650+',
      icon: '🎬',
      description: 'Professional video production',
      color: '#FF741F'
    },
    {
      id: 5,
      name: 'Amazon Web Services',
      count: '980+',
      icon: '☁️',
      description: 'Cloud computing & AWS',
      color: '#FF741F'
    },
    {
      id: 6,
      name: 'Graphic Design',
      count: '750+',
      icon: '✏️',
      description: 'Visual design & branding',
      color: '#FF741F'
    },
    {
      id: 7,
      name: 'Machine Learning',
      count: '620+',
      icon: '🤖',
      description: 'AI & ML fundamentals',
      color: '#FF741F'
    },
    {
      id: 8,
      name: 'Agentic AI',
      count: '540+',
      icon: '🧠',
      description: 'Autonomous AI agents',
      color: '#FF741F'
    }
  ];

  const displayedCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <section className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">Our Courses</h2>
          <p className="categories-subtitle">
            Explore our comprehensive range of professional courses designed to enhance your skills
          </p>
        </div>
        
        <div className="categories-grid">
          {displayedCategories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon" style={{ backgroundColor: category.color }}>
                <span>{category.icon}</span>
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <span className="category-count">{category.count} themes</span>
              </div>
              <div className="category-arrow">→</div>
            </div>
          ))}
        </div>
        
        <div className="categories-footer">
          <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Explore All Courses'}
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
