# STRUX — Master Handover Package

> **The Intelligence Layer Above BIM** — an AI-powered BIM & Construction Intelligence SaaS for the Saudi & GCC market.

This package is a complete, self-contained handover. A new team (or AI environment such as **Lovable**) can rebuild STRUX end-to-end from these documents without access to the original codebase.

## Reading order

| # | Document | Contents |
|---|----------|----------|
| 01 | [Executive Product Overview](./01-product-overview.md) | Vision, mission, problem, market, personas, advantage |
| 02 | [Product Requirements (PRD)](./02-prd.md) | Every module & feature: purpose, value, flow, acceptance, deps |
| 03 | [User Stories](./03-user-stories.md) | All roles, full backlog of stories |
| 04 | [Information Architecture](./04-information-architecture.md) | Pages, navigation, menus, dashboard layouts |
| 05 | [Database Design](./05-database-design.md) | ERD, tables, fields, relationships, indexes (SQL) |
| 06 | [API Documentation](./06-api-documentation.md) | Endpoints, request/response, auth |
| 07 | [UI/UX Specification](./07-uiux-spec.md) | Per-page layout, components, permissions |
| 08 | [Design System](./08-design-system.md) | Colors, type, spacing, grid, icons, components |
| 09 | [Authentication & Roles](./09-auth-roles.md) | RBAC matrix, permissions, approval workflows |
| 10 | [AI Module](./10-ai-module.md) | Assistant, RFI, submittals, drawings, cost, schedule + prompts |
| 11 | [SaaS Architecture](./11-saas-architecture.md) | Multi-tenant, plans, billing, isolation |
| 12 | [Investor Portal](./12-investor-portal.md) | KPI structure, financial & health metrics, layout |
| 13 | [Technical Architecture](./13-technical-architecture.md) | FE/BE/DB/Cloud + Mermaid diagrams |
| 14 | [Development Roadmap](./14-roadmap.md) | MVP → V1 → V2 → V3, prioritized backlog |
| 15 | [Lovable Migration Prompt](./15-lovable-migration-prompt.md) | Single paste-ready prompt to recreate STRUX |

## Current implementation snapshot (prototype)

- **Stack:** React 18 + TypeScript + Vite + Tailwind CSS + React Router + Recharts + Three.js (`@react-three/fiber`/`drei`). Mock data only; no backend yet.
- **Bilingual:** English ⇄ Arabic with full RTL (Tajawal typeface), persisted language.
- **Implemented surfaces:** Landing, Login, Command Dashboard, Executive Dashboard, Investor Dashboard, Project Workspace, BIM Upload (AI pipeline), AI Analysis (9 tabs incl. 3D viewer), Admin & Settings, floating STRUX Copilot, STRUX Intelligence Index™.

## Positioning (must be preserved)

STRUX is **NOT** a BIM viewer and does **not** replace Autodesk/Revit/Navisworks. It is an **intelligence layer above** the BIM stack (Revit, Navisworks, IFC, BOQ, specs) that turns engineering data into executive decisions.

## Brand essentials

- **Name/wordmark:** STRUX (letter-spaced) + small gradient "AI" badge.
- **Mark:** hexagonal cube with a negative-space "S", blue (top-left) / charcoal (bottom-right) split, silver accent triangles.
- **Palette:** dark navy (`#070b18`–`#16224d`), electric blue (`#2f6bff`), cyan accent (`#22d3ee`), silver text (`#e3e8f2`).
- **Signature metric:** STRUX Intelligence Index™ (0–100; composite of compliance, quality, risk, cost, schedule).

> All figures across the product are **illustrative prototype / projection data**. The company is **Pre-Seed**, raising **SAR 6–7M**.
