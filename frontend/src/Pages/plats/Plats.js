import React, { useEffect,useState } from "react";
import "./Plats.css";
import dataChef from "./dataChef";
import signature_Athmane from "../../assets/signature_athmane.png";
import plats from "../../data_plat";
function ChefAthmane() {
    const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % plats.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + plats.length) % plats.length);
  };
  useEffect(() => {
    const items = document.querySelectorAll(".Chef-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Fonction pour déterminer la classe CSS selon le nombre d'images
  const getGalleryClass = (imageCount) => {
    if (imageCount === 2) return "images-2";
    if (imageCount === 3) return "images-3";
    if (imageCount === 4) return "images-4";
    if (imageCount === 5) return "images-5";
    if (imageCount === 6) return "images-6";
    if (imageCount === 7) return "images-7";
    if (imageCount === 8) return "images-8";
    return "images-many";
  };

  return (
    <div className="Chef">
      {/* HERO */}
      <section className="chef-hero">
        <div className="chef-hero-overlay">
          <h1 className="chef-title">Les Plats du Chef Athmane</h1>
          <p className="chef-subtitle">
            Une cuisine raffinée où chaque plat raconte une histoire à travers
            des saveurs authentiques et une présentation exceptionnelle.
          </p>
        </div>
      </section>

      {/* PLATS */}
      <div className="Chef-container">
        {dataChef.map((dish) => (
          <article className="Chef-item" key={dish.id}>
            {/* Header avec titre et description */}
            <header className="Chef-item-header">
              <h2 className="Chef-item-title">{dish.title}</h2>
              <p className="Chef-item-description">{dish.description}</p>
            </header>

            {/* Galerie d'images avec layout dynamique */}
            <div
              className={`Chef-item-gallery ${getGalleryClass(dish.images.length)}`}
            >
              {dish.images.map((image, index) => (
                <div
                  className="Chef-gallery-image"
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`${dish.title} - Photo ${index + 1}`}
                    loading="lazy"
                  />
                  {/* Badge avec le nombre total d'images (seulement sur la première image) */}
                  {index === 0 && dish.images.length > 1 && (
                    <span className="Chef-image-count">
                      {dish.images.length} photos
                    </span>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
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
      {/* FOOTER */}
      <footer className="chef-footer">
        <h2>Signature du Chef Athmane</h2>
        <p>« La gastronomie est une émotion visuelle et gustative. »</p>
        <img
          src={signature_Athmane}
          alt="Signature du Chef Athmane"
          className="chef-signature"
        />
      </footer>
    </div>
  );
}

export default ChefAthmane;
