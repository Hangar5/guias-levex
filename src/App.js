import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import PopularGuides from './components/PopularGuides';
import Footer from './components/Footer';
import GamePage from './components/GamePage';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [search, setSearch] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header search={search} setSearch={setSearch} />
        <button onClick={toggleTheme} className="theme-toggle">{theme === 'dark' ? '🌙' : '☀️'}</button>
        <Routes>
          <Route path="/" element={<main><Slider /><PopularGuides search={search} /></main>} />
          <Route path="/guides/whiteout-survival" element={<GamePage />} />
        </Routes>
        <Footer />
        <a href="https://discord.gg/tu-link" className="discord-btn">Únete a Discord</a>
      </div>
    </Router>
  );
}

export default App;