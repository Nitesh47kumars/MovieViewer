import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import './FooterMedia.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press Releases</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><Link to="/sell">Sell on MyApp</Link></li>
            <li><Link to="/affiliate">Affiliate Program</Link></li>
            <li><Link to="/ads">Advertise Your Products</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/accessibility">Accessibility</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
