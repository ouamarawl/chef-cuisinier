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
            <Link to="/chef-athmane" data-i18n="footer_about_chef">Chef Athmane</Link>
          </li>
          <li>
            <Link to="/menu" data-i18n="footer_about_menus">Our Menus</Link>
          </li>
          <li>
            <Link to="/larriere-cuisine" data-i18n="footer_about_kitchen">The Back Kitchen</Link>
          </li>
          
        </ul>
      </div>

      {/* --- CONTACT SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_contact_title">CONTACT</h3>
        <ul>
           <li>
            <a href="#">Athmane686@gmail.com</a>
          </li>
          <li>
            <a href="#">2245260067</a>
          </li>
        </ul>
      </div>

      {/* --- LEGAL SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_legal_title">LEGAL INFORMATION</h3>
        <ul>
          <li>
            <Link to="/conditions" data-i18n="footer_legal_terms">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/credits" data-i18n="footer_legal_photos">Photo Credits</Link>
          </li>
        </ul>
      </div>

      {/* --- DEVELOPERS SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_dev_title">Developed and Created by</h3>
        <ul>
          <li>
            <Link to="mailto:ouamara.wail.m@gmail.com">ouamara.wail.m@gmail.com</Link>
          </li>
          <li>
            <Link to="mailto:bakhoucheromaissa22@gmail.com">bakhoucheromaissa22@gmail.com</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
