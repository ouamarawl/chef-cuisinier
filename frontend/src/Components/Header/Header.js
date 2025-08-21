import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(false);
      } if (window.scrollY >5) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <button className="close-btn" onClick={toggleSidebar}>✖</button>
        <nav>
          <Link to="/" onClick={toggleSidebar}>Accueil</Link>
          <Link to="/Alain_Passard" onClick={toggleSidebar}>Alain Passard</Link>
          <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
          <Link to="/Réservation" onClick={toggleSidebar}>Réservation</Link>
          <Link to="/NosMenus" onClick={toggleSidebar}>Nos Menus</Link>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
