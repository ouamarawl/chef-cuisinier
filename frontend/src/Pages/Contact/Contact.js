import React from "react";
import "./Contact.css";
import feuille_d from "../../assets/feuille_d.png";
import feille from "../../assets/feuille.png";
import image11 from "../../assets/image11.jpg";
function Contact() {
  return (
    <div className="contact_container">
      <h3>Contact</h3>
      <img src={ feille} id="feuille_contact" />
      <div className="contact-detail">
        <div className="block-g">
          <img src={image11} />
          <div className="lign"></div>
          <h3>Les Paniers d’Alain</h3>
          <p>
            Pour toute demande concernant les Paniers d’Alain ou nos<br/> potagers :
            Email : paniers@alain-passard.com
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <h3>L’Arrière Cuisine</h3>
          <p>
            Pour toute demande concernant l’univers artistique du<br/> Chef Alain
            Passard : « Arrière Cuisine » 57 rue de Bourgogne, Paris <br/>7e Du lundi
            au vendredi, de 10h à 18h<br/> Email : bureau@alain-passard.com
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <div className="block-d">
          <h3>Le Restaurant</h3>
          <p>
            Demandes d’informations, réservations,<br/>  bons cadeaux… 
            Nos
            réceptionnistes<br/> sont à votre disposition <br/>du lundi 
            au vendredi de 09H<br/>
            à 17h00 Arpège 84 rue<br/> de Varenne,
             Paris 7e Téléphone : + 33 (0)1 47
            05 09 06<br/> Mail : restaurant@alain-passard.com
          </p>
           <br/>
          <br/>
          <br/>
          <br/>
          <h3>Bureau</h3>
          <p>
            Les équipes du bureau sont à votre <br/>disposition pour toute demande
            concernant :<br/> – Évènements en France <br/>et à l’international 
            – Presse – <br/>
            Communication & Marketing – <br/>Collaborations & Partenariats 
            – Requêtes<br/>
            spéciales à l’attention du <br/>Chef Passard Email :
            bureau@alain-passard.com<br/> Demande relative à la comptabilité :<br/>
            comptabilite@alain-passard.com
          </p>
           <br/>
          <br/>
          <br/>
          <br/>
          <h3>Recrutement</h3>
          <p>
            L’Arpège est à la recherche de ses nouveaux talents !<br/> N’hésitez pas
            à nous transmettre votre <br/>candidature spontanée ! Email :<br/>
            bureau@alain-passard.com
          </p>
           <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
