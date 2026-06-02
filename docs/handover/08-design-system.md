# 08 · Design System (Enterprise Grade)

Inspired by Palantir · Procore · Autodesk Construction Cloud · Linear · Stripe. Dark, technical, premium.

## Brand
- **Wordmark:** `STRUX` (extrabold, letter-spacing 0.26em) + small gradient **AI** badge.
- **Mark:** hexagonal cube, negative-space "S", blue (top-left) / charcoal (bottom-right) split, two silver accent triangles. Provided as scalable SVG (`StruxMark`).

## Color tokens
```
/* Navy (surfaces) */
navy-950 #070b18   navy-900 #0a1024   navy-850 #0d1530
navy-800 #111a3a   navy-700 #16224d   navy-600 #1d2c61

/* Electric blue (primary) */
electric-600 #1f50d6  electric-500 #2f6bff  electric-400 #4f86ff  electric-300 #7aa6ff
accent-cyan  #22d3ee

/* Silver (text/neutral) */
silver-100 #f4f6fb  silver-200 #e3e8f2  silver-300 #c7d0e3
silver-400 #9aa6c4  silver-500 #6b7798

/* Semantic */
success #22c55e   warning-amber #f59e0b   warning-yellow #eab308   danger #ef4444
```
- **Background:** `navy-950` + faint grid (`rgba(255,255,255,0.03)` lines, 40px).
- **Primary action:** `electric-500` with glow shadow.
- **Score bands:** ≥85 green · 70–84 amber · <70 red.

## Typography
- **Latin:** Inter (400–800). **Arabic:** Tajawal (400–800), applied when `lang=ar`.
- **Scale:** display 48–60 / h1 32–40 / h2 24–30 / h3 18 / body 14–16 / caption 11–12.
- **Weights:** semibold 600 for headings, extrabold 800 for hero/metrics.
- **Tracking:** tight on headings; 0.18–0.28em on brand/labels/uppercase tags.

## Spacing & radius
- **Scale (px):** 2, 4, 6, 8, 12, 16, 20, 24, 32, 40 (Tailwind 0.5–10).
- **Card padding:** 20px (`p-5`). **Section gap:** 16–24px.
- **Radius:** sm 8 / md 12 (cards `rounded-xl`) / pill full.

## Grid system
- **Container:** max-width 1280px (`max-w-7xl`), responsive padding 16/24px.
- **Columns:** CSS grid; common patterns `grid-cols-2 lg:grid-cols-4` (KPIs), `lg:grid-cols-3` (2/3 + 1/3 splits).
- **Breakpoints:** sm 640 · md 768 · lg 1024 · xl 1280.
- **RTL:** logical properties (`ps/pe/ms/me/start/end`); `dir` on `<html>`.

## Elevation & effects
- **Card:** `border border-white/5 bg-navy-900/70 backdrop-blur` + soft shadow.
- **Glow (primary):** `0 0 0 1px rgba(47,107,255,.25), 0 8px 30px -8px rgba(47,107,255,.45)`.
- **Gradients:** brand text gradient (`#7aa6ff→#2f6bff→#22d3ee`); animated gradient pan on hero.

## Iconography
- Inline stroke SVG set (1.8 stroke, rounded caps), `currentColor`. Examples: dashboard, projects, upload, analysis, clash (bolt), shield, chat, report, rfi, quantity, cube, layers, sparkle, building, search, bell, download, send, arrow.

## Motion
- `count-up` (easeOutExpo), `scroll reveal` (translateY+fade), `float`, `shimmer`, `pulse-ring`, `marquee`, `gradient-pan`. All disabled under `prefers-reduced-motion`.

## Component library (props-level)
- **Card** `{className}` — surface container.
- **Badge** `{tone: green|amber|yellow|red|blue|gray}` + `toneFor(value)` maps severity/status → tone.
- **ProgressBar** `{value, tone}` — auto color by band.
- **ScoreRing** `{value, size, label}` — animated SVG gauge.
- **Sparkline** `{data[], color, id}` — area+line micro chart.
- **CountUp** / **Reveal** — motion primitives.
- **IntelligenceIndex** / **IndexBadge** — signature metric.
- **BIMSnapshot** `{variant: model|clash|compliance|analytics}` — SVG product mockups.
- **ProjectThumb** `{projectId}` — per-archetype SVG scene.
- **Copilot** — floating assistant.
- **Buttons:** `strux-btn-primary`, `strux-btn-ghost`. **Inputs:** `strux-input`.

## Tone of voice
Professional, concise, construction- and finance-literate. Arabic must be **native executive Arabic** (no machine translation), consistent terminology (e.g., BIM Health → جودة نموذج BIM, Financial Exposure → حجم التعرض المالي, Issues → الملاحظات الهندسية, Executive Insight → توصية تنفيذية).
