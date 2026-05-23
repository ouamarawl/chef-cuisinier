# 📖 INDEX - Guide de Navigation

Bienvenue dans votre projet restructurisé! Ce document vous aide à naviguer dans les fichiers créés et documentations.

---

## 🎯 PAR OBJECTIF

### Je veux...

#### "...utiliser la nouvelle config avec emails et coordonnées"
→ Voir: [`src/config/contact.js`](src/config/contact.js)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#1️⃣-utiliser-la-configuration-centralisée)

#### "...accéder aux infos sur Chef Athmane"
→ Voir: [`src/config/chef.js`](src/config/chef.js)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#2️⃣-utiliser-la-config-chef-athmane)

#### "...créer une section présentation (avec image + texte)"
→ Utiliser: [`PresentationSection`](src/components/shared/PresentationSection.jsx)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#3️⃣-remplacer-html-dupliqué-par-presentationsection)

#### "...créer une galerie d'images"
→ Utiliser: [`ImageGallery`](src/components/shared/ImageGallery.jsx)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#4️⃣-utiliser-imagegallery-pour-tous-les-carousels)

#### "...créer une carte de contact"
→ Utiliser: [`ContactCard`](src/components/shared/ContactCard.jsx)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#6️⃣-utiliser-contactcard-pour-contactjs)

#### "...charger dynamiquement des images"
→ Utiliser: [`loadImages()`](src/services/imageLoader.js)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#7️⃣-utiliser-loadimages-pour-optimiser-images)

#### "...faire un carousel réutilisable"
→ Utiliser: [`useCarousel()`](src/hooks/useCarousel.js)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#4️⃣-utiliser-uscarousel-pour-tous-les-carousels)

#### "...faire une animation fade-up au scroll"
→ Utiliser: [`useFadeUpAnimation()`](src/hooks/useFadeUpAnimation.js)
→ Exemple: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md#5️⃣-utiliser-usefadeupanimation)

#### "...connaître la nouvelle architecture"
→ Voir: [RESTRUCTURATION_COMPLETE.md](RESTRUCTURATION_COMPLETE.md)

#### "...voir ce qui a été créé/modifié"
→ Voir: [INVENTAIRE_FICHIERS.md](INVENTAIRE_FICHIERS.md)

#### "...avoir des exemples pratiques"
→ Voir: [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md)

---

## 📁 PAR DOSSIER

### `/src/config/` - Configuration Centralisée
- **`contact.js`** - Emails, téléphones, adresses
  - Use case: Import dans n'importe quelle page pour les coords
  - Type: Export object `CONTACT`

- **`chef.js`** - Infos Chef Athmane
  - Use case: Bio, parcours, compétences, collaborations
  - Type: Export object `CHEF`

### `/src/hooks/` - Custom Hooks Réutilisables
- **`useFadeUpAnimation.js`** - Animation scroll reveal
  - Import: `import { useFadeUpAnimation } from "../hooks"`
  - Usage: `useFadeUpAnimation(".fade-up")`

- **`useCarousel.js`** - Logique carousel
  - Import: `import { useCarousel } from "../hooks"`
  - Usage: `const carousel = useCarousel(images)`

- **`index.js`** - Export centralisé
  - Import: `import { useFadeUpAnimation, useCarousel } from "../hooks"`

### `/src/services/` - Services Métier
- **`imageLoader.js`** - Chargement dynamique images
  - Functions:
    - `loadImages(folderName, numbered)` - Charge un dossier d'images
    - `preloadImages(paths)` - Précharge images
    - `getOptimizedImageProps(path, alt)` - Props optimisées

- **`dishService.js`** - Gestion des plats
  - Methods:
    - `DishService.getAll()`
    - `DishService.getByCategory(cat)`
    - `DishService.getSignatureDishes()`
    - etc.

- **`index.js`** - Export centralisé

### `/src/components/shared/` - Composants Réutilisables
- **`PresentationSection.jsx`** - Section image + texte + bouton
  - Props: image, title, text, button, logo, reversed
  - CSS: PresentationSection.css

- **`ImageGallery.jsx`** - Galerie avec carousel
  - Props: images, title, description, autoPlay, autoPlayInterval
  - CSS: ImageGallery.css

- **`ContactCard.jsx`** - Carte contact
  - Props: name, address, phone, email, hours, description, icon
  - CSS: ContactCard.css

- **`index.js`** - Export centralisé

### `/src/styles/` - CSS Global
- **`variables.css`** - 50+ variables CSS
  - Couleurs, typographie, espacements, ombres, transitions
  - Import dans App.css: `@import "./styles/variables.css"`

- **`animations.css`** - Keyframes centralisées
  - fadeUp, fadeIn, slideInLeft, slideInRight, scaleIn, pulse, glow
  - Classes: `.fade-up`, `.fade-in`, `.lift-on-hover`

---

## 📋 PAR TYPE DE FICHIER

### Configuration (Source de Vérité)
| Fichier | Export | Utilité |
|---------|--------|---------|
| `src/config/contact.js` | `CONTACT` object | Emails, phones, addresses |
| `src/config/chef.js` | `CHEF` object | Chef biography, skills, journey |

### Hooks (Logique Réutilisable)
| Fichier | Export | Utilité |
|---------|--------|---------|
| `src/hooks/useFadeUpAnimation.js` | Function | Scroll reveal animation |
| `src/hooks/useCarousel.js` | Function | Carousel logic |

### Services (Métier)
| Fichier | Exports | Utilité |
|---------|---------|---------|
| `src/services/imageLoader.js` | 3 functions | Dynamic image loading |
| `src/services/dishService.js` | DishService class | Dish management |

### Composants (UI)
| Fichier | Export | Utilité |
|---------|--------|---------|
| `src/components/shared/PresentationSection.jsx` | Component | Presentation sections |
| `src/components/shared/ImageGallery.jsx` | Component | Image galleries |
| `src/components/shared/ContactCard.jsx` | Component | Contact cards |

### Styles (CSS)
| Fichier | Contient | Utilité |
|---------|----------|---------|
| `src/styles/variables.css` | CSS variables | Global styling tokens |
| `src/styles/animations.css` | Keyframes | Reusable animations |

### Documentation
| Fichier | Pour | Contient |
|---------|------|----------|
| `RESTRUCTURATION_COMPLETE.md` | Overview | Toutes les améliorations |
| `GUIDE_UTILISATION.md` | Examples | Exemples pratiques |
| `INVENTAIRE_FICHIERS.md` | Inventory | Liste complète fichiers |
| `INDEX.md` | Navigation | Ce fichier |

---

## 🔗 QUICK LINKS

### Importer la Config
```javascript
import { CONTACT } from "../config/contact";
import { CHEF } from "../config/chef";
```

### Importer les Hooks
```javascript
import { useFadeUpAnimation, useCarousel } from "../hooks";
```

### Importer les Composants
```javascript
import { 
  PresentationSection, 
  ImageGallery, 
  ContactCard 
} from "../components/shared";
```

### Importer les Services
```javascript
import { loadImages, DishService } from "../services";
```

### Utiliser les Variables CSS
```css
/* Dans un fichier .css */
@import "../../styles/variables.css";

body {
  color: var(--color-primary);
  font-family: var(--font-body);
}
```

---

## 🎓 PATTERNS À RETENIR

### Pattern 1: Configuration
```javascript
// ❌ AVANT - Hardcoded
<p>Email: Athmane686@gmail.com</p>

// ✅ APRÈS - Avec config
import { CONTACT } from "../config";
<p>Email: {CONTACT.primaryEmail}</p>
```

### Pattern 2: Custom Hooks
```javascript
// ❌ AVANT - Code dupliqué
// même logique dans 3 fichiers

// ✅ APRÈS - Hook réutilisable
import { useCarousel } from "../hooks";
const carousel = useCarousel(items);
```

### Pattern 3: Composants Réutilisables
```javascript
// ❌ AVANT - HTML dupliqué
<section className="presentation-section">
  {/* 20+ lignes HTML */}
</section>

// ✅ APRÈS - Composant propre
<PresentationSection image={img} title={t} text={txt} />
```

---

## 📞 QUESTIONS COURANTES

**Q: Où mettre un nouvel email?**
A: Dans `src/config/contact.js` avec les autres.

**Q: Comment afficher le nom du Chef?**
A: `import { CHEF } from "../config/chef"; <h1>{CHEF.fullName}</h1>`

**Q: Comment faire un carousel?**
A: `const carousel = useCarousel(items); <button onClick={carousel.nextSlide}>`

**Q: Où ajouter du CSS?**
A: Crée un `.css` import à côté du `.js` ou utilise les variables dans `variables.css`

**Q: Comment charger des images dynamiquement?**
A: `const images = loadImages("dossier_name"); <img src={images[0]} />`

---

**Dernière mise à jour**: 18 Mai 2026
**Status**: ✅ Prêt à utiliser
**Prochaine étape**: Voir [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md) pour des exemples pratiques! 🚀
