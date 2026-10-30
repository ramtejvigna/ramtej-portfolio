// Renders the app to static HTML and injects it into dist/index.html, so crawlers that
// don't run JavaScript (and every crawler on first fetch) see the real page content.
// Run after `vite build` and `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import { readFile, readdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const appHtml = render();

// Preload the latin cuts of the two fonts that paint above the fold.
const assets = await readdir(path.join(dist, "assets"));
const preloads = assets
  .filter((f) => /^(inter-tight|manrope)-latin-wght-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join("\n    ");

const indexPath = path.join(dist, "index.html");
let html = await readFile(indexPath, "utf8");
if (!html.includes('<div id="root"></div>')) throw new Error("dist/index.html has no empty #root to fill");
html = html
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  .replace("<!--font-preloads-->", preloads);
await writeFile(indexPath, html);
await rm(ssrDir, { recursive: true, force: true });

console.log(`prerendered ${appHtml.length.toLocaleString()} chars into dist/index.html`);
