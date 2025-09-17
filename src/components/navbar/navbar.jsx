import React, { useState } from 'react'; // 1. Impor useState
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="logo">Portofolio.</a>

      <div 
        className='bx bx-menu' 
        id="menu-icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>

      <nav className={isMenuOpen ? 'navbar active' : 'navbar'}>
        <a href="#home" className="active" onClick={() => setIsMenuOpen(false)}>
          <i className='bx bxs-home'></i> Home
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          <i className='bx bxs-user'></i> About
        </a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>
          <i className='bx bxs-briefcase'></i> Projects
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          <i className='bx bxs-contact'></i> Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;