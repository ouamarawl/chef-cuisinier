# 🎯 Cheat Sheet - Références Rapides

Référence rapide pour les imports et utilisations les plus courants.

---

## 📥 IMPORTS

### Configuration
```javascript
import { CONTACT } from \"../config/contact\";
import { CHEF } from \"../config/chef\";
```

### Hooks
```javascript
import { useFadeUpAnimation, useCarousel } from \"../hooks\";
// ou
import { useFadeUpAnimation } from \"../hooks/useFadeUpAnimation\";
import { useCarousel } from \"../hooks/useCarousel\";
```

### Composants
```javascript
import { 
  PresentationSection, 
  ImageGallery, 
  ContactCard 
} from \"../components/shared\";
// ou
import { PresentationSection } from \"../components/shared/PresentationSection\";
```

### Services
```javascript
import { loadImages, preloadImages, DishService } from \"../services\";
// ou
import { loadImages } from \"../services/imageLoader\";
import DishService from \"../services/dishService\";
```

---

## 🔧 UTILISATION RAPIDE

### Configuration - CONTACT
```javascript
// Accès basique
CONTACT.primaryEmail              // \"athmanechef@gmail.com\"
CONTACT.phone                     // \"224-526-0067\"
CONTACT.officeEmail               // \"office@chef-athmane.com\"

// Localités
CONTACT.locations.restaurant      // {address, phone, hours, email}
CONTACT.locations.creativeKitchen // {address, hours, email}
CONTACT.locations.gourmetBoxes    // {email, description}
CONTACT.locations.chicago         // {email, description}

// Services
CONTACT.services.reservations     // \"athmanechef@gmail.com\"
CONTACT.services.collaborations   // \"office@chef-athmane.com\"
CONTACT.services.press            // \"office@chef-athmane.com\"
```

### Configuration - CHEF
```javascript
// Info basique
CHEF.fullName                     // \"ATHMANE OUAMARA\"
CHEF.quote                        // \"Cooking is the art of...\"
CHEF.signatureDish                // \"Agneau grillé\"
CHEF.role                         // \"Executive Chef\"

// Parcours
CHEF.journey.algeria              // {country, description, keyPoints}
CHEF.journey.dubai                // ...
CHEF.journey.newyork              // ...
CHEF.journey.chicago              // ...

// Compétences
CHEF.skills                       // Array of 6 skills
CHEF.skills[0].title              // \"Art Culinaire & Innovation\"
CHEF.skills[0].icon               // \"🎨\"
CHEF.skills[0].description        // ...

// Services
CHEF.services                     // Array of services offered
CHEF.buffetTypes                  // Array of buffet types
```

### Hook - useCarousel
```javascript
const carousel = useCarousel(items);

carousel.currentIndex             // Index de l'item courant (0-based)
carousel.currentItem              // Item courant
carousel.nextSlide()              // Aller à l'item suivant
carousel.prevSlide()              // Aller à l'item précédent
carousel.goToSlide(index)         // Aller à index spécifique
carousel.itemsLength              // Nombre total d'items
carousel.hasItems                 // Boolean: true si items exist
```

### Hook - useFadeUpAnimation
```javascript
// 1-liner dans le component
useFadeUpAnimation(\".fade-up\");

// Puis dans le JSX
<div className=\"fade-up\">Contenu qui fades up</div>
```

### Service - loadImages
```javascript
// Charger toutes les images d'un dossier
const atheneImages = loadImages(\"images_athmen\", true); // Array trié

// Utiliser une image
<img src={atheneImages[0]} alt=\"Chef Athmane\" />

// Charger comme object
const images = loadImages(\"dossier_name\", false); // Object
images[\"image1\"]  // Accès par nom

// Précharger images
preloadImages([img1, img2, img3]);

// Props optimisées
const props = getOptimizedImageProps(imagePath, \"Description\");
<img {...props} />
```

### Service - DishService
```javascript
DishService.getAll()              // Tous les plats
DishService.getById(5)            // Plat par ID
DishService.getByCategory(\"main\")  // Plats by catégorie
DishService.getSignatureDishes()  // Plats signature
DishService.getAppetizers()       // Appetizers
DishService.getMainCourses()      // Plats principaux
DishService.getDesserts()         // Desserts
DishService.search(\"beef\")        // Recherche par keyword
```

### Composant - PresentationSection
```javascript
<PresentationSection
  image={imageUrl}                // Required: image source
  imageAlt=\"Description\"           // Optional: alt text
  title=\"TITLE\"                    // Optional: section title
  text=\"Long description...\"       // Optional: paragraph text
  button={{                         // Optional: button
    label: \"CLICK ME\",
    onClick: handleClick
  }}
  logo=\"Optional logo text\"        // Optional: logo above title
  reversed={false}                 // Optional: reverse layout (RTL)
/>
```

### Composant - ImageGallery
```javascript
<ImageGallery
  images={arrayOfImages}          // Required: array of image URLs
  title=\"Gallery Title\"            // Optional: title
  description=\"Description\"        // Optional: description
  imagesPerView={1}               // Optional: images per viewport
  autoPlay={false}                // Optional: auto-advance
  autoPlayInterval={3000}         // Optional: interval in ms
/>
```

### Composant - ContactCard
```javascript
<ContactCard
  icon=\"🍽️\"                        // Optional: emoji or icon
  name=\"The Restaurant\"            // Optional: name
  description=\"Restaurant desc\"    // Optional: description
  address=\"84 rue de Varenne\"     // Optional: address
  phone=\"224-526-0067\"            // Optional: phone (becomes clickable)
  email=\"chef@example.com\"        // Optional: email (becomes clickable)
  hours=\"Lun-Ven, 9h-17h\"        // Optional: hours
  onClick={handleClick}           // Optional: action button handler
/>
```

---

## 🎨 CSS VARIABLES

### Couleurs
```css
var(--color-primary)      /* #3a4f63 - Couleur principale */
var(--color-accent)       /* #c9a66b - Accent doré */
var(--color-light)        /* #faf8f5 - Fond clair */
var(--color-dark)         /* #1a1a1a - Texte foncé */
var(--color-bg-white)     /* #ffffff - Blanc */
var(--color-text-dark)    /* #333333 - Texte */
var(--color-text-light)   /* #666666 - Texte gris */
var(--color-border)       /* #e0e0e0 - Bordures */
```

### Typographie
```css
var(--font-display)       /* Georgia, serif - Titres */
var(--font-body)          /* Montserrat, sans-serif - Corps */
var(--font-serif-alt)     /* DM Serif Text, serif - Alt */
var(--font-playfair)      /* Playfair Display - Display */

var(--font-size-xs)       /* 12px */
var(--font-size-sm)       /* 14px */
var(--font-size-base)     /* 16px */
var(--font-size-lg)       /* 18px */
var(--font-size-xl)       /* 24px */
var(--font-size-2xl)      /* 32px */
var(--font-size-3xl)      /* 40px */
var(--font-size-4xl)      /* 48px */
```

### Espacements
```css
var(--spacing-xs)         /* 4px */
var(--spacing-sm)         /* 8px */
var(--spacing-md)         /* 16px */
var(--spacing-lg)         /* 24px */
var(--spacing-xl)         /* 32px */
var(--spacing-2xl)        /* 48px */
var(--spacing-3xl)        /* 64px */
```

### Ombres
```css
var(--shadow-subtle)      /* 0 2px 15px rgba(0, 0, 0, 0.06) */
var(--shadow-soft)        /* 0 4px 20px rgba(0, 0, 0, 0.08) */
var(--shadow-medium)      /* 0 8px 30px rgba(0, 0, 0, 0.12) */
var(--shadow-strong)      /* 0 12px 40px rgba(0, 0, 0, 0.15) */
```

### Transitions
```css
var(--transition-fast)    /* 150ms ease-in-out */
var(--transition-normal)  /* 300ms ease-in-out */
var(--transition-slow)    /* 500ms ease-in-out */
```

### Border Radius
```css
var(--radius-none)        /* 0 */
var(--radius-sm)          /* 4px */
var(--radius-md)          /* 8px */
var(--radius-lg)          /* 12px */
var(--radius-xl)          /* 16px */
var(--radius-full)        /* 9999px */
```

---

## 🔄 ANIMATIONS

### Classes Prêtes à Utiliser
```javascript
// Fade up au scroll
<div className=\"fade-up\">Contenu</div>

// Fade in
<div className=\"fade-in\">Contenu</div>

// Lift on hover
<button className=\"lift-on-hover\">Button</button>
```

### Keyframes Disponibles
```css
@keyframes fadeUp      /* Opacity + translateY */
@keyframes fadeIn      /* Simple opacity */
@keyframes slideInLeft /* From left */
@keyframes slideInRight /* From right */
@keyframes scaleIn     /* Scale from 0.95 */
@keyframes pulse       /* Opacity pulse */
@keyframes glow        /* Text glow effect */
```

---

## 📂 CHEMINS IMPORTS (Relatifs)

```javascript
// Depuis une page (ex: Pages/Home/Home.js)
import { CONTACT } from \"../../config/contact\";
import { useFadeUpAnimation } from \"../../hooks\";
import { PresentationSection } from \"../../components/shared\";

// Depuis un composant (ex: components/shared/ContactCard.jsx)
import { CONTACT } from \"../../config/contact\";
```

---

## 💡 PATTERNS COURANTS

### Pattern: Afficher email depuis config
```javascript
<a href={`mailto:${CONTACT.primaryEmail}`}>
  {CONTACT.primaryEmail}
</a>
```

### Pattern: Afficher phone depuis config
```javascript
<a href={`tel:${CONTACT.phone}`}>
  {CONTACT.phone}
</a>
```

### Pattern: Afficher info Chef
```javascript
<h1>{CHEF.fullName}</h1>
<p className=\"quote\">{CHEF.quote}</p>
```

### Pattern: Boucler les skills
```javascript
{CHEF.skills.map((skill) => (
  <div key={skill.title}>
    <span>{skill.icon}</span>
    <h3>{skill.title}</h3>
    <p>{skill.description}</p>
  </div>
))}
```

### Pattern: Boucler locations
```javascript
{Object.values(CONTACT.locations).map((loc) => (
  <ContactCard
    key={loc.name}
    name={loc.name}
    address={loc.address}
    email={loc.email}
    hours={loc.hours}
  />
))}
```

---

## ⚡ QUICK WINS (30 min changes)

1. **Ajouter email du config**: `CONTACT.primaryEmail`
2. **Ajouter nom Chef**: `CHEF.fullName`
3. **Ajouter quote Chef**: `CHEF.quote`
4. **Ajouter phone du config**: `CONTACT.phone`
5. **Utiliser PresentationSection**: Replace 20-line HTML
6. **Utiliser ContactCard**: Replace 10-line card HTML
7. **Ajouter loadImages**: Replace 50+ import lines
8. **Ajouter useCarousel**: Replace carousel logic

---

## 🚨 COMMON MISTAKES

```javascript
// ❌ WRONG
import { CONTACT } from \"./config/contact\"; // Chemin incorrect

// ✅ CORRECT
import { CONTACT } from \"../../config/contact\"; // Chemin correct

// ❌ WRONG
<img src={image} /> // Missing alt

// ✅ CORRECT
<img src={image} alt=\"Description\" /> // Alt attribute

// ❌ WRONG
useFadeUpAnimation(); // Sans selector

// ✅ CORRECT
useFadeUpAnimation(\".fade-up\"); // Avec selector

// ❌ WRONG
const carousel = useCarousel(); // Sans items

// ✅ CORRECT
const carousel = useCarousel(items); // Avec items
```

---

## 📞 FICHIERS DE RÉFÉRENCE

| Besoin | Fichier |
|--------|---------|
| Email/Phone/Address | `src/config/contact.js` |
| Chef Info | `src/config/chef.js` |
| Fade Up Hook | `src/hooks/useFadeUpAnimation.js` |
| Carousel Hook | `src/hooks/useCarousel.js` |
| Presentation Component | `src/components/shared/PresentationSection.jsx` |
| Gallery Component | `src/components/shared/ImageGallery.jsx` |
| Contact Card Component | `src/components/shared/ContactCard.jsx` |
| Load Images Service | `src/services/imageLoader.js` |
| Dish Service | `src/services/dishService.js` |
| CSS Variables | `src/styles/variables.css` |
| Keyframes | `src/styles/animations.css` |

---

**Créé**: 18 Mai 2026
**Status**: ✅ Prêt à utiliser
**Utilisation**: Garder à côté pendant le développement! 🚀
