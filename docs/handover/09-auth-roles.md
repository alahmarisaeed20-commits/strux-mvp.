# 09 · Authentication & Roles

## Authentication
- **Primary:** email/password → JWT (access + refresh). **Enterprise:** SSO/SAML & OIDC.
- **MFA:** optional TOTP for admins.
- **Sessions:** short-lived access token (~15 min) + rotating refresh (httpOnly cookie).
- **Tenant binding:** every token carries `tenant` claim; all queries enforced by Postgres RLS.
- **KSA residency:** identity & data hosted in-Kingdom (PDPL/SDAIA aligned).

## Roles
`Owner · Consultant · Contractor · Project Manager (PM) · Site Engineer · BIM Engineer · BIM Manager · Admin · Investor`

## Access levels
- **L0 Public** — Landing, Login.
- **L1 Viewer** — read dashboards/analysis (Site Engineer, Investor).
- **L2 Contributor** — upload, analyze, create RFIs (Contractor, Consultant, PM, BIM Engineer/Manager).
- **L3 Manager** — reports, approvals, project config (Owner, PM, BIM Manager).
- **L4 Admin** — users, roles, billing, integrations, security.

## RBAC Matrix
| Capability | Owner | Consultant | Contractor | PM | Site Eng | BIM Eng | BIM Mgr | Admin | Investor |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| View dashboards | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| View executive dashboard | ✅ | ✅ | ◐ | ✅ | ❌ | ◐ | ✅ | ✅ | ❌ |
| View investor dashboard | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Upload models | ✅ | ◐ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| Run analysis | ✅ | ✅ | ✅ | ✅ | ◐ | ✅ | ✅ | ✅ | ❌ |
| View 3D / clashes / QA-QC | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ◐ |
| Create / generate RFIs | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Issue / approve RFIs | ✅ | ✅ | ◐ | ✅ | ❌ | ◐ | ✅ | ✅ | ❌ |
| Generate / export reports | ✅ | ✅ | ◐ | ✅ | ❌ | ◐ | ✅ | ✅ | ✅ |
| Manage users & roles | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Manage integrations & API keys | ◐ | ❌ | ❌ | ❌ | ❌ | ❌ | ◐ | ✅ | ❌ |
| Manage billing/subscription | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

✅ full · ◐ limited/conditional · ❌ none

## Permissions (granular keys)
`project:read project:write upload:create analysis:run clash:read qaqc:read compliance:read quantity:read rfi:create rfi:issue report:read report:export dashboard:executive dashboard:investor admin:users admin:roles admin:integrations admin:billing tenant:settings`

## Approval workflows
1. **RFI lifecycle:** Draft → (Contributor submits) → Issued → (recipient discipline responds) → Answered → Closed. PM/BIM Manager can approve issue; Admin can override.
2. **Model promotion:** Upload → analysis `done` → BIM Manager marks model "Coordinated" → eligible for shop-drawing stage (gated by closing Critical clashes/violations).
3. **Compliance sign-off:** Consultant reviews violations → marks "Resolved/Waived (with note)" → Owner/PM sign-off recorded → included in executive report.
4. **User invitation:** Admin invites (status `invited`) → user accepts → `active`; role assigned at invite, editable by Admin.

## Audit
- All write actions logged (`actor`, `action`, `entity`, `before/after`, `ip`, `ts`); 12-month retention; exportable for diligence.
