import React from "react";
import "./Contact.css";
import feuille_d from "../../assets/feuille_d.png";
import feille from "../../assets/feuille.png";
import image11 from "../../assets/image11.jpg";

function Contact() {
  return (
    <div className="contact_container">
      <h3>Contact</h3>
      <img src={feille} id="feuille_contact" />
      <div className="contact-detail">
        <div className="block-g">
          <img src={image11} />
          <div className="lign"></div>
          <h3>Chef Athmane’s Gourmet Boxes</h3>
          <p>
            For any request regarding Chef Athmane’s Gourmet Boxes or our gardens: <br />
            Email: baskets@chef-athmane.com
          </p>
          <br />
          <br />
          <br />
          <br />
          <h3>The Creative Kitchen</h3>
          <p>
            For any request concerning the artistic universe of <br />
            Chef Athmane: “The Creative Kitchen” <br />
            57 rue de Bourgogne, Paris 7th <br />
            Monday to Friday, from 10 a.m. to 6 p.m. <br />
            Email: studio@chef-athmane.com
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="block-d">
          <h3>The Restaurant</h3>
          <p>
            For information requests, reservations, <br />
            or gift vouchers, our reception team <br />
            is available Monday to Friday <br />
            from 9:00 a.m. to 5:00 p.m. <br />
            Restaurant Athmane <br />
            84 rue de Varenne, Paris 7th <br />
            Phone: +33 (0)1 47 05 09 06 <br />
            Email: restaurant@chef-athmane.com
          </p>
          <br />
          <br />
          <br />
          <br />
          <h3>Office</h3>
          <p>
            The office team is available for any inquiry <br />
            regarding: <br />
            – Events in France and abroad <br />
            – Press <br />
            – Communication & Marketing <br />
            – Collaborations & Partnerships <br />
            – Special requests for Chef Athmane <br />
            Email: office@chef-athmane.com <br />
            Accounting inquiries: <br />
            accounting@chef-athmane.com
          </p>
          <br />
          <br />
          <br />
          <br />
          <h3>Recruitment</h3>
          <p>
            Restaurant Athmane is always looking for new talents! <br />
            Feel free to send us your spontaneous application! <br />
            Email: careers@chef-athmane.com
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Contact;
