/**
 * Composant: ImageGallery
 * Galerie d'images avec carousel réutilisable
 * Utilisé par: ChefAthmane.js, Plats.js, etc.
 */

import React from "react";
import { useCarousel } from "../../hooks/useCarousel";
import "./ImageGallery.css";

export const ImageGallery = ({
  images = [],
  title,
  description,
  imagesPerView = 1,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const carousel = useCarousel(images);

  // Auto-play si activé
  React.useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      carousel.nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, carousel]);

  if (!carousel.hasItems) {
    return <div className="image-gallery empty">Aucune image disponible</div>;
  }

  return (
    <div className="image-gallery">
      {title && <h3 className="gallery-title">{title}</h3>}
      {description && <p className="gallery-description">{description}</p>}

      <div className="gallery-container">
        {/* Affichage des images */}
        <div className="gallery-viewport">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${index === carousel.currentIndex ? "active" : ""}`}
            >
              <img src={image} alt={`Gallery item ${index}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Contrôles */}
        {images.length > 1 && (
          <>
            <button
              className="gallery-control prev"
              onClick={carousel.prevSlide}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="gallery-control next"
              onClick={carousel.nextSlide}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Indicateurs */}
      {images.length > 1 && (
        <div className="gallery-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === carousel.currentIndex ? "active" : ""}`}
              onClick={() => carousel.goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Compteur */}
      <div className="gallery-counter">
        {carousel.currentIndex + 1} / {carousel.itemsLength}
      </div>
    </div>
  );
};

export default ImageGallery;
