import React, { useState } from "react";
import "./Buffets.css";
import buffetHero from "../../assets/Buffets/plat74.PNG";
import buffet1 from "../../assets/Buffets/buffet-1.jpg";
import buffet2 from "../../assets/Buffets/buffet-2.jpg";
import buffet3 from "../../assets/Buffets/buffet-3.jpg";
import buffet4 from "../../assets/Buffets/buffet-4.jpg";
import buffet5 from "../../assets/Buffets/buffet-5.jpg";
import buffet6 from "../../assets/Buffets/buffet-6.jpg";
import buffet7 from "../../assets/Buffets/buffet-7.jpg";
import buffet8 from "../../assets/Buffets/buffet-8.jpg";
import buffet9 from "../../assets/Buffets/buffet-9.jpg";
import buffet10 from "../../assets/Buffets/buffet-10.jpg";
import buffet11 from "../../assets/Buffets/buffet-11.jpg";
import buffet12 from "../../assets/Buffets/buffet-12.jpg";
import buffet13 from "../../assets/Buffets/buffet-13.jpg";
import buffet14 from "../../assets/Buffets/buffet-14.jpg";
import buffet15 from "../../assets/Buffets/buffet-15.jpg";
import buffet16 from "../../assets/Buffets/buffet-16.jpg";
import buffet17 from "../../assets/Buffets/buffet-17.jpg";
import buffet18 from "../../assets/Buffets/buffet-18.jpg";
import buffet19 from "../../assets/Buffets/buffet-19.jpg";

import data_plat from "../../data_plat";

import signature_athmane from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/signature_athmane.png";
import buffetVideo1 from "../../assets/video/video-buffet-1.MP4";
import buffetVideo2 from "../../assets/video/video-buffet-2.MOV";
import buffetVideo3 from "../../assets/video/video-buffet-3.MOV";
import buffetVideo4 from "../../assets/video/video-buffet-4.MOV";
import buffetVideo5 from "../../assets/video/video-buffet-5.MOV";
import buffetVideo6 from "../../assets/video/video-buffet-6.MOV";

const buffets = [
  {
    image: buffet1,
    title: "Buffet Méditerranéen",
    desc: "Un mélange raffiné d'arômes marins et d'épices du sud.",
  },
  {
    image: buffet2,
    title: "Buffet Oriental",
    desc: "Saveurs envoûtantes inspirées des souks et traditions d'Orient.",
  },
  {
    image: buffet3,
    title: "Buffet Gastronomique",
    desc: "Haute cuisine française servie avec élégance et modernité.",
  },
  {
    image: buffet4,
    title: "Buffet Mariage",
    desc: "Un festin raffiné pour célébrer l'amour et le partage.",
  },
  {
    image: buffet5,
    title: "Buffet Royal",
    desc: "Une expérience luxueuse aux saveurs exceptionnelles.",
  },
  {
    image: buffet6,
    title: "Buffet Moderne",
    desc: "Créativité et design culinaire au service du goût.",
  },
  {
    image: buffet7,
    title: "Buffet Traditionnel",
    desc: "L'authenticité des recettes transmises avec passion.",
  },
  {
    image: buffet8,
    title: "Buffet Gourmet",
    desc: "Un équilibre entre finesse, texture et intensité aromatique.",
  },
  {
    image: buffet9,
    title: "Buffet d'Entreprise",
    desc: "Prestige et professionnalisme au cœur de vos événements.",
  },
];

const Buffet = () => {
  // État pour l'index du carousel
  const [index, setIndex] = useState(0);

  // Fonction pour aller au slide suivant
  const nextSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex === buffets.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Fonction pour aller au slide précédent
  const prevSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return buffets.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="buffet-page">
      {/* HERO SECTION */}
      <section className="buffet-hero">
        <img
          src={buffetHero}
          alt="Buffet by Chef Athmane"
          className="buffet-hero-img"
        />
        <div className="buffet-hero-text">
          <h1>Luxury Buffets by Chef Athmane</h1>
          <p>Elegance, refinement, and unforgettable flavors.</p>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="buffet-philosophy">
        <h2>The Philosophy Behind Every Buffet</h2>
        <p>
          Each buffet is a celebration of taste, color, and emotion. For Chef
          Athmane, it's not only about food — it's about creating a unique
          moment where culinary art meets elegance and generosity.
        </p>
      </section>

      {/* VIDEO SECTION */}
      <section className="buffet-videos">
        <h2>Découvrez Nos Buffets en Vidéo</h2>
        <p>
          Laissez-vous transporter par la créativité et la passion du Chef
          Athmane à travers ces quelques instants capturés en cuisine et lors de
          nos événements.
        </p>

        <div className="video-gallery">
          <div className="video-card">
            <video src={buffetVideo1} autoPlay loop muted playsInline />
          </div>
          <div className="video-card">
            <video src={buffetVideo2} autoPlay loop muted playsInline />
          </div>
          <div className="video-card">
            <video src={buffetVideo3} autoPlay loop muted playsInline />
          </div>
          <div className="video-card">
            <video src={buffetVideo4} autoPlay loop muted playsInline />
          </div>
          <div className="video-card">
            <video src={buffetVideo5} autoPlay loop muted playsInline />
          </div>
          <div className="video-card">
            <video src={buffetVideo6} autoPlay loop muted playsInline />
          </div>
        </div>
      </section>

      {/* ✨ NOUVELLE SECTION AVANT LE CARROUSEL */}
      <section className="buffet-intro-carousel">
        <h2>Un Voyage Visuel à Travers Nos Buffets</h2>
        <p>
          Explorez la richesse et la diversité des créations du Chef Athmane à
          travers cette galerie. Chaque buffet est une œuvre culinaire
          soigneusement pensée pour éveiller vos sens, alliant esthétique,
          saveur et émotion dans un équilibre parfait.
        </p>
      </section>
      {/* GALLERY SECTION */}
      <section className="carousel-container" id="buffet_carousel">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-track">
          {buffets.map((buffet, i) => {
            // Calcul de la position relative par rapport à l'index actuel
            let position = "";
            const diff = i - index;
            const totalItems = buffets.length;

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
                  <p>{buffet.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </section>

      {/* SIGNATURE SECTION */}
      <div className="buffet-signature">
        <p>"Every buffet tells a story — one of passion and precision."</p>
        <img src={signature_athmane} alt="Chef Athmane Signature" />
      </div>
    </div>
  );
};

export default Buffet;
