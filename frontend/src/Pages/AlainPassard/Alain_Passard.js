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
            « Cooking is not just about taste — it's about emotion, travel, and
            identity. »
          </p>
          <img
            src={signature}
            alt="Signature Athmane Ouamara"
            className="chef-signature"
          />
        </div>
      </div>

      <div className="titredumilieu">
        <span>
          <p> «From Algeria to Chicago — The Journey of a Global Chef»</p>
        </span>
      </div>

      {/* 🇩🇿 Algeria */}
      <section className="presentation-section-A">
        <img src={athmane14} alt="Athmane Ouamara" className="chef-image" />
        <div className="presentation-text">
          <h3>🇩🇿 Algeria — Where It All Began</h3>
          <p>
            I grew up in Algeria, where the kitchen was the heart of every home.
            That’s where I learned the fundamentals: honest flavors, the beauty
            of family gatherings, and the discipline that comes with real
            hospitality. The beginning was humble, but the dream was anything
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
            My journey took me to Dubai, where I joined Emaar and had the honor
            of cooking for high-profile guests — even the President of the UAE.
            Working at the Taj Hotel taught me how food can be more than a meal
            — it can be an experience that people feel, not just taste.
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
            From Dubai, I headed to New York to work with world-renowned chef
            Jean-Georges. That chapter refined my craft — precision, discipline,
            and respect for every tiny detail that turns a dish into a
            masterpiece.
          </p>
        </div>
      </section>

      {/* 🏙️ Chicago */}
      <section className="presentation-section-A">
        <img src={athman15} alt="Athmane Ouamara in Chicago" className="chef-image" />
        <div className="presentation-text">
          <h3>🏙️ Chicago — Where the Dream Grows</h3>
          <p>
            Today, I’ve made Chicago my home. I cooked at La Salle Hotel before
            joining the team of legendary Italian chef Fabio Viviani. Here, I
            developed my signature style — simple, bold flavors that blend my
            Algerian roots with a global touch. I became known for my grilled
            meats, especially lamb, which has become my culinary signature.
          </p>
          <br />
          <p>
            🚀 Algeria → Dubai → New York → Chicago <br />
            My story isn’t just about places — it’s about passion, resilience,
            and growing alongside some of the world’s best. Now, as a Private &
            Luxury Chef, I create exclusive dining experiences and share my
            journey with the world.
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
              <div key={plat.title || i} className={`carousel-item ${position}`}>
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
      </section>

      <div className="derniertitre">
        <h2 id="H2"> A Journey of Passion and Flavor</h2> <br />
        <h2 id="H22">
          Algeria, Dubai, New York, Chicago —
          <br />
          A global story built on taste, culture, and excellence.
        </h2>
      </div>
    </div>
  );
}

export default Alain_Passard;
