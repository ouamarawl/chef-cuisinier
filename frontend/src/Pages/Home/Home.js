import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

import Athmane_45 from "../../assets/images_athmen/athmane_45.jpg";

import image7 from "../../assets/images_plats/plat7.jpg";

import Athmane_46 from "../../assets/images_athmen/athmane_46.jpg";
import Athmane_0 from "../../assets/images_athmen/athmane_0-v2.png";
import plat46 from "../../assets/images_plats/plat46.jpg";
import athmane_2 from "../../assets/images_athmen/athmane_2.jpg";
import data_plat from "../../data_plat";
import logo from "../../assets/logo-2.png"
import plat58 from "../../assets/images_plats/plat58.jpg";
import plat181 from "../../assets/images_plats/plat181.jpg";
import plat182 from "../../assets/images_plats/plat182.jpg";
import plat183 from "../../assets/images_plats/plat183.jpg";
import plat184 from "../../assets/images_plats/plat184.jpg";
const images = [
  require("../../assets/images_plats/plat143.jpeg"),
  require("../../assets/images_plats/plat123.jpeg"),
  require("../../assets/images_plats/plat155.jpeg"),
]

function Home() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);
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
            "Cooking is the art of turning simplicity into emotion."
          </p>
          <p className="author">CHEF ATHMANE OUAMARA</p>
        </div>
      </section>

      {/* Chef Presentation */}
      <section className="presentation-section">
        <img
          id="image5"
          src={Athmane_45}
          alt="Chef Athmane"
          className="chef-image"
        />
        <div className="presentation-text">
          <h3>ATHMANE OUAMARA</h3>
          <p>
            Born into a family of Algerian farmers — surrounded by the land,
            hard work, and the simple beauty of nature — Chef Athmane built his
            career internationally, from Dubai to New York, and now calls
            Chicago home. <br /> <br />
            His cuisine blends the warmth of his Algerian roots with the
            elegance of global gastronomy. Each dish he creates tells a story
            of passion, travel, and authenticity.
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
      <section className="presentation-section">
        <img src={plat184} alt="Chef's cuisine" className="chef-image" />
        <div className="presentation-text">
          <h3>AN EXCEPTIONAL CUISINE</h3>
          <p>
            For Chef Athmane, every ingredient has a soul and a story. <br />
            Behind each dish lies the hand of a craftsman, a farmer, or a
            fisherman. <br /> <br />
            His philosophy: "Respect the product, master the gesture, and cook
            with love and generosity."
          </p>
        </div>
      </section>

      {/* Menus */}
      <section className="presentation-section" id="menu-section">
        <img src={plat181} alt="Chef's dish" className="chef-image" />
        <div className="presentation-text">
          <h3>OUR MENUS</h3>
          <p>
            Inspired by nature and the seasons, Chef Athmane's menus celebrate
            the balance between tradition and modernity. <br />
            From his signature grilled lamb to his plant-based creations, each
            plate embodies harmony between fire, freshness, and emotion.
          </p>
          <div className="menu-links">
            <a href="/Menue">THE MENU</a> <br />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="presentation-section">
        <img src={plat182} alt="Chef's creation" className="chef-image" />
        <div className="presentation-text">
          <h3>HIS PHILOSOPHY</h3>
          <p>
            "Cooking is like playing music: it requires rhythm, heart, and a
            touch of improvisation." <br />
            Chef Athmane transforms simple ingredients into a unique
            gastronomic experience guided by passion and creativity.
          </p>
        </div>
      </section>

      {/* Back Kitchen */}
      <section className="presentation-section">
        <img src={plat183} alt="Back kitchen" className="chef-image" />
        <div className="presentation-text">
          <h3>ATHMANE'S LITTLE KITCHEN</h3>
          <p>
            Athmane's Little Kitchen is Chef Athmane's creative space in
            Chicago — where art, cuisine, and passion come together. <br />
            There you'll find signature dishes, artistic collaborations, and
            creations reflecting his journey from Algeria to Chicago.
          </p>
          <button
            className="discover-btn"
            onClick={() => navigate("/Larriere_cuisine")}
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
              athmanechef@gmail.com <br />
              2245260067
              <br />
              By appointment only.
            </p>
          </div>
          <div className="ligne"></div>
        </div>
        <img src={Athmane_0} />
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