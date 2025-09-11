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

function Larriere_cuisine() {
  return (
    <div className="larriere-cuisine-container">
      <div className="larriere-cuisine-header">
        <h3>L’Arrière Cuisine</h3>
        <img src={feille} />
      </div>

      <h3
        style={{
          color: "#849D75",
          textAlign: "center",
          position: "relative",
          fontFamily: "DM Serif Text , serif",
          fontSize: "35px",
          letterSpacing: ".05em",
          margin: "10% 10% 2% 10%",
        }}
      >
        Je suis né dans une famille très artistique, une famille où la main
        était <br /> partout : une grand-mère cuisinière, un grand-père
        sculpteur, une mère <br />
        passionnée de couture et un père musicien.
      </h3>
      <img
        id="signature"
        src={signature}
        alt="Signature Alain Passard"
        className="chef-signature"
      />

      <section className="section-oeuvres">
        <img src={image15} id="image15"/>
        <img src={image9} id="image9"/>
        <img src={image14} id="image14"/>
        <img src={image12}  id="image12"/>
        <img src={image13}  id="image13"/>
        
        
        <div className="oeuvres-center">
          <h3>LES ŒUVREs DU CHEF</h3>
          <p>
            Collages, lithographies, bronzes, assiettes… Les oeuvres du Chef <br/>
            Alain Passard sont une traduction en image de sa passion du beau<br/>
            geste : un jeu de couleurs, de textures que l’on retrouve aussi bien <br/>
            sous cadre que dans l’assiette. Ils traduisent toute l’influence des
            légumes<br/> dans la cuisine du Chef, l’importance de l’oeil dans la
            création d’une recette.
          </p>
          <button className="discover-btn">En savoir plus</button>
        </div>
      </section>

      {/* <section className="A_decouvrir">
        <div className=" A_decouvrir-text">
          <div className=" A_decouvrir-text-content">
            <h1>
              <span className="">decouvrir</span>
            </h1>
            <p className=" A_decouvrir-paragraph">
              Beaucoup de créations surprenantes du Chef <br /> Alain Passard
              restent à découvrir ! <br /> <br /> N’hésitez pas à pousser la
              porte de l’Arrière
              <br /> Cuisine pour (re)découvrir l’intégralité de l’univers
              créatif du Chef !<br /> <br />
              ARRIERE CUISINE <br /> 57, rue de Bourgogne
              <br /> 75007 Paris
              <br /> <br /> Du lundi au vendredi,de 10h à 18h sur rendez
              <br /> -vous
              <br /> <br />
            </p>
          </div>
          <div class="ligne"></div>
        </div>
        <img src={image1} />
      </section> */}
    </div>
  );
}

export default Larriere_cuisine;
