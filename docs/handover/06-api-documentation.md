# 06 · API Documentation

REST/JSON over HTTPS. Base URL: `https://api.strux.sa/v1`. All responses JSON; timestamps ISO-8601 UTC; money in minor units or decimal SAR with explicit `currency`.

## Authentication
- **Method:** OAuth2 / OIDC with JWT bearer tokens. SSO/SAML for enterprise.
- **Header:** `Authorization: Bearer <access_token>`
- **Tenant scoping:** `X-Tenant-Id: <uuid>` (or derived from token claim `tenant`).
- **Token claims:** `sub`, `tenant`, `roles[]`, `locale`, `exp`.
- **Refresh:** `POST /auth/refresh` with refresh token (httpOnly cookie).

```http
POST /v1/auth/login
{ "email": "saeed@strux.sa", "password": "•••" }
→ 200 { "access_token":"...", "refresh_token":"...", "user":{...}, "tenant":{...} }
```

## Conventions
- **Pagination:** `?page=1&perPage=25` → `{ data:[], page, perPage, total }`
- **Errors:** `{ "error": { "code":"string", "message":"string", "details":{} } }` with proper HTTP status.
- **Idempotency:** `Idempotency-Key` header on POST that creates resources.

## Endpoints

### Projects
| Method | Path | Purpose |
|---|---|---|
| GET | `/projects` | List projects (portfolio) |
| POST | `/projects` | Create project |
| GET | `/projects/{id}` | Project detail + latest run summary |
| PATCH | `/projects/{id}` | Update project |
| GET | `/projects/{id}/index` | Latest STRUX Intelligence Index™ |

```http
GET /v1/projects
→ { "data":[ { "id":"...","name":"Riyadh Mixed-Use Tower","bimScore":94,
     "issues":72,"highRisk":11,"compliance":91,"riskLevel":"Medium",
     "lastUpload":"2026-06-02T...","progress":62 } ], "total":18 }
```

### Uploads & analysis
| Method | Path | Purpose |
|---|---|---|
| POST | `/projects/{id}/uploads` | Request signed upload URL (ifc/revit/boq/specs) |
| POST | `/projects/{id}/analyze` | Start analysis run over uploads |
| GET | `/runs/{runId}` | Run status & summary (poll or subscribe) |
| GET | `/runs/{runId}/stream` | SSE/WebSocket pipeline progress |

```http
POST /v1/projects/{id}/analyze
{ "uploadIds": ["...","..."] }
→ 202 { "runId":"...", "status":"queued" }

GET /v1/runs/{runId}
→ { "runId":"...","status":"clash","progress":0.66,"elementCount":48210,
    "bimHealth":94,"compliance":91 }
```

### Analysis results
| Method | Path | Returns |
|---|---|---|
| GET | `/runs/{runId}/qaqc` | QA/QC checks[] |
| GET | `/runs/{runId}/clashes` | Clash register[] (sortable by costImpact, delayDays, priority) |
| GET | `/runs/{runId}/compliance` | Areas[] + violations[] |
| GET | `/runs/{runId}/quantities` | Quantity items[] (model vs BOQ, variance) |
| GET | `/runs/{runId}/index` | Intelligence Index + sub-scores |
| GET | `/runs/{runId}/overview` | Aggregated overview (radar, funnel, summary) |

```http
GET /v1/runs/{runId}/clashes?sort=costImpact&dir=desc
→ { "data":[ { "ref":"CL-1090","element1":"Chilled Water Pipe DN200",
     "discipline1":"MEP","element2":"Shear Wall SW-7","discipline2":"Structural",
     "severity":"Critical","costImpact":140000,"currency":"SAR",
     "delayDays":7,"priority":"Critical","location":"Basement 01 — Plant Room",
     "recommendation":"Coordinate a cast-in sleeve..." } ] }
```

### RFIs
| Method | Path | Purpose |
|---|---|---|
| GET | `/projects/{id}/rfis` | List RFIs |
| POST | `/projects/{id}/rfis` | Create RFI |
| POST | `/projects/{id}/rfis/generate` | AI-generate RFI from a source issue |
| PATCH | `/rfis/{rfiId}` | Update status (Draft→Issued→Answered) |
| GET | `/rfis/{rfiId}/pdf` | Export RFI PDF |

```http
POST /v1/projects/{id}/rfis/generate
{ "source": { "type":"clash", "ref":"CL-1042" } }
→ 201 { "ref":"RFI-031","subject":"...","question":"...","discipline":"MEP / Structural",
        "priority":"High","status":"Draft","attachment":"Clash CL-1042 Screenshot" }
```

### Reports & dashboards
| Method | Path | Purpose |
|---|---|---|
| GET | `/projects/{id}/report/executive` | Executive report payload |
| GET | `/projects/{id}/report/executive/pdf` | PDF export |
| GET | `/dashboard/portfolio` | KPIs + trends + Intelligence Index (portfolio) |
| GET | `/dashboard/executive` | Heatmap, exposure-by-project, top risks, decisions |

### AI Copilot / Chat
| Method | Path | Purpose |
|---|---|---|
| POST | `/ai/chat` | Ask a question grounded in project/portfolio context |
| GET | `/ai/suggestions` | Suggested prompts (localized) |

```http
POST /v1/ai/chat
{ "projectId":"...", "locale":"ar",
  "message":"أي التعارضات لها أكبر أثر على التكلفة؟" }
→ { "answer":"...", "citations":[ {"type":"clash","ref":"CL-1090"} ] }
```

### Admin
| Method | Path | Purpose |
|---|---|---|
| GET/POST | `/tenant/users` | List / invite users |
| GET/PUT | `/tenant/roles` | RBAC matrix |
| GET/PUT | `/tenant/profile` | Company profile |
| GET/POST | `/tenant/integrations` | Connectors (ACC, Revit, Navisworks, Procore, Aconex) |
| GET | `/tenant/subscription` | Plan & billing |
| POST | `/tenant/api-keys` | Create/rotate API key |

## Webhooks (outbound)
- `analysis.completed`, `clash.detected`, `compliance.violation`, `rfi.issued`, `report.generated`.
- Signed with `X-STRUX-Signature` (HMAC-SHA256).
