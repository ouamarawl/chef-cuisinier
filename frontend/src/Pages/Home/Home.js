import React, { useEffect, useState } from "react";
import "./Home.css";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import logo from "../../assets/logo.svg"; // image centrale du slideshow
import image5 from "../../assets/image5.jpg"; // image d'Alain Passard

const images = [
  require("../../assets/image1.jpg"),
  require("../../assets/image2.jpg"),
  require("../../assets/image3.jpg"),
  require("../../assets/image4.jpg")
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
    <div>
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
      <section className="presentation-section">
        <img src={image5} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>ALAIN PASSARD</h3>
          <p>
            « Pour moi, l’été c’est un rendez-vous avec une tomate, un concombre,
            un melon. J’aime les harmoniser pour créer une cuisine désaltérante. »
          </p>
          <button className="discover-btn">DÉCOUVRIR</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
