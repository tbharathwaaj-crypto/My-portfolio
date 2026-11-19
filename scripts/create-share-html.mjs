import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(projectRoot, "dist");
const htmlPath = path.join(distRoot, "index.html");
let html = await readFile(htmlPath, "utf8");

const scriptMatch = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
const styleMatch = html.match(/<link rel="stylesheet" crossorigin href="([^"]+)"\s*\/?>/);

if (!scriptMatch || !styleMatch) {
  throw new Error("Could not locate the built JavaScript and CSS in dist/index.html.");
}

const distAssetPath = (url) => path.join(distRoot, url.replace(/^\//, ""));
let script = await readFile(distAssetPath(scriptMatch[1]), "utf8");
let styles = await readFile(distAssetPath(styleMatch[1]), "utf8");

const mimeTypes = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

for (const fileName of await readdir(path.join(distRoot, "images"))) {
  const extension = path.extname(fileName).toLowerCase();
  const mimeType = mimeTypes[extension];
  if (!mimeType) continue;

  const image = await readFile(path.join(distRoot, "images", fileName));
  const dataUri = `data:${mimeType};base64,${image.toString("base64")}`;
  const publicPath = `/images/${fileName}`;
  script = script.replaceAll(publicPath, dataUri);
  styles = styles.replaceAll(publicPath, dataUri);
  html = html.replaceAll(publicPath, dataUri);
}

const inlineScript = script.replace(/<\/script/gi, "<\\/script");
html = html
  .replace(scriptMatch[0], () => `<script type="module">${inlineScript}</script>`)
  .replace(styleMatch[0], () => `<style>${styles}</style>`);

const sharePath = path.join(projectRoot, "portfolio-share.html");
await writeFile(sharePath, html, "utf8");
console.log(`Created ${sharePath}`);
