/**
 * Dish Filter Utilities
 * 
 * Provides advanced filtering capabilities for dishes based on
 * dietary requirements, allergens, difficulty, and other criteria.
 * 
 * Usage:
 *   import { filterByDietary, filterByAllergen } from '../utils/dishFilters.js';
 *   
 *   const vegetarian = filterByDietary(dishes, 'vegetarian');
 *   const glutenFree = filterByAllergen(dishes, 'gluten', 'exclude');
 */

/**
 * Filter dishes by dietary requirement (includes)
 * @param {array} dishes
 * @param {string} dietary - dietary requirement ID
 * @returns {array}
 */
export const filterByDietary = (dishes = [], dietary) => {
  return dishes.filter(dish =>
    (dish.dietary || []).includes(dietary)
  );
};

/**
 * Filter dishes that don't contain allergen
 * @param {array} dishes
 * @param {string} allergen - allergen name
 * @param {string} mode - 'exclude' to exclude allergen, 'include' to only include
 * @returns {array}
 */
export const filterByAllergen = (dishes = [], allergen, mode = 'exclude') => {
  if (mode === 'exclude') {
    return dishes.filter(dish =>
      !(dish.allergens || []).includes(allergen)
    );
  }
  return dishes.filter(dish =>
    (dish.allergens || []).includes(allergen)
  );
};

/**
 * Filter dishes by difficulty level
 * @param {array} dishes
 * @param {string} difficulty - 'easy', 'medium', 'hard'
 * @returns {array}
 */
export const filterByDifficulty = (dishes = [], difficulty) => {
  return dishes.filter(dish => dish.difficulty === difficulty);
};

/**
 * Filter dishes by preparation time
 * @param {array} dishes
 * @param {number} maxTime - maximum time in minutes
 * @returns {array}
 */
export const filterByTime = (dishes = [], maxTime) => {
  return dishes.filter(dish => (dish.servingTime || 0) <= maxTime);
};

/**
 * Filter dishes by multiple allergens (exclude all)
 * @param {array} dishes
 * @param {array} allergens
 * @returns {array}
 */
export const filterByMultipleAllergens = (dishes = [], allergens = []) => {
  return dishes.filter(dish => {
    const dishAllergens = dish.allergens || [];
    return !allergens.some(allergen => dishAllergens.includes(allergen));
  });
};

/**
 * Sort dishes by various criteria
 * @param {array} dishes
 * @param {string} sortBy - 'name', 'difficulty', 'time', 'featured'
 * @param {string} order - 'asc' or 'desc'
 * @returns {array}
 */
export const sortDishes = (dishes = [], sortBy = 'name', order = 'asc') => {
  const sorted = [...dishes];
  
  const compare = (a, b) => {
    let aVal, bVal;
    
    switch (sortBy) {
      case 'name':
        aVal = a.title?.toLowerCase() || '';
        bVal = b.title?.toLowerCase() || '';
        break;
      case 'difficulty':
        const diffOrder = { easy: 1, medium: 2, hard: 3 };
        aVal = diffOrder[a.difficulty] || 0;
        bVal = diffOrder[b.difficulty] || 0;
        break;
      case 'time':
        aVal = a.servingTime || 0;
        bVal = b.servingTime || 0;
        break;
      default:
        return 0;
    }
    
    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  };
  
  return sorted.sort(compare);
};

/**
 * Get featured dishes first
 * @param {array} dishes
 * @returns {array}
 */
export const prioritizeFeatured = (dishes = []) => {
  const featured = dishes.filter(d => d.featured);
  const notFeatured = dishes.filter(d => !d.featured);
  return [...featured, ...notFeatured];
};

/**
 * Advanced filter with multiple criteria
 * @param {array} dishes
 * @param {object} filters - { dietary, allergens, difficulty, maxTime, searchText }
 * @returns {array}
 */
export const applyMultipleFilters = (dishes = [], filters = {}) => {
  let result = [...dishes];
  
  // Filter by search text
  if (filters.searchText) {
    const search = filters.searchText.toLowerCase();
    result = result.filter(dish =>
      dish.title.toLowerCase().includes(search) ||
      dish.description?.toLowerCase().includes(search) ||
      (dish.ingredients || []).some(ing => ing.toLowerCase().includes(search))
    );
  }
  
  // Filter by dietary
  if (filters.dietary) {
    result = result.filter(dish =>
      (dish.dietary || []).includes(filters.dietary)
    );
  }
  
  // Filter by allergens to exclude
  if (filters.allergens && Array.isArray(filters.allergens)) {
    result = filterByMultipleAllergens(result, filters.allergens);
  }
  
  // Filter by difficulty
  if (filters.difficulty) {
    result = filterByDifficulty(result, filters.difficulty);
  }
  
  // Filter by max time
  if (filters.maxTime) {
    result = filterByTime(result, filters.maxTime);
  }
  
  return result;
};

/**
 * Get dish by ingredient
 * @param {array} dishes
 * @param {string} ingredient
 * @returns {array}
 */
export const getDishByIngredient = (dishes = [], ingredient) => {
  const search = ingredient.toLowerCase();
  return dishes.filter(dish =>
    (dish.ingredients || []).some(ing =>
      ing.toLowerCase().includes(search)
    )
  );
};

/**
 * Get dishes for specific dietary need (combined filter)
 * @param {array} dishes
 * @param {string} dietary - 'vegetarian', 'vegan', 'gluten-free'
 * @returns {array}
 */
export const getDietaryOption = (dishes = [], dietary) => {
  const dietaryExclusions = {
    vegan: ['dairy', 'eggs', 'fish', 'meat', 'shellfish'],
    vegetarian: ['meat', 'fish', 'shellfish'],
    'gluten-free': ['gluten'],
    'nut-free': ['nuts'],
    'dairy-free': ['dairy'],
  };
  
  const allergens = dietaryExclusions[dietary] || [];
  const filtered = filterByMultipleAllergens(dishes, allergens);
  
  return filtered.filter(dish =>
    (dish.dietary || []).includes(dietary) ||
    allergens.every(allergen => !(dish.allergens || []).includes(allergen))
  );
};

export default {
  filterByDietary,
  filterByAllergen,
  filterByDifficulty,
  filterByTime,
  filterByMultipleAllergens,
  sortDishes,
  prioritizeFeatured,
  applyMultipleFilters,
  getDishByIngredient,
  getDietaryOption,
};
