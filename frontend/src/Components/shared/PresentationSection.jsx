/**
 * Composant: PresentationSection
 * Section réutilisable de présentation (image + texte)
 * Utilisé par: Home.js, ChefAthmane.js, etc.
 */

import React from "react";
import "./PresentationSection.css";

export const PresentationSection = ({
  image,
  imageAlt = "Presentation image",
  title,
  text,
  button,
  reversed = false,
  logo,
}) => {
  return (
    <section className={`presentation-section ${reversed ? "reversed" : ""}`}>
      <img src={image} alt={imageAlt} className="chef-image" />
      <div className="presentation-text">
        {logo && <div className="presentation-logo">{logo}</div>}
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
        {button && (
          <button className="discover-btn" onClick={button.onClick}>
            {button.label}
          </button>
        )}
      </div>
    </section>
  );
};

export default PresentationSection;
