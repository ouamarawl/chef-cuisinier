import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* --- ABOUT SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_about_title">ABOUT</h3>
        <ul>
          <li>
            <a href="#" data-i18n="footer_about_chef">Chef Athmane</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_about_restaurant">The Restaurant</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_about_menus">Our Menus</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_about_garden">The Gardens</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_about_kitchen">The Back Kitchen</a>
          </li>
        </ul>
      </div>

      {/* --- CONTACT SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_contact_title">CONTACT</h3>
        <ul>
          <li>
            <a href="#" data-i18n="footer_contact_restaurant">The Restaurant</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_contact_kitchen">The Back Kitchen</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_contact_communication">Communication & Events</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_contact_career">Career</a>
          </li>
        </ul>
      </div>

      {/* --- LEGAL SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_legal_title">LEGAL INFORMATION</h3>
        <ul>
          <li>
            <a href="#" data-i18n="footer_legal_terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="#" data-i18n="footer_legal_photos">Photo Credits</a>
          </li>
        </ul>
      </div>

      {/* --- DEVELOPERS SECTION --- */}
      <div className="footer-section">
        <h3 data-i18n="footer_dev_title">Developed and Created by</h3>
        <ul>
          <li>
            <a href="#">ouamara.wail.m@gmail.com</a>
          </li>
          <li>
            <a href="#">bakhoucheromaissa22@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
