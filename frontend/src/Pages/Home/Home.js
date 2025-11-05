import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import logo from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/new_logo.png";
import image5 from "../../assets/images_athmen/image5.JPG";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/images_plats/plat7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/images_athmen/image9.JPG";
import feuille_d from "../../assets/feuille_d.png";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png";
import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";
import plat46 from "../../assets/images_plats/plat46.jpg";
import athmane_2 from "../../assets/images_athmen/athmane_2.jpg";
 import data_plat from "../../data_plat";
const images = [
  require("../../assets/images_plats/plat87.JPG"),
  require("../../assets/images_plats/plat92.JPG"),
  require("../../assets/images_plats/plat97.JPG"),
  // require("../../assets/images_plats/plat96.JPG"),
  // require("../../assets/images_plats/plat85.JPG"),

]

function Home() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-container">
      {/* Slideshow */}
      <div className="slideshow-container">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="center-image">
          <img src={logo} alt="Central logo" />
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>WELCOME</h2>
          <p className="quote">
            “Cooking is the art of turning simplicity into emotion.”
          </p>
          <p className="author">CHEF ATHMANE OUAMARA</p>
        </div>
      </section>

      {/* Chef Presentation */}
      <img src={feuille_d} id="feuille_d" />
      <section className="presentation-section">
        <img
          id="image5"
          src={image5}
          alt="Chef Athman"
          className="chef-image"
        />
        <div className="presentation-text">
          <h3>ATHMANE OUAMARA</h3>
          <p>
            Originally from Algeria, Chef Athman built his career
            internationally—from Dubai to New York, and later in Chicago—where
            he collaborated with some of the world’s greatest chefs. <br />{" "}
            <br />
            His cuisine blends the warmth of Mediterranean flavors with the
            elegance of global gastronomy. Each dish he creates tells a story of
            passion, travel, and authenticity.
          </p>
          <button
            className="discover-btn"
            onClick={() => navigate("Athmane_ouamara")}
          >
            DISCOVER
          </button>
        </div>
      </section>

      {/* Experience & Philosophy */}
      <img src={feuille_vert_droite} id="feuille_vert_droite" />
      <section className="presentation-section">
        <img src={image6} alt="Chef’s cuisine" className="chef-image" />
        <div className="presentation-text">
          <h3>AN EXCEPTIONAL CUISINE</h3>
          <p>
            For Chef Athman, every ingredient has a soul and a story. <br />
            Behind each dish lies the hand of a craftsman, a farmer, or a
            fisherman. <br /> <br />
            His philosophy: “Respect the product, master the gesture, and cook
            with love and generosity.”
          </p>
        </div>
      </section>

      {/* Menus */}
      <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
      <img src={feuille_d} id="feuille_d_2" />
      <section className="presentation-section" id="menu-section">
        <img src={image7} alt="Chef’s dish" className="chef-image" />
        <div className="presentation-text">
          <h3>OUR MENUS</h3>
          <p>
            Inspired by nature and the seasons, Chef Athman’s menus celebrate
            the balance between tradition and modernity. <br />
            From his signature grilled lamb to his plant-based creations, each
            plate embodies harmony between fire, freshness, and emotion.
          </p>
          <div className="menu-links">
            <a href="/carte">THE MENU</a> <br />
            <a href="/menu-dejeuner">LUNCH MENU</a> <br />
            <a href="/menu">FULL MENU</a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <img src={feuille_d} id="feuille_d_3" />
      <section className="presentation-section">
        <img src={image8} alt="Chef’s creation" className="chef-image" />
        <div className="presentation-text">
          <h3>HIS PHILOSOPHY</h3>
          <p>
            “Cooking is like playing music: it requires rhythm, heart, and a
            touch of improvisation.” <br />
            Chef Athman transforms simple ingredients into a unique
            gastronomic experience guided by passion and creativity.
          </p>
        </div>
      </section>

      {/* Back Kitchen */}
      <img src={feuille_vert_droite} id="feuille_vert_droite_2" />
      <section className="presentation-section">
        <img src={image9} alt="Back kitchen" className="chef-image" />
        <div className="presentation-text">
          <h3>THE BACK KITCHEN</h3>
          <p>
            Chef Athman’s Back Kitchen is a creative space where art, cuisine,
            and passion come together. <br />
            There you’ll find signature dishes, artistic collaborations, and
            creations reflecting his journey between Algiers and Chicago.
          </p>
          <button
            className="discover-btn"
            onClick={() => navigate("/Larriere_cuisinet")}
          >
            DISCOVER
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-text">
            <h1>
              <span className="contact-title">CONTACT</span>
            </h1>
            <p className="contact-info">
              CHEF ATHMANE <br />
              Chicago, USA <br />
              <br />
              Available for private dinners, collaborations, and gastronomic
              events. <br />
              <br />
              contact@chefathman.com <br />
              <br />
              By appointment only.
            </p>
          </div>
          <div className="ligne"></div>
        </div>
        <img src={athmane_2} />
      </section>

      {/* Instagram */}
      <h3 id="suivez_nous">
        <a
          style={{ textDecoration: "none", color: "#3a4f63" }}
          href="https://www.instagram.com/chefathmane_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blanck"
        >
          Follow the chef @CHEFATHMANE_OFFICIAL
        </a>
      </h3>
    </div>
  );
}

export default Home;
