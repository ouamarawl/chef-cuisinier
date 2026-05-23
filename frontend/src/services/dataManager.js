/**
 * DataManager - Centralized Data Management Service
 * 
 * Single source of truth for all restaurant data.
 * Provides unified access to dishes, menus, categories, and images.
 * 
 * Usage:
 *   import DataManager from '../services/dataManager.js';
 *   
 *   DataManager.loadAll();
 *   const dishes = DataManager.getSignatureDishes();
 *   const categories = DataManager.getCategories();
 *   const image = DataManager.getImage('plat110');
 */

import signatureDishes from '../data/signature_dishes.json';
import restaurantMenu from '../data/restaurant_menu.json';
import categories from '../data/categories.json';
import imageMap from '../data/imageMap.js';

class DataManager {
  constructor() {
    this.data = {
      signatureDishes: [],
      restaurantMenu: [],
      categories: [],
      imageMap: {},
    };
    this.cache = {};
    this.isLoaded = false;
  }

  /**
   * Initialize and load all data
   */
  loadAll() {
    try {
      this.data.signatureDishes = signatureDishes.signature_dishes || [];
      this.data.restaurantMenu = restaurantMenu.restaurant_menu || [];
      this.data.categories = categories.categories || [];
      this.data.imageMap = imageMap.map || {};
      this.isLoaded = true;
      console.log('✅ DataManager: All data loaded successfully');
      return true;
    } catch (error) {
      console.error('❌ DataManager: Error loading data', error);
      return false;
    }
  }

  /**
   * Get all signature dishes
   * @returns {array}
   */
  getSignatureDishes() {
    return this.data.signatureDishes || [];
  }

  /**
   * Get signature dish by ID
   * @param {number} id
   * @returns {object|null}
   */
  getSignatureDishById(id) {
    return (this.data.signatureDishes || []).find(dish => dish.id === id) || null;
  }

  /**
   * Get signature dishes by category
   * @param {string} category
   * @returns {array}
   */
  getSignatureDishByCategory(category) {
    return (this.data.signatureDishes || []).filter(dish => dish.category === category);
  }

  /**
   * Get featured signature dishes
   * @returns {array}
   */
  getFeaturedSignatureDishes() {
    return (this.data.signatureDishes || []).filter(dish => dish.featured === true);
  }

  /**
   * Search signature dishes by keyword
   * @param {string} keyword
   * @returns {array}
   */
  searchSignatureDishes(keyword) {
    const search = keyword.toLowerCase();
    return (this.data.signatureDishes || []).filter(dish =>
      dish.title.toLowerCase().includes(search) ||
      dish.description.toLowerCase().includes(search) ||
      (dish.ingredients || []).some(ing => ing.toLowerCase().includes(search))
    );
  }

  /**
   * Get all restaurant menu items
   * @returns {array}
   */
  getRestaurantMenu() {
    return this.data.restaurantMenu || [];
  }

  /**
   * Get menu item by ID
   * @param {string} id
   * @returns {object|null}
   */
  getMenuItemById(id) {
    return (this.data.restaurantMenu || []).find(item => item.id === id) || null;
  }

  /**
   * Get menu items by course (appetizer, main, dessert)
   * @param {string} course
   * @returns {array}
   */
  getMenuByCategory(category) {
    return (this.data.restaurantMenu || []).filter(item => item.category === category);
  }

  /**
   * Get featured menu items
   * @returns {array}
   */
  getFeaturedMenuItems() {
    return (this.data.restaurantMenu || []).filter(item => item.featured === true);
  }

  /**
   * Get all categories
   * @returns {array}
   */
  getCategories() {
    return this.data.categories || [];
  }

  /**
   * Get category by ID
   * @param {string} id
   * @returns {object|null}
   */
  getCategoryById(id) {
    return (this.data.categories || []).find(cat => cat.id === id) || null;
  }

  /**
   * Get image path
   * @param {string} imageId
   * @returns {string}
   */
  getImage(imageId) {
    return imageMap.getImage(imageId);
  }

  /**
   * Get multiple images
   * @param {array} imageIds
   * @returns {array}
   */
  getImages(imageIds = []) {
    return imageMap.getImages(imageIds);
  }

  /**
   * Check if image exists
   * @param {string} imageId
   * @returns {boolean}
   */
  hasImage(imageId) {
    return imageMap.hasImage(imageId);
  }

  /**
   * Get all dishes (signature + menu combined)
   * @returns {array}
   */
  getAllDishes() {
    return [
      ...this.getSignatureDishes(),
      ...this.getRestaurantMenu(),
    ];
  }

  /**
   * Get dishes by dietary requirement
   * @param {string} dietary
   * @returns {array}
   */
  getDishesByDietary(dietary) {
    return (this.data.signatureDishes || []).filter(dish =>
      (dish.dietary || []).includes(dietary)
    );
  }

  /**
   * Get dishes by allergen (reverse filter)
   * @param {string} allergen
   * @returns {array}
   */
  getDishesWithoutAllergen(allergen) {
    return (this.data.signatureDishes || []).filter(dish =>
      !(dish.allergens || []).includes(allergen)
    );
  }

  /**
   * Get statistics about the data
   * @returns {object}
   */
  getStatistics() {
    const stats = {
      totalSignatureDishes: this.data.signatureDishes.length,
      totalMenuItems: this.data.restaurantMenu.length,
      totalCategories: this.data.categories.length,
      totalImages: imageMap.getAllImageIds().length,
      featuredDishes: this.getFeaturedSignatureDishes().length,
      categoriesBreakdown: {},
      dietaryOptions: [],
    };

    // Count dishes per category
    (this.data.categories || []).forEach(cat => {
      stats.categoriesBreakdown[cat.id] =
        this.getSignatureDishByCategory(cat.id).length;
    });

    // Collect dietary options
    const allDietary = new Set();
    (this.data.signatureDishes || []).forEach(dish => {
      (dish.dietary || []).forEach(d => allDietary.add(d));
    });
    stats.dietaryOptions = Array.from(allDietary);

    return stats;
  }

  /**
   * Validate all data integrity
   * @returns {object} with validation results
   */
  validateData() {
    const issues = {
      errors: [],
      warnings: [],
      success: true,
    };

    // Check signature dishes have required fields
    (this.data.signatureDishes || []).forEach(dish => {
      if (!dish.id) issues.errors.push(`Dish missing ID`);
      if (!dish.title) issues.errors.push(`Dish ${dish.id} missing title`);
      if (!dish.category) issues.errors.push(`Dish ${dish.id} missing category`);
      if (!dish.images || !Array.isArray(dish.images)) {
        issues.warnings.push(`Dish ${dish.id} has no images`);
      }
    });

    // Check menu items have required fields
    (this.data.restaurantMenu || []).forEach(item => {
      if (!item.id) issues.errors.push(`Menu item missing ID`);
      if (!item.title) issues.errors.push(`Menu item ${item.id} missing title`);
      if (!item.image) issues.warnings.push(`Menu item ${item.id} missing image`);
    });

    // Check all referenced images exist
    const allDishes = this.getAllDishes();
    allDishes.forEach(dish => {
      if (dish.images) {
        dish.images.forEach(imgId => {
          if (!imageMap.hasImage(imgId)) {
            issues.errors.push(`Image not found: ${imgId} (used in ${dish.title})`);
          }
        });
      }
      if (dish.image && !imageMap.hasImage(dish.image)) {
        issues.errors.push(`Image not found: ${dish.image} (used in ${dish.title})`);
      }
    });

    if (issues.errors.length > 0) {
      issues.success = false;
    }

    return issues;
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache = {};
  }

  /**
   * Get data summary
   * @returns {string}
   */
  getSummary() {
    const stats = this.getStatistics();
    return `
📊 DataManager Summary:
  ✅ Signature Dishes: ${stats.totalSignatureDishes}
  ✅ Menu Items: ${stats.totalMenuItems}
  ✅ Categories: ${stats.totalCategories}
  ✅ Images: ${stats.totalImages}
  ✅ Featured: ${stats.featuredDishes}
  ✅ Status: ${this.isLoaded ? 'LOADED' : 'NOT LOADED'}
    `.trim();
  }
}

// Export singleton instance
export default new DataManager();
