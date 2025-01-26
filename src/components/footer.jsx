import React from 'react';
// import './app.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Saylani Microfinance</h3>
          <p>Providing financial solutions for a better tomorrow.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@saylanimicrofinance.com</p>
          <p>Phone: +92 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Saylani Microfinance. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
