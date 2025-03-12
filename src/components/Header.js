import React, { useState } from 'react';
import './Header.css';

function Header({ search, setSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <a href="/">
            <img src="/img/logo/Guides Levex (claro).png" alt="Guías Levex" />
          </a>
        </div>
      </div>
      <nav className="navbar" aria-label="Menú principal">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar guías..."
          className="search-bar"
        />
        <div className="nav-container">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/" className="active">Inicio</a></li>
            <li className="dropdown">
              <a href="#guias">Guías <span className="arrow">▾</span></a>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <h2>Guías</h2>
                  <a href="/guides/whiteout-survival">
                    <img src="/img/whiteout-survival.webp" alt="Whiteout Survival" />
                    <span>Whiteout Survival</span>
                  </a>
                  <a href="/guides/rise-of-kingdoms">
                    <img src="/img/rok.webp" alt="Rise of Kingdoms" />
                    <span>Rise of Kingdoms</span>
                  </a>
                </div>
              </div>
            </li>
            <li><a href="#noticias">Noticias</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
          </ul>
          <div
            className="menu-toggle"
            aria-label="Abrir menú"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>
      <div className="header-right">
        <button className="theme-toggle">☀️</button>
      </div>
    </header>
  );
}

export default Header;