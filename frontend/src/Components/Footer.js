import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h2>About Us</h2>
          <p>Your company's information and mission.</p>
        </div>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <p>Contact information and contact form.</p>
        </div>
        <div className="footer-column">
          <h2>Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
}

export default Footer;
