import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import PopularGuides from './components/PopularGuides';
import Footer from './components/Footer';
import GamePage from './components/GamePage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Notificación de actualización (simulada)
    setTimeout(() => alert('¡Nueva actualización disponible!'), 5000);
  }, []);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header />
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Slider />
                <PopularGuides />
              </main>
            }
          />
          <Route path="/guides/whiteout-survival" element={<GamePage />} />
        </Routes>
        <Footer />
        <a href="https://discord.gg/tu-link" className="discord-btn">
          Únete a Discord
        </a>
      </div>
    </Router>
  );
}

export default App;