# 📋 TODO - Prochaines Étapes Optionnelles

Voici une liste de tâches optionnelles pour continuer à optimiser et refactoriser progressivement le projet.

---

## 🎯 Phase 1: Intégration Immédiate (1-2 jours)

Ces tâches vous permettront de commencer à bénéficier de la nouvelle architecture dès maintenant.

### Utiliser la Configuration Centralisée
- [ ] Importer `CONTACT` dans `Contact.js` et utiliser les coordonnées
- [ ] Importer `CHEF` dans `Home.js` et remplacer les infos hardcodées
- [ ] Importer `CHEF` dans `Réservation.js` pour la description
- [ ] Importer `CONTACT` dans `Footer.js` pour tous les emails

### Tester les Nouveaux Composants
- [ ] Tester que `<PresentationSection />` fonctionne
- [ ] Tester que `<ImageGallery />` fonctionne
- [ ] Tester que `<ContactCard />` fonctionne
- [ ] Vérifier l'affichage dans différents navigateurs

### Cleanup Imports
- [ ] Supprimer les imports inutilisés dans `ChefAthmane.js`
- [ ] Supprimer les imports inutilisés dans `Home.js`
- [ ] Supprimer les imports inutilisés dans `Contact.js`

---

## 🔄 Phase 2: Refactorisation Progressive (1-2 semaines)

Refactoriser progressivement les pages existantes pour utiliser les nouveaux composants.

### Refactoriser Home.js
- [ ] Utiliser `<PresentationSection />` pour section Chef
- [ ] Utiliser `useFadeUpAnimation()` pour animations
- [ ] Utiliser `CHEF.quote` au lieu du hardcoded

### Refactoriser Contact.js
- [ ] Utiliser `<ContactCard />` pour tous les services
- [ ] Importer `CONTACT.locations` pour les adresses
- [ ] Supprimer les divs `.block-g` et `.block-d` maintenant inutiles

### Refactoriser Plats.js
- [ ] Remplacer carousel par `useCarousel()`
- [ ] Remplacer fadeUpAnimation par `useFadeUpAnimation()`
- [ ] Utiliser `DishService.getAll()` pour les données

### Refactoriser ChefAthmane.js
- [ ] Remplacer 52+ imports par `loadImages("images_athmen", true)`
- [ ] Utiliser `useCarousel()` pour carousel
- [ ] Utiliser `useFadeUpAnimation()` pour animations
- [ ] Utiliser `CHEF` pour infos

### Refactoriser Menue.js
- [ ] Utiliser `useFadeUpAnimation()`
- [ ] Utiliser `useCarousel()` si carousel existe
- [ ] Utiliser `CONTACT` pour infos service

### Refactoriser Buffets.js
- [ ] Remplacer imports buffets par `loadImages("Buffets", true)`
- [ ] Utiliser `useCarousel()` pour galerie
- [ ] Utiliser `CHEF.buffetTypes` pour types

### Refactoriser Réservation.js
- [ ] Utiliser `CONTACT.phone` pour le numéro
- [ ] Utiliser `CHEF.fullName` pour "Chef Athmane Ouamara"
- [ ] Améliorer le formulaire avec validation

### Refactoriser Larriere_cuisine.js
- [ ] Utiliser `CONTACT.locations.creativeKitchen` pour infos
- [ ] Utiliser `CHEF.quote` (citation artistique)
- [ ] Optimiser les imports d'images

---

## ⚡ Phase 3: Optimisations de Performance (1 semaine)

### Lazy Loading Images
- [ ] Ajouter `loading="lazy"` à toutes les images
- [ ] Utiliser `getOptimizedImageProps()` pour props optimisées

### CSS Cleanup
- [ ] Remplacer hardcoded colors par variables CSS
- [ ] Remplacer hardcoded fonts par variables CSS
- [ ] Utiliser keyframes de `animations.css` au lieu de définis localement

### Bundle Optimization
- [ ] Vérifier taille du bundle avec dev tools
- [ ] Identifier et supprimer code inutilisé
- [ ] Compresser les images avec convertAssets.js

### Préchargement Stratégique
- [ ] Précharger images visibles au-dessus de la ligne
- [ ] Utiliser `preloadImages()` pour images critiques
- [ ] Lazy load images en-dessous du fold

---

## 🔒 Phase 4: Sécurité & Configuration (3-5 jours)

### Variabiliser la Configuration
- [ ] Créer `.env.example` (sans valeurs sensibles)
- [ ] Créer `.env.local` (avec valeurs réelles) - **NE PAS COMMITER**
- [ ] Utiliser `process.env.REACT_APP_*` pour values sensibles

### Firebase Security
- [ ] Déplacer `firebaseConfig.js` vers `.env`
- [ ] Utiliser variables d'environnement pour clés
- [ ] Revoir les règles Firestore (sécurité)

### Données Sensibles
- [ ] Vérifier qu'aucun token n'est exposed
- [ ] Vérifier qu'aucune clé API n'est hardcodée
- [ ] Utiliser config centralisée pour tous les endpoints

---

## 🧪 Phase 5: Tests & Validation (1-2 semaines)

### Tests Unitaires
- [ ] Tester `useCarousel()` hook
- [ ] Tester `useFadeUpAnimation()` hook
- [ ] Tester `loadImages()` service
- [ ] Tester `DishService` methods

### Tests Composants
- [ ] Tester `<PresentationSection />` props
- [ ] Tester `<ImageGallery />` carousel
- [ ] Tester `<ContactCard />` rendering

### Tests Intégration
- [ ] Tester que pages refactorisées marchent
- [ ] Tester routes de navigation
- [ ] Tester formulaires

### E2E Tests
- [ ] Tester flow complète utilisateur
- [ ] Tester sur mobile (responsive)
- [ ] Tester dans différents navigateurs

---

## 📱 Phase 6: Responsive & Accessibilité (1 semaine)

### Responsive Design
- [ ] Tester sur mobile (iPhone, Android)
- [ ] Tester sur tablet
- [ ] Ajuster media queries si besoin

### Accessibilité
- [ ] Ajouter `alt` à toutes les images
- [ ] Améliorer contraste des couleurs
- [ ] Tester avec lecteur d'écran
- [ ] Vérifier keyboard navigation

### SEO
- [ ] Ajouter meta tags
- [ ] Structurer contenu avec headings corrects
- [ ] Ajouter schema.org markup
- [ ] Tester avec Google Lighthouse

---

## 🚀 Phase 7: Déploiement & Monitoring (3-5 jours)

### Avant Déploiement
- [ ] Build production: `npm run build`
- [ ] Tester build localement
- [ ] Vérifier qu'aucun console.log() existe
- [ ] Vérifier source maps pour production

### Firebase Deployment
- [ ] Vérifier `firebase.json`
- [ ] Vérifier `.firebaserc`
- [ ] Deploy à Firebase: `firebase deploy --only hosting`

### Monitoring Post-Deployment
- [ ] Tester le site live
- [ ] Vérifier les logs Firebase
- [ ] Vérifier Analytics
- [ ] Vérifier Performance (Lighthouse)

### Documentation Après Déploiement
- [ ] Documenter les variables d'environnement
- [ ] Documenter process de déploiement
- [ ] Créer guide de maintenance

---

## 📈 Phase 8: Optimisations Avancées (2-4 semaines)

### TypeScript Migration
- [ ] Setup TypeScript dans le projet
- [ ] Typer `CONTACT` object
- [ ] Typer `CHEF` object
- [ ] Typer tous les components
- [ ] Typer tous les hooks

### State Management
- [ ] Évaluer si Redux est nécessaire
- [ ] Setup Context API ou Redux si besoin
- [ ] Centraliser state de l'app

### Composants Avancés
- [ ] Créer composant Form réutilisable
- [ ] Créer composant Modal réutilisable
- [ ] Créer composant Pagination réutilisable
- [ ] Créer composant Search réutilisable

### Performance Avancée
- [ ] Code splitting avec React.lazy
- [ ] Route-based code splitting
- [ ] Image optimization (WebP, srcset)
- [ ] CSS-in-JS optimization

---

## 🌐 Phase 9: Progressive Web App (2-3 semaines)

### Service Worker
- [ ] Créer service worker
- [ ] Setup offline support
- [ ] Implémenter cache strategy

### Web App Manifest
- [ ] Créer `manifest.json` complet
- [ ] Setup icons pour PWA
- [ ] Setup theme colors

### Installation
- [ ] Tester installation sur mobile
- [ ] Tester offline mode
- [ ] Setup notification support

---

## 📊 Phase 10: Analytics & Monitoring (1 semaine)

### Analytics Setup
- [ ] Setup Google Analytics
- [ ] Track page views
- [ ] Track user interactions
- [ ] Setup conversion tracking

### Error Monitoring
- [ ] Setup Sentry ou similaire
- [ ] Track console errors
- [ ] Setup error alerts
- [ ] Review error logs régulièrement

### Performance Monitoring
- [ ] Setup performance monitoring
- [ ] Track Core Web Vitals
- [ ] Setup alerts pour degradation
- [ ] Review metrics régulièrement

---

## 🎯 Priorités Recommandées

### Critique (Faire d'abord)
1. Utiliser configuration `CONTACT` et `CHEF`
2. Nettoyer imports inutilisés
3. Tester tous les nouveaux composants

### Important (Faire ensuite)
4. Refactoriser pages principales (Home, Contact)
5. Ajouter `loading="lazy"` à images
6. Créer `.env` pour config sensible

### Nice to Have (Faire plus tard)
7. Migration TypeScript
8. PWA features
9. Analytics setup
10. Optimisations avancées

---

## ✅ Checklist de Validation

Avant de considérer une phase comme complète:

- [ ] Code review fait
- [ ] Tests passent (si applicable)
- [ ] Pas de console errors
- [ ] Performance maintenue
- [ ] Responsive tested
- [ ] Accessibilité vérifiée
- [ ] Documentation mise à jour

---

## 📝 Notes

- **Optionnel**: Tout ce qui est listed ici est optionnel
- **Progressif**: Peut être fait progressivement sans pression
- **Flexible**: Ajuster selon vos priorités
- **Révisable**: Revenir à cette liste si besoin

---

## 📞 Support

Pour questions sur comment faire une tâche:
1. Voir [GUIDE_UTILISATION.md](GUIDE_UTILISATION.md) pour exemples
2. Voir [INDEX.md](INDEX.md) pour navigation
3. Consulter les fichiers de code directement

---

**Date création**: 18 Mai 2026
**Status**: Guide de recommandations
**Prochaine étape**: Choisir Phase 1 et commencer! 🚀
