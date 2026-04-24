# Alice Office — Portfolio

An editorial-style portfolio site for Wu Zhi-Ling, built with Astro and deployed on GitHub Pages.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321/portfolio
npm run build        # outputs to ./dist
npm run preview      # preview production build
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub named **`portfolio`** under the account `alice030-lab`.
2. Push this folder to the new repo:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/alice030-lab/portfolio.git
   git push -u origin main
   ```
3. In the repo on GitHub, go to **Settings → Pages → Source → GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

The site will be live at: **https://alice030-lab.github.io/portfolio**

### Custom domain (optional, later)

If you buy a domain (e.g. `aliceoffice.com`):
1. Add a file `public/CNAME` containing just `aliceoffice.com`.
2. Point the domain at GitHub Pages in your registrar.
3. In `astro.config.mjs`, set `site` to `https://aliceoffice.com` and remove `base: '/portfolio'`.

## Replacing placeholder content

- **Images**: drop production images into `public/images/` and reference them from `src/data/works.ts`.
- **Project copy**: edit `src/data/works.ts` — each entry is a case study.
- **About / Pricing / Contact**: edit the corresponding files in `src/pages/`.
- **Brand name / contact email**: search for `aliceoffice.studio` and `Alice Office` in `src/`.

## Structure

```
src/
  layouts/Layout.astro        # site shell, header, footer
  styles/global.css           # editorial design tokens & components
  data/works.ts               # project content (single source of truth)
  pages/
    index.astro               # home
    work/index.astro          # work archive
    work/[slug].astro         # case study template
    about.astro
    pricing.astro
    contact.astro
public/images/                # hero & case study images
```
