import * as fs from "fs";
import * as path from "path";
import { transparentBackground } from "transparent-background";

const imagesDir = path.join(__dirname, "images");
const processedDir = path.join(__dirname, "processed");

const removeBackground = async (filename: string) => {
  const input = await fs.promises.readFile(path.join(imagesDir, filename));
  const output = await transparentBackground(input, "png", {
    fast: false, // uses a 1024x1024 model by default, setting to true uses a 384x384 model instead (faster but lower quality).
  });
  await fs.promises.writeFile(path.join(processedDir, filename), output);
  await fs.promises.unlink(path.join(imagesDir, filename));
  console.log(`Processed ${filename}`);
};

const start = Date.now();
console.log(`Getting the model and processing all images in ${imagesDir}\n`);

if (!fs.existsSync(processedDir)) {
  fs.mkdirSync(processedDir);
}

Promise.all(
  fs
    .readdirSync(imagesDir)
    .filter((filename) => {
      return filename.endsWith(".png") || filename.endsWith(".jpg");
    })
    .map((filename) => {
      return removeBackground(filename);
    })
).then(() => {
  const end = Date.now();
  console.log(`\nProcessed all images in ${end - start}ms`);
});