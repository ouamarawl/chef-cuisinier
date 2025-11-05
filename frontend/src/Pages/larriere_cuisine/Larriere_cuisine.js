import React from "react";
import "./Larriere_cuisine.css";
import signature from "../../assets/signature.png";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import feille from "../../assets/feuille.png";
import image8 from "../../assets/image8.jpg";
import image12 from "../../assets/image12.jpg";
import image13 from "../../assets/image13.jpg";
import image14 from "../../assets/image14.jpg";
import image15 from "../../assets/image15.jpg";
import image9 from "../../assets/image9.jpg";
import { useNavigate } from "react-router-dom";
import athmane_2 from "C:/Users/L13 YOGA/OneDrive/Bureau/mes_projets/projet React/chef-cuisinier/frontend/src/assets/images_athmen/athmane_2.jpg";

function Larriere_cuisine() {
  const navigate = useNavigate();
  return (
    <div className="larriere-cuisine-container">
      <div className="larriere-cuisine-header">
        <h3>The Back Kitchen</h3>
        <img src={feille} />
      </div>

      <h3 className="larriere-cuisine-titre">
        I was born into a very artistic family, a family where the hands were
        everywhere: a grandmother who was a cook, a grandfather who was a
        sculptor, a mother passionate about sewing, and a father who was a
        musician.
      </h3>
      <img
        id="signature"
        src={signature}
        alt="Chef Athman Signature"
        className="chef-signature"
      />

      <section className="section-oeuvres">
        <img src={image15} id="image15" />
        <img src={athmane_2} id="image9" />
        <img src={image14} id="image14" />
        <img src={image12} id="image12" />
        <img src={image13} id="image13" />

        <div className="oeuvres-center">
          <h3>THE CHEF’S WORKS</h3>
          <p>
            Collages, lithographs, bronzes, plates... The works of Chef Athman
            are a visual translation of his passion for beauty and skill: a play
            of colors and textures that can be found both in frames and on the
            plate. They reflect the influence of nature and the importance of
            the eye in the creation of a recipe.
          </p>
          <button
            className="discover-btn-oeuvres"
            onClick={() => navigate("/Chef_Athman#larriere_cuisine")}
          >
            Learn more
          </button>
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
        <img src={athmane_2} />
      </section>
    </div>
  );
}

export default Larriere_cuisine;
