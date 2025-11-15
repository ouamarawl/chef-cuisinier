import "./Alain_Passard.css";
import React, { useState, useEffect } from "react";
import "@fontsource/montserrat/200.css";
import athmane14 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane14.png";
// import image5 from "../../assets/image5.jpg";
import { useLocation } from "react-router-dom";
// import feuille_d from "../../assets/feuille_d.png";
import EVEIL from "../../assets/images_athmen/EVEIL.JPG";
// import feuille_vert_droite from "../../assets/feuille-vert-droite.png";
// import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";
import feille from "../../assets/feuille.png";
import Vegetal from "../../assets/images_plats/Vegetal.jpg";
import plats from "../../data_plat";
import athman15 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane15.PNG";
import signature_athmane from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/signature_athmane.png";
import athmane_6 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_6.jpg";
import athmane_3 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_3.jpg";
import athmane_4 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_4.jpg";
import athmane_5 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_5.jpg";
import athmane_10 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_10.jpg";
import athmane_11 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_11.jpg";
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

      {/* <img src={feuille_vert_droite} id="feuille_vert_droite" /> */}

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

      {/* <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
      <img src={feuille_d} id="feuille_d_2" /> */}

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

 {/* 🔪 Skills & Expertise — Section 1 */}
<section className="presentation-section-A">
  <img
    src={athmane_3}
    alt="Chef Athmane — Art Culinaire"
    className="chef-image"
  />
  <div className="presentation-text">
    <h3>🎨 Art Culinaire & Innovation</h3>
    <p>
      Chef Athmane allie simplicité et sophistication dans chacun de ses plats. 
      Sa cuisine célèbre des saveurs franches et audacieuses, sublimées par une technique précise 
      et une inspiration puisée de l’Algérie aux grandes cuisines de Dubaï, New York et Chicago.
    </p>
  </div>
</section>
{/* <img src={feuille_vert_droite} id="feuille_vert_droite" /> */}

{/* 🔪 Skills & Expertise — Section 2 */}
<section className="presentation-section-A reverse">
  <img
    src={athmane_4}
    alt="Chef Athmane — Expérience Gastronomique"
    className="chef-image"
  />
  <div className="presentation-text">
    <h3>🍽️ Expérience Gastronomique de Luxe</h3>
    <p>
      Fort de plusieurs années dans des hôtels cinq étoiles et des restaurants d’inspiration Michelin, 
      Chef Athmane offre des expériences culinaires mémorables, où chaque service raconte une histoire 
      d’élégance, d’émotion et d’excellence.
    </p>
  </div>
</section>
{/* <img src={feuille_noir_gauche} id="feuille_noir_gauche" /> */}

{/* 🔪 Skills & Expertise — Section 3 */}
<section className="presentation-section-A">
  <img
    src={athmane_5}
    alt="Chef Athmane — Leadership"
    className="chef-image"
  />
  <div className="presentation-text">
    <h3>👨‍🍳 Leadership & Mentorat</h3>
    <p>
      En tant que chef exécutif expérimenté, il guide son équipe avec discipline et créativité, 
      tout en maintenant les plus hauts standards professionnels en cuisine.
    </p>
  </div>
</section>
{/* <img src={feuille_d} id="feuille_d_2" /> */}

{/* 🔪 Skills & Expertise — Section 4 */}
<section className="presentation-section-A reverse">
  <img
    src={athmane_6}
    alt="Chef Athmane — Maîtrise des Ingrédients"
    className="chef-image"
  />
  <div className="presentation-text">
    <h3>🥗 Maîtrise des Ingrédients & Création de Menus</h3>
    <p>
      De la viande et des fruits de mer de qualité aux herbes et épices délicates, sa connaissance approfondie 
      des ingrédients lui permet de créer des menus de saison mettant en avant fraîcheur, finesse et saveur.
    </p>
  </div>
</section>
{/* <img src={feuille_vert_droite} id="feuille_vert_droite" /> */}

{/* 🔪 Skills & Expertise — Section 5 */}
<section className="presentation-section-A">
  <img
    src={athmane_10}
    alt="Chef Athmane — Création Visuelle"
    className="chef-image"
  />
  <div className="presentation-text">
    <h3>📸 Création Visuelle & Médiatisation Culinaire</h3>
    <p>
      Chef Athmane combine son art culinaire avec la création de contenu moderne, 
      capturant la beauté de ses plats par la photographie et la vidéo, et partageant sa passion avec le monde.
    </p>
  </div>
</section>
{/* <img src={feuille_noir_gauche} id="feuille_noir_gauche" /> */}

{/* 🔪 Skills & Expertise — Section 6 */}
<section className="presentation-section-A reverse">
  <img
    src={athmane_11}
    alt="Chef Athmane — Services Privés"
    className="chef-image"
  />
  <div className="presentation-text">
    <h3>🌟 Services Privés & pour Célébrités</h3>
    <p>
      Réputé pour sa discrétion et son élégance, il conçoit des expériences culinaires exclusives 
      pour des clients de prestige, où chaque repas est parfaitement personnalisé.
    </p>
  </div>
</section>
{/* <img src={feuille_d} id="feuille_d_2" /> */}



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
