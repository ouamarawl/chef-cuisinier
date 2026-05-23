import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* --- ABOUT SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_about_title">ABOUT PAGES</h3>
        <ul>
          <li>
            <Link to="/Athmane_ouamara" data-i18n="footer_about_chef">Chef Athmane</Link>
          </li>
          <li>
            <Link to="/Menue" data-i18n="footer_about_menus">Our Menus</Link>
          </li>
          <li>
            <Link to="/Larriere_cuisine" data-i18n="footer_about_kitchen">The Back Kitchen</Link>
          </li>
          
        </ul>
      </div>

      {/* --- CONTACT SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_contact_title">CONTACT</h3>
        <ul>
          <li>
            <a href="mailto:athmanechef@gmail.com">athmanechef@gmail.com</a>
          </li>
          <li>
            <a href="tel:2245260067">224-526-0067</a>
          </li>
        </ul>
      </div>

      {/* --- LEGAL SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_legal_title">LEGAL INFORMATION</h3>
        <ul>
          <li>
            <a href="#conditions" data-i18n="footer_legal_terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="#credits" data-i18n="footer_legal_photos">Photo Credits</a>
          </li>
        </ul>
      </div>

      {/* --- DEVELOPERS SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_dev_title">Developed and Created by</h3>
        <ul>
          <li>
            <a href="mailto:ouamara.wail.m@gmail.com">ouamara.wail.m@gmail.com</a>
          </li>
          <li>
            <a href="mailto:bakhoucheromaissa22@gmail.com">bakhoucheromaissa22@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
