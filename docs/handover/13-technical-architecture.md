# 13 · Technical Architecture

## Current (prototype)
- **Frontend:** React 18 + TypeScript + Vite + Tailwind + React Router + Recharts + Three.js (`@react-three/fiber`, `drei`).
- **State/data:** local component state + mock data (`src/data/*`); i18n via React context (EN/AR, RTL).
- **No backend** yet; deploy as static SPA (Vercel).

## Target (production)

### System context
```mermaid
flowchart TB
  subgraph Client
    SPA[STRUX Web App - React SPA]
  end
  subgraph Edge
    CDN[CDN / Static hosting]
    GW[API Gateway + Auth]
  end
  subgraph Services
    PROJ[Project Service]
    ING[Ingestion Service]
    ANALYSIS[Analysis Orchestrator]
    QAQC[QA/QC Engine]
    CLASH[Clash Engine]
    COMP[Saudi Compliance Engine]
    QTO[Quantity Engine]
    AI[AI Service - LLM + RAG]
    RPT[Report/PDF Service]
    BILL[Billing/Entitlements]
  end
  subgraph Data
    PG[(PostgreSQL + RLS + pgvector)]
    OS[(Object Storage - KSA)]
    Q[(Queue/Broker)]
    CACHE[(Redis)]
  end
  SPA --> CDN
  SPA --> GW
  GW --> PROJ & ING & ANALYSIS & AI & RPT & BILL
  ANALYSIS --> Q --> QAQC & CLASH & COMP & QTO
  ING --> OS
  QAQC & CLASH & COMP & QTO --> PG
  AI --> PG
  AI --> CACHE
  RPT --> OS
```

### Frontend architecture
```mermaid
flowchart LR
  Router --> Layout
  Layout --> Sidebar & Topbar & Copilot
  Layout --> Pages
  Pages --> Dashboard & Executive & Investor & Projects & Upload & Analysis & Viewer & Settings
  Analysis --> Tabs[9 tab components]
  subgraph Shared
    UI[Design system: Card/Badge/ScoreRing/Sparkline]
    I18N[i18n context EN/AR + RTL]
    DATA[API client / data hooks]
  end
  Pages --> UI & I18N & DATA
```
- **Patterns:** component-based, route-level code-splitting, lazy-load heavy 3D (`BIMScene`), context for i18n & (future) auth/tenant.

### Backend architecture
- **Style:** API gateway + modular services (modular monolith acceptable for MVP; split engines into workers).
- **Sync API:** projects, RFIs, reports, dashboards, chat (REST/JSON).
- **Async pipeline:** upload → queue → orchestrator drives QA/QC → Clash → Compliance → QTO → Index → report; progress via SSE/WebSocket.
- **Ingestion:** IFC via `IfcOpenShell`/`web-ifc`; Revit via **Autodesk Platform Services (APS) Model Derivative**; BOQ via spreadsheet parser; specs via PDF/NLP.

```mermaid
sequenceDiagram
  participant U as User
  participant API as API Gateway
  participant ING as Ingestion
  participant ORCH as Orchestrator
  participant ENG as Engines
  participant DB as Postgres
  U->>API: POST /projects/{id}/analyze
  API->>ORCH: enqueue run
  ORCH->>ING: parse IFC/Revit/BOQ/specs
  ING-->>ORCH: element graph + docs
  ORCH->>ENG: QA/QC, Clash, Compliance, QTO
  ENG-->>DB: results + Intelligence Index
  ORCH-->>U: SSE progress → done
```

### Database architecture
- PostgreSQL (primary) with **RLS** tenant isolation + **pgvector** for RAG. Read replicas for analytics. Object storage for models/reports. Redis for cache/queues/rate-limits. See [05-database-design](./05-database-design.md).

### Cloud architecture (KSA residency)
```mermaid
flowchart TB
  subgraph KSA Region
    LB[Load Balancer / WAF]
    APPS[App + Service containers - autoscaled]
    WK[Analysis Workers - GPU/CPU pool]
    PG[(Managed Postgres - Multi-AZ)]
    OBJ[(Object Storage)]
    RED[(Redis)]
    SEC[Secrets / KMS]
  end
  LB --> APPS --> PG & OBJ & RED
  APPS --> WK --> PG & OBJ
  APPS --> SEC
```
- **Hosting:** KSA region (e.g., regional cloud / sovereign cloud for Government). Containers (K8s/managed). IaC (Terraform). CI/CD with preview deploys.
- **Security:** TLS 1.3, AES-256, KMS-managed keys, WAF, audit logging, PDPL/SDAIA alignment, ISO 27001 roadmap.
- **Observability:** centralized logs, metrics, traces; per-tenant usage metering.

## Repository layout (current FE)
```
src/
  main.tsx App.tsx index.css
  i18n/ (dictionary.ts, index.tsx)
  data/ (mock.ts, ar.ts)
  components/ (Layout, Brand, Logo, Loader, Copilot, IntelligenceIndex,
              Vision2030, BIMSnapshot, ProjectThumb, three/BIMScene, ui/*)
  pages/ (Landing, Login, Dashboard, Executive, Investor, Projects, Upload,
          Analysis, Viewer, Settings, analysis/<9 tabs>)
```
