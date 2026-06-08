# 14 · Development Roadmap

Prioritization: **P0** must-have · **P1** important · **P2** later.

## MVP (current prototype → first real backend) — "Make it real"
Goal: a real, KSA-hosted product that ingests a model and returns trustworthy intelligence.
- **P0** Auth (email + JWT), multi-tenant + RLS, company/users/roles.
- **P0** Project CRUD + portfolio dashboard (real data).
- **P0** Ingestion: IFC parsing (web-ifc/IfcOpenShell) + BOQ (xlsx) + element graph.
- **P0** Analysis pipeline (async, progress) → QA/QC engine + Clash detection (hard clashes) + Saudi Compliance Engine v1 (SBC, Civil Defense) + Quantity take-off vs BOQ.
- **P0** STRUX Intelligence Index™ computation.
- **P0** Executive Smart Report (PDF export).
- **P1** RFI generator (LLM) + RFI lifecycle.
- **P1** AI Chat / Copilot grounded on results (RAG).
- **P1** 3D viewer with real geometry (web-ifc) + clash markers.
- **P1** Billing (Team/Enterprise) + entitlements; ZATCA e-invoice.
- **P2** Investor dashboard (already built as static) wired to live metrics.

## Version 1 — "Coordinate & comply"
- **P0** Autodesk ACC & **Navisworks** connectors (import federated models/clash tests).
- **P0** Revit ingestion via APS Model Derivative.
- **P0** Saudi Compliance Engine v2 (Balady/Municipality, Energy/SBC 601, Accessibility).
- **P1** Submittal Review AI + Drawing Analysis AI.
- **P1** Soft clashes + clearance rules; AI cost/delay scoring for clashes.
- **P1** Doc-control integrations (Procore, Aconex) for RFIs.
- **P2** Mobile-responsive field views for Site Engineers.

## Version 2 — "Predict & estimate"
- **P0** Cost Estimation engine (rate library + reconciliation).
- **P0** Schedule Risk Detection (P6/MSP import; delay propagation).
- **P1** Portfolio learning network (cross-project benchmarks; Index trends).
- **P1** Advanced analytics & custom dashboards.
- **P2** Predictive risk forecasting (ML on historical projects).

## Version 3 — "Scale & sovereignty"
- **P0** GCC expansion (UAE, Qatar code packs); multi-region.
- **P0** Government tier: sovereign/on-prem, Etimad integration, accreditation.
- **P1** Open API & marketplace; partner connectors.
- **P1** Real-time collaboration & issue assignment workflows.
- **P2** Generative remediation suggestions (auto-routing/clearance fixes).

## Prioritized backlog (top items)
1. Tenant + auth + RLS foundation (P0)
2. IFC ingestion + element graph (P0)
3. Analysis orchestrator + job queue + SSE (P0)
4. QA/QC rule engine (configurable per BEP) (P0)
5. Clash detection + register (P0)
6. Saudi Compliance Engine v1 (P0)
7. Quantity take-off vs BOQ (P0)
8. Intelligence Index service (P0)
9. Executive report + PDF (P0)
10. RFI generation + lifecycle (P1)
11. Copilot RAG (P1)
12. Real 3D viewer (P1)
13. Billing + entitlements (P1)
14. ACC/Navisworks/Revit connectors (V1)
15. Submittal & drawing AI (V1)
16. Cost & schedule engines (V2)

## Non-functional targets
- First paint < 2s; analysis feedback < 60s for typical model (progressive).
- 99.9% uptime; encrypted, KSA-resident; full audit; AA accessibility; EN/AR parity.
