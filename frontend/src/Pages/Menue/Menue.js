import React, { useEffect } from "react";
import "./Manue.css";
import data_menue from "./data_menue";
import signature_Athmane from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/signature_athmane.png";

function Menue() {
  // Effet d’apparition douce sur les plats
  useEffect(() => {
    const items = document.querySelectorAll(".Menue-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="Menue">
      {/* HERO SECTION */}
      <section className="menue-hero">
        <div className="menue-hero-overlay">
          <h1 className="menue-title">Le Menu du Chef Athmane</h1>
          <p className="menue-subtitle">
            Une expérience gastronomique d’exception, où chaque plat reflète la passion et le raffinement du Chef.
          </p>
        </div>
      </section>

      {/* A PROPOS DU MENU */}
      <section className="menue-about">
        <h2>À propos du menu</h2>
        <p>
          Chaque création culinaire est pensée pour éveiller vos sens : 
          des textures surprenantes, des arômes subtils et des présentations élégantes.
          Le Chef Athmane met un point d’honneur à allier tradition et modernité dans chacun de ses plats.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="menue-categories">
        <div className="category">
          <h3>Entrées</h3>
          <p>Fraîcheur, équilibre et élégance pour commencer votre expérience culinaire.</p>
        </div>
        <div className="category">
          <h3>Plats Principaux</h3>
          <p>Des créations gourmandes, mariant saveurs authentiques et techniques modernes.</p>
        </div>
        <div className="category">
          <h3>Desserts</h3>
          <p>Douceurs raffinées et finitions parfaites pour conclure en beauté.</p>
        </div>
      </section>

      {/* TES PLATS (inchangés) */}
      <div className="Menue-container">
        {data_menue.map((item, index) => (
          <div key={index} className="Menue-item">
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="menue-footer">
        <h2>Une signature du Chef Athmane</h2>
        <p>“La gastronomie est l’art de transformer la passion en émotion.”</p>
        <img
          src={signature_Athmane}
          alt="Signature du Chef Athmane"
          className="menue-signature"
        />
      </footer>
    </div>
  );
}

export default Menue;
