/**
 * useData Hook - React Hook for accessing DataManager
 * 
 * Provides easy access to all data management functions
 * in React components.
 * 
 * Usage:
 *   import useData from '../hooks/useData.js';
 *   
 *   const { dishes, categories, getImage } = useData();
 */

import { useState, useEffect } from 'react';
import DataManager from '../services/dataManager.js';

export const useData = () => {
  const [data, setData] = useState({
    dishes: [],
    menu: [],
    categories: [],
    isLoaded: false,
    error: null,
  });

  useEffect(() => {
    // Load data on mount
    const success = DataManager.loadAll();
    
    if (success) {
      setData({
        dishes: DataManager.getSignatureDishes(),
        menu: DataManager.getRestaurantMenu(),
        categories: DataManager.getCategories(),
        isLoaded: true,
        error: null,
      });
    } else {
      setData(prev => ({
        ...prev,
        error: 'Failed to load data',
        isLoaded: true,
      }));
    }
  }, []);

  return {
    // Data
    dishes: data.dishes,
    menu: data.menu,
    categories: data.categories,
    isLoaded: data.isLoaded,
    error: data.error,
    
    // Signature Dishes
    getSignatureDishes: () => DataManager.getSignatureDishes(),
    getSignatureDishById: (id) => DataManager.getSignatureDishById(id),
    getSignatureDishByCategory: (cat) => DataManager.getSignatureDishByCategory(cat),
    getFeaturedSignatureDishes: () => DataManager.getFeaturedSignatureDishes(),
    searchSignatureDishes: (keyword) => DataManager.searchSignatureDishes(keyword),
    
    // Menu
    getRestaurantMenu: () => DataManager.getRestaurantMenu(),
    getMenuItemById: (id) => DataManager.getMenuItemById(id),
    getMenuByCategory: (cat) => DataManager.getMenuByCategory(cat),
    getFeaturedMenuItems: () => DataManager.getFeaturedMenuItems(),
    
    // Categories
    getCategories: () => DataManager.getCategories(),
    getCategoryById: (id) => DataManager.getCategoryById(id),
    
    // Images
    getImage: (id) => DataManager.getImage(id),
    getImages: (ids) => DataManager.getImages(ids),
    hasImage: (id) => DataManager.hasImage(id),
    
    // Utilities
    getAllDishes: () => DataManager.getAllDishes(),
    getDishesByDietary: (dietary) => DataManager.getDishesByDietary(dietary),
    getDishesWithoutAllergen: (allergen) => DataManager.getDishesWithoutAllergen(allergen),
    validateData: () => DataManager.validateData(),
    getStatistics: () => DataManager.getStatistics(),
  };
};

export default useData;
