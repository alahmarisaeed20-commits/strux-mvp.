# 🚀 Deploying STRUX to Vercel

This guide gets you a **public, shareable URL** (e.g. `https://strux-mvp.vercel.app`)
to demo to investors, clients and BIM managers.

The repo is already configured for Vercel:

- `vercel.json` — Vite framework preset, SPA rewrites (so deep links like
  `/app/viewer` work), and long-term caching for hashed assets.
- `vite.config.ts` — production build with vendor code-splitting (React, Recharts
  and Three.js are separate, cacheable chunks; the 3D engine only loads on the viewer).

---

## Option A — Vercel Dashboard (recommended, ~2 minutes)

1. Push this branch to GitHub (already done): `claude/strux-construction-saas-mvp-zK7xs`.
2. Go to **https://vercel.com/new** and sign in with GitHub.
3. Click **Import** on the `strux-mvp` repository.
4. Vercel auto-detects the settings from `vercel.json`:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. (Optional) Under **Git → Production Branch**, select
   `claude/strux-construction-saas-mvp-zK7xs` if you want this branch to be the live one.
6. Click **Deploy**.

After ~1 minute you get a public URL like `https://strux-mvp.vercel.app`. Every push
to the branch redeploys automatically, and each PR gets its own preview URL.

---

## Option B — Vercel CLI

```bash
# 1. Install the CLI (once)
npm i -g vercel

# 2. From the project root, log in and deploy
vercel            # creates a preview deployment + URL
vercel --prod     # promotes it to your production URL
```

The CLI reads `vercel.json` and builds the project in the cloud — no local build needed.

### B2 — Deploy the prebuilt `dist/` (fastest, no cloud build)

If you've already run `npm run build` locally:

```bash
vercel deploy --prebuilt --prod
```

---

## Option C — Any static host (Netlify, Cloudflare Pages, GitHub Pages, S3…)

STRUX is a static SPA. Build once and upload the `dist/` folder:

```bash
npm install
npm run build      # outputs to ./dist
```

Then drag-and-drop `dist/` into **Netlify Drop** (https://app.netlify.com/drop) for an
instant public URL, **or** point any static host at the `dist/` directory.

> ⚠️ **SPA routing:** because the app uses client-side routing, configure your host to
> fall back to `index.html` for unknown paths. Vercel and Netlify do this automatically
> from the included config; for others, add a catch-all rewrite to `/index.html`.

---

## Build output (for reference)

```
dist/index.html
dist/assets/index-*.css            ~30 kB  (gzip ~6 kB)
dist/assets/index-*.js             ~120 kB (gzip ~30 kB)   app code
dist/assets/react-vendor-*.js      ~164 kB (gzip ~54 kB)   React + Router
dist/assets/charts-*.js            ~423 kB (gzip ~113 kB)  Recharts (dashboard)
dist/assets/three-*.js             ~849 kB (gzip ~230 kB)  3D engine (viewer only)
dist/assets/BIMScene-*.js          ~5 kB                   lazy 3D scene
```

The Three.js chunk is **lazy-loaded** — it is only downloaded when a user opens the
**3D Viewer**, so the dashboard and the rest of the app stay fast on first paint.

---

## After deploying

- Share the production URL with investors / clients.
- Try the **language toggle** (top-right) to demo the full Arabic / RTL experience.
- Open **3D Viewer** and click a clash marker to show the live cost/delay impact.
