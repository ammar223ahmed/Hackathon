import React, { useState } from 'react';
// import './app.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Saylani Microfinance</div>
      <nav className={menuOpen ? "active" : ""}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
}
