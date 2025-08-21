import './Alain_Passard.css';
import React from 'react';
import signature from '../../assets/signature.png';
import "@fontsource/montserrat/200.css";
import CHEF2 from '../../assets/CHEF2.jpg';
import image5 from '../../assets/image5.jpg';
import plat2 from '../../assets/plat2.jpg';
import feuille_d from "../../assets/feuille_d.png";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png"; // feuille verte à droite
import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";

function Alain_Passard() {
  return (
      <div>
    <div className="chef-section">
      <div className="chefimage"></div>
      <div className="chef-content">
        <h2 className="chef-name">ALAIN PASSARD</h2>
        <p className="chef-quote">
          « Je n'ai pas la même main en été avec une <br/>aubergine qu'en hiver avec un rutabaga »
        </p>
        <img
         src={signature} 
          alt="Signature Alain Passard"
          className="chef-signature"
        />
        
      </div>
      
    </div>
  <div className='titredumilieu'>
        <h2> «Chaque jour est le premier jour»</h2>
      </div>
      <section className="presentation-section">
              <img src={CHEF2} alt="Alain Passard" className="chef-image" />
              <div className="presentation-text">
                <h3>Tissu animal</h3>
                <p>
                  Alain Passard est un chef viscéralement attaché à ses fourneaux depuis près de 35 ans. Le Chef est un grand rôtisseur, il a mis longtemps en pratique ce que sa grand-mère lui a transmis :
la passion de la flamme et la cuisson longue des viandes en basse température. Cette passion amènera l’Arpège à devenir l’une des rôtisseries phares de la capitale récompensée de trois étoiles Michelin en 1996.


                </p>
              
              </div>
            </section>
            <img src={feuille_vert_droite} id="feuille_vert_droite" />
            <section className="presentation-section">
              <img src={image5} alt="Alain Passard" className="chef-image" />
              <div className="presentation-text">
                <h3>L’éveil</h3>
                <p>
                  Au début des années 2000, Le Chef vit une profonde rupture dans sa créativité. Il redécouvre alors le jardin, ses fruits, ses légumes et réalise qu’il ne leur a jamais vraiment laissé une place dans ses assiettes. Il décide alors de changer de métier et de se consacrer au tissu végétal.
                </p>
              </div>
            </section>
            <img src={feuille_noir_gauche} id="feuille_noir_gauche" />
            <img src={feuille_d} id="feuille_d_2" />
            <section className="presentation-section">
              <img src={plat2} alt="Alain Passard" className="chef-image" />
              <div className="presentation-text">
                <h3>Tissu végétal</h3>
                <p>
                 Depuis, Alain Passard place le légume au centre de ses assiettes. Rapidement, le Chef devient propriétaire de deux potagers qui fourniront exclusivement les légumes 100% naturels de l’Arpège, un accomplissement et une belle manière de redécouvrir la richesse de chaque saison !
                </p>
                
              </div>
            </section>











       </div>
  );
}

export default Alain_Passard;
