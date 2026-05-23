/**
 * Service: Dish Service
 * Service pour gérer les données de plats
 * Centralise la logique d'accès aux données de plats
 */

// À remplir avec les données de dataChef.js une fois consolidées
const allDishes = [];

export class DishService {
  /**
   * Récupère tous les plats
   */
  static getAll() {
    return allDishes;
  }
  
  /**
   * Récupère un plat par ID
   */
  static getById(id) {
    return allDishes.find(dish => dish.id === id);
  }
  
  /**
   * Récupère les plats par catégorie
   */
  static getByCategory(category) {
    return allDishes.filter(dish => dish.category === category);
  }
  
  /**
   * Récupère les plats signature
   */
  static getSignatureDishes() {
    return allDishes.filter(dish => dish.category === "signature");
  }
  
  /**
   * Récupère les appetizers
   */
  static getAppetizers() {
    return allDishes.filter(dish => dish.category === "appetizer");
  }
  
  /**
   * Récupère les plats principaux
   */
  static getMainCourses() {
    return allDishes.filter(dish => dish.category === "main");
  }
  
  /**
   * Récupère les desserts
   */
  static getDesserts() {
    return allDishes.filter(dish => dish.category === "dessert");
  }
  
  /**
   * Initialise le service avec des données
   */
  static initialize(dishes) {
    allDishes.length = 0;
    allDishes.push(...dishes);
  }
  
  /**
   * Cherche des plats par mot-clé
   */
  static search(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return allDishes.filter(
      dish =>
        dish.title.toLowerCase().includes(lowerKeyword) ||
        (dish.description && dish.description.toLowerCase().includes(lowerKeyword))
    );
  }
}

export default DishService;
