import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import logo from "../../assets/logo.svg";
import image5 from "../../assets/images_athmen/image5.JPG";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/images_plats/plat7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/images_athmen/image9.JPG";
import feuille_d from "../../assets/feuille_d.png";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png";
import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";

const images = [
  require("../../assets/image1.jpg"),
  require("../../assets/image2.jpg"),
  require("../../assets/image3.jpg"),
  require("../../assets/image4.jpg"),
];

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
          <img src={logo} alt="Logo central" />
        </div>
      </div>

      {/* Section bienvenue */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>BIENVENUE</h2>
          <p className="quote">
            « La cuisine, c’est l’art de transformer la simplicité en émotion. »
          </p>
          <p className="author">CHEF ATHMANE OUAMARA</p>
        </div>
      </section>

      {/* Présentation du Chef */}
      <img src={feuille_d} id="feuille_d" />
      <section className="presentation-section">
        <img
          id="image5"
          src={image5}
          alt="Chef Athmane"
          className="chef-image"
        />
        <div className="presentation-text">
          <h3>ATHMANE OUAMARA</h3>
          <p>
            Originaire d’Algérie, le Chef Athman a construit son parcours à
            l’international : de Dubaï à New York, puis à Chicago, où il a
            collaboré avec les plus grands chefs. <br /> <br />
            Sa cuisine allie la chaleur des saveurs méditerranéennes à
            l’élégance de la gastronomie mondiale. Chaque plat qu’il crée est
            une histoire de passion, de voyage et d’authenticité.
          </p>
          <button
            className="discover-btn"
            onClick={() => navigate("/Chef_Athman")}
          >
            DÉCOUVRIR
          </button>
        </div>
      </section>

      {/* Expérience et philosophie */}
      <img src={feuille_vert_droite} id="feuille_vert_droite" />
      <section className="presentation-section">
        <img src={image6} alt="Cuisine du chef" className="chef-image" />
        <div className="presentation-text">
          <h3>UNE CUISINE D’EXCELLENCE</h3>
          <p>
            Pour le Chef Athman, chaque produit a une âme et une histoire.{" "}
            <br />
            Derrière chaque plat, il y a la main d’un artisan, d’un éleveur ou
            d’un pêcheur. <br /> <br />
            Sa philosophie : « Le respect du produit, la précision du geste, et
            l’amour du partage. »
          </p>
        </div>
      </section>

      {/* Menus */}
      <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
      <img src={feuille_d} id="feuille_d_2" />
      <section className="presentation-section" id="menu-section">
        <img src={image7} alt="Plat du chef" className="chef-image" />
        <div className="presentation-text">
          <h3>NOS MENUS</h3>
          <p>
            Inspirés par la nature et les saisons, les menus du Chef Athman
            célèbrent l’équilibre entre tradition et modernité. <br />
            De l’agneau grillé signature aux créations végétales, chaque plat
            révèle une harmonie entre feu, fraîcheur et émotion.
          </p>
          <div className="menu-links">
            <a href="/carte">LA CARTE</a> <br />
            <a href="/menu-dejeuner">LE MENU DÉJEUNER</a> <br />
            <a href="/menu">MENU</a>
          </div>
        </div>
      </section>

      {/* Philosophie et potager */}
      <img src={feuille_d} id="feuille_d_3" />
      <section className="presentation-section">
        <img src={image8} alt="Création du chef" className="chef-image" />
        <div className="presentation-text">
          <h3>SA PHILOSOPHIE</h3>
          <p>
            « Cuisiner, c’est comme jouer de la musique : il faut du rythme, du
            cœur et une touche d’improvisation. » <br />
            Le Chef Athman transforme des ingrédients simples en une expérience
            gastronomique unique, guidée par la passion et la créativité.
          </p>
        </div>
      </section>

      {/* Arrière cuisine */}
      <img src={feuille_vert_droite} id="feuille_vert_droite_2" />
      <section className="presentation-section">
        <img src={image9} alt="Arrière cuisine" className="chef-image" />
        <div className="presentation-text">
          <h3>L’ARRIÈRE CUISINE</h3>
          <p>
            L’Arrière-Cuisine du Chef Athman est un espace d’expression où
            l’art, la cuisine et la passion se rencontrent. <br />
            On y découvre des plats signatures, des collaborations artistiques
            et des créations qui reflètent son parcours entre Alger et Chicago.
          </p>
          <button
            className="discover-btn"
            onClick={() => navigate("/Larriere_cuisine")}
          >
            DÉCOUVRIR
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
              Disponible pour dîners privés, collaborations et événements
              gastronomiques. <br />
              <br />
              contact@chefathman.com <br />
              <br />
              Sur rendez-vous uniquement.
            </p>
          </div>
          <div className="ligne"></div>
        </div>
        <img src={image1} />
      </section>

      {/* Instagram */}
      <h3 id="suivez_nous">
        <a
          style={{ textDecoration: "none", color: "#3a4f63" }}
          href="https://www.instagram.com/chefathmane_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="blanck"
        >
          Suivez le chef @CHEFATHMANE_OFFICIAL
        </a>
      </h3>
    </div>
  );
}

export default Home;
