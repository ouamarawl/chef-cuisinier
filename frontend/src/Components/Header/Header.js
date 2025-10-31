import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

import LanguageContext from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/LanguageContext.js";


function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/contact") {
        if (window.scrollY > 5) setIsScrolled(true);
        else setIsScrolled(false);
      }
    };

    if (
      location.pathname === "/contact" ||
      location.pathname === "/Alain_Passard" ||
      location.pathname === "/Réservation"
    ) {
      setIsScrolled(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Textes selon la langue
  const text = {
    fr: {
      menu: "menu",
      home: "Accueil",
      chef: "CHEF ATHMANE",
      contact: "Contact",
      reservation: "Réservation",
      menus: "Nos Menus",
    },
    en: {
      menu: "menu",
      home: "Home",
      chef: "CHEF ATHMANE",
      contact: "Contact",
      reservation: "Reservation",
      menus: "Our Menus",
    },
  };

  return (
    <>
      <div className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
        <div className="header__container">
          <div className="header__menu">
            <button
              className={`hamburger ${isSidebarOpen ? "active" : ""}`}
              aria-label="Menu"
              onClick={toggleSidebar}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <p className="header__text">{text[language].menu}</p>
          </div>

          <div className="header__logo">
            <Link to="/" className="header__logo">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>

         <div className="header__language" onClick={toggleLanguage}>
  <p>{language === "fr" ? "FR / EN" : "EN / FR"}</p>
</div>

        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <nav>
          <Link to="/" onClick={toggleSidebar}>
            {text[language].home}
          </Link>
          <Link to="/Athmane_ouamara" onClick={toggleSidebar}>
            {text[language].chef}
          </Link>
          <Link to="/contact" onClick={toggleSidebar}>
            {text[language].contact}
          </Link>
          <Link to="/Réservation" onClick={toggleSidebar}>
            {text[language].reservation}
          </Link>
          <Link to="/#menu-section" onClick={toggleSidebar}>
            {text[language].menus}
          </Link>
        </nav>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
