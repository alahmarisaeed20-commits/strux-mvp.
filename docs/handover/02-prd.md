# 02 · Product Requirements Document (PRD)

Each feature lists **Purpose · Business Value · User Flow · Acceptance Criteria · Dependencies**. Status reflects the current prototype (UI implemented with mock data unless noted).

---

## M0 · Marketing Landing (`/`)
- **Purpose:** Convert visitors; communicate positioning ("Intelligence Layer Above BIM").
- **Business Value:** Top-of-funnel; investor & customer credibility.
- **User Flow:** Visit `/` → read hero/positioning/modules/Vision 2030/investor teaser → CTA "Launch Demo" → `/app/dashboard` or "Sign in" → `/login`.
- **Acceptance:** Bilingual EN/AR + RTL; animated but respects `prefers-reduced-motion`; all CTAs route correctly; no fabricated traction metrics (capability metrics only).
- **Dependencies:** i18n, design system, router.

## M1 · Authentication (`/login`)
- **Purpose:** Role-based entry to the workspace.
- **Business Value:** Security, personalization, multi-tenant gate.
- **User Flow:** Choose role (Contractor/Consultant/BIM Manager/Owner) → email + password → enter platform.
- **Acceptance:** Role selectable; form validates; (prototype: any credentials proceed); language toggle present.
- **Dependencies:** Auth service (future), RBAC, i18n.

## M2 · Command Dashboard (`/app/dashboard`)
- **Purpose:** Portfolio-wide operational view.
- **Business Value:** Single pane of glass; daily driver.
- **User Flow:** Land → see hero (BIM health, compliance rings) → KPI cards (with sparklines & deltas) → **Intelligence Index™** → trend/discipline/severity charts → project status list → drill into a project.
- **Acceptance:** 8 KPIs (total issues, high-risk, open RFIs, projects, reports, BIM score, compliance, high-risk clashes); charts render; Index visible; clicking a project opens analysis.
- **Dependencies:** Analytics aggregation API, projects API.

## M3 · Executive Dashboard (`/app/executive`)
- **Purpose:** Board/C-suite view of risk & money.
- **Business Value:** Decision support for owners/directors.
- **User Flow:** View AI Executive Summary card → KPI row (portfolio health, financial exposure, rework avoided, schedule at risk) → project risk heatmap → exposure-by-project chart → top risks → decisions required.
- **Acceptance:** AI summary shows status + recommendation; heatmap colors by score band; Index badge present; figures labeled illustrative.
- **Dependencies:** Risk engine, financial model, Intelligence Index.

## M4 · Investor Dashboard (`/app/investor`)
- **Purpose:** Pre-Seed fundraising narrative.
- **Business Value:** Investor diligence.
- **User Flow:** 16 sections (Problem → … → Funding Roadmap → Vision 2030). See [12-investor-portal](./12-investor-portal.md).
- **Acceptance:** Pre-Seed (SAR 7M, not Series A); projections clearly marked; competitive table; "Why Autodesk can't replicate"; Intelligence Index.
- **Dependencies:** Design system, Index, Vision 2030 component.

## M5 · Project Workspace (`/app/projects`)
- **Purpose:** Manage the portfolio of projects.
- **Business Value:** Organize work; entry to analysis.
- **User Flow:** Grid of project cards (thumbnail, BIM score, issues, high-risk, compliance, risk level, last upload, progress) → "Open Project" → analysis.
- **Acceptance:** Cards show all metrics; risk badge; compliance status; "Upload New Model" CTA.
- **Dependencies:** Projects API, thumbnails.

## M6 · BIM Upload & AI Pipeline (`/app/upload`)
- **Purpose:** Ingest IFC/Revit/BOQ/Specs and run analysis.
- **Business Value:** The activation moment.
- **User Flow:** Select/drag files (IFC, RVT, XLSX, PDF) → "Run STRUX AI Analysis" → 6-stage animated pipeline (Read → Extract → QA/QC → Clash → Compliance → Report) → "View Results".
- **Acceptance:** File types validated; pipeline stages animate to completion; success summary; routes to analysis.
- **Dependencies:** Ingestion service (web-ifc / Autodesk APS), job queue, storage.

## M7 · AI Analysis (`/app/analysis`) — 9 tabs
Tabbed workspace over a federated model.

### M7.1 Overview
- **Purpose:** At-a-glance model intelligence. **Value:** fast triage. **Flow:** scorecards + radar profile + clash funnel + compliance snapshot + AI summary. **Acceptance:** radar 6 axes; AI summary highlights top criticals. **Deps:** all engines.

### M7.2 3D BIM Viewer
- **Purpose:** Spatial context with clash overlays. **Value:** trust & explainability. **Flow:** orbit/zoom; toggle layers (Structure/MEP/Architecture/Clashes); click clash marker → inspector (cost/delay/recommendation). **Acceptance:** layers toggle; markers selectable; reset view; lazy-loaded. **Deps:** Three.js/R3F; (future) real IFC geometry via web-ifc/APS viewer.

### M7.3 QA/QC Checks
- **Purpose:** Model hygiene vs BIM Execution Plan. **Value:** governance. **Flow:** checklist (naming, LOD, coordinates, classification, metadata, duplication, sheet consistency) with status/severity/description/recommendation/discipline. **Acceptance:** each check shows status (Passed/Warning/Failed) + assigned discipline. **Deps:** rule engine.

### M7.4 Clash Intelligence
- **Purpose:** Prioritize clashes by impact, not count. **Value:** avoid rework. **Flow:** register table (ID, conflict, disciplines, severity, **cost impact SAR**, **delay days**, priority, recommendation). **Acceptance:** sortable; cost/delay shown; AI prioritization. **Deps:** clash detection (APS/Navisworks), cost/delay ML scoring.

### M7.5 Saudi Compliance
- **Purpose:** Validate against KSA codes. **Value:** authority approval. **Flow:** area scores (SBC, Civil Defense, Accessibility, Municipality, Energy, Government) + violations (severity, clause, finding, recommendation). **Acceptance:** per-area %, status, violations list. **Deps:** Saudi Compliance Engine knowledge base.

### M7.6 Quantity Extraction
- **Purpose:** Reconcile model take-off vs BOQ. **Value:** procurement accuracy. **Flow:** comparison chart + table (item, unit, model qty, BOQ qty, variance %, risk). **Acceptance:** variance flags >5%/>10%. **Deps:** QTO engine, BOQ parser, fuzzy matching.

### M7.7 RFI Generator
- **Purpose:** Auto-draft RFIs from issues. **Value:** save engineer time. **Flow:** list + detail (subject, question, discipline, priority, attachment, source) → generate from issues → issue/edit/export. **Acceptance:** generated RFI references source clash/violation/quantity. **Deps:** LLM, issue graph, doc-control integration.

### M7.8 AI Chat
- **Purpose:** Conversational analysis Q&A. **Value:** instant answers. **Flow:** suggested prompts + free text → grounded answers. **Acceptance:** answers cite specific clashes/compliance/quantities; bilingual. **Deps:** LLM + RAG over analysis results.

### M7.9 Executive Smart Report
- **Purpose:** Board-ready, exportable report. **Value:** communication. **Flow:** letterhead → scorecards → summary → top 10 issues → recommendations → decision → print/PDF. **Acceptance:** printable; reflects current analysis. **Deps:** report renderer, PDF service.

## M8 · STRUX Copilot (global, floating)
- **Purpose:** Always-available AI analyst across the app.
- **Business Value:** Stickiness; differentiator.
- **User Flow:** Click FAB → chat panel → ask about projects/risks/compliance/exposure/reports.
- **Acceptance:** Available on all `/app/*` pages; bilingual; suggested prompts; keyword-grounded answers.
- **Dependencies:** LLM, portfolio context API.

## M9 · STRUX Intelligence Index™ (cross-cutting)
- **Purpose:** Signature composite metric (0–100).
- **Business Value:** Category-defining KPI; benchmark.
- **Formula (illustrative weights):** `Index = 0.25·Compliance + 0.25·Quality + 0.20·Risk + 0.15·Cost + 0.15·Schedule`.
- **Acceptance:** Shown on Portfolio, Executive, Investor dashboards; sub-scores visible; "Powered by STRUX Intelligence Index™".
- **Dependencies:** all engines feed sub-scores.

## M10 · Admin & Settings (`/app/settings`)
- **Purpose:** Company, users, permissions, integrations, security, subscription.
- **Business Value:** Enterprise readiness & monetization.
- **User Flow:** Tabs: Company profile · Users & Roles · Permissions matrix · Integrations (ACC, Revit, Navisworks, Procore, Aconex, API) · Security (KSA residency) · Subscription (Team/Enterprise/Government).
- **Acceptance:** invite users; RBAC matrix; API key; plan display.
- **Dependencies:** Auth, billing, tenant service.
