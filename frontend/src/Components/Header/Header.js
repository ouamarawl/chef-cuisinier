import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/new_logo2.png";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReservation, setShowReservation] = useState(window.innerWidth > 480);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const location = useLocation();

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

  // Détecter le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setShowReservation(window.innerWidth > 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {showReservation && (
            <div className={"header__language"}>
              <Link to="/Réservation">
                Reservation
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <nav>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/Athmane_ouamara" onClick={toggleSidebar}>
            CHEF ATHMANE
          </Link>
          <Link to="/contact" onClick={toggleSidebar}>
            Contact
          </Link>
          <Link to="/Réservation" onClick={toggleSidebar}>
            Reservation
          </Link>
          <Link to="/#menu-section" onClick={toggleSidebar}>
            Our Menus
          </Link>
          <Link to="/Buffets" onClick={toggleSidebar}>
            Buffets
          </Link>
        </nav>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;