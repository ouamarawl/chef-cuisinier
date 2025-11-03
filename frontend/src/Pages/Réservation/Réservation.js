import React, { useState } from "react";
import "./Réservation.css";
import { addReservation } from "../../firebaseConfig";

const Reservation = () => {
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !time) {
      setStatus("❌ Please select both date and time.");
      return;
    }

    const reservationData = {
      guests: Number(guests),
      date,
      time,
      createdAt: new Date().toISOString()
    };

    try {
      await addReservation(reservationData);
      setStatus("✅ Reservation successfully saved!");
      setDate("");
      setTime("");
      setGuests(2);
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ An error occurred while saving the reservation.");
    }
  };

  return (
    <section className="zenchef-reservation">
      <h2 className="zenchef-title">Book a Table with Chef Athmane</h2>

      <p className="zenchef-policy">
        Experience the authentic taste of Chef <strong>Athmane Ouamara</strong> — 
        a journey from Algeria to Chicago, blending passion, fire, and flavor. <br />
        You can cancel or modify your reservation free of charge up to 
        48 hours before your visit. <br />
        For any request, please contact us at 
        <strong> +33 1 47 05 09 06</strong>.
      </p>

      <form className="zenchef-form" onSubmit={handleSubmit}>
        <label>
          Number of guests:
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} guests
              </option>
            ))}
          </select>
        </label>

        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        <button type="submit" className="zenchef-btn">Book Now</button>
      </form>

      {status && <p className="status-message">{status}</p>}

      <p className="zenchef-powered">
        Powered by <strong>Zenchef</strong>
      </p>
    </section>
  );
};

export default Reservation;
