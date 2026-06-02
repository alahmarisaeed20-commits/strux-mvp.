// =============================================================================
// STRUX — Mock data layer
// All numbers below are illustrative sample data for the prototype/demo only.
// In production these are produced by the STRUX analysis engine from real
// IFC / Revit models, BOQs and specification documents.
// =============================================================================

export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low'
export type Severity = 'Critical' | 'High' | 'Medium' | 'Low'
export type CheckStatus = 'Passed' | 'Warning' | 'Failed'

// ---------------------------------------------------------------------------
// Top-level KPIs shown on the main dashboard
// ---------------------------------------------------------------------------
export const dashboardKpis = {
  bimHealthScore: 92,
  totalIssues: 247,
  highRiskIssues: 38,
  openRfis: 16,
  projects: 18,
  reportsGenerated: 4200,
  complianceScore: 88,
}

// Issue trend over the last 8 weeks (resolved vs newly detected)
export const issueTrend = [
  { week: 'W1', detected: 64, resolved: 31, health: 81 },
  { week: 'W2', detected: 58, resolved: 44, health: 83 },
  { week: 'W3', detected: 71, resolved: 50, health: 84 },
  { week: 'W4', detected: 49, resolved: 55, health: 86 },
  { week: 'W5', detected: 53, resolved: 61, health: 88 },
  { week: 'W6', detected: 41, resolved: 58, health: 90 },
  { week: 'W7', detected: 38, resolved: 49, health: 91 },
  { week: 'W8', detected: 33, resolved: 47, health: 92 },
]

// Distribution of issues by discipline (for the dashboard donut)
export const issuesByDiscipline = [
  { name: 'Structural', value: 58, color: '#2f6bff' },
  { name: 'MEP', value: 79, color: '#7aa6ff' },
  { name: 'Architectural', value: 46, color: '#22c55e' },
  { name: 'Civil', value: 34, color: '#f59e0b' },
  { name: 'Other', value: 30, color: '#6b7798' },
]

// Severity breakdown for the dashboard bar chart
export const severityBreakdown = [
  { severity: 'Critical', count: 14, color: '#ef4444' },
  { severity: 'High', count: 24, color: '#f59e0b' },
  { severity: 'Medium', count: 96, color: '#eab308' },
  { severity: 'Low', count: 113, color: '#22c55e' },
]

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export interface Project {
  id: string
  name: string
  client: string
  location: string
  type: string
  bimScore: number
  issues: number
  highRisk: number
  compliance: number
  complianceStatus: 'Compliant' | 'At Risk' | 'Non-Compliant'
  lastUpload: string
  riskLevel: RiskLevel
  phase: string
  value: string
  progress: number
}

export const projects: Project[] = [
  {
    id: 'riyadh-tower',
    name: 'Riyadh Mixed-Use Tower',
    client: 'Capital Development Co.',
    location: 'Riyadh, KSA',
    type: 'High-Rise / Mixed-Use',
    bimScore: 94,
    issues: 72,
    highRisk: 11,
    compliance: 91,
    complianceStatus: 'Compliant',
    lastUpload: '2 hours ago',
    riskLevel: 'Medium',
    phase: 'Design Development',
    value: 'SAR 1.4B',
    progress: 62,
  },
  {
    id: 'neom-infra',
    name: 'NEOM Infrastructure Package',
    client: 'NEOM Developments',
    location: 'Tabuk, KSA',
    type: 'Infrastructure / Utilities',
    bimScore: 88,
    issues: 96,
    highRisk: 18,
    compliance: 84,
    complianceStatus: 'At Risk',
    lastUpload: '5 hours ago',
    riskLevel: 'High',
    phase: 'Detailed Design',
    value: 'SAR 3.2B',
    progress: 38,
  },
  {
    id: 'hospital-expansion',
    name: 'Hospital Expansion Project',
    client: 'Ministry of Health',
    location: 'Jeddah, KSA',
    type: 'Healthcare',
    bimScore: 90,
    issues: 54,
    highRisk: 7,
    compliance: 93,
    complianceStatus: 'Compliant',
    lastUpload: 'Yesterday',
    riskLevel: 'Low',
    phase: 'Construction Docs',
    value: 'SAR 680M',
    progress: 74,
  },
  {
    id: 'industrial-factory',
    name: 'Industrial Factory Project',
    client: 'Saudi Industrial Group',
    location: 'Dammam, KSA',
    type: 'Industrial / Manufacturing',
    bimScore: 79,
    issues: 25,
    highRisk: 2,
    compliance: 76,
    complianceStatus: 'At Risk',
    lastUpload: '3 days ago',
    riskLevel: 'High',
    phase: 'Schematic Design',
    value: 'SAR 420M',
    progress: 21,
  },
]

// ---------------------------------------------------------------------------
// AI processing pipeline (Upload page)
// ---------------------------------------------------------------------------
export const pipelineStages = [
  { key: 'read', label: 'Reading BIM Model', detail: 'Parsing IFC geometry & Revit metadata' },
  { key: 'extract', label: 'Extracting Elements', detail: '48,210 elements indexed across 6 disciplines' },
  { key: 'qaqc', label: 'Running QA/QC Checks', detail: 'Validating naming, LOD, coordinates & classification' },
  { key: 'clash', label: 'Detecting Clashes', detail: 'Hard & soft clash tests across federated model' },
  { key: 'compliance', label: 'Checking Saudi Compliance', detail: 'SBC, Civil Defense, Accessibility & Energy code' },
  { key: 'report', label: 'Generating Smart Report', detail: 'Compiling executive intelligence & RFIs' },
]

export const acceptedFiles = [
  { type: 'IFC', label: 'IFC Model', ext: '.ifc', desc: 'IFC2x3 / IFC4 federated model', icon: 'cube' },
  { type: 'Revit', label: 'Revit File', ext: '.rvt', desc: 'Native Autodesk Revit model', icon: 'layers' },
  { type: 'BOQ', label: 'BOQ Excel', ext: '.xlsx', desc: 'Bill of quantities spreadsheet', icon: 'table' },
  { type: 'Specs', label: 'Specifications PDF', ext: '.pdf', desc: 'Project specification document', icon: 'doc' },
]

// ---------------------------------------------------------------------------
// QA/QC checks
// ---------------------------------------------------------------------------
export interface QaQcCheck {
  id: string
  name: string
  status: CheckStatus
  severity: Severity
  description: string
  recommendation: string
  discipline: string
  affected: number
}

export const qaqcChecks: QaQcCheck[] = [
  {
    id: 'qc-01',
    name: 'Naming Convention',
    status: 'Passed',
    severity: 'Low',
    description: 'All 48,210 elements follow the project ISO 19650 naming standard.',
    recommendation: 'No action required. Maintain naming discipline on next upload.',
    discipline: 'BIM Management',
    affected: 0,
  },
  {
    id: 'qc-02',
    name: 'LOD Validation',
    status: 'Warning',
    severity: 'Medium',
    description: '2,140 elements are below the contractually required LOD 350 for this phase.',
    recommendation: 'Upgrade structural connections and MEP terminals to LOD 350 before IFC issue.',
    discipline: 'Structural / MEP',
    affected: 2140,
  },
  {
    id: 'qc-03',
    name: 'Coordinates / Shared Origin',
    status: 'Failed',
    severity: 'High',
    description: 'Architectural model is offset 1.250 m on the X axis from the federated shared coordinate system.',
    recommendation: 'Re-acquire shared coordinates from the survey base point and re-publish.',
    discipline: 'Architecture',
    affected: 1,
  },
  {
    id: 'qc-04',
    name: 'Element Classification',
    status: 'Passed',
    severity: 'Low',
    description: 'Uniclass 2015 / IFC classification present on 99.4% of modelled elements.',
    recommendation: 'No action required.',
    discipline: 'BIM Management',
    affected: 0,
  },
  {
    id: 'qc-05',
    name: 'Missing Metadata',
    status: 'Failed',
    severity: 'High',
    description: '3,805 elements are missing fire rating, material or cost-code parameters.',
    recommendation: 'Populate mandatory parameters via the shared parameter file before QS take-off.',
    discipline: 'Multi-discipline',
    affected: 3805,
  },
  {
    id: 'qc-06',
    name: 'Model Duplication',
    status: 'Warning',
    severity: 'Medium',
    description: '64 duplicated/overlapping elements detected, mostly copied MEP fittings.',
    recommendation: 'Purge duplicate instances to avoid double-counting in quantity take-off.',
    discipline: 'MEP',
    affected: 64,
  },
  {
    id: 'qc-07',
    name: 'Sheet Consistency',
    status: 'Passed',
    severity: 'Low',
    description: 'Title blocks, revision tags and sheet numbers are consistent across 312 sheets.',
    recommendation: 'No action required.',
    discipline: 'Documentation',
    affected: 0,
  },
]

// ---------------------------------------------------------------------------
// Clash intelligence
// ---------------------------------------------------------------------------
export interface Clash {
  id: string
  element1: string
  discipline1: string
  element2: string
  discipline2: string
  severity: Severity
  costImpact: number // SAR
  delayDays: number
  priority: 'Critical' | 'High' | 'Medium' | 'Low'
  location: string
  recommendation: string
}

export const clashes: Clash[] = [
  {
    id: 'CL-1042',
    element1: 'Supply Air Duct 800×400',
    discipline1: 'MEP',
    element2: 'Primary Beam B-204',
    discipline2: 'Structural',
    severity: 'High',
    costImpact: 85000,
    delayDays: 4,
    priority: 'Critical',
    location: 'Level 03 — Grid C/4',
    recommendation: 'Adjust duct route below beam soffit before shop drawing approval.',
  },
  {
    id: 'CL-1067',
    element1: 'Sprinkler Branch Line',
    discipline1: 'Fire Protection',
    element2: 'Cable Tray CT-12',
    discipline2: 'Electrical',
    severity: 'Medium',
    costImpact: 22000,
    delayDays: 2,
    priority: 'High',
    location: 'Level 05 — Corridor',
    recommendation: 'Drop cable tray 150 mm to maintain sprinkler coverage clearance.',
  },
  {
    id: 'CL-1090',
    element1: 'Chilled Water Pipe DN200',
    discipline1: 'MEP',
    element2: 'Shear Wall SW-7',
    discipline2: 'Structural',
    severity: 'Critical',
    costImpact: 140000,
    delayDays: 7,
    priority: 'Critical',
    location: 'Basement 01 — Plant Room',
    recommendation: 'Coordinate a cast-in sleeve with structural engineer; penetration not currently permitted.',
  },
  {
    id: 'CL-1112',
    element1: 'Architectural Ceiling',
    discipline1: 'Architecture',
    element2: 'VAV Box VAV-22',
    discipline2: 'MEP',
    severity: 'Low',
    costImpact: 6000,
    delayDays: 1,
    priority: 'Medium',
    location: 'Level 07 — Office Zone B',
    recommendation: 'Raise ceiling void by 100 mm or relocate VAV box to plenum.',
  },
  {
    id: 'CL-1138',
    element1: 'Storm Drainage Pipe',
    discipline1: 'Civil',
    element2: 'Pile Cap PC-09',
    discipline2: 'Structural',
    severity: 'High',
    costImpact: 96000,
    delayDays: 5,
    priority: 'High',
    location: 'Podium — Grid F/2',
    recommendation: 'Re-route drainage around pile cap; confirm invert levels with civil lead.',
  },
  {
    id: 'CL-1155',
    element1: 'Lighting Fixture Run',
    discipline1: 'Electrical',
    element2: 'Fire Damper FD-31',
    discipline2: 'Fire Protection',
    severity: 'Medium',
    costImpact: 14500,
    delayDays: 2,
    priority: 'Medium',
    location: 'Level 02 — Retail Mall',
    recommendation: 'Maintain 300 mm access clearance to fire damper for inspection.',
  },
]

export const clashTrend = [
  { name: 'Detected', value: 184, color: '#ef4444' },
  { name: 'Coordinated', value: 121, color: '#f59e0b' },
  { name: 'Resolved', value: 98, color: '#22c55e' },
]

// ---------------------------------------------------------------------------
// Saudi compliance engine
// ---------------------------------------------------------------------------
export interface ComplianceArea {
  id: string
  name: string
  code: string
  score: number
  status: 'Compliant' | 'At Risk' | 'Non-Compliant'
  checks: number
  passed: number
}

export const complianceAreas: ComplianceArea[] = [
  { id: 'sbc', name: 'Saudi Building Code', code: 'SBC 201–801', score: 91, status: 'Compliant', checks: 120, passed: 109 },
  { id: 'civil-defense', name: 'Civil Defense Requirements', code: 'GDCD', score: 82, status: 'At Risk', checks: 64, passed: 52 },
  { id: 'accessibility', name: 'Accessibility Standards', code: 'Universal Access', score: 78, status: 'At Risk', checks: 40, passed: 31 },
  { id: 'municipality', name: 'Municipality Requirements', code: 'Amanah / Balady', score: 90, status: 'Compliant', checks: 55, passed: 50 },
  { id: 'energy', name: 'Energy Conservation Code', code: 'SBC 601 / SEEC', score: 71, status: 'At Risk', checks: 38, passed: 27 },
  { id: 'gov', name: 'Government Project Requirements', code: 'Etimad / NHC', score: 94, status: 'Compliant', checks: 30, passed: 28 },
]

export interface ComplianceViolation {
  id: string
  area: string
  severity: Severity
  title: string
  clause: string
  description: string
  recommendation: string
}

export const complianceViolations: ComplianceViolation[] = [
  {
    id: 'CV-01',
    area: 'Civil Defense',
    severity: 'Critical',
    title: 'Fire exit travel distance exceeds allowed limit',
    clause: 'SBC 801 — 7.6.2',
    description: 'Travel distance to nearest fire exit on Level 04 east wing is 48 m versus the 30 m maximum for the occupancy type.',
    recommendation: 'Introduce an additional protected exit stair or sub-divide the compartment.',
  },
  {
    id: 'CV-02',
    area: 'Accessibility',
    severity: 'High',
    title: 'Missing accessibility ramp at podium entrance',
    clause: 'Universal Access — 4.3',
    description: 'Main podium entrance relies on steps only; no compliant 1:12 ramp is modelled.',
    recommendation: 'Add a code-compliant ramp with handrails and a level landing at the entrance.',
  },
  {
    id: 'CV-03',
    area: 'Energy',
    severity: 'High',
    title: 'Energy compliance below threshold',
    clause: 'SBC 601 — Envelope',
    description: 'Glazing U-value and WWR on the south façade push the envelope performance to 71%, below the 80% target.',
    recommendation: 'Upgrade glazing spec or add external shading to the south and west façades.',
  },
  {
    id: 'CV-04',
    area: 'Civil Defense',
    severity: 'High',
    title: 'Insufficient fire-rated separation',
    clause: 'SBC 801 — 6.2',
    description: 'Plant room to corridor separation is modelled at 1-hour rating; 2-hour is required for the hazard classification.',
    recommendation: 'Upgrade wall assembly to a 2-hour fire-rated construction and tag accordingly.',
  },
  {
    id: 'CV-05',
    area: 'Accessibility',
    severity: 'Medium',
    title: 'Accessible WC clearance below minimum',
    clause: 'Universal Access — 5.1',
    description: 'Two accessible WCs provide a 1.40 m turning circle versus the required 1.50 m.',
    recommendation: 'Reconfigure partitions to achieve the 1.50 m clear turning space.',
  },
]

// ---------------------------------------------------------------------------
// Quantity extraction
// ---------------------------------------------------------------------------
export interface QuantityItem {
  id: string
  item: string
  unit: string
  modelQty: number
  boqQty: number
  variance: number // percent (model vs boq)
  risk: RiskLevel
}

export const quantities: QuantityItem[] = [
  { id: 'q1', item: 'Concrete Volume', unit: 'm³', modelQty: 18420, boqQty: 17850, variance: 3.2, risk: 'Low' },
  { id: 'q2', item: 'Steel Reinforcement', unit: 'ton', modelQty: 2310, boqQty: 2040, variance: 13.2, risk: 'High' },
  { id: 'q3', item: 'Doors', unit: 'no.', modelQty: 1248, boqQty: 1180, variance: 5.8, risk: 'Medium' },
  { id: 'q4', item: 'Windows', unit: 'no.', modelQty: 2104, boqQty: 2090, variance: 0.7, risk: 'Low' },
  { id: 'q5', item: 'Duct Length', unit: 'm', modelQty: 14860, boqQty: 13200, variance: 12.6, risk: 'High' },
  { id: 'q6', item: 'Cable Trays', unit: 'm', modelQty: 9420, boqQty: 9100, variance: 3.5, risk: 'Low' },
  { id: 'q7', item: 'Pipes (all services)', unit: 'm', modelQty: 21340, boqQty: 19880, variance: 7.3, risk: 'Medium' },
  { id: 'q8', item: 'Finishing Areas', unit: 'm²', modelQty: 86200, boqQty: 84900, variance: 1.5, risk: 'Low' },
]

// ---------------------------------------------------------------------------
// RFI generator
// ---------------------------------------------------------------------------
export interface Rfi {
  id: string
  subject: string
  question: string
  discipline: string
  priority: 'Critical' | 'High' | 'Medium' | 'Low'
  status: 'Draft' | 'Issued' | 'Answered'
  attachment: string
  source: string
  raisedBy: string
  date: string
}

export const rfis: Rfi[] = [
  {
    id: 'RFI-031',
    subject: 'Conflict between MEP duct and structural beam at Level 03',
    question:
      'Please confirm whether the supply air duct route should be revised below the beam soffit, or whether a beam opening can be approved for the 800×400 duct at Grid C/4.',
    discipline: 'MEP / Structural',
    priority: 'High',
    status: 'Draft',
    attachment: 'Clash CL-1042 Screenshot',
    source: 'Clash CL-1042',
    raisedBy: 'STRUX AI',
    date: '2026-06-02',
  },
  {
    id: 'RFI-032',
    subject: 'Chilled water pipe penetration through shear wall SW-7',
    question:
      'A DN200 chilled water pipe currently penetrates shear wall SW-7 in the basement plant room. Please advise if a cast-in sleeve can be coordinated, or provide an alternative routing.',
    discipline: 'MEP / Structural',
    priority: 'Critical',
    status: 'Issued',
    attachment: 'Clash CL-1090 Screenshot',
    source: 'Clash CL-1090',
    raisedBy: 'STRUX AI',
    date: '2026-06-01',
  },
  {
    id: 'RFI-033',
    subject: 'Fire exit travel distance on Level 04 east wing',
    question:
      'The modelled travel distance to the nearest fire exit on Level 04 east wing is 48 m, exceeding the 30 m SBC 801 limit. Please confirm the intended exit strategy or additional stair location.',
    discipline: 'Architecture / Fire',
    priority: 'Critical',
    status: 'Draft',
    attachment: 'Compliance CV-01 Markup',
    source: 'Compliance CV-01',
    raisedBy: 'STRUX AI',
    date: '2026-06-02',
  },
  {
    id: 'RFI-034',
    subject: 'Steel reinforcement quantity variance vs BOQ',
    question:
      'Model steel tonnage (2,310 t) is 13.2% above the BOQ (2,040 t). Please confirm the basis of the BOQ figure so the variance can be reconciled before procurement.',
    discipline: 'Structural / QS',
    priority: 'High',
    status: 'Draft',
    attachment: 'Quantity Report Extract',
    source: 'Quantity q2',
    raisedBy: 'STRUX AI',
    date: '2026-06-02',
  },
]

// ---------------------------------------------------------------------------
// AI chat — canned, construction-specific answers for the demo
// ---------------------------------------------------------------------------
export interface ChatSuggestion {
  q: string
  a: string
}

export const chatSuggestions: ChatSuggestion[] = [
  {
    q: 'What are the highest-risk issues in this model?',
    a: `The three highest-risk issues for Riyadh Mixed-Use Tower are:

1. **Clash CL-1090 (Critical)** — DN200 chilled water pipe penetrates shear wall SW-7 in the basement plant room. Estimated impact: SAR 140,000 and 7 days. Structural penetration is not currently permitted.
2. **Compliance CV-01 (Critical)** — Level 04 fire-exit travel distance is 48 m vs the 30 m SBC 801 limit.
3. **QA/QC — Coordinates (High)** — the architectural model is offset 1.25 m from the shared coordinate system, which will cascade into further false/true clashes if not fixed first.

I recommend resolving the coordinate offset before anything else, as it affects the reliability of the other checks.`,
  },
  {
    q: 'Which clashes have the biggest cost impact?',
    a: `Ranked by estimated cost impact:

1. **CL-1090** — Chilled water pipe vs shear wall SW-7 → **SAR 140,000**, 7 days (Critical)
2. **CL-1138** — Storm drainage vs pile cap PC-09 → **SAR 96,000**, 5 days (High)
3. **CL-1042** — Supply air duct vs primary beam B-204 → **SAR 85,000**, 4 days (Critical)

Combined exposure from the top 3 clashes alone is **SAR 321,000** and roughly **16 working days** of potential delay. I can draft RFIs for all three if you'd like.`,
  },
  {
    q: 'Is the project compliant with Saudi Building Code?',
    a: `Overall Saudi compliance score is **88%** — broadly compliant, with two areas at risk:

• Saudi Building Code (SBC 201–801): **91% — Compliant**
• Civil Defense (GDCD): **82% — At Risk** (fire exit distance & fire-rated separation)
• Accessibility: **78% — At Risk** (missing ramp, WC clearance)
• Energy Code (SBC 601): **71% — At Risk** (south façade envelope performance)

The Critical item to close out for authority approval is the **Level 04 fire-exit travel distance (CV-01)**.`,
  },
  {
    q: 'Generate an executive report.',
    a: `I've compiled the **Executive Smart Report** for Riyadh Mixed-Use Tower. Headline:

• BIM Health Score: **94%**
• Open issues: **72** (11 high-risk)
• Compliance: **91%**
• Financial exposure from unresolved clashes: **~SAR 363,500**

The full report — summary, top 10 issues, financial impact, compliance and recommended decisions — is available on the **Executive Report** tab, ready to export.`,
  },
  {
    q: 'Compare BOQ quantities with model quantities.',
    a: `Two items show a material variance that warrants reconciliation before procurement:

• **Steel reinforcement**: model 2,310 t vs BOQ 2,040 t → **+13.2% (High risk)**
• **Duct length**: model 14,860 m vs BOQ 13,200 m → **+12.6% (High risk)**

Most other items are within ±5%. The steel variance alone could represent a procurement gap of several million SAR, so I've drafted **RFI-034** to confirm the BOQ basis.`,
  },
  {
    q: 'What should the BIM Manager fix first?',
    a: `Recommended fix order for the BIM Manager:

1. **Re-acquire shared coordinates** (QA/QC — Coordinates, Failed). This is foundational — it improves clash reliability immediately.
2. **Populate missing metadata** on 3,805 elements (fire rating, material, cost code) so QS take-off and compliance checks are trustworthy.
3. **Coordinate clash CL-1090** with the structural engineer (highest cost/delay exposure).
4. **Close out compliance CV-01** (fire exit distance) ahead of the authority submission.

Items 1–2 are model hygiene and unlock the accuracy of everything downstream.`,
  },
]

// ---------------------------------------------------------------------------
// Executive report
// ---------------------------------------------------------------------------
export const executiveReport = {
  project: 'Riyadh Mixed-Use Tower',
  client: 'Capital Development Co.',
  date: '2026-06-02',
  reportId: 'STRUX-EXR-2026-0612',
  summary:
    'The Riyadh Mixed-Use Tower federated model is in good overall health (BIM Health Score 94%) and is broadly compliant with Saudi regulations (91%). A small number of critical coordination and compliance items carry meaningful cost and schedule exposure and should be closed out before shop-drawing approval and the next authority submission.',
  bimHealthScore: 94,
  complianceScore: 91,
  openIssues: 72,
  highRisk: 11,
  financialExposure: 363500,
  potentialDelay: 18,
  topIssues: [
    { rank: 1, ref: 'CL-1090', issue: 'Chilled water pipe penetrates shear wall SW-7', severity: 'Critical', impact: 'SAR 140,000 · 7d' },
    { rank: 2, ref: 'CV-01', issue: 'Fire-exit travel distance exceeds SBC 801 limit', severity: 'Critical', impact: 'Authority approval risk' },
    { rank: 3, ref: 'CL-1138', issue: 'Storm drainage clashes with pile cap PC-09', severity: 'High', impact: 'SAR 96,000 · 5d' },
    { rank: 4, ref: 'CL-1042', issue: 'Supply air duct clashes with primary beam B-204', severity: 'High', impact: 'SAR 85,000 · 4d' },
    { rank: 5, ref: 'QC-03', issue: 'Architectural model coordinate offset of 1.25 m', severity: 'High', impact: 'Cascading clash errors' },
    { rank: 6, ref: 'QC-05', issue: '3,805 elements missing mandatory metadata', severity: 'High', impact: 'QS / compliance accuracy' },
    { rank: 7, ref: 'q2', issue: 'Steel tonnage 13.2% above BOQ', severity: 'High', impact: 'Procurement variance' },
    { rank: 8, ref: 'CV-03', issue: 'South façade energy performance below threshold', severity: 'High', impact: 'Energy code at risk' },
    { rank: 9, ref: 'q5', issue: 'Duct length 12.6% above BOQ', severity: 'Medium', impact: 'Procurement variance' },
    { rank: 10, ref: 'CV-04', issue: 'Insufficient fire-rated separation at plant room', severity: 'High', impact: 'Civil Defense at risk' },
  ],
  recommendations: [
    'Re-acquire shared coordinates and re-publish the architectural model to restore clash reliability.',
    'Resolve clash CL-1090 (shear wall penetration) with the structural engineer via a coordinated cast-in sleeve.',
    'Close out fire-exit travel distance CV-01 before the next Civil Defense submission.',
    'Reconcile steel and duct quantity variances with the QS team prior to procurement.',
    'Upgrade south/west façade envelope spec to lift energy performance above the 80% target.',
  ],
  decision:
    'Proceed to shop-drawing stage conditional on closing the two Critical items (CL-1090 and CV-01) within the next two weeks. No project-level stop recommended; risk is contained and well-localised.',
}

// ---------------------------------------------------------------------------
// Settings / admin
// ---------------------------------------------------------------------------
export const teamMembers = [
  { name: 'Saeed Al Ahmari', email: 'saeed@strux.sa', role: 'Account Owner', status: 'Active' },
  { name: 'Layla Al Otaibi', email: 'layla@consultco.sa', role: 'BIM Manager', status: 'Active' },
  { name: 'Omar Khan', email: 'omar@contractco.sa', role: 'Contractor', status: 'Active' },
  { name: 'Fatimah Al Harbi', email: 'fatimah@moh.gov.sa', role: 'Owner / Client', status: 'Invited' },
  { name: 'Daniel Meyer', email: 'daniel@consultco.sa', role: 'Consultant', status: 'Active' },
]

export const roleMatrix = [
  { role: 'Account Owner', upload: true, analyze: true, rfi: true, reports: true, admin: true },
  { role: 'BIM Manager', upload: true, analyze: true, rfi: true, reports: true, admin: false },
  { role: 'Contractor', upload: true, analyze: true, rfi: true, reports: false, admin: false },
  { role: 'Consultant', upload: false, analyze: true, rfi: true, reports: true, admin: false },
  { role: 'Owner / Client', upload: false, analyze: true, rfi: false, reports: true, admin: false },
]

export const integrations = [
  { name: 'Autodesk Construction Cloud', desc: 'Sync models & issues with ACC / BIM 360', status: 'Available', connected: false },
  { name: 'Autodesk Revit', desc: 'Native .rvt model ingestion', status: 'Connected', connected: true },
  { name: 'Navisworks', desc: 'Import federated clash tests', status: 'Available', connected: false },
  { name: 'Procore', desc: 'Push RFIs & reports to Procore', status: 'Available', connected: false },
  { name: 'Aconex / Oracle', desc: 'Document control integration', status: 'Available', connected: false },
  { name: 'STRUX REST API', desc: 'Programmatic access to analysis results', status: 'Beta', connected: true },
]

export const plans = [
  {
    name: 'Team',
    price: 'SAR 4,900',
    period: '/mo',
    features: ['Up to 5 projects', '10 users', 'QA/QC + Clash Intelligence', 'Standard support'],
    current: false,
  },
  {
    name: 'Enterprise',
    price: 'SAR 18,500',
    period: '/mo',
    features: ['Unlimited projects', 'Unlimited users', 'Full Saudi Compliance Engine', 'AI Chat + Smart Reports', 'KSA data residency', 'Priority support'],
    current: true,
  },
  {
    name: 'Government',
    price: 'Custom',
    period: '',
    features: ['On-prem / sovereign cloud', 'Etimad & Balady integration', 'Dedicated success engineer', 'Security accreditation support'],
    current: false,
  },
]

export const userRoles = ['Contractor', 'Consultant', 'BIM Manager', 'Owner']
