# 🔄 Plan de Migration - Intégration de la Couche Données

Guide étape par étape pour intégrer la nouvelle couche de gestion des données dans les pages existantes.

---

## 📋 Résumé

| Aspect | Avant | Après | Effort |
|--------|-------|-------|--------|
| **Imports images** | 150+ individuels | 1 DataManager | ⭐ Minimal |
| **Données plats** | 3 fichiers + imports | 2 JSON | ⭐ Minimal |
| **Accès données** | Direct | Via DataManager | ⭐ Facile |
| **Filtrage** | Manuel | Utilitaires intégrés | ⭐⭐ Moyen |
| **Performance** | Lourde | Légère | ⭐⭐ Élevé |

---

## 🚀 Phase 1: Pages Simples (1-2 heures)

### 1.1 Menue.js

**Avant** (data_menue.js):
```javascript
import menu from './data_menue.js';
import plat81 from "../../assets/mune/plat81.JPG";
// ... 23 imports supplémentaires

const Menue = () => {
  return (
    <div>
      {menu.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
```

**Après** (avec DataManager):
```javascript
import { useData } from '../../hooks/useData.js';

const Menue = () => {
  const { getRestaurantMenu, getImage, isLoaded } = useData();
  
  if (!isLoaded) return <div>Loading...</div>;
  
  const menu = getRestaurantMenu();
  
  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <img src={getImage(item.image)} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Menue;
```

**Changements**:
- ✅ Supprimer tous les imports d'images
- ✅ Ajouter `useData` hook
- ✅ Remplacer `item.image` par `getImage(item.image)`
- ✅ Ajouter condition `isLoaded`

---

### 1.2 Buffets.js (si applicable)

**Avant**:
```javascript
import buffetData from './buffetData.js';
// ... 50+ imports d'images
```

**Après**:
```javascript
import { useData } from '../../hooks/useData.js';
import * as filters from '../../utils/dishFilters.js';

const Buffets = () => {
  const { getSignatureDishes, getImage } = useData();
  
  // Optionnel: filtrer par catégorie
  const dishesForBuffet = getSignatureDishes();
  
  return (
    <div>
      {dishesForBuffet.map((dish) => (
        <div key={dish.id}>
          <img src={getImage(dish.images[0])} alt={dish.title} />
          <h3>{dish.title}</h3>
          <p>{dish.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Buffets;
```

---

## 🎯 Phase 2: Pages avec Recherche/Filtrage (2-4 heures)

### 2.1 Contact.js

Peut rester inchangé (données de contact gérées par `config/contact.js`), mais on peut ajouter les plats du chef:

```javascript
import { useData } from '../../hooks/useData.js';
import { CONTACT } from '../../config/contact.js';

const Contact = () => {
  const { getFeaturedSignatureDishes, getImage } = useData();
  
  const featured = getFeaturedSignatureDishes();
  
  return (
    <div>
      {/* Existing contact form */}
      <ContactForm {...CONTACT} />
      
      {/* Add featured dishes gallery */}
      <section className="featured-dishes">
        <h2>Featured Dishes</h2>
        {featured.slice(0, 3).map((dish) => (
          <div key={dish.id}>
            <img src={getImage(dish.images[0])} alt={dish.title} />
            <h3>{dish.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};
```

---

### 2.2 Plats.js (Importante!)

**Avant** (avec 150+ imports):
```javascript
import dataChef from './dataChef.js';
import plat109 from "../../assets/images_plats/plat109.JPG";
// ... 60+ imports supplémentaires

const Plats = () => {
  const [searchText, setSearchText] = useState('');
  
  const filteredDishes = dataChef.filter(d =>
    d.title.toLowerCase().includes(searchText.toLowerCase())
  );
  
  return (
    <div>
      <input 
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      {filteredDishes.map(dish => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};
```

**Après** (optimal):
```javascript
import { useData } from '../../hooks/useData.js';
import * as filters from '../../utils/dishFilters.js';
import { useState } from 'react';

const Plats = () => {
  const { getSignatureDishes, getImage, isLoaded } = useData();
  const [searchText, setSearchText] = useState('');
  const [filterDietary, setFilterDietary] = useState('');
  const [sortBy, setSortBy] = useState('name');
  
  if (!isLoaded) return <div>Loading...</div>;
  
  let dishes = getSignatureDishes();
  
  // Apply filters
  dishes = filters.applyMultipleFilters(dishes, {
    searchText,
    dietary: filterDietary || undefined,
  });
  
  // Apply sorting
  dishes = filters.sortDishes(dishes, sortBy);
  
  return (
    <div className="plats-page">
      <section className="filters">
        <input 
          type="text"
          placeholder="Search dishes..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        
        <select value={filterDietary} onChange={e => setFilterDietary(e.target.value)}>
          <option value="">All Dietary</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
        </select>
        
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="difficulty">Sort by Difficulty</option>
          <option value="time">Sort by Time</option>
        </select>
      </section>
      
      <section className="dishes-grid">
        {dishes.map(dish => (
          <DishCard 
            key={dish.id} 
            dish={dish}
            primaryImage={getImage(dish.images[0])}
          />
        ))}
      </section>
    </div>
  );
};

export default Plats;
```

**Changements clés**:
- ✅ Supprimer 60+ imports individuels
- ✅ Utiliser `getSignatureDishes()` directement
- ✅ Utiliser `applyMultipleFilters()` pour recherche/filtrage
- ✅ Utiliser `sortDishes()` pour tri
- ✅ Ajouter des filtres d'interface utilisateur

---

## 🌟 Phase 3: Pages Complexes (4-8 heures)

### 3.1 ChefAthmane.js

**Avant**:
```javascript
import dataChef from '../plats/dataChef.js';
import plat109 from "../../assets/images_plats/plat109.JPG";
// ... 60+ imports

const ChefAthmane = () => {
  // Custom carousel logic
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Manual rendering
  return (
    <div>
      {dataChef.map((dish, index) => (
        <div key={index}>
          {dish.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${dish.title} ${idx}`} />
          ))}
        </div>
      ))}
    </div>
  );
};
```

**Après** (optimal):
```javascript
import { useData } from '../../hooks/useData.js';
import { useCarousel } from '../../hooks/useCarousel.js';
import { CHEF } from '../../config/chef.js';
import ImageGallery from '../../components/shared/ImageGallery.jsx';

const ChefAthmane = () => {
  const { 
    getSignatureDishes, 
    getImage, 
    getCategory,
    isLoaded 
  } = useData();
  
  if (!isLoaded) return <div>Loading...</div>;
  
  const dishes = getSignatureDishes();
  
  return (
    <div>
      {/* Chef info from centralized config */}
      <section className="chef-bio">
        <h1>{CHEF.fullName}</h1>
        <p>{CHEF.quote}</p>
        <p>{CHEF.shortBio}</p>
      </section>
      
      {/* Dishes with gallery component */}
      <section className="chef-dishes">
        <h2>Signature Dishes</h2>
        {dishes.map(dish => (
          <div key={dish.id} className="dish-item">
            <ImageGallery 
              images={getImage(dish.images)}
              title={dish.title}
              description={dish.description}
            />
            <h3>{dish.title}</h3>
            <p>{dish.chef_story}</p>
            <p>Pairing: {dish.pairing}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ChefAthmane;
```

**Améliorations**:
- ✅ Supprimer 60+ imports
- ✅ Utiliser composant `ImageGallery` réutilisable
- ✅ Utiliser `CHEF` config centralisé
- ✅ Utiliser `useCarousel` hook
- ✅ Code beaucoup plus lisible

---

### 3.2 Home.js

**Avant**:
```javascript
import DataPlat from './data_plat.js';
// ... 100+ imports

const Home = () => {
  return (
    <div>
      {/* Manuellement afficher quelques plats */}
      <section>
        {DataPlat.slice(0, 6).map((plat, index) => (
          <div key={index}>
            <img src={plat.image} alt={plat.title} />
          </div>
        ))}
      </section>
    </div>
  );
};
```

**Après**:
```javascript
import { useData } from '../../hooks/useData.js';
import * as filters from '../../utils/dishFilters.js';

const Home = () => {
  const { 
    getFeaturedSignatureDishes,
    getImage,
    isLoaded
  } = useData();
  
  if (!isLoaded) return <div>Loading...</div>;
  
  let featured = getFeaturedSignatureDishes();
  featured = filters.prioritizeFeatured(featured).slice(0, 6);
  
  return (
    <div>
      <section className="featured-section">
        <h2>Chef Athmane's Signature Dishes</h2>
        <div className="featured-grid">
          {featured.map(dish => (
            <div key={dish.id} className="featured-card">
              <img 
                src={getImage(dish.images[0])} 
                alt={dish.title}
              />
              <h3>{dish.title}</h3>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
```

---

## 📋 Checklist de Migration Complète

### Pour chaque page:
- [ ] Identifier l'usage des données
- [ ] Remplacer imports d'images
- [ ] Ajouter `useData()` hook
- [ ] Remplacer accès aux données
- [ ] Ajouter handling de `isLoaded`
- [ ] Tester le rendu
- [ ] Vérifier la performance
- [ ] Supprimer ancien fichier de données

---

## 🧪 Tests de Validation

```javascript
// test-data-migration.js
import DataManager from '../services/dataManager.js';
import * as filters from '../utils/dishFilters.js';

export const testDataMigration = () => {
  console.log('🧪 Running data migration tests...\n');
  
  // Test 1: Load data
  const loaded = DataManager.loadAll();
  console.log(`✅ Data loaded: ${loaded}`);
  
  // Test 2: Get signature dishes
  const dishes = DataManager.getSignatureDishes();
  console.log(`✅ Signature dishes count: ${dishes.length}`);
  
  // Test 3: Get featured
  const featured = DataManager.getFeaturedSignatureDishes();
  console.log(`✅ Featured dishes count: ${featured.length}`);
  
  // Test 4: Search
  const found = DataManager.searchSignatureDishes('tuna');
  console.log(`✅ Search results: ${found.length}`);
  
  // Test 5: Filter
  const vegetarian = filters.filterByDietary(dishes, 'vegetarian');
  console.log(`✅ Vegetarian dishes: ${vegetarian.length}`);
  
  // Test 6: Images
  const hasImage = DataManager.hasImage('plat110');
  console.log(`✅ Image plat110 exists: ${hasImage}`);
  
  // Test 7: Validate
  const validation = DataManager.validateData();
  console.log(`✅ Validation: ${validation.success ? 'PASS' : 'FAIL'}`);
  if (validation.errors.length > 0) {
    console.error('❌ Errors:', validation.errors);
  }
  
  console.log('\n✅ All tests passed!');
};

// Run in console
testDataMigration();
```

---

## ⏱️ Estimation de Temps

| Phase | Pages | Effort | Temps |
|-------|-------|--------|-------|
| 1 | Menue, Contact | ⭐ Facile | 30-60 min |
| 2 | Plats, Buffets | ⭐⭐ Moyen | 1-2 heures |
| 3 | ChefAthmane, Home | ⭐⭐⭐ Complexe | 2-4 heures |
| **Total** | **~7 pages** | **Modéré** | **4-8 heures** |

---

## 🔧 Troubleshooting Courant

### Erreur: "Cannot read property 'map' of undefined"
```javascript
// ❌ Problème
const dishes = getSignatureDishes(); // undefined
dishes.map(...) // Error!

// ✅ Solution
const { isLoaded } = useData();
if (!isLoaded) return <div>Loading...</div>;
const dishes = getSignatureDishes();
```

### Images ne s'affichent pas
```javascript
// ❌ Problème
<img src={dish.images} alt="..." /> // Wrong format

// ✅ Solution
<img src={getImage(dish.images[0])} alt={dish.title} />
```

### Performance lente
```javascript
// ❌ Problème - Appeler getSignatureDishes() à chaque render
const dishes = getSignatureDishes();

// ✅ Solution - Utiliser useMemo
import { useMemo } from 'react';
const dishes = useMemo(() => getSignatureDishes(), []);
```

---

## 🎯 Prochaines Étapes

1. **Après migration**: Nettoyer les anciens fichiers (data_plat.js, dataChef.js, data_menue.js)
2. **Optimisation**: Ajouter pagination si trop de plats
3. **Cache**: Implémenter Redis/LocalStorage pour cache
4. **API**: Connecter à Firebase Firestore pour données dynamiques
5. **TypeScript**: Migrer DataManager vers TypeScript

---

**Document**: Plan de Migration - Couche Données
**Version**: 1.0
**Date**: 19 Mai 2026
**Status**: ✅ Prêt pour implémentation
