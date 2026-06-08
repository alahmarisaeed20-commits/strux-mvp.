# 04 · Information Architecture

## Route map
```
/                       Landing (public)
/login                  Login (public)
/app                    Authenticated shell (sidebar + topbar)
  /app/dashboard        Command Dashboard (default)
  /app/executive        Executive Dashboard
  /app/investor         Investor Dashboard
  /app/projects         Project Workspace
  /app/upload           BIM Upload + AI pipeline
  /app/analysis         AI Analysis (tabbed)
  /app/viewer           3D BIM Viewer (standalone)
  /app/settings         Admin & Settings (tabbed)
*                       Redirect → /
```

## Primary navigation (sidebar)
1. Dashboard
2. Executive
3. Projects
4. Upload BIM
5. AI Analysis
6. 3D Viewer
7. Investor
8. Admin & Settings

Footer of sidebar: user card (name, role, sign-out).

## Topbar
- Page title + tagline ("The Intelligence Layer Above BIM")
- Global search (projects, clashes, RFIs)
- **Investor Demo** toggle (banner + deep-link)
- Language toggle (EN/AR)
- Notifications
- AI Engine status pill
- (Global) floating **STRUX Copilot** launcher (bottom corner)

## Submenus (tabs)

### AI Analysis tabs
`Overview · 3D Model · QA/QC Checks · Clash Intelligence · Saudi Compliance · Quantity Extraction · RFI Generator · AI Chat · Executive Report`

### Settings tabs
`Company · Users & Roles · Permissions · Integrations · Security · Subscription`

### Investor sections (single scroll page)
`Header · 01 Problem · 02 Solution · 03 Why Now · 04 Market · 05 Customer Journey · 06 Technology Architecture · 07 Business Model · 08 Financial Projections · 09 Competitive Advantage · 10 Moat · 11 Why Autodesk Can't Replicate · 12 Intelligence Index · 13 Why STRUX Wins · 14 Product Roadmap · 15 The Round · 16 Funding Roadmap · Vision 2030`

## Dashboard layouts

### Command Dashboard
```
[ Hero strip: greeting + BIM Health ring + Compliance ring ]
[ KPI grid · 8 cards (icon, value, delta, sparkline) ]
[ STRUX Intelligence Index™ (ring + sub-score bars) ]
[ Trend area chart (2/3) | Issues-by-discipline donut (1/3) ]
[ Severity bar chart (1/3) | Project status list (2/3) ]
```

### Executive Dashboard
```
[ Title + Intelligence Index badge ]
[ AI Executive Summary card (status, recommendation, 4 metrics) ]
[ KPI row · 4 cards with sparklines ]
[ Project Risk Heatmap (2/3) | Intelligence Index (1/3) ]
[ Exposure-by-project bar (2/3) | Top risks list (1/3) ]
[ Decisions required (full width) ]
```

### Analysis shell
```
[ Project context header (name, client, badges: BIM health, elements, high-risk, compliance) ]
[ Tab bar (9 tabs, horizontally scrollable) ]
[ Active tab content ]
```

## Responsive behavior
- **≥1024px:** persistent sidebar, multi-column grids.
- **<1024px:** sidebar collapses to a drawer (hamburger); grids stack; tables scroll horizontally; non-essential topbar controls hide.
- RTL mirrors layout (sidebar on right, logical `start/end` spacing).
