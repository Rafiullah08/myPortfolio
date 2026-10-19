const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");

const pngToIco = (png) => {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
};

const writeWebp = async (input, output, resize) => {
  let image = sharp(input);
  if (resize) image = image.resize(resize);
  await image.webp({ quality: 78 }).toFile(output);
  const meta = await sharp(output).metadata();
  console.log(`${path.relative(root, output)} ${meta.width}x${meta.height}`);
};

const main = async () => {
  const hero = path.join(root, "src/images/rafiullah.jpg");
  await writeWebp(hero, path.join(root, "src/images/rafiullah-400.webp"), {
    width: 400,
    height: 400,
    fit: "cover",
  });
  await writeWebp(hero, path.join(root, "src/images/rafiullah-800.webp"), {
    width: 800,
    height: 800,
    fit: "cover",
  });

  await writeWebp(
    path.join(root, "public/projects/vornsoft.png"),
    path.join(root, "public/projects/vornsoft-600.webp"),
    { width: 600 }
  );
  await writeWebp(
    path.join(root, "public/projects/vornsoft.png"),
    path.join(root, "public/projects/vornsoft-1200.webp"),
    { width: 1200 }
  );
  await writeWebp(
    path.join(root, "public/projects/vornsoft-desktop.png"),
    path.join(root, "public/projects/vornsoft-desktop-600.webp"),
    { width: 600 }
  );
  await writeWebp(
    path.join(root, "public/projects/vornsoft-desktop.png"),
    path.join(root, "public/projects/vornsoft-desktop-1200.webp"),
    { width: 1200 }
  );
  await writeWebp(
    path.join(root, "public/logos/vornsoft.png"),
    path.join(root, "public/logos/vornsoft-100.webp"),
    {
      width: 100,
      height: 100,
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    }
  );

  const svg = fs.readFileSync(path.join(root, "public/favicon.svg"));
  const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(root, "public/favicon.ico"), pngToIco(png32));
  await sharp(svg).resize(180, 180).png().toFile(path.join(root, "public/apple-touch-icon.png"));
  await sharp(svg).resize(192, 192).png().toFile(path.join(root, "public/icon-192.png"));
  await sharp(svg).resize(512, 512).png().toFile(path.join(root, "public/icon-512.png"));
  console.log("favicons written");
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
