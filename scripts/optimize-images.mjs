import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');

const filesToOptimize = [
  { name: 'anotamik.jpg', quality: 80 },
  { name: 'duz.png',      quality: 82 },
  { name: 'perma3.png',   quality: 82 },
  { name: 'maske.png',    quality: 82 },
  { name: 'salon2.jpg',   quality: 82 },
  { name: 'salon3.jpg',   quality: 82 },
  { name: 'salon1.jpg',   quality: 82 },
  { name: 'kas_tasarimi_salon.jpg', quality: 82 },
  { name: 'emrah.webp',   quality: 82 },
];

async function optimizeImages() {
  for (const file of filesToOptimize) {
    const inputPath = path.join(imagesDir, file.name);
    const ext = path.extname(file.name).toLowerCase();
    const baseName = path.basename(file.name, ext);
    // Always convert to webp for maximum compression
    const outputName = baseName + '.webp';
    const outputPath = path.join(imagesDir, outputName);
    const isSameFile = file.name === outputName;

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Not found: ${file.name}`);
      continue;
    }

    const beforeBytes = fs.statSync(inputPath).size;

    try {
      const tempPath = outputPath + '.tmp';
      await sharp(inputPath)
        .webp({ quality: file.quality })
        .toFile(tempPath);

      const afterBytes = fs.statSync(tempPath).size;

      // Only replace if smaller
      if (afterBytes < beforeBytes) {
        if (isSameFile) {
          fs.renameSync(tempPath, outputPath);
        } else {
          fs.renameSync(tempPath, outputPath);
          // Keep original for now, just report
        }
        const saved = ((1 - afterBytes / beforeBytes) * 100).toFixed(1);
        console.log(`✅ ${file.name} → ${outputName}: ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB (-${saved}%)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`ℹ️  ${file.name}: Already optimal, skipping`);
      }
    } catch (err) {
      console.error(`❌ Error processing ${file.name}:`, err.message);
    }
  }
}

optimizeImages().then(() => {
  console.log('\n✨ Done! Now update any .jpg/.png imports in your code to .webp if filenames changed.');
});
