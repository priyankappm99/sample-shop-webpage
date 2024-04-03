import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-menu">
          <li className="footer-item">
            <Link to="/about" className="footer-link">About Us</Link>
          </li>
          <li className="footer-item">
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </li>
          <li className="footer-item">
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </li>
          <li className="footer-item">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
