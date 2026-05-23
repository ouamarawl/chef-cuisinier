/**
 * Composant: ContactCard
 * Carte de contact réutilisable
 * Utilisé par: Contact.js, Footer.js
 */

import React from "react";
import "./ContactCard.css";

export const ContactCard = ({
  icon,
  name,
  address,
  phone,
  email,
  hours,
  description,
  onClick,
}) => {
  return (
    <div className="contact-card">
      {icon && <div className="contact-icon">{icon}</div>}

      {name && <h3 className="contact-name">{name}</h3>}

      {description && <p className="contact-description">{description}</p>}

      <div className="contact-details">
        {address && (
          <div className="detail">
            <span className="label">📍</span>
            <span className="value">{address}</span>
          </div>
        )}

        {phone && (
          <div className="detail">
            <span className="label">📞</span>
            <a href={`tel:${phone}`} className="value">
              {phone}
            </a>
          </div>
        )}

        {email && (
          <div className="detail">
            <span className="label">✉️</span>
            <a href={`mailto:${email}`} className="value">
              {email}
            </a>
          </div>
        )}

        {hours && (
          <div className="detail">
            <span className="label">🕐</span>
            <span className="value">{hours}</span>
          </div>
        )}
      </div>

      {onClick && (
        <button className="contact-action" onClick={onClick}>
          En savoir plus
        </button>
      )}
    </div>
  );
};

export default ContactCard;
