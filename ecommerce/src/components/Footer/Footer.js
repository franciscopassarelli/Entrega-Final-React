// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="footer-logo"><span>Tienda</span>Tenis</h1>
          <p>Tu tienda de confianza para todo lo relacionado con tenis.</p>
          <div className="footer-contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@tiendatenis.com</span>
          </div>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tienda Tenis. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
