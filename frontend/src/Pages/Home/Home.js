import React, { useEffect, useState } from "react";
import "./Home.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import logo from "../../assets/logo.svg"; // image centrale du slideshow
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import feuille_d from "../../assets/feuille_d.png";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png"; // feuille verte à droite
import feuille_noir_gauche from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/feuille-noir-gauche.png"; // feuille verte à droite
// image d'Alain Passard

const images = [
  require("../../assets/image1.jpg"),
  require("../../assets/image2.jpg"),
  require("../../assets/image3.jpg"),
  require("../../assets/image4.jpg"),
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          <p className="quote">« Je veux faire du légume un grand cru »</p>
          <p className="author">Alain Passard</p>
        </div>
        {/* <div className="reserve-btn">RÉSERVER UNE TABLE</div> */}
      </section>

      {/* Section présentation */}
      <img src={feuille_d} id="feuille_d" />
      <section className="presentation-section">
        <img src={image5} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>ALAIN PASSARD</h3>
          <p>
            « Pour moi, l’été c’est un rendez-vous avec une tomate, un
            concombre, un melon. J’aime les harmoniser pour créer une cuisine
            désaltérante. »
          </p>
          <button className="discover-btn">DÉCOUVRIR</button>
        </div>
      </section>
      <img src={feuille_vert_droite} id="feuille_vert_droite" />
      <section className="presentation-section">
        <img src={image6} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>L'Arpège</h3>
          <p>
            « À l’Arpège, chaque saveur a un passeport, une provenance, nous
            avons un savoir-faire derrière chaque produit : celui de nos
            jardiniers, d’un fromager, d’un éleveur, d’un pêcheur… J’aime
            travailler en confiance !»
          </p>
        </div>
      </section>
      <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
      <img src={feuille_d} id="feuille_d_2" />
      <section className="presentation-section">
        <img src={image7} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>NOS MENUS</h3>
          <p>
            « Le plus beau livre de cuisine a été écrit par la nature. Quel
            bonheur de se désaltérer en été avec un gaspacho de tomate à la
            moutarde ou une salade de concombre à la menthe. Quel plaisir de se
            réchauffer en hiver avec un gratin de céleri rave à la crème ou une
            soupe de poireau et pommes de terre ! » <br />
            Nos menus se laissent guider par les saisons.
          </p>
          <div className="menu-links">
            <a href="/carte">LA CARTE</a> <br />
            <a href="/menu-dejeuner">LE MENU DÉJEUNER</a> <br />
            <a href="/menu">MENU</a>
          </div>
        </div>
      </section>
      <img src={feuille_d} id="feuille_d_3" />
      <section className="presentation-section">
        <img src={image8} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>LES POTAGERS</h3>
          <p>
            « Je cultive mes légumes pour conjuguer la main du cuisinier et du
            jardinier, deux « métiers-passion ». Avec ces jardins, j’ai confié
            ma créativité à la nature, c’est elle qui dicte mon geste. »
          </p>
          <button className="discover-btn">Enfilez vos bottes !</button>
        </div>
      </section>
      <img src={feuille_vert_droite} id="feuille_vert_droite_2" />
      <section className="presentation-section">
        <img src={image9} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>L’ARRIÈRE CUISINE</h3>
          <p>
            Livres, collages, lithographies, bronzes… L’Arrière-Cuisine est un
            lieu d’exposition des créations artistiques du Chef Alain Passard !
            Situé à quelques mètres de l’Arpège, ce lieu révèle son amour du
            beau geste et l’importance des cinq sens dans ses créations
            culinaires.
          </p>
          <button className="discover-btn">Poussez la porte !</button>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-text">
            <h1>
              <span className="contact-title">CONTACT</span>
            </h1>
            <p className=" contact-info">
              ARPÈGE <br /> 84, Rue de Varenne <br /> 75007 Paris <br /> + 33
              (0)1 47 05 09 06
              <br />
              restaurant@alain-passard.com <br />
              <br />
              Le restaurant est ouvert <br /> du lundi au vendredi
              <br />, midi et soir.
              <br />
              <br /> Nous ne proposons pas
              <br /> de service voiturier.
            </p>
          </div>
          <div class="ligne"></div>
        </div>
        <img src={image1} />
      </section>
      <h3
        style={{
          fontFamily: "Georgia, serif",
          fontWeight: "00",
          fontSize: "200%",
          letterSpacing: "0.22em",
          color: "#849D75",
          margin: "6px 0 14px",
          padding: "0 18px",
          textTransform: "uppercase",
          textAlign: "left",
          marginLeft: "10%",
          marginBottom: "10%",
        }}
      >
        Suivez le chef @alain_passard
      </h3>
    </div>
  );
}

export default Home;
