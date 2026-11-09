import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const iconsDir = path.join(publicDir, 'icons');

// Most square, highest-resolution image in public/
const source = path.join(publicDir, 'anim1.png');
const lightBg = '#ffffff';

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function make() {
  await ensureDir(iconsDir);

  // Verify source
  await fs.access(source);
  const meta = await sharp(source).metadata();
  console.log(`Source: ${path.relative(root, source)} (${meta.width}x${meta.height})`);

  await sharp(source)
    .resize(192, 192, { fit: 'contain', background: lightBg })
    .png()
    .toFile(path.join(iconsDir, 'icon-192.png'));
  console.log('Wrote public/icons/icon-192.png');

  await sharp(source)
    .resize(512, 512, { fit: 'contain', background: lightBg })
    .png()
    .toFile(path.join(iconsDir, 'icon-512.png'));
  console.log('Wrote public/icons/icon-512.png');

  // Maskable: logo scaled to 410x410 centred on solid background (512x512 safe zone)
  const logo = await sharp(source)
    .resize(410, 410, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({
    create: { width: 512, height: 512, channels: 4, background: lightBg },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(path.join(iconsDir, 'maskable-512.png'));
  console.log('Wrote public/icons/maskable-512.png');

  await sharp(source)
    .resize(180, 180, { fit: 'contain', background: lightBg })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Wrote public/apple-touch-icon.png');
}

make().catch((err) => {
  console.error(err);
  process.exit(1);
});
