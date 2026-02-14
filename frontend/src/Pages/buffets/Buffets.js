import React, { useEffect, useState } from "react";
import "./Buffets.css";

import buffetHero from "../../assets/Buffets/plat74.PNG";
import signature_athmane from "../../assets/signature_athmane.png";

// Import toutes les images
import buffet1 from "../../assets/Buffets/buffet-1.jpg";
import buffet2 from "../../assets/Buffets/buffet-2.jpg";
import buffet3 from "../../assets/Buffets/buffet-3.jpg";
import buffet4 from "../../assets/Buffets/buffet-4.jpg";
import buffet5 from "../../assets/Buffets/buffet-5.jpg";
import buffet6 from "../../assets/Buffets/buffet-6.jpg";
import buffet7 from "../../assets/Buffets/buffet-7.jpg";
import buffet8 from "../../assets/Buffets/buffet-8.jpg";
import buffet9 from "../../assets/Buffets/buffet-9.jpg";
import buffet10 from "../../assets/Buffets/buffet-10.jpg";
import buffet11 from "../../assets/Buffets/buffet-11.jpg";
import buffet12 from "../../assets/Buffets/buffet-12.jpg";
import buffet13 from "../../assets/Buffets/buffet-13.jpg";
import buffet14 from "../../assets/Buffets/buffet-14.jpg";
import buffet15 from "../../assets/Buffets/buffet-15.jpg";
import buffet16 from "../../assets/Buffets/buffet-16.jpg";
import buffet17 from "../../assets/Buffets/buffet-17.jpg";
import buffet18 from "../../assets/Buffets/buffet-18.jpg";
import buffet19 from "../../assets/Buffets/buffet-19.jpg";
import buffet20 from "../../assets/Buffets/buffet-20.jpg";
import buffet21 from "../../assets/Buffets/buffet-21.jpg";
import buffet22 from "../../assets/Buffets/buffet-22.jpg";
import buffet23 from "../../assets/Buffets/buffet-23.jpg";
import buffet24 from "../../assets/Buffets/buffet-24.jpg";
import buffet25 from "../../assets/Buffets/buffet-25.jpg";
import buffet26 from "../../assets/Buffets/buffet-26.jpg";
import buffet27 from "../../assets/Buffets/buffet-27.jpg";
import buffet28 from "../../assets/Buffets/buffet-28.jpg";
import buffet29 from "../../assets/Buffets/buffet-29.jpg";
import buffet30 from "../../assets/Buffets/buffet-30.jpg";
import buffet31 from "../../assets/Buffets/buffet-31.jpg";
import buffet32 from "../../assets/Buffets/buffet-32.jpg";
import buffet33 from "../../assets/Buffets/buffet-33.jpg";
import buffet34 from "../../assets/Buffets/buffet-34.jpg";
import buffet35 from "../../assets/Buffets/buffet-35.jpg";
import buffet36 from "../../assets/Buffets/buffet-36.jpg";
import buffet37 from "../../assets/Buffets/buffet-37.jpg";
import buffet38 from "../../assets/Buffets/buffet-38.jpg";
import buffet39 from "../../assets/Buffets/buffet-39.jpg";
import buffet40 from "../../assets/Buffets/buffet-40.jpg";
import buffet41 from "../../assets/Buffets/buffet-41.jpg";
import buffet42 from "../../assets/Buffets/buffet-42.jpg";
import buffet43 from "../../assets/Buffets/buffet-43.jpg";
import buffet44 from "../../assets/Buffets/buffet-44.jpg";
import buffet45 from "../../assets/Buffets/buffet-45.jpg";
import buffet46 from "../../assets/Buffets/buffet-46.jpg";
import buffet47 from "../../assets/Buffets/buffet-47.jpg";
import buffet48 from "../../assets/Buffets/buffet-48.jpg";
import buffet49 from "../../assets/Buffets/buffet-49.jpg";
import buffet50 from "../../assets/Buffets/buffet-50.jpg";
import buffet51 from "../../assets/Buffets/buffet-51.jpg";
import buffet52 from "../../assets/Buffets/buffet-52.jpg";
import buffet53 from "../../assets/Buffets/buffet-53.jpg";
import buffet54 from "../../assets/Buffets/buffet-54.jpg";
import buffet55 from "../../assets/Buffets/buffet-55.jpg";
import buffet56 from "../../assets/Buffets/buffet-56.jpg";
import buffet57 from "../../assets/Buffets/buffet-57.jpg";
import buffet58 from "../../assets/Buffets/buffet-58.jpg";
import buffet59 from "../../assets/Buffets/buffet-59.jpg";
import buffet60 from "../../assets/Buffets/buffet-60.jpg";
import buffet61 from "../../assets/Buffets/buffet-61.jpg";
import buffet62 from "../../assets/Buffets/buffet-62.jpg";
import buffet63 from "../../assets/Buffets/buffet-63.jpg";
import buffet64 from "../../assets/Buffets/buffet-64.jpg";
import buffet65 from "../../assets/Buffets/buffet-65.jpg";
import buffet66 from "../../assets/Buffets/buffet-66.jpg";
import buffet67 from "../../assets/Buffets/buffet-67.jpg";
import buffet68 from "../../assets/Buffets/buffet-68.jpg";
import buffet69 from "../../assets/Buffets/buffet-69.jpg";
import buffet70 from "../../assets/Buffets/buffet-70.jpg";
import buffet71 from "../../assets/Buffets/buffet-71.jpg";
import buffet72 from "../../assets/Buffets/buffet-72.jpg";
import buffet73 from "../../assets/Buffets/buffet-73.jpg";

const buffets = [
  {
    image: buffet1,
    title: "Buffet Méditerranéen",
    desc: "Un mélange raffiné d'arômes marins et d'épices du sud.",
  },
  // {
  //   image: buffet2,
  //   title: "Buffet Oriental",
  //   desc: "Saveurs envoûtantes inspirées des souks et traditions d'Orient.",
  // },
  {
    image: buffet3,
    title: "Buffet Gastronomique",
    desc: "Haute cuisine française servie avec élégance et modernité.",
  },
  {
    image: buffet4,
    title: "Buffet Mariage",
    desc: "Un festin raffiné pour célébrer l'amour et le partage.",
  },
  {
    image: buffet5,
    title: "Buffet Royal",
    desc: "Une expérience luxueuse aux saveurs exceptionnelles.",
  },
  {
    image: buffet6,
    title: "Buffet Moderne",
    desc: "Créativité et design culinaire au service du goût.",
  },
  {
    image: buffet7,
    title: "Buffet Traditionnel",
    desc: "L'authenticité des recettes transmises avec passion.",
  },
  {
    image: buffet8,
    title: "Buffet Gourmet",
    desc: "Un équilibre entre finesse, texture et intensité aromatique.",
  },
  {
    image: buffet9,
    title: "Buffet d'Entreprise",
    desc: "Prestige et professionnalisme au cœur de vos événements.",
  },
];
// Tableau des images
const allImages = [
  null,
  buffet1,
  buffet2,
  buffet3,
  buffet4,
  buffet5,
  buffet6,
  buffet7,
  buffet8,
  buffet9,
  buffet10,
  buffet11,
  buffet12,
  buffet13,
  buffet14,
  buffet15,
  buffet16,
  buffet17,
  buffet18,
  buffet19,
  buffet20,
  buffet21,
  buffet22,
  buffet23,
  buffet24,
  buffet25,
  buffet26,
  buffet27,
  buffet28,
  buffet29,
  buffet30,
  buffet31,
  buffet32,
  buffet33,
  buffet34,
  buffet35,
  buffet36,
  buffet37,
  buffet38,
  buffet39,
  buffet40,
  buffet41,
  buffet42,
  buffet43,
  buffet44,
  buffet45,
  buffet46,
  buffet47,
  buffet48,
  buffet49,
  buffet50,
  buffet51,
  buffet52,
  buffet53,
  buffet54,
  buffet55,
  buffet56,
  buffet57,
  buffet58,
  buffet59,
  buffet60,
  buffet61,
  buffet62,
  buffet63,
  buffet64,
  buffet65,
  buffet66,
  buffet67,
  buffet68,
  buffet69,
  buffet70,
  buffet71,
  buffet72,
  buffet73,
];

// Fonction pour créer les données
const createSectionData = (startIdx, endIdx, titlePrefix) => {
  const data = [];
  for (let i = startIdx; i <= endIdx; i++) {
    data.push({
      id: i,
      image: allImages[i],
      title: `${titlePrefix} ${i - startIdx + 1}`,
      desc:
        titlePrefix === "Appetizer"
          ? "Exquisite hot and cold appetizers crafted with finest ingredients"
          : titlePrefix === "Banquet Service"
            ? "Complete buffet service for your special events and celebrations"
            : "Individually plated masterpieces for seated banquet service",
    });
  }
  return data;
};

const appetizersData = [
  // 🔥 HOT
  {
    id: 29,
    image: buffet29,
    title: "Mushroom Vol-au-Vent",
    desc: "mushroom vol au vent",
  },
  {
    id: 53,
    image: buffet53,
    title: "Ratatouille & Feta Tarts",
    desc: "ratatouille tarts and feta",
  },
  {
    id: 26,
    image: buffet26,
    title: "Crab Cake Bites",
    desc: "crabe cakes bites",
  },

  // 🌡️ WARM / TEMPERATE
    {
    id: 33,
    image: buffet33,
    title: "Figs & Foie Gras Bites",
    desc: "figs fois gras bites",
  },
  {
    id: 31,
    image: buffet31,
    title: "Caviar Cones",
    desc: "caviar cones",
  },
  {
    id: 32,
    image: buffet32,
    title: "Heirloom Tomato Bruschetta Bites",
    desc: "heirloom tomato bruschetta bites",
  },

  {
    id: 39,
    image: buffet39,
    title: "Brie Cheese with Raspberry",
    desc: "Brie cheese framboise",
  },

  // ❄️ COLD
  {
    id: 22,
    image: buffet22,
    title: "Lobster Ceviche",
    desc: "lobster ceviche",
  },
  {
    id: 44,
    image: buffet44,
    title: "Shrimp Ceviche",
    desc: "shrimp ceviche",
  },
  {
    id: 65,
    image: buffet65,
    title: "Citrus Sea Scallop Bites",
    desc: "citrus sea scallops bites",
  },
  {
    id: 67,
    image: buffet67,
    title: "Mango Sea Scallops",
    desc: "mango sea scallops",
  },
  {
    id: 52,
    image: buffet52,
    title: "Smoked Salmon & Cream Cheese",
    desc: "smoked salmon and cream cheese",
  },
  {
    id: 64,
    image: buffet64,
    title: "Beef Tartare Bite",
    desc: "beef Tatar bite",
  },
  {
    id: 50,
    image: buffet50,
    title: "Blue Cheese Selection",
    desc: "bleu and blue",
  },
];


const platedDishesData = [
  // 🔥 HOT DISHES
  {
    id: 35,
    image: buffet35,
    title: "Grilled Bone-In Ribeye",
    desc: "grilled bone in ribeye , potato ships, Demi glaze",
  },
  {
    id: 42,
    image: buffet42,
    title: "Ribeye Au Poivre",
    desc: "Ribeyes au poivre sauce and asparagus",
  },
    {
    id: 72,
    image: buffet72,
    title: "Salmon Wellington",
    desc: "Salmon Wellington",
  },
    {
    id: 73,
    image: buffet73,
    title: "Veggies lasagna",
    desc: "Veggies lasagna",
  },
  {
    id: 37,
    image: buffet37,
    title: "Veal Schnitzel",
    desc: "Veal schnitzel,mix wild berry sauce , mush potato",
  },
  {
    id: 46,
    image: buffet46,
    title: "New York Veal",
    desc: "New York veal Served with Swiss shard and home made teriyaki sauce",
  },
  {
    id: 38,
    image: buffet38,
    title: "Lobster with Smoked Bell Pepper Sauce",
    desc: "Lobster served with smoked belle pepper sauce and gree peas",
  },
  {
    id: 45,
    image: buffet45,
    title: "Halibut Al Forno",
    desc: "Halibut served with alforno sauce",
  },

  // 🌡️ WARM / LIGHT
  {
    id: 34,
    image: buffet34,
    title: "Black Sea Bass",
    desc: "Black Sea,potato muslin, asparagus,",
  },

  // ❄️ COLD / FRESH
  {
    id: 41,
    image: buffet41,
    title: "Heirloom Tomato Mozzarella Balls",
    desc: "Heirloom tomato mozzarella balls balsamic glaze and basil oil",
  },
  {
    id: 54,
    image: buffet54,
    title: "Watermelon Feta Salad",
    desc: "Watermelon feta salad",
  },
  {
    id: 66,
    image: buffet66,
    title: "Watermelon Feta Salad",
    desc: "Watermelon feta salad",
  },
  {
    id: 70,
    image: buffet70,
    title: "Oysters and King Crab Legs",
    desc: "Oysters and king crab legs",
  },

];


const banquetsData = [
  // 🔥 HOT / CARVING & LIVE STATIONS
    {
    id: 30,
    image: buffet30,
    title: "Lobster bisque",
     desc:'Lobster bisque',
  },


  {
    id: 47,
    image: buffet47,
    title: "Roasted Whole Lamb Leg Carving",
    desc: "Roasted  whole lamb leg carving !",
  },
  {
    id: 48,
    image: buffet48,
    title: "Lamb Leg and Roasted Beef",
    desc: "Lamb leg and roasted beef",
  },
    {
    id: 28,
    image: buffet28,
    title: "Cauliflower soup",
   desc:'Cauliflower soup',
  },
  {
    id: 56,
    image: buffet56,
    title: "International Omelette Station",
    desc: "International Omelette station !",
  },

  // 🌡️ WARM / MIXED
  {
    id: 55,
    image: buffet55,
    title: "Cheese Pairing and International Salads",
    desc: "Our cheese pairing and international salades",
  },
  {
    id: 68,
    image: buffet68,
    title: "Little International Party",
    desc: "Little international party !",
  },

  // ❄️ COLD / SEAFOOD & SWEETS
  {
    id: 24,
    image: buffet24,
    title: "Caviar and Seafood Selection",
    desc: "Selections of caviar,shrimp cocktail,oysters and crab",
  },
  {
    id: 60,
    image: buffet60,
    title: "Homemade Cakes Selection",
    desc: "Our homemade cakes selections",
  },
  {
    id: 61,
    image: buffet61,
    title: "Mini Desserts and Fruits",
    desc: "Mini desserts and fruits",
  },

  // ❌ PAS DE DESCRIPTION FOURNIE → COMMENTÉS


  // {
  //   id: 57,
  //   image: buffet57,
  //   title: "Gala Dinner Buffet",
  // },

  // {
  //   id: 58,
  //   image: buffet58,
  //   title: "Cocktail Reception",
  // },

  // {
  //   id: 59,
  //   image: buffet59,
  //   title: "Brunch Buffet",
  // },

  // {
  //   id: 62,
  //   image: buffet62,
  //   title: "Pasta Station",
  // },

  // {
  //   id: 63,
  //   image: buffet63,
  //   title: "Dessert Buffet",
  // },
];


const Buffet = () => {
  // État pour l'index du carousel
  const [index, setIndex] = useState(0);

  // Fonction pour aller au slide suivant
  const nextSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex === buffets.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  // Fonction pour aller au slide précédent
  const prevSlide = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return buffets.length - 1;
      }
      return prevIndex - 1;
    });
  };
  useEffect(() => {
    // SOLUTION : Ajouter la classe 'invisible' au démarrage, puis retirer avec observer
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => el.classList.add("invisible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("invisible");
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px 50px 0px", // Déclenche 50px avant que l'élément entre
      },
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const BuffetCard = ({ item }) => {
    return (
      <article key={item.id} className="buffet-card">
        <div className="card-image">
          <img src={item.image} alt={item.title} loading="eager" />
        </div>
        <div className="card-content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </article>
    );
  };

  return (
    <div className="buffets-page">
      <section className="buffets-hero">
        <img src={buffetHero} alt="Luxury Buffets" className="hero-image" />
        <div className="hero-overlay">
          <h1>Luxury Buffets by Chef Athmane</h1>
          <p>Elegance, refinement, and unforgettable flavors</p>
        </div>
      </section>

      <section className="buffets-philosophy fade-in">
        <h2>The Art of Culinary Celebration</h2>
        <p>
          Each buffet is a celebration of taste, color, and emotion. For Chef
          Athmane, it's not only about food — it's about creating a unique
          moment where culinary art meets elegance and generosity.
        </p>
      </section>

      <section className="buffets-section fade-in">
        <div className="section-header">
          <h2>Appetizers – Hot & Cold</h2>
          <p>
            Start your culinary journey with our stunning selection of
            appetizers. From delicate cold preparations to warm, savory bites,
            each piece is crafted to awaken the palate.
          </p>
        </div>
        <div className="buffets-grid">
          {appetizersData.map((item) => (
            <BuffetCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="buffets-section fade-in">
        <div className="section-header">
          <h2>Plated Banquet Dishes</h2>
          <p>
            Individually plated masterpieces for seated banquets. Each dish is
            meticulously crafted and beautifully presented, combining artistry
            with exceptional flavor profiles.
          </p>
        </div>
        <div className="buffets-grid">
          {platedDishesData.map((item) => (
            <BuffetCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="buffets-section fade-in">
        <div className="section-header">
          <h2>Banquets & Buffet Service</h2>
          <p>
            Exquisite buffet experiences designed for celebrations, corporate
            events, and special occasions. Each buffet showcases the finest
            ingredients and Chef Athmane's signature style.
          </p>
        </div>
        <div className="buffets-grid">
          {banquetsData.map((item) => (
            <BuffetCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="carousel-container" id="buffet_carousel">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-track">
          {buffets.map((buffet, i) => {
            // Calcul de la position relative par rapport à l'index actuel
            let position = "";
            const diff = i - index;
            const totalItems = buffets.length;

            // Gestion du wrap-around (circulaire)
            let distance = diff;
            if (Math.abs(diff) > totalItems / 2) {
              distance = diff > 0 ? diff - totalItems : diff + totalItems;
            }

            // Attribution des classes selon la distance (seulement 3 items visibles)
            if (distance === 0) {
              position = "center";
            } else if (distance === -1) {
              position = "left";
            } else if (distance === 1) {
              position = "right";
            } else {
              position = "hidden";
            }

            return (
              <div key={i} className={`buffet-item ${position}`}>
                <img src={buffet.image} alt={buffet.title} />
                <div className="buffet-overlay">
                  <h3>{buffet.title}</h3>
                  <p>{buffet.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </section>
      <section className="buffets-signature fade-in">
        <p className="signature-quote">
          "Every buffet tells a story — one of passion, precision, and the
          pursuit of perfection."
        </p>
        <img
          src={signature_athmane}
          alt="Chef Signature"
          className="signature-img"
        />
        <p className="signature-name">Chef Athmane Ouamara</p>
      </section>

      <section className="buffets-cta fade-in">
        <h2>Ready to Create Your Perfect Event?</h2>
        <p>
          Contact us today to discuss your vision and let Chef Athmane craft a
          customized culinary experience for your special occasion.
        </p>
        <a href="/Contact" className="cta-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Buffet;
