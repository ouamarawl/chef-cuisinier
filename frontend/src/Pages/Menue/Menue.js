import React, { useEffect } from "react";
import "./Menue.css";
import signature_Athmane from "../../assets/signature_athmane.png";

// Import des 25 images du menu
import menue_1 from '../../assets/menue/menue-1.jpg';
import menue_2 from '../../assets/menue/menue-2.jpg';
import menue_3 from '../../assets/menue/menue-3.jpg';
import menue_4 from '../../assets/menue/menue-4.jpg';
import menue_5 from '../../assets/menue/menue-5.jpg';
import menue_6 from '../../assets/menue/menue-6.jpg';
import menue_7 from '../../assets/menue/menue-7.jpg';
import menue_8 from '../../assets/menue/menue-8.jpg';
import menue_9 from '../../assets/menue/menue-9.jpg';
import menue_10 from '../../assets/menue/menue-10.jpg';
import menue_11 from '../../assets/menue/menue-11.jpg';
import menue_12 from '../../assets/menue/menue-12.jpg';
import menue_13 from '../../assets/menue/menue-13.jpg';
import menue_14 from '../../assets/menue/menue-14.jpg';
import menue_15 from '../../assets/menue/menue-15.jpg';
import menue_16 from '../../assets/menue/menue-16.jpg';
import menue_17 from '../../assets/menue/menue-17.jpg';
import menue_18 from '../../assets/menue/menue-18.jpg';

import menue_20 from '../../assets/menue/menue-20.jpg';
import menue_21 from '../../assets/menue/menue-21.jpg';
import menue_22 from '../../assets/menue/menue-22.jpg';
import menue_23 from '../../assets/menue/menue-23.jpg';
import menue_24 from '../../assets/menue/menue-24.jpg';

import menue_25 from '../../assets/menue/menue-25.jpg';
import menue_26 from '../../assets/menue/menue-26.jpg';
import menue_27 from '../../assets/menue/menue-27.jpg';
import menue_28 from '../../assets/menue/menue-28.jpg';
import menue_29 from '../../assets/menue/menue-29.jpg';
import menue_30 from '../../assets/menue/menue-30.jpg';
import menue_31 from '../../assets/menue/menue-31.jpeg';


function Menue() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 50);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
// ENTRÉES
const entrees = [
  { id: 4, image: menue_4, title: "Beef tartar", description: "Beef tenderloin, quill eggs, Dijon, caper’s, charlottes, truffle oil, black truffle, Parmesan shaving, arugula" },
  { id: 11, image: menue_11, title: "Poached pear salad", description: "Poached pear in red wine, beets glaze, black berry and ras berries" },
  { id: 14, image: menue_14, title: "Greek style Octopus", description: "Smoked eggplant puree, roasted bell peppers salade, shard lemon" },
  { id: 22, image: menue_22, title: "Smoked sea scallops", description: "Truffle soy ginger sauce, royal white caviar topping" },
  { id: 24, image: menue_24, title: "Lobster bisque", description: "Lobster tails, lobster better, lobster stock" }
];

// PLATS PRINCIPAUX
const plats = [
  { id: 1, image: menue_1, title: "Black miso codfish", description: "Black miso cod, pickled red cabbage, cabbage jelly, cabbage crumble, seaweed" },
  { id: 2, image: menue_2, title: "Carving lamb taco", description: "Slow cooked lamb shank, tomato onion salsa, crispy taco, ki so frescos, cilantro" },
  { id: 5, image: menue_5, title: "Tenderloin medallions", description: "Parsnips turmeric puree, parsnips, balsamic confit shallots, red wine reduction Demi" },
   { id: 20, image: menue_20, title: "Halibut fish fumet", description: "Fresh turmeric fish fumet, asparagus, spring onion" },
  { id: 7, image: menue_7, title: "Baby longoustine, red snapper risotto", description: "Seafood risotto, baby longoustine, fish fumet" },
  { id: 8, image: menue_8, title: "Sole fish", description: "Sole cooked with better, baby fingers potato, red, yellow and purple, lemon better caper sauce" },
  { id: 10, image: menue_10, title: "Hawaiian chicken", description: "Chicken legs boneless, pepper, onion, pineapple, chefs special seasoning" },
  { id: 12, image: menue_12, title: "Classic chicken rolled", description: "Chicken boneless stuffed with kale, sun-dried tomato, chicken muss, homemade chicken jus, mush potato and green beans, chicken lollipop" },
  { id: 13, image: menue_13, title: "Beef Wellington", description: "Beef tenderloin, mushrooms moss, homemade Demi glaze, asparagus" },
  { id: 15, image: menue_15, title: "Black sea bass", description: "Sweet pea, sweet pea Rafael foam, baure blanc sauce" },
  { id: 16, image: menue_16, title: "A5 Wagyu beef", description: "Truffle potato mousseline, beets au jus, beets chips" },
  { id: 17, image: menue_17, title: "Japanese style Black sesame seared tuna", description: "Teriyaki sauce, sweet pea puree, pickled radish" },
  { id: 18, image: menue_18, title: "Vegetable lasagna", description: "Zucchini, eggplant, parm, mozzarella, ricotta, tomato sauce" },
 
  { id: 21, image: menue_21, title: "Island halibut", description: "Center cut halibut better and nuts crusted, dill oil, beurre blanc, micro greens salad" },
  { id: 23, image: menue_23, title: "Salmon Wellington", description: "Wild salmon, fresh dill, shiitake mushrooms, lemon better sauce" }
];

// DESSERTS
const desserts = [
  { id: 3, image: menue_3, title: "Strawberries cake", description: "Vanilla Sponch cake, strawberry jelly, strawberry vanilla ganache, dark chocolate, fresh strawberry’s" },
  { id: 6, image: menue_6, title: "Pear rocher", description: "Pears, dark chocolate, granola topping, pear sauce" },
  { id: 9, image: menue_9, title: "Sweet potato cream brûlée", description: "Sweet potato cream brûlée with caramelized sugar crust" }
];
  const MenuSection = ({ title,  description, items }) => (
    <section className="menu-category-section fade-up">
      <div className="category-header">
        
        <div className="category-title-block">
          <h2>{title}</h2>
          <div className="category-divider"></div>
          <p className="category-desc">{description}</p>
        </div>
      </div>

      <div className="menu-items-grid">
        {items.map((item) => (
          <article key={item.id} className="menu-item-card fade-up">
            <div className="menu-item-image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="menu-item-overlay"></div>
            </div>
            <div className="menu-item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <div className="menue-page">
      
      {/* HERO SECTION */}
      <section className="menue-hero">
        <img src={menue_16} alt="Menu Hero" className="menue-hero-bg" />
        <div className="menue-hero-overlay"></div>
        <div className="menue-hero-content">
          <h1 className="menue-hero-title">The Chef's Menu</h1>
          <p className="menue-hero-subtitle">
            A gastronomic journey in three acts
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="menue-philosophy fade-up">
        <div className="philosophy-content">
          <h2>The Art of Gastronomy</h2>
          <div className="philosophy-divider"></div>
          <p>
            Every culinary creation is thoughtfully designed to awaken your senses: 
            surprising textures, subtle aromas, and elegant presentations.
            Chef Athmane makes it a point of honor to blend tradition and modernity 
            in each of his dishes.
          </p>
        </div>
      </section>

      {/* APPETIZERS */}
      <MenuSection 
        title="Appetizers"       
        description="Freshness, balance, and elegance to begin your culinary experience"
        items={entrees}
      />

      {/* MAIN COURSES */}
      <MenuSection 
        title="Main Courses"
        description="Delicious creations that blend authentic flavors with modern techniques"
        items={plats}
      />

      {/* DESSERTS */}
      <MenuSection 
        title="Desserts"
        description="Refined delicacies and perfect finishes to conclude beautifully"
        items={desserts}
      />

      {/* SIGNATURE */}
      <section className="menue-signature fade-up">
        <div className="signature-wrapper">
          <p className="signature-quote">
            "Gastronomy is the art of transforming passion into emotion."
          </p>
          <img 
            src={signature_Athmane} 
            alt="Chef's Signature" 
            className="signature-img"
          />
          <p className="signature-name">Chef Athmane Ouamara</p>
        </div>
      </section>

      {/* CTA */}
      <section className="menue-cta fade-up">
        <div className="cta-content">
          <h2>Reserve Your Table</h2>
          <p>
            Discover our complete menu and let yourself be transported 
            by a unique gastronomic experience
          </p>
          <a href="/Contact" className="cta-btn">Contact Us</a>
        </div>
      </section>

    </div>
  );
}

export default Menue;