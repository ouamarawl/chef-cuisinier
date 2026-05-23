/**
 * Custom Hook: useFadeUpAnimation
 * Gère l'animation fade-up au défilement (Intersection Observer)
 * Utilisé par : ChefAthmane.js, Plats.js, Menue.js
 */

import { useEffect } from "react";

export const useFadeUpAnimation = (selector = ".fade-up") => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Observer une seule fois
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    
    // Observer tous les éléments
    elements.forEach((element) => {
      observer.observe(element);
    });
    
    // Cleanup
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [selector]);
};

export default useFadeUpAnimation;
