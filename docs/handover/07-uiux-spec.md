# 07 · UI/UX Specification

Global shell: left **Sidebar** (256px) + sticky **Topbar** (64px) + content (max-width 1280px, 16–24px padding). Dark theme, faint grid background, glassmorphism cards. RTL mirrors everything. Floating **Copilot** launcher bottom-end.

Permissions notation: 🟢 view · ✏️ edit/create · 🔒 admin-only. See [09-auth-roles](./09-auth-roles.md).

---

## Landing (`/`)
- **Layout:** sticky nav (brand, links, language, Sign in, Launch Demo) → hero (badge, H1 with gradient "Above BIM", description, CTAs, trust ticks, floating BIM snapshot mockups) → trusted-by marquee (giga-projects) → stat band (capability metrics) → positioning band ("STRUX is NOT a BIM Viewer", layer stack) → modules grid (7 + AI accent) → product showcase (3 snapshots) → Vision 2030 → investor teaser → final CTA → footer.
- **Components:** buttons (primary/ghost), cards, marquee, animated counters, reveal-on-scroll.
- **Permissions:** public.

## Login (`/login`)
- **Layout:** split — left brand/pitch panel, right card.
- **Forms:** role selector (4 buttons), email, password, submit; language toggle.
- **Permissions:** public.

## Command Dashboard (`/app/dashboard`)
- **Layout:** hero strip (greeting + 2 score rings) → KPI grid (8) → Intelligence Index → charts (area trend, donut, bar) → project status list (thumbnail, progress, BIM score, issues).
- **Components:** KPI card (icon, value count-up, delta chip, sparkline), `ScoreRing`, Recharts (Area/Pie/Bar), `ProgressBar`, `Badge`.
- **Charts:** issue trend (detected vs resolved), issues by discipline, severity breakdown.
- **Permissions:** all roles 🟢.

## Executive Dashboard (`/app/executive`)
- **Layout:** title + Index badge → **AI Executive Summary** card (status badge, executive insight text, 4 mini metrics) → KPI row (4, sparklines) → risk heatmap (projects × dimensions) + Intelligence Index → exposure-by-project bar + top risks → decisions list.
- **Tables:** heatmap (colored score cells with legend).
- **Permissions:** Owner/PM/Admin/Consultant 🟢; Site Engineer limited.

## Investor Dashboard (`/app/investor`)
- **Layout:** confidential header (Pre-Seed badge, round) → 16 stacked sections (see IA) → Vision 2030.
- **Components:** section headers (numbered tag + title), comparison table, TAM/SAM/SOM bars, projection bars with "Projections" badge, use-of-funds stacked bar, roadmap stages.
- **Permissions:** Owner/Admin/Investor 🟢.

## Project Workspace (`/app/projects`)
- **Layout:** header + "Upload New Model" → summary band (4) → project cards grid (2-col).
- **Card:** thumbnail banner (gradient overlay, STRUX AI tag, risk badge, name/client) → type/phase/value → 4 metrics → progress bar → compliance status + last upload + "Open Project".
- **Permissions:** all 🟢; upload ✏️ for Contractor/BIM/Admin/Owner.

## BIM Upload (`/app/upload`)
- **Layout:** 2/5 upload column + 3/5 pipeline column.
- **Components:** dropzone, file-type toggles (IFC/Revit/BOQ/Specs), run button; pipeline stage list (6) with animated active state; completion card with "View Results".
- **Permissions:** upload roles ✏️.

## AI Analysis (`/app/analysis`)
- **Layout:** project context header (badges) → scrollable tab bar (9) → active tab.
- **Per-tab components:**
  - **Overview:** 4 scorecards, radar (6 axes), clash funnel donut, compliance snapshot, AI summary card.
  - **3D Viewer:** canvas (orbit/zoom) + layer toggles + clash inspector + clash list. Filters: layer visibility.
  - **QA/QC:** summary trio + checklist rows (status icon, badges, description, recommendation, discipline).
  - **Clash:** 4 stat cards + register table (sortable). Filters: severity/priority (future).
  - **Compliance:** overall ring + area cards (score, progress) + violations list.
  - **Quantity:** 4 stat cards + grouped bar chart (Model vs BOQ) + take-off table (variance colored).
  - **RFI:** list (selectable) + RFI document detail + actions (Issue/Edit/Export).
  - **AI Chat:** suggestion column + chat window (bubbles, typing indicator, input).
  - **Executive Report:** letterhead document, scorecards, sections, Print/Download.
- **Permissions:** analyze 🟢 all; RFI ✏️ Contractor/Consultant/PM/BIM/Admin; reports 🟢 Owner/Consultant/PM/Admin/Investor.

## 3D Viewer (`/app/viewer`)
- Standalone full version of the Analysis 3D tab.

## Admin & Settings (`/app/settings`)
- **Tabs:** Company (form), Users & Roles (table + invite 🔒), Permissions (RBAC matrix 🔒), Integrations (connector cards + API key 🔒), Security (KSA residency cards), Subscription (3 plan cards).
- **Permissions:** Admin 🔒; others read-only where allowed.

## STRUX Copilot (global)
- **Launcher:** FAB (mark + label) bottom-end.
- **Panel:** header (mark, name, online), messages, suggestion chips, input + send. Bilingual; keyboard accessible; closes on ✕.
- **Permissions:** all authenticated.

## Interaction & a11y
- Motion: count-up, scroll-reveal, hover lift, gradient pan; all gated by `prefers-reduced-motion`.
- Focus states on all interactive elements; color-contrast AA on dark theme; tables horizontally scrollable on mobile.
