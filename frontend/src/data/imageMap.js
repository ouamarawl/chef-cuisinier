/**
 * Image Mapper - Maps all image references to their paths
 * 
 * This centralized mapping replaces 150+ individual imports and provides
 * a single source of truth for all image locations.
 * 
 * Usage:
 *   import imageMap from '../data/imageMap.js';
 *   const imagePath = imageMap.getImage('plat110');
 */

const imageMap = {
  // Plats gallery images (110-173)
  plat110: require('../assets/images_plats/plat110.jpeg'),
  plat111: require('../assets/images_plats/plat111.jpeg'),
  plat112: require('../assets/images_plats/plat112.jpeg'),
  plat113: require('../assets/images_plats/plat113.jpeg'),
  plat114: require('../assets/images_plats/plat114.jpeg'),
  plat115: require('../assets/images_plats/plat115.jpeg'),
  plat116: require('../assets/images_plats/plat116.jpeg'),
  plat117: require('../assets/images_plats/plat117.jpeg'),
  plat118: require('../assets/images_plats/plat118.jpeg'),
  plat119: require('../assets/images_plats/plat119.jpeg'),
  plat120: require('../assets/images_plats/plat120.jpeg'),
  plat121: require('../assets/images_plats/plat121.jpeg'),
  plat122: require('../assets/images_plats/plat122.jpeg'),
  plat123: require('../assets/images_plats/plat123.jpeg'),
  plat124: require('../assets/images_plats/plat124.jpeg'),
  plat125: require('../assets/images_plats/plat125.jpeg'),
  plat126: require('../assets/images_plats/plat126.jpeg'),
  plat127: require('../assets/images_plats/plat127.jpeg'),
  plat128: require('../assets/images_plats/plat128.jpeg'),
  plat129: require('../assets/images_plats/plat129.jpeg'),
  plat130: require('../assets/images_plats/plat130.jpeg'),
  plat130_v2: require('../assets/images_plats/plat130_v2.jpeg'),
  plat131: require('../assets/images_plats/plat131.jpeg'),
  plat132: require('../assets/images_plats/plat132.jpeg'),
  plat133: require('../assets/images_plats/plat133.jpeg'),
  plat134: require('../assets/images_plats/plat134.jpeg'),
  plat135: require('../assets/images_plats/plat135.jpeg'),
  plat136: require('../assets/images_plats/plat136.jpeg'),
  plat137: require('../assets/images_plats/plat137.jpeg'),
  plat138: require('../assets/images_plats/plat138.jpeg'),
  plat139: require('../assets/images_plats/plat139.jpeg'),
  plat140: require('../assets/images_plats/plat140.jpeg'),
  plat141: require('../assets/images_plats/plat141.jpeg'),
  plat142: require('../assets/images_plats/plat142.jpeg'),
  plat143: require('../assets/images_plats/plat143.jpeg'),
  plat144: require('../assets/images_plats/plat144.jpeg'),
  plat145: require('../assets/images_plats/plat145.jpeg'),
  plat146: require('../assets/images_plats/plat146.jpeg'),
  plat147: require('../assets/images_plats/plat147.jpeg'),
  plat148: require('../assets/images_plats/plat148.jpeg'),
  plat149: require('../assets/images_plats/plat149.jpeg'),
  plat150: require('../assets/images_plats/plat150.jpeg'),
  plat151: require('../assets/images_plats/plat151.jpeg'),
  plat152: require('../assets/images_plats/plat152.jpeg'),
  plat153: require('../assets/images_plats/plat153.jpeg'),
  plat154: require('../assets/images_plats/plat154.jpeg'),
  plat155: require('../assets/images_plats/plat155.jpeg'),
  plat156: require('../assets/images_plats/plat156.jpeg'),
  plat157: require('../assets/images_plats/plat157.jpeg'),
  plat158: require('../assets/images_plats/plat158.jpeg'),
  plat159: require('../assets/images_plats/plat159.jpeg'),
  plat160: require('../assets/images_plats/plat160.jpeg'),
  plat161: require('../assets/images_plats/plat161.jpeg'),
  plat162: require('../assets/images_plats/plat162.jpeg'),
  plat163: require('../assets/images_plats/plat163.jpeg'),
  plat164: require('../assets/images_plats/plat164.jpeg'),
  plat165: require('../assets/images_plats/plat165.jpeg'),
  plat166: require('../assets/images_plats/plat166.jpeg'),
  plat167: require('../assets/images_plats/plat167.jpeg'),
  plat168: require('../assets/images_plats/plat168.jpeg'),
  plat169: require('../assets/images_plats/plat169.jpeg'),
  plat170: require('../assets/images_plats/plat170.jpeg'),
  plat171: require('../assets/images_plats/plat171.jpeg'),
  plat172: require('../assets/images_plats/plat172.jpeg'),
  plat173: require('../assets/images_plats/plat173.jpeg'),

  // Menu images from mune folder
  plat81: require('../assets/mune/plat81.JPG'),
  plat82: require('../assets/mune/plat82.JPG'),
  plat83: require('../assets/mune/plat83.JPG'),
  plat84: require('../assets/mune/plat84.JPG'),
  plat85: require('../assets/mune/plat85.JPG'),
  plat86: require('../assets/mune/plat86.JPG'),
  plat87: require('../assets/mune/plat87.JPG'),
  plat88: require('../assets/mune/plat88.JPG'),
  plat89: require('../assets/mune/plat89.JPG'),
  plat90: require('../assets/mune/plat90.JPG'),
  plat91: require('../assets/mune/plat91.JPG'),
  plat92: require('../assets/mune/plat92.JPG'),
  plat93: require('../assets/mune/plat93.JPG'),
  plat94: require('../assets/mune/plat94.JPG'),
  plat95: require('../assets/mune/plat95.JPG'),
  plat96: require('../assets/mune/plat96.JPG'),
  plat97: require('../assets/mune/plat97.JPG'),
  plat99: require('../assets/mune/plat99.JPG'),
  plat100: require('../assets/mune/plat100.JPG'),
  plat101: require('../assets/mune/plat101.JPG'),
  plat102: require('../assets/mune/plat102.JPG'),
  plat103: require('../assets/mune/plat103.JPG'),
  plat104: require('../assets/mune/plat104.JPG'),
};

/**
 * Get image path by ID
 * @param {string} imageId - Image identifier (e.g., 'plat110')
 * @returns {string} Image path or empty string if not found
 */
const getImage = (imageId) => {
  return imageMap[imageId] || '';
};

/**
 * Get multiple images by array of IDs
 * @param {array} imageIds - Array of image identifiers
 * @returns {array} Array of image paths
 */
const getImages = (imageIds = []) => {
  return imageIds.map(id => getImage(id)).filter(Boolean);
};

/**
 * Check if image exists in map
 * @param {string} imageId - Image identifier
 * @returns {boolean}
 */
const hasImage = (imageId) => {
  return Boolean(imageMap[imageId]);
};

/**
 * Get all available image IDs
 * @returns {array}
 */
const getAllImageIds = () => {
  return Object.keys(imageMap);
};

export default {
  map: imageMap,
  getImage,
  getImages,
  hasImage,
  getAllImageIds,
};
