import React from "react";
import "./Contact.css";
import feille from "../../assets/feuille.png";
import Athmane_12 from "../../assets/images_athmen/athmane_12.jpg";
import Athmane_0 from "../../assets/images_athmen/athmane_0-v2.png";

function Contact() {
  return (
    <div className="contact_container">
      <h3>Contact</h3>
     
      <div className="contact-detail">
        <div className="block-g">
          <img src={Athmane_0} />
          <div className="lign"></div>

          <h3>Athmane's Little Kitchen</h3>
          <p>
            For any request regarding Chef Athmane's creative studio and culinary projects: <br />
            Chicago, Illinois, USA <br />
            By appointment only. <br />
            Email: athmanechef@gmail.com
          </p>
          <br />
          <br />
          <br />
          <br />

          <h3>Private Dinners & Events</h3>
          <p>
            Chef Athmane is available for private dinners, <br />
            exclusive tastings, and gastronomic events <br />
            in Chicago and across the United States. <br />
            Email: athmanechef@gmail.com <br />
            Phone: 2245260067 <br />
            By appointment only.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="block-d">
          <h3>Reservations & Inquiries</h3>
          <p>
            For information requests, reservations, <br />
            or gift experiences, Chef Athmane's team <br />
            is available Monday to Friday <br />
            from 9:00 a.m. to 5:00 p.m. <br />
            Chicago, Illinois, USA <br />
            Phone: 2245260067 <br />
            Email: athmanechef@gmail.com
          </p>
          <br />
          <br />
          <br />
          <br />

          <h3>Office</h3>
          <p>
            The office team is available for any inquiry <br />
            regarding: <br />
            – Events in the USA and abroad <br />
            – Press <br />
            – Communication & Marketing <br />
            – Collaborations & Partnerships <br />
            – Special requests for Chef Athmane <br />
            Email: office@chef-athmane.com <br />
            Accounting inquiries: <br />
            athmanechef@gmail.com
          </p>
          <br />
          <br />
          <br />
          <br />

          <h3>Recruitment</h3>
          <p>
            Chef Athmane is always looking for new talents! <br />
            Feel free to send us your spontaneous application! <br />
            Email: athmanechef@gmail.com
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