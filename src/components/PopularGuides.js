import React, { useState, useEffect } from 'react';
import './PopularGuides.css';

function PopularGuides() {
  const [guides, setGuides] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const mockGuides = [
      { title: 'Whiteout Survival', image: '/img/whiteout-survival.webp', link: '/guides/whiteout-survival', category: 'survival' },
      { title: 'Rise of Kingdoms', image: '/img/rok.webp', link: '/guides/rise-of-kingdoms', category: 'strategy' },
    ];
    setGuides(mockGuides);
  }, []);

  const filteredGuides = filter === 'all' ? guides : guides.filter(g => g.category === filter);

  return (
    <section className="popular-guides">
      <h1>Guías Populares</h1>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todos</button>
        <button onClick={() => setFilter('survival')} className={filter === 'survival' ? 'active' : ''}>Supervivencia</button>
        <button onClick={() => setFilter('strategy')} className={filter === 'strategy' ? 'active' : ''}>Estrategia</button>
      </div>
      <div className="guide-cards">
        {filteredGuides.map((guide, index) => (
          <div key={index} className="guide-card">
            <a href={guide.link}>
              <img src={guide.image} alt={guide.title} />
              <p>{guide.title}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="ad-placeholder">Anuncio (300x250)</div>
    </section>
  );
}

export default PopularGuides;