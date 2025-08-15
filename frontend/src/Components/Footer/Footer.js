import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>À PROPOS</h3>
        <ul>
          <li><a href="#">Alain Passard</a></li>
          <li><a href="#">L'Arpège</a></li>
          <li><a href="#">Nos Menus</a></li>
          <li><a href="#">Les Potagers</a></li>
          <li><a href="#">L'Arrière Cuisine</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONTACT</h3>
        <ul>
          <li><a href="#">L'Arpège</a></li>
          <li><a href="#">L'Arrière Cuisine</a></li>
          <li><a href="#">Communication & Événements</a></li>
          <li><a href="#">Carrière</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>INFORMATIONS LÉGALES</h3>
        <ul>
          <li><a href="#">CGU & CGV</a></li>
          <li><a href="#">Crédits photos</a></li>
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;
