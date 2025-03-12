import React, { useState, useEffect } from 'react';
import './GamePage.css';

function GamePage() {
  const [activeTab, setActiveTab] = useState('guías');
  const [resources, setResources] = useState({ wood: 0, stone: 0 });
  const [updates, setUpdates] = useState([]);

  const tabs = {
    guías: { title: 'Guías', content: 'Aquí encontrarás las mejores estrategias para sobrevivir en Whiteout Survival.' },
    héroes: { title: 'Héroes', content: 'Descubre los mejores héroes y cómo usarlos en el juego.' },
    calculadoras: { title: 'Calculadoras', content: (
      <div>
        <p>Optimiza tus recursos:</p>
        <input
          type="number"
          value={resources.wood}
          onChange={(e) => setResources({ ...resources, wood: e.target.value })}
          placeholder="Madera"
        />
        <input
          type="number"
          value={resources.stone}
          onChange={(e) => setResources({ ...resources, stone: e.target.value })}
          placeholder="Piedra"
        />
        <button onClick={() => alert(`Total: ${Number(resources.wood) + Number(resources.stone)}`)}>
          Calcular
        </button>
      </div>
    )},
  };

  useEffect(() => {
    const mockUpdates = [
      'Actualización del 11 de marzo de 2025: Nueva guía añadida.',
      'Actualización del 10 de marzo de 2025: Evento especial.',
    ];
    setTimeout(() => setUpdates(mockUpdates), 2000); // Simula carga
  }, []);

  return (
    <main className="game-page">
      <section className="hero">
        <img src="/img/whiteout-survival.webp" alt="Whiteout Survival" />
        <h1>Whiteout Survival</h1>
      </section>
      <div className="tabs">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tabs[tab].title}
          </button>
        ))}
      </div>
      <div className={`tab-content ${activeTab ? 'active' : ''}`}>
        <h2>{tabs[activeTab].title}</h2>
        {tabs[activeTab].content}
      </div>
      <section className="updates">
        <h2>Actualizaciones</h2>
        <ul>
          {updates.map((update, index) => (
            <li key={index}>{update}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default GamePage;