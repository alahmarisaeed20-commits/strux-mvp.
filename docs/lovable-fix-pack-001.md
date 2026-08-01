# STRUX (Lovable) — Fix Pack 001

Paste the block below into the **STRUX** project chat on Lovable
(`screenshot-perfect-848` / display name "Pixel Perfect").

Derived from a code review of:
- `src/lib/approvals.functions.ts`
- `src/lib/teams.functions.ts` + `src/lib/teams-authz.test.ts`
- `src/routes/app.tsx`
- `supabase/migrations/20260707060738_*.sql`

> Tip: to reduce the risk of a partial implementation, send **FIX 1** on its own
> first (it's the security one), then send **FIX 2 + FIX 3** together
> (both edit `src/routes/app.tsx`).

---

```text
Apply three fixes to the STRUX app. Keep the existing design system, dark theme, and RTL behavior. Do not change unrelated functionality.

──────────────────────────────────────────
FIX 1 — HARDEN APPROVAL GOVERNANCE (security, highest priority)
File: src/lib/approvals.functions.ts → decideApproval

Problem: decideApproval updates the approval filtered only by approvalId. It never verifies the caller is a team admin, and it does not prevent a requester from approving their own request. teams.functions.ts already has an assertTeamAdmin helper (covered by src/lib/teams-authz.test.ts) that is not being used here.

Required changes in decideApproval's handler, BEFORE performing the update:
1. Fetch the approval row first (id, team_id, requested_by, status).
   Throw "Approval not found" if missing.
2. Enforce team-admin authorization on that approval's team_id using the
   existing assertTeamAdmin helper (export/reuse it from teams.functions.ts —
   do not duplicate the logic). Throw "Forbidden: admin role required" otherwise.
3. Block self-approval: if userId === approval.requested_by and decision is
   "approved" or "rejected", throw "لا يمكن اعتماد طلبك بنفسك" (self-approval is
   not permitted). Allow the requester to "cancelled" their OWN pending request
   even if they are not an admin.
4. Block re-deciding: if approval.status !== "pending", throw
   "تم البتّ في هذا الطلب مسبقًا".
5. Keep the existing audit_log + notification side effects unchanged.

Also add a database migration hardening RLS on public.approvals so the server
check is not the only line of defense:
- Ensure RLS is enabled.
- SELECT: team members (use the existing public.is_team_member(team_id, auth.uid())).
- INSERT: team members AND requested_by = auth.uid().
- UPDATE: only public.is_team_admin(team_id, auth.uid()), OR the requester
  cancelling their own still-pending request. Include a WITH CHECK clause.
Mirror the style of the existing tasks policies in
supabase/migrations/20260707060738_*.sql.

Add a vitest unit test next to teams-authz.test.ts covering: admin can decide,
non-admin is rejected, self-approval is rejected, already-decided is rejected.

──────────────────────────────────────────
FIX 2 — MAKE THE SIDEBAR NAV FULLY BILINGUAL
Files: src/routes/app.tsx (the `nav` array) + src/hooks/use-i18n.tsx

Problem: the nav array mixes i18n keys (e.g. "nav.dashboard") with hardcoded
Arabic strings, so those items stay Arabic when the UI is switched to English.

Move EVERY hardcoded label into the i18n dictionary with both `en` and `ar`
values, and reference them by key in the nav array. Items to convert (current
hardcoded value → suggested key):
  "Revit → IFC"                → nav.revitToIfc      (en: "Revit → IFC")
  "نموذج توليد BIM"            → nav.rvtIntake       (en: "BIM Generation")
  "كشف التعارضات"              → nav.clash           (en: "Clash Detection")
  "وكيل الامتثال (SBC)"        → nav.compliance      (en: "Compliance Agent (SBC)")
  "وكيل التسعير الحي"          → nav.costLive        (en: "Live Pricing Agent")
  "منسّق الوكلاء"              → nav.orchestrator    (en: "Agent Orchestrator")
  "العارض الموحّد"             → nav.viewerUnified   (en: "Unified Viewer")
  "محاكاة 4D / 5D"             → nav.viewer4d5d      (en: "4D / 5D Simulation")
  "قاعدة معرفة المشاريع"       → nav.knowledge       (en: "Project Knowledge Base")
  "تحليلات الوكلاء"            → nav.agentAnalytics  (en: "Agent Analytics")
  "المهام"                     → nav.tasks           (en: "Tasks")
  "قاعدة المعرفة التنظيمية"    → nav.regulatory      (en: "Regulatory Knowledge Base")
  "الأمان"                     → nav.security        (en: "Security")
  "سجل التدقيق"                → nav.audit           (en: "Audit Log")
  "طلبات الموافقة"             → nav.approvals       (en: "Approvals")
  "المناقصات الذكية"           → nav.tenders         (en: "Smart Tenders")
  "Autodesk ACC"               → nav.acc             (en: "Autodesk ACC")
  "Claude"                     → nav.claude          (en: "Claude")
  "وكلاء الذكاء"               → nav.agents          (en: "AI Agents")
  "صور موقع مرتبطة"            → nav.photoPins       (en: "Site Photo Pins")
  "قوالب PDF عربية"            → nav.pdfTemplates    (en: "Arabic PDF Templates")
  "مكتبة القوالب"              → nav.templates       (en: "Template Library")
  "مركز التعلّم"               → nav.learn           (en: "Learning Center")
Keep the Arabic values exactly as they are today. Verify no raw string literals
remain in the nav array.

──────────────────────────────────────────
FIX 3 — GROUP THE SIDEBAR INTO COLLAPSIBLE SECTIONS
File: src/routes/app.tsx

Problem: ~40 flat nav items are hard to scan.

Restructure `nav` into titled, collapsible groups (each group title also goes
through i18n with en+ar). Suggested grouping:
  1. Dashboards / لوحات القيادة       → dashboard, executive, investor
  2. Projects & Models / المشاريع والنماذج → projects, upload, revit-to-ifc,
     rvt-intake, compare, history
  3. Intelligence / التحليل الذكي      → analysis, clash, compliance, ids,
     regulatory, cost-live, boq, orchestrator, agents, agent-analytics, claude
  4. Viewers / العارضات                → viewer-unified, viewer-3d, viewer-4d5d,
     photo-pins
  5. Collaboration / التعاون           → teams, tasks, approvals, issues, rfi,
     knowledge
  6. Business / الأعمال                → pilots, tenders, acc, templates,
     pdf-templates, learn
  7. Administration / الإدارة          → settings, security, audit

Behavior:
- The group containing the currently active route is expanded by default.
- Persist expanded/collapsed state per group in localStorage.
- Group headers are keyboard accessible (button, aria-expanded), with a chevron
  that flips correctly in RTL.
- Keep the existing active-item styling and icons.

──────────────────────────────────────────
After implementing, run the test suite and make sure the build passes.
```

---

## Optional follow-ups (lower priority, from the same review)

4. **RAG knowledge is per-user, not per-team.** `public.project_documents` RLS is
   `auth.uid() = user_id`, so a teammate cannot see knowledge another member
   uploaded. Consider scoping to team/project if sharing is intended.
5. **No vector index on `project_documents.embedding`** (3072 dims, brute-force
   scan). Fine at current scale; revisit before the corpus grows.
6. **Sidebar is pinned `left-0` with LTR translate logic** despite the app being
   Arabic-first. Consider making it direction-aware.
