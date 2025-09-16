import "./Alain_Passard.css";
import React, { useState } from "react";
import signature from "../../assets/signature.png";
import "@fontsource/montserrat/200.css";
import CHEF2 from "../../assets/images_athmen/CHEF2.JPG";
import image5 from "../../assets/image5.jpg";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import feuille_d from "../../assets/feuille_d.png";
import EVEIL from "../../assets/images_athmen/EVEIL.JPG";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png";
import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";
import feille from "../../assets/feuille.png";
import Vegetal from "../../assets/images_plats/Vegetal.jpg";
// Images du carrousel
// Génération automatique des imports des plats
const plats = [];
for (let i = 1; i <= 62; i++) {
  if (i !== 21) { // exclure plat21 s'il n'existe pas
    plats.push({
      image: require(`../../assets/images_plats/plat${i}.jpg`),
      title: `Plat ${i}`,
      description: `Dish ${i}`,
    });
  }
}


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

  return (
    <div className="Alain_passard">
      <div className="chef-section">
        <div className="chefimage"></div>
        <div className="chef-content">
          <h2 className="chef-name">ALAIN PASSARD</h2>
          <p className="chef-quote">
            « Je n'ai pas la même main en été
            <br /> avec une aubergine qu'en hiver
            <br /> avec un rutabaga »
          </p>
          <img
            src={signature}
            alt="Signature Alain Passard"
            className="chef-signature"
          />
        </div>
      </div>

      <div className="titredumilieu">
        <span>
          <p> «Chaque jour est le premier jour»</p>
        </span>
      </div>

      <section className="presentation-section-A">
        <img src={CHEF2} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>Tissu animal</h3>
          <p>
            Alain Passard est un chef viscéralement attaché à ses fourneaux
            <br />
            depuis près de 35 ans. Le Chef est un grand rôtisseur, il a mis
            <br />
            longtemps en pratique ce que sa grand-mère lui a transmis : la
            <br />
            passion de la flamme et la cuisson longue des viandes en basse
            <br />
            température. Cette passion amènera l’Arpège à devenir l’une des
            <br />
            rôtisseries phares de la capitale récompensée de trois étoiles
            <br />
            Michelin en 1996.
          </p>
        </div>
      </section>

      <img src={feuille_vert_droite} id="feuille_vert_droite" />

      <section className="presentation-section-A">
        <img src={EVEIL} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>L’éveil</h3>
          <p>
            Au début des années 2000, Le Chef vit une profonde rupture dans sa
            créativité. Il redécouvre alors le jardin, ses fruits, ses légumes
            et réalise qu’il ne leur a jamais vraiment laissé une place dans ses
            assiettes. Il décide alors de changer de métier et de se consacrer
            au tissu végétal.
          </p>
        </div>
      </section>

      <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
      <img src={feuille_d} id="feuille_d_2" />

      <section className="presentation-section-A">
        <img
          id="vegetal"
          src={Vegetal}
          alt="Alain Passard"
          className="chef-image"
        />
        <div className="presentation-text">
          <h3>Tissu végétal</h3>
          <p>
            Depuis, Alain Passard place le légume au centre de ses assiettes.
            Rapidement, le Chef devient propriétaire de deux potagers qui
            fourniront exclusivement les légumes 100% naturels de l’Arpège, un
            accomplissement et une belle manière de redécouvrir la richesse de
            chaque saison !
          </p>
        </div>
      </section>
      {/* block */}
      <div className="last-title">
        <h3>Plats signatures</h3>
        <img src={feille} />
      </div>

      <section className="carousel-container" id="larriere_cuisine">
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
              <div key={i} className={`carousel-item ${position}`}>
                <img src={plat.image} alt={plat.title} />
                <div key={i} className={`carousel-info ${positionInfo}`}>
                  <div key={i} className={`ligne_H ${positionInfo}`}></div>
                  <div
                    style={{
                   
                      marginRight: "25%",
                      marginTop: "-3%",
                     
                    }}
                  >
                    <p key={i} className={`plat_title ${positionInfo}`}>
                      {plat.title}
                    </p>
                    <p key={i} className={`plat_description ${positionInfo}`}>
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
      </section>

      {/* 🔄 Carrousel des plats */}
      <div className="derniertitre">
        <h2 id="H2"> Une Obsession 4 saisons / 5 sens</h2> <br />
        <h2 id="H22">
          {" "}
          Nature,Saisons,Potager,Jardinier,Tissu Animal,
          <br />
          Tissu végétal,École du feu,La main,Le gout,
          <br />
          La musique,Transmission,Couleurs,Art,
          <br />
          Artisans, Maison de cuisine,Les Paniers d’Alain,
          <br />
          Cuisine de voisinage.
        </h2>
      </div>
      {/* block */}
    </div>
  );
}

export default Alain_Passard;
