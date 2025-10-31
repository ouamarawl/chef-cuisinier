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
import athman_4 from "../../assets/images_athmen/athmane_4.jpg";

function Larriere_cuisine() {
  const navigate = useNavigate();
  return (
    <div className="larriere-cuisine-container">
      <div className="larriere-cuisine-header">
        <h3>L’Arrière Cuisine</h3>
        <img src={feille} />
      </div>

      <h3 className="larriere-cuisine-titre">
        Né en Algérie, j’ai grandi dans une culture où la cuisine était un art
        de vivre, un héritage de famille et une passion transmise avec le cœur.
        <br />
        De l’Algérie à Dubaï, de New York à Chicago, mon parcours est un voyage
        culinaire à travers les saveurs du monde.
      </h3>
      <img
        id="signature"
        src={signature}
        alt="Signature Chef Athman"
        className="chef-signature"
      />

      <section className="section-oeuvres">
        <img src={image15} id="image15" />
        <img src={athman_4} id="image9" />
        <img src={image14} id="image14" />
        <img src={image12} id="image12" />
        <img src={image13} id="image13" />

        <div className="oeuvres-center">
          <h3>LES ŒUVRES DU CHEF</h3>
          <p>
            La cuisine du Chef Athman est un langage artistique où chaque plat
            raconte une histoire — celle d’un voyage, d’une culture, d’un
            souvenir. <br />
            Formé auprès de grands noms à Dubaï, New York et Chicago, il puise
            son inspiration dans ses racines algériennes pour créer une cuisine
            authentique, généreuse et contemporaine. <br />
            Ses assiettes sont des œuvres qui marient le feu, la précision et la
            passion du goût.
          </p>
          <button
            className="discover-btn-oeuvres"
            onClick={() => navigate("/Chef_Athman#larriere_cuisine")}
          >
            En savoir plus
          </button>
        </div>
      </section>

      <section className="A_decouvrir">
        <div className="A_decouvrir-text">
          <div className="A_decouvrir-text-content">
            <h1>
              <span className="">Découvrir</span>
            </h1>
            <p className="A_decouvrir-paragraph">
              L’univers du Chef Athman est une rencontre entre tradition et
              modernité. <br />
              Ses créations, inspirées de son parcours entre l’Afrique du Nord et
              les grandes cuisines du monde, dévoilent une signature
              audacieuse et élégante. <br />
              <br />
              Chaque plat est une exploration sensorielle — un hommage à la
              flamme, à la terre et aux racines. <br />
              <br />
              Le Chef partage aujourd’hui son art à travers des dîners privés et
              des collaborations culinaires exclusives. <br />
              <br />
              CHICAGO, USA <br />
              Pour toute demande : sur rendez-vous uniquement.
            </p>
          </div>
          <div className="ligne2"></div>
        </div>
        <img src={image1} />
      </section>
    </div>
  );
}

export default Larriere_cuisine;
