import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if ((location.pathname !== "/contact")) {
        // 👉 sur les autres pages : visible seulement après scroll > 5px
        if (window.scrollY > 5) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    if (location.pathname === "/contact") {
      // 👉 sur la page contact : header toujours visible
      setIsScrolled(true);
    }
    if (location.pathname === "/Alain_Passard") {
      setIsScrolled(true);
    }
    if (location.pathname === "/Réservation") {
      setIsScrolled(true);
    } else {
      // 👉 réinitialiser le scroll listener sur les autres pages
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
            <p className="header__text">menu</p>
          </div>

          <div className="header__logo">
            <Link to="/" className="header__logo">
              <img src="/logo.svg" alt="Logo" />
            </Link>
          </div>

          <div className="header__language">
            <p>FR/EN</p>
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
            Accueil
          </Link>
          <Link to="/Athmane_ouamara" onClick={toggleSidebar}>
           CHEF ATHMENE 
          </Link>
          <Link to="/contact" onClick={toggleSidebar}>
            Contact
          </Link>
          <Link to="/Réservation" onClick={toggleSidebar}>
            Réservation
          </Link>
          <Link to="/#menu-section" onClick={toggleSidebar}>
            Nos Menus
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
