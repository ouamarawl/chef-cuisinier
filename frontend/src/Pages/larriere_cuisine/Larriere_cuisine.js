import React from "react";
import "./Larriere_cuisine.css";
import feille from "../../assets/feuille.png";
import plat85 from "../../assets/images_plats/plat85.JPG";
import plat87 from "../../assets/images_plats/plat87.JPG";
import plat91 from "../../assets/images_plats/plat91.JPG";
import plat100 from "../../assets/images_plats/plat100.JPG";
import signature from "../../assets/signature_athmane.png";
import { useNavigate } from "react-router-dom";
import athmane_2 from "../../assets/images_athmen/athmane_2.jpg";
import Athmane_0 from "../../assets/images_athmen/athmane_0-v2.png";

function Larriere_cuisine() {
  const navigate = useNavigate();
  return (
    <div className="larriere-cuisine-container">
      {/* REMPLACEZ les 3 blocs (header + h3 + img signature) par ceci : */}

      <div className="bk-intro">
        {/* Numéro décoratif en fond */}
        <span className="bk-intro-num" aria-hidden="true">
          01
        </span>

        {/* Colonne gauche : titre stacked */}
        <div className="bk-intro-left">
          <p className="bk-intro-tag">— Paris, 75007</p>
        <h1 className="bk-intro-title">
  <span>Athmane’s</span>
  <span className="bk-intro-title-mid">Little</span>
  <span>Kitchen</span>
</h1>
        </div>

        {/* Colonne droite : citation + signature */}
        <div className="bk-intro-right">
          <div className="bk-intro-vline" />
          <div className="bk-intro-right-inner">
            <p className="bk-intro-quote">
              I was born into a family of farmers — surrounded by the land, hard
              work, and the simple beauty of nature.
              <br />
              <br />
              From sunrise to sunset, everyone worked with their hands.
            </p>
            <img
              src={signature}
              alt="Signature Chef Athman"
              className="bk-intro-sig"
            />
          </div>
        </div>
      </div>

      <section className="section-oeuvres">
        <img src={plat85} id="image15" />
        <img src={athmane_2} id="image9" />
        <img src={plat87} id="image14" />
        <img src={plat91} id="image12" />
        <img src={plat100} id="image13" />

        <div className="oeuvres-center">
          <h3>THE CHEF’S WORKS</h3>
          <p>
            Collages, lithographs, bronzes, plates... The works of Chef Athman
            are a visual translation of his passion for beauty and skill: a play
            of colors and textures that can be found both in frames and on the
            plate. They reflect the influence of nature and the importance of
            the eye in the creation of a recipe.
          </p>
          {/* <button
            className="discover-btn-oeuvres"
            onClick={() => navigate("/Chef_Athman#larriere_cuisine")}
          >
            Learn more
          </button> */}
        </div>
      </section>

      <section className="A_decouvrir">
        <div className="A_decouvrir-text">
          <div className="A_decouvrir-text-content">
            <h1>
              <span>Discover</span>
            </h1>
            <p className="A_decouvrir-paragraph">
              Many surprising creations by Chef Athman are still waiting to be
              discovered! <br /> <br /> Feel free to open the door to the Back
              Kitchen to (re)discover the full creative universe of the Chef!
              <br /> <br /> BACK KITCHEN <br /> 57, rue de Bourgogne
              <br /> 75007 Paris
              <br /> <br /> From Monday to Friday, 10 AM to 6 PM, by
              appointment.
              <br /> <br />
            </p>
          </div>
          <div class="ligne2"></div>
        </div>
        <img src={Athmane_0} />
      </section>
    </div>
  );
}

export default Larriere_cuisine;
