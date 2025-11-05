import "./Alain_Passard.css";
import React, { useState, useEffect } from "react";
import signature from "../../assets/signature.png";
import "@fontsource/montserrat/200.css";
import athmane14 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane14.png";
// import image5 from "../../assets/image5.jpg";
import { useLocation } from "react-router-dom";
import feuille_d from "../../assets/feuille_d.png";
import EVEIL from "../../assets/images_athmen/EVEIL.JPG";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png";
import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";
import feille from "../../assets/feuille.png";
import Vegetal from "../../assets/images_plats/Vegetal.jpg";
import plats from "../../data_plat";
import athman15 from "../../assets/images_athmen/athmane15.PNG";
import signature_athmane from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/signature_athmane.jpg";

function Alain_Passard() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % plats.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + plats.length) % plats.length);
  };

  console.log("PLATS :", plats);

  return (
    <div className="Alain_passard">
      <div className="chef-section">
        <div className="chefimage"></div>
        <div className="chef-content">
          <h2 className="chef-name">ATHMENE OUAMARA</h2>
          <p className="chef-quote">
            “Cooking isn’t just about flavor — it’s about emotion, travel, and
            identity.”
          </p>
          <img
            src={signature_athmane}
            alt="Signature Athmane Ouamara"
            className="chef-signature"
          />
        </div>
      </div>

      <div className="titredumilieu">
        <span>
          <p>“From Algeria to Chicago — The Journey of a World-Class Chef”</p>
        </span>
      </div>

      {/* 🇩🇿 Algeria */}
      <section className="presentation-section-A">
        <img src={athmane14} alt="Athmane Ouamara" className="chef-image" />
        <div className="presentation-text">
          <h3>🇩🇿 Algeria — Where It All Began</h3>
          <p>
            I was born and raised in Algeria, where the kitchen was the heart of
            every home. It’s where I learned the essentials: honest flavors, the
            warmth of family gatherings, and the discipline behind true
            hospitality. The beginnings were humble, but the dream was anything
            but small.
          </p>
        </div>
      </section>

      <img src={feuille_vert_droite} id="feuille_vert_droite" />

      {/* 🇦🇪 Dubai */}
      <section className="presentation-section-A">
        <img src={EVEIL} alt="Athmane Ouamara" className="chef-image" />
        <div className="presentation-text">
          <h3>🇦🇪 Dubai — A Taste of Luxury</h3>
          <p>
            My path led me to Dubai, where I joined Emaar and had the privilege
            of cooking for distinguished guests — including the President of the
            UAE. Working at the Taj Hotel taught me that food can go far beyond
            nourishment — it can become an experience that touches people’s
            hearts.
          </p>
        </div>
      </section>

      <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
      <img src={feuille_d} id="feuille_d_2" />

      {/* 🇺🇸 New York */}
      <section className="presentation-section-A">
        <img
          id="vegetal"
          src={Vegetal}
          alt="Athmane Ouamara"
          className="chef-image"
        />
        <div className="presentation-text">
          <h3>🇺🇸 New York — The School of Excellence</h3>
          <p>
            From Dubai, I moved to New York to work alongside world-renowned
            chef Jean-Georges. That chapter shaped my craft — teaching me
            precision, discipline, and the respect for every small detail that
            transforms a dish into a true masterpiece.
          </p>
        </div>
      </section>

      {/* 🏙️ Chicago */}
      <section className="presentation-section-A">
        <img
          src={athman15}
          alt="Athmane Ouamara in Chicago"
          className="chef-image"
        />
        <div className="presentation-text">
          <h3>🏙️ Chicago — Where the Dream Grows</h3>
          <p>
            Today, Chicago is where I call home. I worked at La Salle Hotel
            before joining the team of legendary Italian chef Fabio Viviani.
            Here, I developed my own culinary identity — bold, refined flavors
            that blend my Algerian roots with a global perspective. My grilled
            meats, especially lamb, have become my signature dishes.
          </p>
          <br />
          <p>
            🚀 Algeria → Dubai → New York → Chicago <br />
            My journey isn’t just about places — it’s about passion,
            perseverance, and evolving alongside some of the world’s greatest
            chefs. Now, as a Private & Luxury Chef, I craft exclusive dining
            experiences and share my story through flavor.
          </p>
        </div>
      </section>

      {/* block */}
      <div className="last-title">
        <h3>Signature Dishes</h3>
        <img src={feille} />
      </div>

      {/* <section className="carousel-container" id="larriere_cuisine">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-track">
          {plats.map((plat, i) => {
            let position = "nextSlide";
            let positionInfo = "nextSlideInfo";
            if (i === index) {
              position = "activeSlide";
              positionInfo = "activeSlideInfo";
            } else if (
              i === index - 1 ||
              (index === 0 && i === plats.length - 1)
            ) {
              position = "lastSlide";
              positionInfo = "lastSlideInfo";
            } else {
              positionInfo = "lastSlideInfo2";
            }

            return (
              <div
                key={plat.title || i}
                className={`carousel-item ${position}`}
              >
                <img src={plat.image} alt={plat.title} />
                <div className={`carousel-info ${positionInfo}`}>
                  <div className={`ligne_H ${positionInfo}`}></div>
                  <div style={{ marginRight: "25%", marginTop: "-3%" }}>
                    <p className={`${positionInfo}`}>{plat.title}</p>
                    <p className={`plat_description ${positionInfo}`}>
                      {plat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </section> */}

      <section className="carousel-container" id="buffet_carousel">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-track">
          {plats.map((buffet, i) => {
            // Calcul de la position relative par rapport à l'index actuel
            let position = "";
            const diff = i - index;
            const totalItems = plats.length;

            // Gestion du wrap-around (circulaire)
            let distance = diff;
            if (Math.abs(diff) > totalItems / 2) {
              distance = diff > 0 ? diff - totalItems : diff + totalItems;
            }

            // Attribution des classes selon la distance (seulement 3 items visibles)
            if (distance === 0) {
              position = "center";
            } else if (distance === -1) {
              position = "left";
            } else if (distance === 1) {
              position = "right";
            } else {
              position = "hidden";
            }

            return (
              <div key={i} className={`buffet-item ${position}`}>
                <img src={buffet.image} alt={buffet.title} />
                <div className="buffet-overlay">
                  <h3>{buffet.title}</h3>
                  <p>{buffet.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </section>

      <div className="derniertitre">
        <h2 id="H2">A Journey of Passion and Flavor</h2> <br />
        <h2 id="H22">
          Algeria, Dubai, New York, Chicago —
          <br />A global story built on taste, culture, and excellence.
        </h2>
      </div>
    </div>
  );
}

export default Alain_Passard;
