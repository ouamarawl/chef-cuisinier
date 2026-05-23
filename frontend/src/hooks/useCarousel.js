/**
 * Custom Hook: useCarousel
 * Gère la logique de carousel/slider réutilisable
 * Utilisé par : ChefAthmane.js, Plats.js, et autres sections gallery
 */

import { useState } from "react";

export const useCarousel = (items = []) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsLength = items.length;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsLength);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? itemsLength - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    if (index >= 0 && index < itemsLength) {
      setCurrentIndex(index);
    }
  };
  
  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    currentItem: itemsLength > 0 ? items[currentIndex] : null,
    hasItems: itemsLength > 0,
    itemsLength,
  };
};

export default useCarousel;
