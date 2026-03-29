import "./ChefAthmane.css";
import React, { useState, useEffect } from "react";
import "@fontsource/montserrat/200.css";
import { useLocation } from "react-router-dom";

// Import des images athmane
import athmane_1 from "../../assets/images_athmen/athmane_1.jpg";
import athmane_2 from "../../assets/images_athmen/athmane_2.jpg";  
import athmane_3 from "../../assets/images_athmen/athmane_3.jpg";  
import athmane_4 from "../../assets/images_athmen/athmane_4.jpg";  
import athmane_5 from "../../assets/images_athmen/athmane_5.jpg";  
import athmane_6 from "../../assets/images_athmen/athmane_6.jpg";  
import athmane_7 from "../../assets/images_athmen/athmane_7.jpg";  
import athmane_8 from "../../assets/images_athmen/athmane_8.jpg";  
import athmane_9 from "../../assets/images_athmen/athmane_9.jpg";  
import athmane_10 from "../../assets/images_athmen/athmane_10.jpg";
import athmane_11 from "../../assets/images_athmen/athmane_11.jpg";
import athmane_12 from "../../assets/images_athmen/athmane_12.jpg";
import athmane_13 from "../../assets/images_athmen/athmane_13.jpg";
import athmane_14 from "../../assets/images_athmen/athmane_14.jpg";
import athmane_15 from "../../assets/images_athmen/athmane_15.jpg";
import athmane_16 from "../../assets/images_athmen/athmane_16.jpg";
import athmane_17 from "../../assets/images_athmen/athmane_17.jpg";
import athmane_18 from "../../assets/images_athmen/athmane_18.jpg";
import athmane_19 from "../../assets/images_athmen/athmane_19.jpg";
import athmane_20 from "../../assets/images_athmen/athmane_20.jpg";
import athmane_21 from "../../assets/images_athmen/athmane_21.jpg";
import athmane_22 from "../../assets/images_athmen/athmane_22.jpg";
import athmane_23 from "../../assets/images_athmen/athmane_23.jpg";
import athmane_24 from "../../assets/images_athmen/athmane_24.jpg";
import athmane_25 from "../../assets/images_athmen/athmane_25.jpg";
import athmane_26 from "../../assets/images_athmen/athmane_26.jpg";
import athmane_27 from "../../assets/images_athmen/athmane_27.jpg";
import athmane_28 from "../../assets/images_athmen/athmane_28.jpg";
import athmane_29 from "../../assets/images_athmen/athmane_29.jpg";
import athmane_30 from "../../assets/images_athmen/athmane_30.jpg";
import athmane_31 from "../../assets/images_athmen/athmane_31.jpg";
import athmane_32 from "../../assets/images_athmen/athmane_32.jpg";
import athmane_33 from "../../assets/images_athmen/athmane_33.jpg";
import athmane_34 from "../../assets/images_athmen/athmane_34.jpg";
import athmane_35 from "../../assets/images_athmen/athmane_35.jpg";
import athmane_36 from "../../assets/images_athmen/athmane_36.jpg";
import athmane_37 from "../../assets/images_athmen/athmane_37.jpg";
import athmane_38 from "../../assets/images_athmen/athmane_38.jpg";
import athmane_39 from "../../assets/images_athmen/athmane_39.jpg";
import athmane_40 from "../../assets/images_athmen/athmane_40.jpg";
import athmane_41 from "../../assets/images_athmen/athmane_41.jpg";
import athmane_42 from "../../assets/images_athmen/athmane_42.jpg";
import athmane_43 from "../../assets/images_athmen/athmane_43.jpg";
import athmane_44 from "../../assets/images_athmen/athmane_44.jpg";
import athmane_45 from "../../assets/images_athmen/athmane_45.jpg";
import athmane_46 from "../../assets/images_athmen/athmane_46.jpg";

import signature_athmane from "../../assets/signature_athmane.png";
import feille from "../../assets/feuille.png";
import plats from "../../data_plat";
// import EVEIL from "../../assets/images_athmen/EVEIL.JPG";
import Vegetal from "../../assets/images_plats/Vegetal.jpg";

function ChefAthmane() {
  const location = useLocation();

  // Scroll to section on hash change
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Fade-up animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Carousel state
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % plats.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + plats.length) % plats.length);
  };

  return (
    <div className="ChefAthmane">
      {/* HERO SECTION */}
      <div className="chef-section">
        <div className="chefimage"></div>
        <div className="chef-content">
          <h2 className="chef-name">ATHMANE OUAMARA</h2>
          <p className="chef-quote">
            "Cooking isn't just about flavor — it's about emotion, travel, and identity."
          </p>
          <img src={signature_athmane} alt="Signature Athmane Ouamara" className="chef-signature" />
        </div>
      </div>

      {/* TITLE */}
      <div className="titredumilieu">
        <span>
          <p>"From Algeria to Chicago — The Journey of a World-Class Chef"</p>
        </span>
      </div>

      {/* 🇩🇿 ALGERIA - Grid 4 photos */}
      <section className="presentation-section-A fade-up">
        <div className="photo-grid">
          <img src={athmane_14} alt="Algeria - Early Days" />
          <img src={athmane_17} alt="Algeria - Heritage" />
          <img src={athmane_18} alt="Algeria - Family" />
          <img src={athmane_19} alt="Algeria - Traditions" />
        </div>
        <div className="presentation-text">
          <h3>🇩🇿 Algeria — Where It All Began</h3>
          <p>
            I was born and raised in Algeria, where the kitchen was the heart of every home. 
            It's where I learned the essentials: honest flavors, the warmth of family gatherings, 
            and the discipline behind true hospitality. The beginnings were humble, but the dream was anything but small.
          </p>
        </div>
      </section>

      {/* 🇦🇪 DUBAI - Grid 4 photos */}
      <section className="presentation-section-A fade-up">
        <div className="photo-grid">
          <img src={athmane_44} alt="Dubai - Emaar" />
          <img src={athmane_20} alt="Dubai - Taj Hotel" />
          <img src={athmane_21} alt="Dubai - Luxury Service" />
          <img src={athmane_22} alt="Dubai - VIP Events" />
        </div>
        <div className="presentation-text">
          <h3>🇦🇪 Dubai — A Taste of Luxury</h3>
          <p>
            My path led me to Dubai, where I joined Emaar and had the privilege of cooking for distinguished guests — 
            including the President of the UAE. Working at the Taj Hotel taught me that food can go far beyond 
            nourishment — it can become an experience that touches people's hearts.
          </p>
        </div>
      </section>

      {/* 🇺🇸 NEW YORK - Grid 4 photos */}
      <section className="presentation-section-A fade-up">
        <div className="photo-grid">
          <img src={Vegetal} alt="New York - Jean-Georges" id="vegetal" />
          <img src={athmane_23} alt="New York - Precision" />
          <img src={athmane_26} alt="New York - Excellence" />
          <img src={athmane_27} alt="New York - Michelin" />
        </div>
        <div className="presentation-text">
          <h3>🇺🇸 New York — The School of Excellence</h3>
          <p>
            From Dubai, I moved to New York to work alongside world-renowned chef Jean-Georges. 
            That chapter shaped my craft — teaching me precision, discipline, and the respect for every small detail 
            that transforms a dish into a true masterpiece.
          </p>
        </div>
      </section>

      {/* 🏙️ CHICAGO - Grid 4 photos */}
      <section className="presentation-section-A fade-up">
        <div className="photo-grid">
          <img src={athmane_15} alt="Chicago - La Salle Hotel" />
          <img src={athmane_42} alt="Chicago - Fabio Viviani" />
          <img src={athmane_43} alt="Chicago - Signature Dishes" />
          <img src={athmane_41} alt="Chicago - Private Chef" />
        </div>
        <div className="presentation-text">
          <h3>🏙️ Chicago — Where the Dream Grows</h3>
          <p>
            Today, Chicago is where I call home. I worked at La Salle Hotel before joining the team of legendary 
            Italian chef Fabio Viviani. Here, I developed my own culinary identity — bold, refined flavors that blend 
            my Algerian roots with a global perspective. My grilled meats, especially lamb, have become my signature dishes.
          </p>
          <br />
          <p>
            🚀 Algeria → Dubai → New York → Chicago<br />
            My journey isn't just about places — it's about passion, perseverance, and evolving alongside 
            some of the world's greatest chefs.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION 1 */}
      <section className="presentation-section-A fade-up">
        <img src={athmane_3} alt="Chef Athmane — Art Culinaire" className="chef-image" />
        <div className="presentation-text">
          <h3>🎨 Art Culinaire & Innovation</h3>
          <p>
            Chef Athmane allie simplicité et sophistication dans chacun de ses plats. 
            Sa cuisine célèbre des saveurs franches et audacieuses, sublimées par une technique précise 
            et une inspiration puisée de l'Algérie aux grandes cuisines de Dubaï, New York et Chicago.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION 2 */}
      <section className="presentation-section-A fade-up">
        <img src={athmane_4} alt="Chef Athmane — Expérience Gastronomique" className="chef-image" />
        <div className="presentation-text">
          <h3>🍽️ Expérience Gastronomique de Luxe</h3>
          <p>
            Fort de plusieurs années dans des hôtels cinq étoiles et des restaurants d'inspiration Michelin, 
            Chef Athmane offre des expériences culinaires mémorables, où chaque service raconte une histoire 
            d'élégance, d'émotion et d'excellence.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION 3 */}
      <section className="presentation-section-A fade-up">
        <img src={athmane_5} alt="Chef Athmane — Leadership" className="chef-image" />
        <div className="presentation-text">
          <h3>👨‍🍳 Leadership & Mentorat</h3>
          <p>
            En tant que chef exécutif expérimenté, il guide son équipe avec discipline et créativité, 
            tout en maintenant les plus hauts standards professionnels en cuisine.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION 4 */}
      <section className="presentation-section-A fade-up">
        <img src={athmane_6} alt="Chef Athmane — Maîtrise des Ingrédients" className="chef-image" />
        <div className="presentation-text">
          <h3>🥗 Maîtrise des Ingrédients & Création de Menus</h3>
          <p>
            De la viande et des fruits de mer de qualité aux herbes et épices délicates, sa connaissance approfondie 
            des ingrédients lui permet de créer des menus de saison mettant en avant fraîcheur, finesse et saveur.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION 5 */}
      <section className="presentation-section-A fade-up">
        <img src={athmane_10} alt="Chef Athmane — Création Visuelle" className="chef-image" />
        <div className="presentation-text">
          <h3>📸 Création Visuelle & Médiatisation Culinaire</h3>
          <p>
            Chef Athmane combine son art culinaire avec la création de contenu moderne, 
            capturant la beauté de ses plats par la photographie et la vidéo, et partageant sa passion avec le monde.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION 6 */}
      <section className="presentation-section-A fade-up">
        <img src={athmane_11} alt="Chef Athmane — Services Privés" className="chef-image" />
        <div className="presentation-text">
          <h3>🌟 Services Privés & pour Célébrités</h3>
          <p>
            Réputé pour sa discrétion et son élégance, il conçoit des expériences culinaires exclusives 
            pour des clients de prestige, où chaque repas est parfaitement personnalisé.
          </p>
        </div>
      </section>

      {/* SIGNATURE DISHES TITLE */}
      <div className="last-title">
        <h3>Signature Dishes</h3>
        <img src={feille} alt="decoration" />
      </div>

      {/* CAROUSEL */}
      <section className="carousel-container" id="buffet_carousel">
        <button className="prev-btn" onClick={prevSlide} aria-label="Previous dish">
          ❮
        </button>

        <div className="carousel-track">
          {plats.map((buffet, i) => {
            let position = "";
            const diff = i - index;
            const totalItems = plats.length;

            let distance = diff;
            if (Math.abs(diff) > totalItems / 2) {
              distance = diff > 0 ? diff - totalItems : diff + totalItems;
            }

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

        <button className="next-btn" onClick={nextSlide} aria-label="Next dish">
          ❯
        </button>
      </section>

      {/* FINAL MESSAGE */}
      <div className="derniertitre">
        <h2 id="H2">A Journey of Passion and Flavor</h2>
        <br />
        <h2 id="H22">
          Algeria, Dubai, New York, Chicago —<br />
          A global story built on taste, culture, and excellence.
        </h2>
      </div>
    </div>
  );
}

export default ChefAthmane;