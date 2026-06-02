# 10 · AI Module Specification

STRUX AI is grounded on each project's analysis results (RAG over the element graph, clashes, QA/QC, compliance, quantities, BOQ & specs). Default model family: latest **Claude** (Opus/Sonnet) with prompt caching; retrieval via vector store over parsed documents + structured results. Every answer must cite the underlying refs (clash/violation/quantity ids).

> Guardrails: never invent metrics; always cite sources; respond in the user's locale (EN/AR); construction- and finance-literate tone; refuse out-of-scope requests.

---

## 10.1 AI BIM Assistant (Copilot / Chat)
- **Workflow:** user question → classify intent (risk | clash | compliance | quantity | report | general) → retrieve relevant structured results + doc chunks → compose grounded answer with citations.
- **System prompt (core):**
```
You are STRUX Copilot, an AI engineering analyst for Saudi construction.
Context: project "{project}", run {runId}. You have its QA/QC, clashes, Saudi
compliance, quantities and BOQ. Answer concisely and professionally in {locale}.
Always cite specific references (e.g., CL-1090, CV-01, q2). Quantify cost (SAR)
and schedule (days) where known. Never fabricate numbers. If unknown, say so.
```
- **Example tasks:** "highest-risk issues", "biggest cost-impact clashes", "is it SBC-compliant?", "compare BOQ vs model", "what should the BIM manager fix first?".

## 10.2 RFI Generation
- **Workflow:** select source issue (clash/violation/quantity variance) → fetch context (elements, location, discipline, impact) → generate RFI (subject, question, discipline, priority, suggested attachment) → human edit → issue.
- **Prompt:**
```
Draft a construction RFI from this {sourceType} {ref}: {context}.
Output: subject (≤90 chars), a precise question requesting a decision,
discipline(s), priority (Critical/High/Medium/Low), and a suggested attachment.
Neutral, professional tone. Locale: {locale}.
```
- **Acceptance:** RFI references the source; priority mirrors severity; bilingual.

## 10.3 Submittal Review (V1+)
- **Workflow:** ingest submittal (material/shop drawing) → extract specified properties → compare against project specification & SBC → flag deviations → produce review note (Approved / Approved-as-noted / Revise & Resubmit).
- **Prompt:**
```
Compare this submittal {doc} against specification {specRef} and Saudi Building
Code {codeRefs}. List conformities and deviations with clause citations and a
recommended disposition. Locale: {locale}.
```

## 10.4 Drawing Analysis (V1+)
- **Workflow:** parse PDF/CAD sheets → detect sheet metadata, revisions, missing references, title-block consistency → cross-check against model sheets → list discrepancies.
- **Prompt:**
```
Analyze these drawing sheets for: revision consistency, missing detail callouts,
title-block completeness, and mismatches vs the model sheet index {sheets}.
Return a prioritized discrepancy list with sheet numbers.
```

## 10.5 Cost Estimation (V2)
- **Workflow:** model quantities × rate library (regional, time-stamped) → element-level cost → roll-up → compare to BOQ → variance & risk. Confidence scoring on matched items.
- **Prompt:**
```
Given model quantities {qty[]} and rate library {rates}, estimate cost per item
and total, then reconcile against BOQ {boq[]}. Flag variances >5% (medium) and
>10% (high) with likely causes. Output SAR.
```

## 10.6 Schedule Risk Detection (V2)
- **Workflow:** map open clashes/violations to affected activities (P6/MSP import) → estimate delay propagation along critical path → produce schedule-at-risk (days) and at-risk milestones.
- **Prompt:**
```
Given unresolved issues {issues[]} mapped to activities {schedule}, estimate
delay impact and identify milestones at risk. Quantify days and rank by criticality.
```

## Model & infra notes
- **Retrieval:** pgvector or managed vector DB over chunked specs/BOQ + structured result embeddings.
- **Determinism:** structured outputs (JSON schema/tool-use) for RFIs, reviews, estimates.
- **Caching:** prompt caching of the project context block; per-run cache invalidation.
- **Evaluation:** golden-set of engineering Q&A; citation-accuracy and hallucination checks in CI.
