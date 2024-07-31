// src/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="nav-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </button>
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
