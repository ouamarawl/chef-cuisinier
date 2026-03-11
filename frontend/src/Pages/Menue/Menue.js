import React, { useEffect } from "react";
import "./Menue.css";
import signature_Athmane from "../../assets/signature_athmane.png";

// Import des 25 images du menu
import menue_1 from '../../assets/menue/menue-1.jpg';
import menue_2 from '../../assets/menue/menue-2.jpg';
import menue_3 from '../../assets/menue/menue-3.jpg';
import menue_4 from '../../assets/menue/menue-4.jpg';
import menue_5 from '../../assets/menue/menue-5.jpg';
import menue_6 from '../../assets/menue/menue-6.jpg';
import menue_7 from '../../assets/menue/menue-7.jpg';
import menue_8 from '../../assets/menue/menue-8.jpg';
import menue_9 from '../../assets/menue/menue-9.jpg';
import menue_10 from '../../assets/menue/menue-10.jpg';
import menue_11 from '../../assets/menue/menue-11.jpg';
import menue_12 from '../../assets/menue/menue-12.jpg';
import menue_13 from '../../assets/menue/menue-13.jpg';
import menue_14 from '../../assets/menue/menue-14.jpg';
import menue_15 from '../../assets/menue/menue-15.jpg';
import menue_16 from '../../assets/menue/menue-16.jpg';
import menue_17 from '../../assets/menue/menue-17.jpg';
import menue_18 from '../../assets/menue/menue-18.jpg';
import menue_19 from '../../assets/menue/menue-19.jpg';
import menue_20 from '../../assets/menue/menue-20.jpg';
import menue_21 from '../../assets/menue/menue-21.jpg';
import menue_22 from '../../assets/menue/menue-22.jpg';
import menue_23 from '../../assets/menue/menue-23.jpg';
import menue_24 from '../../assets/menue/menue-24.jpg';


function Menue() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 50);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
// ENTRÉES
const entrees = [
  { id: 4, image: menue_4, title: "Poached Pear Salad", description: "Poached pear salad" },
  { id: 11, image: menue_11, title: "Beef Tartar", description: "Beef tartar" },
  { id: 14, image: menue_14, title: "Greek Style Octopus", description: "Greek style octopus" },
  { id: 22, image: menue_22, title: "Pan Seared Sea Scallops", description: "Pan seared Sea scallops , ginger, soy sauce, royal white caviar topping" },
  { id: 24, image: menue_24, title: "Lobster Bisque", description: "Lobster bisque" }
];

// PLATS PRINCIPAUX
const plats = [
  { id: 1, image: menue_1, title: "Cod with Black Miso Glaze", description: "Cod with black miso glaze, cabbage jelly , cabbage crumble" },
  { id: 5, image: menue_5, title: "Filet Medallions", description: "Filet medallions, parsnip turmeric puree, shallots balsamic confit, Demi red wine reduction" },
  { id: 7, image: menue_7, title: "Vegetables", description: "Vegetables" },
  { id: 8, image: menue_8, title: "Sole Filet", description: "Sole filet , trio fingering potato , better lemon caper sauce" },
  { id: 9, image: menue_9, title: "Chicken Hawaiian Style", description: "Chicken Hawaiian style" },
  { id: 10, image: menue_10, title: "Taco Lamb Shank", description: "Taco lamb shank" },
  { id: 12, image: menue_12, title: "Chicken Rolled", description: "Chicken rolled" },
  { id: 13, image: menue_13, title: "Salmon Wellington", description: "Salmon Wellington" },
  { id: 15, image: menue_15, title: "Black Sea Bass", description: "Black Sea bass , sweet pea foam" },
  { id: 16, image: menue_16, title: "Wagyu A5", description: "Wagyu A5 , truffle much , red wine reduction" },
  { id: 17, image: menue_17, title: "Japanese Seared Tuna", description: "Japonaise seared tuna , teriyaki glaze" },
  { id: 18, image: menue_18, title: "Lasagna", description: "Lasagna" },
  { id: 19, image: menue_19, title: "Chicken Rolled", description: "Chicken rolled" },
  { id: 20, image: menue_20, title: "Halibut", description: "Halibut, saffron fish fumet" },
  { id: 21, image: menue_21, title: "Halibut Island", description: "Halibut island , bure blanc , dill oil" },
  { id: 23, image: menue_23, title: "Taco Lamb Shank", description: "Taco lamb shank" }
];

// DESSERTS
const desserts = [
  { id: 3, image: menue_3, title: "Strawberry Cake", description: "Strawberry cake" },
  { id: 6, image: menue_6, title: "Poached Pear Rocher", description: "Placer la on sous avec tout les dessert ( poached pear rocher )" },
  
];

  const MenuSection = ({ title, number, description, items }) => (
    <section className="menu-category-section fade-up">
      <div className="category-header">
        <div className="category-number-large">{number}</div>
        <div className="category-title-block">
          <h2>{title}</h2>
          <div className="category-divider"></div>
          <p className="category-desc">{description}</p>
        </div>
      </div>

      <div className="menu-items-grid">
        {items.map((item) => (
          <article key={item.id} className="menu-item-card fade-up">
            <div className="menu-item-image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="menu-item-overlay"></div>
            </div>
            <div className="menu-item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <div className="menue-page">
      
      {/* HERO SECTION */}
      <section className="menue-hero">
        <img src={menue_1} alt="Menu Hero" className="menue-hero-bg" />
        <div className="menue-hero-overlay"></div>
        <div className="menue-hero-content">
          <h1 className="menue-hero-title">Le Menu du Chef</h1>
          <p className="menue-hero-subtitle">
            Un voyage gastronomique en trois actes
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="menue-philosophy fade-up">
        <div className="philosophy-content">
          <h2>L'Art de la Gastronomie</h2>
          <div className="philosophy-divider"></div>
          <p>
            Chaque création culinaire est pensée pour éveiller vos sens : 
            des textures surprenantes, des arômes subtils et des présentations élégantes.
            Le Chef Athmane met un point d'honneur à allier tradition et modernité 
            dans chacun de ses plats.
          </p>
        </div>
      </section>

      {/* ENTRÉES */}
      <MenuSection 
        title="Entrées"
        number="01"
        description="Fraîcheur, équilibre et élégance pour commencer votre expérience culinaire"
        items={entrees}
      />

      {/* PLATS PRINCIPAUX */}
      <MenuSection 
        title="Plats Principaux"
        number="02"
        description="Des créations gourmandes, mariant saveurs authentiques et techniques modernes"
        items={plats}
      />

      {/* DESSERTS */}
      <MenuSection 
        title="Desserts"
        number="03"
        description="Douceurs raffinées et finitions parfaites pour conclure en beauté"
        items={desserts}
      />

      {/* SIGNATURE */}
      <section className="menue-signature fade-up">
        <div className="signature-wrapper">
          <p className="signature-quote">
            "La gastronomie est l'art de transformer la passion en émotion."
          </p>
          <img 
            src={signature_Athmane} 
            alt="Signature du Chef" 
            className="signature-img"
          />
          <p className="signature-name">Chef Athmane Ouamara</p>
        </div>
      </section>

      {/* CTA */}
      <section className="menue-cta fade-up">
        <div className="cta-content">
          <h2>Réservez Votre Table</h2>
          <p>
            Découvrez notre menu complet et laissez-vous transporter 
            par une expérience gastronomique unique
          </p>
          <a href="/Contact" className="cta-btn">Contactez-nous</a>
        </div>
      </section>

    </div>
  );
}

export default Menue;