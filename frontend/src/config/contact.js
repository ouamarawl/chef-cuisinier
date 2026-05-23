/**
 * Configuration centralisée des contacts et coordonnées
 * Source unique de vérité pour tous les emails, téléphones et adresses
 */

export const CONTACT = {
  // Email principal du Chef
  primaryEmail: "athmanechef@gmail.com",
  
  // Téléphone principal
  phone: "+1 (224) 526-0067",
  phoneRaw: "2245260067",
  
  // Développeurs
  developers: {
    developer1: "ouamara.wail.m@gmail.com",
    developer2: "bakhoucheromaissa22@gmail.com",
  },
  
  // Localités et services (Chicago focused)
  locations: {
    kitchen: {
      name: "Athmane's Little Kitchen",
      city: "Chicago, USA",
      phone: "+1 (224) 526-0067",
      email: "athmanechef@gmail.com",
      availability: "By appointment only",
      description: "Chef Athmane's creative culinary space",
    },
    private_dining: {
      name: "Private Dining & Events",
      city: "Chicago, USA",
      phone: "+1 (224) 526-0067",
      email: "athmanechef@gmail.com",
      description: "Custom menus, catering, gastronomic experiences",
    },
    },
    creativeKitchen: {
      name: "The Creative Kitchen",
      address: "57 rue de Bourgogne, Paris 7th",
      hours: "Lundi-Vendredi, 10h-18h (sur rendez-vous)",
      email: "athmanechef@gmail.com",
      description: "Studio Artistique - Fusion cuisine et art visuel",
    },
    gourmetBoxes: {
      name: "Chef Athmane's Gourmet Boxes",
      email: "athmanechef@gmail.com",
      description: "Jardinerie",
    },
    chicago: {
      name: "Chicago Office",
      location: "Chicago, USA",
      email: "athmanechef@gmail.com",
      description: "Bureau principal",
    },
  },
  
  // Services et catégories
  services: {
    reservations: "athmanechef@gmail.com",
    collaborations: "office@chef-athmane.com",
    recruitment: "athmanechef@gmail.com",
    press: "office@chef-athmane.com",
    events: "office@chef-athmane.com",
    privateDining: "athmanechef@gmail.com",
  },
};

export default CONTACT;
