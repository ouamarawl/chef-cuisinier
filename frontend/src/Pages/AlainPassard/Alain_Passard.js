import './Alain_Passard.css';
import React, { useState } from 'react';
import signature from '../../assets/signature.png';
import "@fontsource/montserrat/200.css";
import CHEF2 from '../../assets/CHEF2.jpg';
import image5 from '../../assets/image5.jpg';
import plat2 from '../../assets/plat2.jpg';
import feuille_d from "../../assets/feuille_d.png";
import feuille_vert_droite from "../../assets/feuille-vert-droite.png";
import feuille_noir_gauche from "../../assets/feuille-noir-gauche.png";

// Images du carrousel
import plat3 from '../../assets/plat3.jpg';
import  plat4 from '../../assets/plat4.jpg';
import  plat5 from '../../assets/plat5.jpg';
import  plat6 from '../../assets/plat6.jpg';
import  plat7 from '../../assets/plat7.jpg';
import  plat8 from '../../assets/plat8.jpg';
import  plat9 from '../../assets/plat9.jpg';
import  plat10 from '../../assets/plat10.jpg';

function Alain_Passard() {
  const plats = [
    {
      image: plat3,
      title: 'Carpaccio de Saint-Jacques et radis',
      description: 'Carpaccio of scallops and radishes',
    },
    {
      image: plat4,
      title: 'Gratin d’oignon',
      description: 'Onion gratin',
    },
    {
      image: plat5,
      title: 'Légumes de printemps',
      description: 'Spring vegetables',
    },
    {
      image: plat6,
      title: 'Tartare végétal',
      description: 'vegetal tartare',
    },
    {
      image: plat7,
      title: 'Corps a corps au foin',
      description: 'Hand to hand with hay',
    },
    {
      image: plat8,
      title: 'Chimere agneau pigeon',
      description: 'Chimera lamb pigeon',
    },
    {
      image: plat9,
      title: 'Tartelette potageres ',
      description: 'vegetable tartlets',
    },
    {
      image: plat10,
      title: 'Tarte bouquet de Roses',
      description: 'Rose Bouquet Pie',
    },
    
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % plats.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + plats.length) % plats.length);
  };

  return (
    <div>
      <div className="chef-section">
        <div className="chefimage"></div>
        <div className="chef-content">
          <h2 className="chef-name">ALAIN PASSARD</h2>
          <p className="chef-quote">
            « Je n'ai pas la même main en été avec une <br />aubergine qu'en hiver avec un rutabaga »
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
            Alain Passard est un chef viscéralement attaché à ses fourneaux depuis près de 35 ans...
          </p>
        </div>
      </section>

      <img src={feuille_vert_droite} id="feuille_vert_droite" />

      <section className="presentation-section">
        <img src={image5} alt="Alain Passard" className="chef-image" />
        <div className="presentation-text">
          <h3>L’éveil</h3>
          <p>
            Au début des années 2000, Le Chef vit une profonde rupture dans sa créativité...
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
            Depuis, Alain Passard place le légume au centre de ses assiettes...
          </p>
        </div>
      </section>

      {/* 🔄 Carrousel des plats */}
      <section className="carousel-container">
        <div className="carousel-slide">
          <img src={plats[index].image} alt={plats[index].title} className="carousel-image" />
          <div className="carousel-text">
            <h2 className="dish-name">{plats[index].title}</h2>
            <p className="dish-description">{plats[index].description}</p>
          </div>
        </div>
        <div className="carousel-nav">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </section>
      <div className='derniertitre'>
        <h2 id='H2'> Une Obsession 4 saisons / 5 sens</h2> <br/>
        <h2 id='H22'> Nature,Saisons,Potager,Jardinier,Tissu Animal,<br/>Tissu végétal,École du feu,La main,Le gout,<br/>La musique,Transmission,Couleurs,Art,Artisans,<br/>Maison de cuisine,Les Paniers d’Alain,<br/>Cuisine de voisinage.</h2>
      </div>
    </div>
  );
}

export default Alain_Passard;
