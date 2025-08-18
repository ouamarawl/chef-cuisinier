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
            Demandes d’informations, réservations, bons cadeaux… <br/> 
            Nos
            réceptionnistes sont à votre disposition du lundi <br/>
            au vendredi de 09H
            à 17h00 Arpège 84 rue de Varenne,<br/>
             Paris 7e Téléphone : + 33 (0)1 47<br/>
            05 09 06 Mail : restaurant@alain-passard.com
          </p>
           <br/>
          <br/>
          <br/>
          <br/>
          <h3>Bureau</h3>
          <p>
            Les équipes du bureau sont à votre disposition pour toute <br/>demande
            concernant : – Évènements en France et à l’international <br/>
            – Presse –
            Communication & Marketing – Collaborations & Partenariats <br/>
            – Requêtes
            spéciales à l’attention du Chef Passard Email :<br/>
            bureau@alain-passard.com Demande relative à la <br/>comptabilité :
            comptabilite@alain-passard.com
          </p>
           <br/>
          <br/>
          <br/>
          <br/>
          <h3>Recrutement</h3>
          <p>
            L’Arpège est à la recherche de ses nouveaux talents !<br/> N’hésitez pas
            à nous transmettre votre candidature spontanée ! Email :<br/>
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
