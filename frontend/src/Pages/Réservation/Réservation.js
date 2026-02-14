import React, { useState } from "react";
import "./Réservation.css";

const Reservation = () => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // La fonction ne fait rien pour le moment
  };

  return (
    <section className="zenchef-reservation">
      <h2 className="zenchef-title">Book a Table with Chef Athmane</h2>

      {/* Message d'indisponibilité */}
      <div className="coming-soon-banner">
        <span className="coming-soon-icon">🔜</span>
        <p className="coming-soon-text">
          <strong>Online reservations coming soon!</strong><br />
          Please call us at <strong>224-526-0067</strong> to book your table.
        </p>
      </div>

      <p className="zenchef-policy">
        Experience the authentic taste of Chef <strong>Athmane Ouamara</strong> — 
        a journey from Algeria to Chicago, blending passion, fire, and flavor. <br />
        You can cancel or modify your reservation free of charge up to 
        48 hours before your visit. <br />
        For any request, please contact us at 
        <strong> 224-526-0067</strong>.
      </p>

      <form className="zenchef-form zenchef-form-disabled" onSubmit={handleSubmit}>
        <label>
          Number of guests:
          <select value={guests} onChange={(e) => setGuests(e.target.value)} disabled>
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} guests
              </option>
            ))}
          </select>
        </label>

        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} disabled />
        </label>

        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} disabled />
        </label>

        <button type="button" className="zenchef-btn zenchef-btn-disabled" disabled>
          Coming Soon
        </button>
      </form>

      <p className="zenchef-powered">
        Powered by <strong>Zenchef</strong>
      </p>
    </section>
  );
};

export default Reservation;