# 🗂️ INDEX - Couche de Gestion des Données

Navigation complète pour la nouvelle architecture de données.

---

## 📚 Quick Navigation

### 🏃 Démarrage Rapide (5-10 min)
1. **[RECAP_COUCHE_DONNEES.md](RECAP_COUCHE_DONNEES.md)** ← START HERE!
   - Résumé exécutif
   - Fichiers créés
   - Utilisation rapide
   - Impact global

2. **[GUIDE_GESTION_DONNEES.md](GUIDE_GESTION_DONNEES.md)** ← Pour comprendre
   - Architecture complète
   - Documentation détaillée de chaque fichier
   - API complète
   - Cas d'usage
   - Troubleshooting

3. **[PLAN_MIGRATION_DONNEES.md](PLAN_MIGRATION_DONNEES.md)** ← Pour implémenter
   - Migration pas à pas
   - Exemples avant/après
   - Checklist
   - Tests

---

## 📁 Structure des Fichiers

### Données (JSON)
```
src/data/
├── categories.json              (80 lignes)
│   ├── Catégories de plats
│   ├── Options diététiques
│   └── Allergènes
│
├── signature_dishes.json        (220 lignes)
│   ├── 12 plats du chef
│   ├── Structure complète
│   ├── Métadonnées (ingrédients, allergènes, etc)
│   └── Images indexées
│
├── restaurant_menu.json         (60 lignes)
│   ├── 5 plats menu
│   ├── Structure simplifiée
│   └── Pour affichage rapide
│
└── imageMap.js                  (130 lignes)
    ├── Mappe 70+ images
    ├── Remplace 150+ imports
    └── Fonctions utilitaires
```

### Services & Hooks
```
src/services/
└── dataManager.js               (300 lignes) ⭐ CENTRAL
    ├── Singleton service
    ├── 20+ méthodes d'accès
    ├── Validation intégrée
    └── Statistiques

src/utils/
└── dishFilters.js               (180 lignes) ⭐ FILTRAGE
    ├── 10+ filtres
    ├── Tri personnalisé
    ├── Recherche avancée
    └── Multi-filtrage

src/hooks/
└── useData.js                   (90 lignes) ⭐ REACT
    ├── Hook React
    ├── Facile à utiliser
    ├── Gestion d'état
    └── Loader intégré
```

### Documentation
```
frontend/
├── RECAP_COUCHE_DONNEES.md      (350 lignes) ← START HERE
├── GUIDE_GESTION_DONNEES.md     (450 lignes) ← Details
├── PLAN_MIGRATION_DONNEES.md    (400 lignes) ← Implementation
├── INDEX_DONNEES.md             (ce fichier)
│
└── (Autres docs restructuration)
    ├── START_HERE.md
    ├── GUIDE_UTILISATION.md
    ├── README_RESTRUCTURATION.md
    └── ...
```

---

## 🎯 Par Objectif

### ✅ Je veux comprendre l'architecture
1. Lire: [RECAP_COUCHE_DONNEES.md](RECAP_COUCHE_DONNEES.md)
2. Lire: [GUIDE_GESTION_DONNEES.md](GUIDE_GESTION_DONNEES.md)
3. Explorer: `src/data/` dossier (fichiers JSON)
4. Durée: 30-40 min

### ✅ Je veux intégrer dans mes pages
1. Lire: [PLAN_MIGRATION_DONNEES.md](PLAN_MIGRATION_DONNEES.md)
2. Suivre: Phase 1 (pages simples)
3. Copier: Exemples fournis
4. Tester: Chaque étape
5. Durée: 4-8 heures total

### ✅ Je veux utiliser rapidement
1. Code complet ci-dessous
2. Copier/Coller dans votre composant
3. Adapter à votre besoin
4. Durée: 5-10 min

### ✅ Je veux ajouter un nouveau plat
1. Ouvrir: [src/data/signature_dishes.json](../src/data/signature_dishes.json)
2. Ajouter: Objet plat selon structure
3. Ajouter: Images à imageMap.js si besoin
4. Durée: 2 min

### ✅ Je veux filtrer les plats
1. Lire: "Filtrage Avancé" dans [GUIDE_GESTION_DONNEES.md](GUIDE_GESTION_DONNEES.md)
2. Importer: `dishFilters.js`
3. Appeler: Fonction filtre souhaitée
4. Durée: 5 min

### ✅ Je veux chercher une plat
```javascript
import { useData } from '../hooks/useData.js';

const MyComponent = () => {
  const { searchSignatureDishes } = useData();
  const results = searchSignatureDishes('tuna');
  // results = array de plats contenant 'tuna'
};
```

---

## 🔍 Par Fichier

### `src/data/categories.json`
**Pour**: Récupérer les catégories de plats
**Contient**: 
- 8 catégories (salads, seafood, meat, pasta, etc)
- 5 options diététiques
- 8 allergènes

**Utilisation**:
```javascript
import categories from '../data/categories.json';
const cats = categories.categories; // Array[8]
```

---

### `src/data/signature_dishes.json`
**Pour**: Tous les plats du chef
**Contient**: 
- 12 plats
- Chaque plat a: id, title, category, description, ingredients, dietary, allergens, difficulty, servingTime, images, featured, chef_story, pairing

**Utilisation**:
```javascript
import { useData } from '../hooks/useData.js';
const { getSignatureDishes } = useData();
const dishes = getSignatureDishes(); // Array[12]
```

---

### `src/data/restaurant_menu.json`
**Pour**: Plats du menu principal
**Contient**: 
- 5 plats
- Structure simplifiée pour affichage

**Utilisation**:
```javascript
import { useData } from '../hooks/useData.js';
const { getRestaurantMenu } = useData();
const menu = getRestaurantMenu(); // Array[5]
```

---

### `src/data/imageMap.js`
**Pour**: Accès à toutes les images
**Contient**: 
- 70+ images mappées
- Fonctions utilitaires

**Utilisation**:
```javascript
import imageMap from '../data/imageMap.js';
imageMap.getImage('plat110');           // → path
imageMap.hasImage('plat110');           // → true/false
```

---

### `src/services/dataManager.js`
**Pour**: Service centralisé d'accès aux données
**Contient**: 
- 20+ méthodes
- Validation
- Statistiques

**Méthodes principales**:
```javascript
getSignatureDishes()           // Array[12]
getSignatureDishById(id)       // Object|null
getSignatureDishByCategory()   // Array
getFeaturedSignatureDishes()   // Array
searchSignatureDishes(keyword) // Array
getRestaurantMenu()            // Array[5]
getImage(id)                   // String (path)
getStatistics()                // Object
validateData()                 // Object {errors, warnings}
```

**Utilisation**:
```javascript
import DataManager from '../services/dataManager.js';
DataManager.loadAll();
const dishes = DataManager.getSignatureDishes();
```

---

### `src/utils/dishFilters.js`
**Pour**: Filtrage, tri, recherche avancée
**Contient**: 
- 10+ fonctions de filtrage
- Tri personnalisé
- Multi-filtrage

**Fonctions principales**:
```javascript
filterByDietary(dishes, 'vegetarian')           // Array
filterByAllergen(dishes, 'gluten', 'exclude')   // Array
filterByDifficulty(dishes, 'easy')              // Array
sortDishes(dishes, 'name', 'asc')               // Array
applyMultipleFilters(dishes, {...})             // Array
getDietaryOption(dishes, 'vegan')               // Array
```

**Utilisation**:
```javascript
import * as filters from '../utils/dishFilters.js';
const vegan = filters.getDietaryOption(dishes, 'vegan');
```

---

### `src/hooks/useData.js`
**Pour**: Utiliser les données dans React
**Contient**: 
- Hook React
- State management
- Loader intégré

**Utilisation**:
```javascript
const { dishes, getImage, isLoaded } = useData();
if (!isLoaded) return <div>Loading...</div>;
```

---

## 💻 Exemples de Code

### Exemple 1: Afficher les plats vedettes
```javascript
import { useData } from '../hooks/useData.js';

export function FeaturedDishes() {
  const { getFeaturedSignatureDishes, getImage } = useData();
  
  const featured = getFeaturedSignatureDishes();
  
  return (
    <div>
      {featured.map(dish => (
        <div key={dish.id}>
          <img src={getImage(dish.images[0])} alt={dish.title} />
          <h3>{dish.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

### Exemple 2: Recherche avec filtrage
```javascript
import { useData } from '../hooks/useData.js';
import * as filters from '../utils/dishFilters.js';
import { useState } from 'react';

export function SearchDishes() {
  const { getSignatureDishes } = useData();
  const [search, setSearch] = useState('');
  
  let results = getSignatureDishes();
  if (search) {
    results = filters.applyMultipleFilters(results, { searchText: search });
  }
  
  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <div className="results">
        {results.map(dish => <DishCard key={dish.id} dish={dish} />)}
      </div>
    </div>
  );
}
```

### Exemple 3: Filtrer plats végétariens rapides
```javascript
import { useData } from '../hooks/useData.js';
import * as filters from '../utils/dishFilters.js';

export function QuickVegetarian() {
  const { getSignatureDishes } = useData();
  
  const veg = filters.applyMultipleFilters(
    getSignatureDishes(),
    {
      dietary: 'vegetarian',
      maxTime: 30  // max 30 min
    }
  );
  
  return (
    <ul>
      {veg.map(d => <li key={d.id}>{d.title} - {d.servingTime} min</li>)}
    </ul>
  );
}
```

### Exemple 4: Plat spécifique avec galerie
```javascript
import { useData } from '../hooks/useData.js';

export function DishDetail({ dishId }) {
  const { getSignatureDishById, getImage } = useData();
  
  const dish = getSignatureDishById(dishId);
  if (!dish) return <div>Dish not found</div>;
  
  return (
    <div>
      <h1>{dish.title}</h1>
      <p>{dish.description}</p>
      
      <div className="images">
        {dish.images.map((imgId, i) => (
          <img key={i} src={getImage(imgId)} alt={`${dish.title} ${i}`} />
        ))}
      </div>
      
      <div className="details">
        <p>Difficulty: {dish.difficulty}</p>
        <p>Time: {dish.servingTime} min</p>
        <p>Pairing: {dish.pairing}</p>
      </div>
    </div>
  );
}
```

---

## 🧪 Tests & Validation

### Tester que tout fonctionne
```javascript
// Dans la console du navigateur
import DataManager from '../services/dataManager.js';

DataManager.loadAll();
console.log(DataManager.getSummary());

// Devrait afficher:
// 📊 DataManager Summary:
//   ✅ Signature Dishes: 12
//   ✅ Menu Items: 5
//   ✅ Categories: 8
//   ✅ Images: 70
//   ✅ Featured: 7
//   ✅ Status: LOADED
```

### Valider l'intégrité
```javascript
const validation = DataManager.validateData();
if (validation.success) {
  console.log('✅ All data is valid!');
} else {
  console.error('❌ Found issues:', validation.errors);
}
```

---

## 📊 Comparaison: Ancien vs Nouveau

### Ancien Code (3 fichiers chaotiques)
```javascript
// ❌ data_plat.js (100+ lignes d'imports)
// ❌ dataChef.js (60+ lignes d'imports)
// ❌ data_menue.js (mélange React et données)
// ❌ Pas de structure
// ❌ Pas de métadonnées
// ❌ Bundle énorme
```

### Nouveau Code (1 hook simple)
```javascript
// ✅ useData.js (1 hook React)
const { dishes, getImage, isLoaded } = useData();
```

**Gain: -99% de code d'imports**

---

## 🚀 Roadmap d'Implémentation

**Aujourd'hui**:
- ✅ Infrastructure créée
- ✅ Services programmés
- ✅ Documentation écrite

**Cette semaine**:
- [ ] Phase 1: Pages simples (Menue, Buffets)
- [ ] Tests de chaque page
- [ ] Validation de performance

**Prochaine semaine**:
- [ ] Phase 2: Pages intermédiaires (Plats, Contact)
- [ ] Intégration des filtres
- [ ] Optimisation bundle

**Semaine suivante**:
- [ ] Phase 3: Pages complexes (ChefAthmane, Home)
- [ ] Suppression des anciens fichiers
- [ ] Déploiement

---

## 📞 Aide & Support

### Question: Comment démarrer?
→ Lire [RECAP_COUCHE_DONNEES.md](RECAP_COUCHE_DONNEES.md)

### Question: Comment migrer une page?
→ Suivre [PLAN_MIGRATION_DONNEES.md](PLAN_MIGRATION_DONNEES.md)

### Question: Quelle méthode utiliser?
→ Consulter [GUIDE_GESTION_DONNEES.md](GUIDE_GESTION_DONNEES.md)

### Question: Erreur "Cannot read property..."
→ Voir "Troubleshooting" dans [GUIDE_GESTION_DONNEES.md](GUIDE_GESTION_DONNEES.md)

### Question: Ajouter un nouveau plat?
→ Éditer [src/data/signature_dishes.json](../src/data/signature_dishes.json)

---

## ✨ Points Clés à Retenir

1. **Tout les données** sont maintenant centralisées
2. **Un seul import** pour DataManager remplace 150+ imports
3. **useData() hook** pour utiliser les données en React
4. **Filtres avancés** pour chercher/filtrer
5. **JSON clean** pour faciliter maintenance
6. **Validation intégrée** pour vérifier l'intégrité

---

## 📋 Fichiers de Référence Rapide

| Fichier | Lignes | Objectif | Fréquence |
|---------|--------|----------|-----------|
| dataManager.js | 300 | Service central | Toujours |
| useData.js | 90 | Hook React | Toujours |
| dishFilters.js | 180 | Filtrage | Si besoin |
| signature_dishes.json | 220 | Données plats | Rarement |
| restaurant_menu.json | 60 | Données menu | Rarement |
| categories.json | 80 | Catégories | Rarement |
| imageMap.js | 130 | Images | Rarement |

---

**Index - Couche Gestion des Données**
**Version**: 1.0
**Date**: 19 Mai 2026
**Status**: ✅ Complet et documenté
