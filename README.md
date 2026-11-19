# Bharathwaaj Murugan · Product Designer Portfolio

An editorial React and TypeScript portfolio built with Vite. The site uses the supplied portfolio archive as a source of content and media, with a new information architecture and visual system.

## Run locally

```sh
npm install
npm run dev
```

Build the production site with `npm run build`; preview the build with `npm run preview`.

Create the standalone file used for offline sharing with `npm run build:share`. It writes `portfolio-share.html` in the project folder; this generated file is intentionally excluded from Git because it duplicates the bundled site assets.

## Content and assets

Project, experience, skills, tools, and achievement data live in `src/data/content.ts`. The source content audit is in [docs/content-inventory.md](docs/content-inventory.md), and the asset index is in [docs/asset-manifest.json](docs/asset-manifest.json).

## Contact integrations

The contact and portfolio-feedback forms validate their input in the browser. They do not claim to send a message unless the request succeeds. To enable submission, provide a public POST endpoint in `VITE_CONTACT_ENDPOINT` and `VITE_FEEDBACK_ENDPOINT` (see `.env.example`). The endpoint must accept JSON. Do not put private keys in Vite environment variables; browser variables are public.

The LinkedIn profile is connected. A resume, email address, and phone number are not configured, so their placeholders remain in the site.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds the site and publishes it to GitHub Pages whenever changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. It handles the repository base path for images, routes, and the custom cursor.

## Typography

Body text uses Poppins. Headings request PP Neue Machina, with Space Grotesk as a fallback. The supplied archive did not include a PP Neue Machina font file. To bundle it for visitors who do not already have it installed, add a licensed WOFF2 at `public/fonts/PPNeueMachina-Regular.woff2` and wire it with `@font-face` in `src/styles.css`.
