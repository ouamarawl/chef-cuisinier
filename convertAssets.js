const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const heicConvert = require("heic-convert");
const ffmpeg = require("fluent-ffmpeg");

// Définir le chemin exact vers ffmpeg.exe
ffmpeg.setFfmpegPath(
  "C:/Users/L13 YOGA/Downloads/ffmpeg-2026-01-29-git-c898ddb8fe-essentials_build/bin/ffmpeg.exe"
);

const folder =
  "C:\\Users\\L13 YOGA\\OneDrive\\Bureau\\mes_projets\\projet React\\chef-cuisinier\\frontend\\src\\assets\\images-avent-utilisation";

// Créer dossier temporaire pour les fichiers convertis
const convertedFolder = path.join(folder, "converted");
if (!fs.existsSync(convertedFolder)) fs.mkdirSync(convertedFolder);

let photoIndex = 20;
let videoIndex = 7;

const files = fs.readdirSync(folder);

(async () => {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const fullPath = path.join(folder, file);

    // Ignorer le dossier converted lui-même
    if (file === "converted") continue;

    /* ===== PHOTOS ===== */
    if ([".jpg", ".jpeg", ".png", ".heic", ".dng"].includes(ext)) {
      const output = path.join(convertedFolder, `buffet-${photoIndex}.jpg`);

      try {
        if (ext === ".heic") {
          const inputBuffer = fs.readFileSync(fullPath);
          const outputBuffer = await heicConvert({
            buffer: inputBuffer,
            format: "JPEG",
            quality: 1,
          });
          fs.writeFileSync(output, outputBuffer);
        } else {
          await sharp(fullPath).jpeg({ quality: 90 }).toFile(output);
        }

        try {
          fs.unlinkSync(fullPath);
        } catch (err) {
          console.log(`⚠️ Impossible de supprimer ${file}: ${err.message}`);
        }

        photoIndex++;
      } catch (err) {
        console.log(`❌ Erreur avec le fichier ${file}: ${err.message}`);
      }
    }

    /* ===== VIDEOS ===== */
    if (ext === ".mov") {
      const output = path.join(convertedFolder, `video-buffet-${videoIndex}.mp4`);

      try {
        await new Promise((resolve, reject) => {
          ffmpeg(fullPath)
            .outputOptions("-movflags faststart")
            .toFormat("mp4")
            .on("end", resolve)
            .on("error", reject)
            .save(output);
        });

        try {
          fs.unlinkSync(fullPath);
        } catch (err) {
          console.log(`⚠️ Impossible de supprimer ${file}: ${err.message}`);
        }

        videoIndex++;
      } catch (err) {
        console.log(`❌ Erreur avec la vidéo ${file}: ${err.message}`);
      }
    }
  }

  console.log(`✅ Conversion terminée ! Les fichiers sont dans ${convertedFolder}`);
})();
