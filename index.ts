import * as fs from "fs";
import * as path from "path";
import { Rembg } from "rembg-node";
import sharp from "sharp";

const imagesDir = path.join(__dirname, 'images');
const processedDir = path.join(__dirname, 'processed');

const removeBackground = async (filename: string) => {
  const input = sharp(path.join(imagesDir, filename));
  const rembg = new Rembg({
    logging: true,
  });
  const output = await rembg.remove(input);
  await output.toFile(path.join(processedDir, filename));
  console.log(`Processed ${filename}`);
};

const start = Date.now();

if (!fs.existsSync(processedDir)) {
  fs.mkdirSync(processedDir);
}

Promise.all(fs.readdirSync(imagesDir).filter((filename) => {
  return filename.endsWith('.png') || filename.endsWith('.jpg');
}).map((filename) => {
  return removeBackground(filename);
})).then(() => {
  const end = Date.now();
  console.log(`Processed all images in ${end - start}ms`);
});