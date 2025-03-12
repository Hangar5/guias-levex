import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log('Buscando:', e.target.value); // Aquí puedes integrar lógica de búsqueda
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="/img/logo/Guides Levex (claro).png" alt="Guías Levex" />
        </a>
      </div>
      <nav className="navbar" aria-label="Menú principal">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar guías..."
          className="search-bar"
        />
        <div
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" className="active">Inicio</a></li>
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
      </nav>
    </header>
  );
}

export default Header;

