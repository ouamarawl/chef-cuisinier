import React, { useState } from "react";
import "./Réservation.css";

const Reservation = () => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation enregistrée pour ${guests} couverts le ${date || "aujourd'hui"} à ${time}`);
  };

  return (
    <section className="zenchef-reservation">
      <h2 className="zenchef-title">Réserver une table</h2>

      <p className="zenchef-policy">
        Selon notre politique en vigueur, vous avez la possibilité d'annuler ou modifier sans frais votre réservation jusqu'à 48 heures avant la date de votre venue.<br />
        Merci de nous contacter au <strong>+33 1 47 05 09 06</strong>.
      </p>

      <form className="zenchef-form" onSubmit={handleSubmit}>
        <label>
          Nombre de couverts :
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} couverts</option>
            ))}
          </select>
        </label>

        <label>
          Date :
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label>
          Horaire :
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        <button type="submit" className="zenchef-btn">Réserver</button>
      </form>

      <p className="zenchef-powered">Rendu possible par <strong>Zenchef</strong></p>
    </section>
  );
};

export default Reservation;
