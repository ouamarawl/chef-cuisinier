/**
 * Configuration Chef Athmane
 * Information unifiée et centralisée sur le Chef Athmane
 * Source de vérité basée sur ChefAthmane.js et Home.js
 */

export const CHEF = {
  // Identité
  fullName: "ATHMANE OUAMARA",
  firstName: "Athmane",
  lastName: "Ouamara",
  role: "Executive Chef",
  location: "Chicago, USA",
  
  // Citation signature
  quote: "Cooking is the art of turning simplicity into emotion.",
  
  // Citations additionnelles
  quotes: {
    main: "Cooking is the art of turning simplicity into emotion.",
    gastronomie: "Gastronomy is the art of transforming passion into emotion.",
    artistique: "I was born into a very artistic family — a grandmother who cooked, a grandfather who sculpted, a mother who sewed, a father who played music. Everywhere, hands at work.",
  },
  
  // Plat signature
  signatureDish: "Agneau grillé",
  
  // Biographie courte (Home.js)
  shortBio: "Chef Athmane Ouamara, originaire d'Algérie, a construit sa carrière au travers des plus grandes destinations culinaires du monde. De Dubai à New York, en passant par Chicago, il a collaboré avec les plus grands chefs mondiaux.",
  
  // Parcours professionnel détaillé
  journey: {
    algeria: {
      country: "Algeria — Where It All Began",
      flag: "🇩🇿",
      description: "Apprentissage humble mais riche en cuisine familiale. Fondements : saveurs honnêtes, chaleur de l'hospitalité, discipline",
      keyPoints: [
        "Cuisine familiale traditionnelle algérienne",
        "Fondements : saveurs honnêtes et sincères",
        "Apprentissage de l'hospitalité authentique",
        "Discipline et rigueur dès le départ",
      ],
      photos: ["athmane_22", "athmane_32", "athmane_26", "athmane_31"],
    },
    dubai: {
      country: "Dubai — A Taste of Luxury",
      flag: "🇦🇪",
      description: "Travail prestigieux chez Emaar et Taj Hotel. Expérience auprès des plus hauts niveaux de la gastronomie de luxe.",
      keyPoints: [
        "Travail chez Emaar (hôtel prestigieux)",
        "Cuisinier pour le Président des Émirats",
        "Expérience Taj Hotel",
        "Leçon clé : la nourriture peut devenir une expérience qui touche le cœur",
      ],
    },
    newyork: {
      country: "New York — The School of Excellence",
      flag: "🇺🇸",
      description: "Apprentissage intensif auprès du chef Jean-Georges, l'un des chefs les plus renommés du monde.",
      keyPoints: [
        "Apprentissage auprès du chef Jean-Georges (mondialement renommé)",
        "Focus sur la précision et la discipline",
        "Respect absolu des détails",
        "Transformation d'un plat en chef-d'œuvre",
      ],
    },
    chicago: {
      country: "Chicago — Where the Dream Grows",
      flag: "🏙️",
      description: "Domicile actuel. Chef exécutif à La Salle Hotel, collaboration avec Fabio Viviani, chef italien légendaire.",
      keyPoints: [
        "Chef exécutif à La Salle Hotel",
        "Collaboration avec Fabio Viviani (chef italien légendaire)",
        "Identité culinaire personnelle : audacieuse et raffinée",
        "Fusion de racines algériennes avec perspective globale",
        "Plat signature : agneau grillé",
      ],
    },
  },
  
  // Compétences et missions (6 piliers)
  skills: [
    {
      icon: "🎨",
      title: "Art Culinaire & Innovation",
      description: "Transforme la simplicité en sophistication. Techniques précises, créativité constante, harmonie des saveurs.",
    },
    {
      icon: "🍽️",
      title: "Expérience Gastronomique de Luxe",
      description: "Services 5 étoiles, standards Michelin, présentation exceptionnelle, menu dégustation personnalisé.",
    },
    {
      icon: "👨‍🍳",
      title: "Leadership & Mentorat",
      description: "Guide d'équipe bienveillant, transmission de discipline et créativité, formation continue.",
    },
    {
      icon: "🥗",
      title: "Maîtrise Ingrédients & Menus",
      description: "Expert en viandes, fruits de mer, herbes, créativité saisonnière, adaptation régimes spéciaux.",
    },
    {
      icon: "📸",
      title: "Création Visuelle & Médiatisation",
      description: "Photo culinaire, vidéo, partage contenu, présence médiatique, storytelling gastronomique.",
    },
    {
      icon: "🌟",
      title: "Services Privés & Célébrités",
      description: "Expériences exclusives et personnalisées, discrétion absolue, adaptation haute demande.",
    },
  ],
  
  // Collaborations importantes
  collaborations: {
    chefJeanGeorges: {
      name: "Chef Jean-Georges",
      description: "Chef renommé mondialement",
      location: "New York",
      impact: "Formation en Excellence culinaire",
    },
    fabioViviani: {
      name: "Fabio Viviani",
      description: "Chef italien légendaire",
      location: "Chicago",
      impact: "Collaboration en Chicago",
    },
  },
  
  // Services offerts
  services: [
    "Cuisine raffinée et innovation culinaire",
    "Événements gastronomiques privés",
    "Catering et buffets gourmet",
    "Menus dégustations personnalisés",
    "Services restaurants haut de gamme",
    "Cuisine créative et artistique",
    "Mentoring pour jeunes chefs",
    "Consultations culinaires",
  ],
  
  // Types de buffets proposés
  buffetTypes: [
    "Mediterranean Buffet",
    "Gastronomic Experience",
    "Wedding Celebration",
    "Royal Service",
    "Modern Cuisine",
    "Traditional Flavors",
    "Gourmet Selection",
    "Corporate Excellence",
  ],
};

export default CHEF;
