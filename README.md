# STRUX — AI Engineering Intelligence Platform

> **The AI Operating Layer for Engineering & Construction**
> An AI-powered BIM & Construction Intelligence SaaS prototype built for the Saudi construction market.

STRUX does **not** replace Autodesk / Revit / Navisworks. It adds an **intelligence layer** on top of
BIM files, IFC/Revit models, BOQs, specifications, RFIs and Saudi compliance requirements — turning models
into decisions for Contractors, Consultants, BIM Managers and Owners.

This repository is a **clickable, investor-ready MVP prototype** (front-end only, mock data).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

> 🌍 **Want a public shareable link?** See **[DEPLOY.md](./DEPLOY.md)** — the repo is
> pre-configured for a one-click Vercel deployment (SPA routing + optimized chunks).

---

## ✨ Modules included

| # | Module | What it shows |
|---|--------|---------------|
| 0 | **Premium Landing** (`/`) | Investor-grade marketing site — animated hero, BIM screenshot mock-ups, trusted-by marquee, count-up stats, module grid, Vision 2030 section, investor teaser, footer |
| 0a | **Executive Dashboard** (`/app/executive`) | C-suite view — portfolio health, financial exposure, project risk heatmap, exposure-by-project chart, decisions required |
| 0b | **Investor Mode** (`/app/investor`) | Investment thesis, TAM/SAM/SOM market sizing, traction & unit economics, "why we win", the raise, Vision 2030 |
| 1 | **Login** (`/login`) | Enterprise sign-in for Contractors, Consultants, BIM Managers & Owners |
| 2 | **Command Dashboard** | BIM Health 92%, 247 issues, 38 high-risk, 16 RFIs, 18 projects, 4,200 reports, 88% compliance + charts |
| 3 | **Project Workspace** | Riyadh Tower, NEOM, Hospital, Industrial Factory — BIM score, issues, compliance, risk, last upload |
| 4 | **BIM File Upload** | IFC / Revit / BOQ / Specs upload + animated AI processing pipeline |
| 5 | **AI Analysis** | 9 tabs (below) over the federated model |
| 5a | **3D BIM Viewer** | Interactive Three.js model — toggle Structure / MEP / Architecture layers, click glowing clash markers to inspect cost & delay impact (also a dedicated sidebar page) |
| 6 | **QA/QC Checks** | Naming, LOD, coordinates, classification, metadata, duplication, sheet consistency |
| 7 | **Clash Intelligence** | Clash register with cost impact (SAR), delay impact, priority & recommendation |
| 8 | **Saudi Compliance Engine** | SBC, Civil Defense, Accessibility, Municipality, Energy, Government + violations |
| 9 | **Quantity Extraction** | Model vs BOQ quantities, variance % and risk level |
| 10 | **RFI Generator** | Auto-drafts RFIs from clashes / compliance / quantity issues |
| 11 | **Engineering AI Chat** | Construction-specific Q&A assistant (canned, context-aware) |
| 12 | **Executive Smart Report** | Printable report: summary, top 10 issues, financial impact, decisions |
| 13 | **Admin / Settings** | Company, users & roles, permissions matrix, API/integrations, KSA security, subscription |

---

## 🛠 Tech stack

- **React 18** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS** (custom STRUX navy / electric-blue / silver theme)
- **React Router** (clickable multi-page navigation)
- **Recharts** (area / bar / pie / radar charts)
- **Three.js** + **@react-three/fiber** + **@react-three/drei** (interactive 3D BIM viewer, lazy-loaded)
- **Bilingual i18n** — English ⇄ **العربية** with full **RTL** layout (custom lightweight context, `src/i18n/`)
- **Mock data only** — no backend required (`src/data/mock.ts`)

Design language inspired by Procore, Palantir, Autodesk Construction Cloud, Linear and Vercel.

### 🌐 Arabic & 3D

- **Language toggle** sits in the top bar (and on the login screen). It switches every UI label to Arabic,
  flips the entire layout to **RTL**, and swaps the typeface to **Tajawal**. The choice persists in
  `localStorage`. Translations live in `src/i18n/dictionary.ts`.
- **3D Viewer** is available both as a dedicated **3D Viewer** item in the sidebar and as the **3D Model**
  tab inside AI Analysis. Drag to orbit, scroll to zoom, toggle disciplines, and click the red/amber clash
  markers to inspect their cost and schedule impact.

---

## 🚀 Run locally

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → open the printed URL (default http://localhost:5173)

# 3. Production build (optional)
npm run build
npm run preview
```

On the login screen, pick any role and click **Enter STRUX Platform** — no real authentication.

---

## 📁 Folder structure

```
strux-mvp/
├── index.html
├── package.json
├── tailwind.config.js / postcss.config.js
├── vite.config.ts / tsconfig*.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                 # App entry + router provider
    ├── App.tsx                  # Routes
    ├── index.css                # Tailwind + STRUX component classes
    ├── data/
    │   └── mock.ts              # ALL sample data (single source of truth)
    ├── i18n/
    │   ├── index.tsx            # I18nProvider + useI18n() hook (lang, dir, t)
    │   └── dictionary.ts        # English / Arabic strings
    ├── components/
    │   ├── Layout.tsx           # Sidebar + topbar shell (+ language toggle)
    │   ├── Brand.tsx            # STRUX logo / wordmark
    │   ├── three/
    │   │   └── BIMScene.tsx     # Three.js / R3F 3D building + clash markers
    │   └── ui/
    │       ├── Icons.tsx        # Inline SVG icon set
    │       └── primitives.tsx   # Card, Badge, ProgressBar, ScoreRing…
    └── pages/
        ├── Login.tsx
        ├── Dashboard.tsx
        ├── Projects.tsx
        ├── Upload.tsx
        ├── Analysis.tsx         # Tab container
        ├── Viewer.tsx           # 3D viewer page (also embedded as a tab)
        ├── Settings.tsx
        └── analysis/
            ├── Overview.tsx
            ├── QAQC.tsx
            ├── ClashIntel.tsx
            ├── Compliance.tsx
            ├── Quantity.tsx
            ├── RFIGen.tsx
            ├── AIChat.tsx
            └── ExecReport.tsx
```

---

## 🧭 Demo flow (for investors / executives)

1. **Login** → choose *BIM Manager* → enter platform.
2. **Dashboard** → portfolio health, KPIs and trend charts.
3. **Projects** → open *Riyadh Mixed-Use Tower*.
4. **Upload** → select files → **Run STRUX AI Analysis** → watch the 6-stage pipeline → **View Results**.
5. **AI Analysis** → walk the 8 tabs: Overview → QA/QC → Clash → Compliance → Quantity → RFI → AI Chat → Executive Report.
6. **AI Chat** → ask *"What are the highest-risk issues?"* or *"Which clashes have the biggest cost impact?"*.
7. **Executive Report** → **Print / Download PDF**.
8. **Settings** → show **🇸🇦 Saudi data residency**, permissions matrix and subscription tiers.

---

## 🔭 Suggested next technical phase

This prototype is intentionally front-end + mock data. To move toward a production platform:

**1. BIM ingestion engine**
- Server-side IFC parsing (`IfcOpenShell` / `web-ifc`) and Revit via Autodesk Platform Services (Forge) Model Derivative API.
- Element graph stored in PostgreSQL + a geometry/spatial index; large models in object storage (KSA region).

**2. Real analysis services**
- QA/QC rule engine (configurable per BIM Execution Plan).
- Clash detection (server-side hard/soft tests or APS clash) with ML-based cost/delay impact scoring.
- Quantity take-off mapped to BOQ via fuzzy/AI item matching.

**3. Saudi Compliance Engine**
- Encode SBC, Civil Defense (GDCD), Accessibility, Municipality (Balady), Energy (SBC 601) as a rules library.
- Map model parameters → clauses; generate authority-ready compliance reports.

**4. AI layer (Claude)**
- Replace canned chat with the **Claude API** (latest Opus/Sonnet) using tool-use / RAG over the model's
  analysis results; add prompt caching for cost efficiency.
- AI-generated RFIs and executive narratives grounded in real findings.

**5. Platform & security**
- Auth (SSO/SAML, RBAC), multi-tenant workspaces, audit logging.
- KSA data residency, PDPL/SDAIA alignment, ISO 27001 path.
- Integrations: Autodesk Construction Cloud, Navisworks, Procore, Aconex.
- 3D viewer (web-ifc / Autodesk Viewer) with clash/issue markup overlays.

**6. Delivery**
- Background job queue for long-running analysis, WebSocket progress, PDF report generation service.

---

*Prototype — all figures are illustrative sample data for demonstration only.*
