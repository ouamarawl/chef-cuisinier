/**
 * Service: Image Loader
 * Optimise le chargement dynamique des images (require.context)
 * Remplace les 52+ imports individuels par un seul appel dynamique
 */

/**
 * Charge dynamiquement toutes les images d'un dossier
 * @param {string} folderName - Nom du dossier dans assets
 * @param {boolean} numbered - Si true, retourne array trié numériquement
 * @returns {Object|Array} - Objet {filename: imagePath} ou Array d'images
 */
export const loadImages = (folderName, numbered = false) => {
  try {
    const context = require.context(
      "../../assets",
      true,
      /\.(jpg|jpeg|png|gif|webp)$/i
    );
    
    const images = {};
    context.keys().forEach((key) => {
      if (key.includes(folderName)) {
        const cleanKey = key
          .replace(./\.\//g, "")
          .replace(new RegExp(`${folderName}/`), "")
          .replace(/\.[^/.]+$/, "");
        images[cleanKey] = context(key).default || context(key);
      }
    });
    
    // Retour en array trié numériquement si demandé
    if (numbered) {
      return Object.entries(images)
        .sort(([nameA], [nameB]) => {
          const numA = parseInt(nameA.replace(/\D/g, "")) || 0;
          const numB = parseInt(nameB.replace(/\D/g, "")) || 0;
          return numA - numB;
        })
        .map(([_, path]) => path);
    }
    
    return images;
  } catch (error) {
    console.error(`Erreur lors du chargement des images de ${folderName}:`, error);
    return numbered ? [] : {};
  }
};

/**
 * Précharge les images pour améliorer les performances
 * @param {Array<string>} imagePaths - Array de chemins d'images
 */
export const preloadImages = (imagePaths = []) => {
  imagePaths.forEach((imagePath) => {
    const img = new Image();
    img.src = imagePath;
  });
};

/**
 * Optimise un chemin d'image pour lazy loading
 * @param {string} imagePath - Chemin de l'image
 * @param {string} alt - Texte alternatif
 * @returns {Object} - Props optimisées
 */
export const getOptimizedImageProps = (imagePath, alt = "") => {
  return {
    src: imagePath,
    alt: alt || "image",
    loading: "lazy",
    decoding: "async",
  };
};

export default { loadImages, preloadImages, getOptimizedImageProps };
