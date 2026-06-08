# 15 · Lovable Migration Prompt

Paste the block below into **Lovable** as a single prompt to recreate STRUX. (For deeper detail on any area, attach the sibling handover files 01–14.)

---

```
Build a production-grade, bilingual (English + Arabic, full RTL) enterprise SaaS web app called STRUX — "The Intelligence Layer Above BIM".

POSITIONING (keep everywhere): STRUX is NOT a BIM viewer and does NOT replace Autodesk Revit, Navisworks or IFC. It is an AI-powered Engineering Intelligence Platform that sits ABOVE the BIM stack and turns engineering data (IFC/Revit models, BOQs, specifications, Saudi regulations) into executive decisions. Tagline: "The Intelligence Layer Above BIM". Market: Saudi Arabia & GCC construction. Company stage: Pre-Seed raising SAR 6–7M (never say Series A is current). All numbers are illustrative/projection data.

TECH STACK: React + TypeScript + Vite + Tailwind CSS + React Router + Recharts + Three.js (react-three-fiber + drei for a 3D viewer). Backend (Supabase or equivalent): PostgreSQL with multi-tenant row-level security, auth (email/password + JWT, roles), object storage. Component-based, responsive, accessible. Provide mock data so the app is fully clickable even before the backend is wired.

BRAND & DESIGN SYSTEM (dark, enterprise, premium — like Palantir/Procore/Linear/Stripe):
- Logo "StruxMark": a hexagonal cube with a negative-space "S", split blue (top-left) / charcoal (bottom-right), with two silver accent triangles. Wordmark STRUX (letter-spaced 0.26em) + a small gradient "AI" badge.
- Colors: navy surfaces #070b18/#0a1024/#0d1530/#111a3a/#16224d/#1d2c61; primary electric blue #2f6bff (+#4f86ff,#7aa6ff,#1f50d6); cyan accent #22d3ee; silver text #f4f6fb/#e3e8f2/#c7d0e3/#9aa6c4/#6b7798; semantic green #22c55e, amber #f59e0b, red #ef4444.
- Background: navy-950 with a faint 40px grid. Cards: rounded-xl, border-white/5, bg-navy-900/70, backdrop blur, soft shadow; primary buttons glow.
- Type: Inter (Latin) + Tajawal (Arabic). Hero/metrics extrabold; brand/labels letter-spaced.
- Score color bands: ≥85 green, 70–84 amber, <70 red.
- Motion (respect prefers-reduced-motion): count-up numbers, scroll-reveal, hover lift, gradient pan, float, shimmer, pulse-ring, marquee.
- Use logical CSS (start/end, ps/pe) and set dir=rtl in Arabic. Persist language in localStorage. Provide a language toggle in the topbar and on login.

SIGNATURE METRIC — "STRUX Intelligence Index™" (0–100): composite = 0.25*Compliance + 0.25*Quality + 0.20*Risk + 0.15*Cost + 0.15*Schedule. Show it (ring + sub-score bars + "Powered by STRUX Intelligence Index™") on the Portfolio, Executive and Investor dashboards. Demo value 91.

APP SHELL: left sidebar (Dashboard, Executive, Projects, Upload BIM, AI Analysis, 3D Viewer, Investor, Admin & Settings) + sticky topbar (page title + tagline, search, Investor-Demo toggle with banner, language toggle, notifications, AI-engine status) + a GLOBAL floating "STRUX Copilot" assistant on all authenticated pages. On mobile the sidebar collapses to a drawer; tables scroll.

PAGES & FEATURES:
1) Landing "/": animated hero (H1 "The Intelligence Layer / Above BIM"), positioning band ("STRUX is NOT a BIM Viewer" showing STRUX above Revit/Navisworks/IFC), capability stat band (7 modules, 6 disciplines, 6 Saudi codes, 100% KSA residency — NOT fake traction), 7-module grid, product showcase (stylized SVG "screenshots"), Vision 2030 section, investor teaser, footer. CTAs route to /app/dashboard and /login.
2) Login "/login": role selector (Owner, Consultant, Contractor, BIM Manager + also support PM, Site Engineer, BIM Engineer, Admin, Investor), email, password.
3) Command Dashboard "/app/dashboard": hero with BIM-Health and Compliance score rings; 8 KPI cards (Total Issues 247, High-Risk 38, Open RFIs 16, Active Projects 18, Reports 4200, BIM Health 92%, Compliance 88%, High-Risk Clashes 14) each with count-up + delta chip + sparkline; STRUX Intelligence Index; charts (issue trend area, issues-by-discipline donut, severity bar); project status list with thumbnails.
4) Executive Dashboard "/app/executive": AI Executive Summary card (Portfolio Status: Healthy; Active Projects 18; Critical Risks 14; Financial Exposure SAR 1.36M; Potential Savings SAR 42M; Executive Insight: "Resolve coordination conflicts on Riyadh tower within 7 days…"); 4 KPI cards with sparklines; project risk heatmap (projects × BIM/Clash/Compliance/Quantity/Schedule, colored cells); financial-exposure-by-project bar; top risks; decisions-required list; Intelligence Index.
5) Investor Dashboard "/app/investor" (Pre-Seed, SAR 7M) — 16 sections in order: Header(confidential, Pre-Seed badge); 01 Problem (rework 5–15%, hidden risk); 02 Solution (5 capabilities + "The Operating System for Construction Intelligence"); 03 Why Now (6 drivers + "the market is ready now in a way it was not five years ago"); 04 Market TAM ~$2.4B / SAM ~$0.38B / SOM ~$45M (bottom-up, conservative); 05 Customer Journey "A day with STRUX" (5 steps); 06 Technology Architecture (layer stack: Executive Intelligence → Intelligence Engine → Ingestion → inputs Revit/Navisworks/IFC/BOQ/Specs; vendor-neutral, KSA-hosted); 07 Business Model (6 revenue streams: SaaS Subscription, Enterprise Licensing, Compliance Engine, Executive Intelligence Reports, Portfolio Analytics, Government & Mega Projects; recurring-led TARGET); 08 Financial Projections (Y1 3 customers/SAR0.6M, Y2 12/SAR3M, Y3 30/SAR9M) clearly badged "Projections — pre-revenue, illustrative" with disclaimer (NO ARR/NRR/CAC as actuals); 09 Competitive Advantage table (features: Saudi Compliance Engine, Arabic Native Experience, AI Risk Detection, Executive Dashboards, Portfolio Intelligence, Local Hosting, Saudi Market Focus → STRUX full, Autodesk/Navisworks/Traditional partial/none); 10 Defensibility & Moat (Saudi Compliance Knowledge Base, Proprietary Engineering Dataset, Localized AI Models, BIM Intelligence Engine, Portfolio Learning Network, Future Government Integrations; headline "The more projects STRUX analyzes, the smarter it becomes"); 11 Why Autodesk can't easily replicate (innovator's dilemma, Saudi regulatory depth, data sovereignty, vendor neutrality, compounding local dataset, local GTM); 12 STRUX Intelligence Index™; 13 Why STRUX Wins (Built for Saudi Arabia, Built for Vision 2030, Native Arabic, Construction Intelligence Layer, High-Margin SaaS, Regulatory Alignment); 14 Product Roadmap (Now/Next/Later); 15 The Round (target SAR 7M; use of funds 40/25/20/10/5 = Product/AI&Compliance/Sales&BD/Cloud/Governance; runway 18–24 months); 16 Funding Roadmap (Pre-Seed→Seed→Series A; seed milestones: 20 enterprise customers, proven ARR, Saudi Compliance Engine, GCC expansion); Vision 2030 section.
6) Project Workspace "/app/projects": cards for "Riyadh Mixed-Use Tower", "NEOM Infrastructure Package", "Hospital Expansion Project", "Industrial Factory Project" — each with a stylized SVG thumbnail (tower/infrastructure/hospital/factory), BIM score, issues, high-risk, compliance, risk level, last upload, progress, "Open Project".
7) BIM Upload "/app/upload": dropzone + file-type toggles (IFC, Revit, BOQ Excel, Specs PDF) → "Run STRUX AI Analysis" → animated 6-stage pipeline (Reading BIM Model → Extracting Elements → Running QA/QC → Detecting Clashes → Checking Saudi Compliance → Generating Smart Report) → completion → "View Results".
8) AI Analysis "/app/analysis": project context header + 9 tabs:
   - Overview: scorecards, 6-axis radar (Model Quality, Coordination, Compliance, Data Richness, Quantity Match, Documentation), clash funnel donut (Detected/Coordinated/Resolved), compliance snapshot, AI summary.
   - 3D Model: react-three-fiber scene of a multi-storey building (slabs, columns, beams, MEP ducts, glass facade) on a grid; toggle layers Structure/MEP/Architecture/Clashes; clickable glowing clash markers → inspector (cost SAR, delay days, recommendation); orbit/zoom; reset; lazy-loaded.
   - QA/QC Checks: naming convention(Passed), LOD validation(Warning), coordinates(Failed), classification(Passed), missing metadata(Failed), duplication(Warning), sheet consistency(Passed) — each with severity, description, recommendation, assigned discipline.
   - Clash Intelligence: register table (Clash ID, Disc 1 × Disc 2, severity, Cost Impact SAR, Delay days, Priority, Recommendation). Sample: CL-1090 Chilled Water Pipe DN200 × Shear Wall SW-7, Critical, SAR 140,000, 7 days; CL-1042 Supply Air Duct × Beam B-204, High, SAR 85,000, 4 days; plus CL-1067/1112/1138/1155.
   - Saudi Compliance: area scores Saudi Building Code 91%, Civil Defense 82%, Accessibility 78%, Municipality 90%, Energy 71%, Government 94%; violations (Fire exit travel distance > limit [SBC 801], missing accessibility ramp, energy below threshold, insufficient fire-rated separation, WC clearance) with severity, clause, finding, recommendation.
   - Quantity Extraction: Model vs BOQ comparison chart + table (Concrete m³, Steel ton, Doors, Windows, Duct m, Cable Trays m, Pipes m, Finishing m²) with variance % and risk (Steel +13.2% High, Duct +12.6% High).
   - RFI Generator: list + RFI document (subject, question, discipline, priority, suggested attachment, source) + "Generate RFI from issues" + Issue/Edit/Export.
   - AI Chat: suggested prompts + chat; grounded, construction-specific answers citing CL-/CV-/quantity refs.
   - Executive Report: printable document (letterhead, BIM Health & Compliance rings, financial exposure SAR 363,500, summary, Top 10 issues, recommendations, executive decision) + Print/Download PDF.
9) 3D Viewer "/app/viewer": standalone full version of the 3D tab.
10) Admin & Settings "/app/settings" tabs: Company profile; Users & Roles (table + invite); Permissions (RBAC matrix); Integrations (Autodesk Construction Cloud, Revit [connected], Navisworks, Procore, Aconex, STRUX REST API + API key); Security (🇸🇦 KSA data residency, PDPL/SDAIA, AES-256, RBAC, audit, backups); Subscription (Team SAR 4,900/mo, Enterprise SAR 18,500/mo [current], Government custom).

ROLES & RBAC: Owner, Consultant, Contractor, Project Manager, Site Engineer, BIM Engineer, BIM Manager, Admin, Investor. Enforce a permissions matrix (view dashboards; executive/investor dashboards; upload; analyze; view 3D/clashes/QAQC; create/issue RFIs; generate/export reports; manage users/roles/integrations/billing). Investor sees investor dashboard + reports only; Admin manages tenant. RFI lifecycle Draft→Issued→Answered with approvals.

AI MODULES (LLM + RAG grounded on each project's results; cite refs; respond in user locale; never fabricate numbers): (a) STRUX Copilot / BIM Assistant; (b) RFI generation from clashes/violations/quantity variances; (c) Submittal review vs spec + SBC; (d) drawing analysis (revision/title-block/missing references); (e) cost estimation (quantities × rate library, reconcile vs BOQ); (f) schedule risk detection (map issues to activities, estimate delay). Provide structured (JSON) outputs for RFIs/reviews/estimates.

DATABASE (PostgreSQL, multi-tenant RLS by tenant_id): tenant, app_user, role, membership, subscription, project, model_upload, analysis_run, qaqc_check, clash, compliance_result, compliance_violation, quantity_item, intelligence_index, rfi, report, chat_message. Index foreign keys; enable RLS tenant isolation; pgvector for AI retrieval.

API (REST/JSON, JWT bearer + X-Tenant-Id): /auth, /projects, /projects/{id}/uploads, /projects/{id}/analyze, /runs/{id} (+ /qaqc /clashes /compliance /quantities /index /overview), /projects/{id}/rfis (+ /generate), /reports/executive(/pdf), /dashboard/portfolio, /dashboard/executive, /ai/chat, /tenant/* (users, roles, profile, integrations, subscription, api-keys). Async analysis via queue + SSE/WebSocket progress.

ARABIC LOCALIZATION (critical): native Saudi executive Arabic, no machine translation, consistent terminology, full RTL. Localize BOTH UI labels AND data content of the analysis pages. Key terms: BIM Health=جودة نموذج BIM, Open RFIs=طلبات الاستفسار الهندسية المفتوحة, Financial Exposure=حجم التعرض المالي, Rework Avoided=تكلفة إعادة العمل المتجنبة, Executive Dashboard=لوحة القيادة التنفيذية, Investor Dashboard=لوحة المستثمر, AI Analysis=التحليل الذكي, Construction Intelligence=الذكاء الهندسي للإنشاءات, Compliance Engine=محرك الامتثال السعودي, Portfolio Health=صحة المحفظة, Issues=الملاحظات الهندسية, Critical Issues=الملاحظات الحرجة, Clashes=التعارضات, Executive Insight=توصية تنفيذية.

SAAS: multi-tenant with company isolation (RLS + namespaced storage), plans Team/Enterprise/Government, seat + usage billing in SAR with ZATCA e-invoicing, entitlements/feature-flags (compliance engine, AI chat, KSA residency, connectors, seat/project limits, sovereign hosting). KSA data residency, encryption, audit logging.

DELIVERABLE: a clickable, responsive, bilingual app with all pages, navigation, RBAC, mock data, the STRUX Intelligence Index, the floating Copilot, the 3D viewer, and the full investor dashboard — looking like a venture-backed Saudi construction-tech company. Keep the dark navy/electric-blue theme and the STRUX logo. Make it investor-ready and demo-ready.
```

---

### How to use
1. Paste the prompt above into Lovable to scaffold the app.
2. Iterate per page using documents **01–14** for exact content, data samples, RBAC, schema, API and architecture.
3. Wire the backend (Supabase/Postgres) using **05** (schema) and **06** (API), enable RLS per **11**, and connect the AI modules per **10**.
