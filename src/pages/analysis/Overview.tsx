import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts'
import { Card, Badge, ProgressBar, ScoreRing, toneFor } from '../../components/ui/primitives'
import { IconCheck, IconClash, IconShield, IconQuantity } from '../../components/ui/Icons'
import { qaqcChecks, clashes, complianceAreas, clashTrend } from '../../data/mock'

const radar = [
  { axis: 'Model Quality', score: 94 },
  { axis: 'Coordination', score: 78 },
  { axis: 'Compliance', score: 91 },
  { axis: 'Data Richness', score: 83 },
  { axis: 'Quantity Match', score: 88 },
  { axis: 'Documentation', score: 90 },
]

const tooltipStyle = {
  background: '#0a1024',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e3e8f2',
}

export default function Overview() {
  const failed = qaqcChecks.filter((c) => c.status === 'Failed').length
  const warnings = qaqcChecks.filter((c) => c.status === 'Warning').length
  const criticalClashes = clashes.filter((c) => c.priority === 'Critical').length
  const totalCost = clashes.reduce((s, c) => s + c.costImpact, 0)

  return (
    <div className="space-y-5">
      {/* Top metric cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <Card className="flex items-center gap-4">
          <ScoreRing value={94} size={92} label="Health" />
          <div>
            <div className="text-sm font-semibold text-silver-100">BIM Health Score</div>
            <p className="mt-1 text-xs text-silver-400">Strong. Coordination is the main pull-down factor.</p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-silver-400">
            <IconCheck className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-medium">QA/QC Status</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-silver-100">
            {failed} <span className="text-base font-medium text-silver-400">failed</span>
          </div>
          <div className="mt-1 text-xs text-silver-400">{warnings} warnings · 4 passed of 7 checks</div>
          <ProgressBar value={57} className="mt-3" />
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-silver-400">
            <IconClash className="h-4 w-4 text-red-300" />
            <span className="text-xs font-medium">Clash Exposure</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-silver-100">
            SAR {(totalCost / 1000).toFixed(0)}K
          </div>
          <div className="mt-1 text-xs text-silver-400">{criticalClashes} critical · 6 active clashes</div>
          <ProgressBar value={62} className="mt-3" />
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-silver-400">
            <IconShield className="h-4 w-4 text-emerald-300" />
            <span className="text-xs font-medium">Saudi Compliance</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-silver-100">91%</div>
          <div className="mt-1 text-xs text-silver-400">3 areas at risk · 1 critical violation</div>
          <ProgressBar value={91} className="mt-3" />
        </Card>
      </div>

      {/* Radar + clash funnel */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-1 text-sm font-semibold text-silver-100">Model Intelligence Profile</h3>
          <p className="mb-2 text-xs text-silver-400">Six-axis assessment of the federated model</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radar} outerRadius="72%">
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
              <PolarAngleAxis dataKey="axis" tick={{ fill: '#9aa6c4', fontSize: 11 }} />
              <Radar dataKey="score" stroke="#2f6bff" fill="#2f6bff" fillOpacity={0.35} />
              <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-1 text-sm font-semibold text-silver-100">Clash Resolution Funnel</h3>
          <p className="mb-2 text-xs text-silver-400">Lifecycle of detected clashes</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={clashTrend} dataKey="value" nameKey="name" innerRadius={42} outerRadius={72} paddingAngle={3} stroke="none">
                {clashTrend.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1.5">
            {clashTrend.map((c) => (
              <div key={c.name} className="flex items-center gap-2 text-xs text-silver-400">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                {c.name} <span className="ml-auto font-semibold text-silver-200">{c.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Compliance mini + AI summary */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-silver-100">
            <IconQuantity className="h-4 w-4 text-electric-300" /> Saudi Compliance Snapshot
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {complianceAreas.map((a) => (
              <div key={a.id} className="rounded-lg border border-white/5 bg-navy-950/40 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-silver-100">{a.name}</span>
                  <Badge tone={toneFor(a.status)}>{a.score}%</Badge>
                </div>
                <ProgressBar value={a.score} className="mt-2" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-electric-500/10 to-transparent">
          <h3 className="mb-2 text-sm font-semibold text-silver-100">⚡ STRUX AI Summary</h3>
          <p className="text-sm leading-relaxed text-silver-300">
            The model is in good health (94%). The single most impactful action is fixing the{' '}
            <span className="font-semibold text-electric-300">1.25 m coordinate offset</span> on the architectural
            model — it will reduce false clashes and improve downstream accuracy.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-silver-300">
            Two Critical items —{' '}
            <span className="font-semibold text-electric-300">CL-1090</span> (wall penetration) and{' '}
            <span className="font-semibold text-electric-300">CV-01</span> (fire-exit distance) — carry the highest
            risk and should be closed before shop-drawing approval.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge tone="red">2 Critical</Badge>
            <Badge tone="amber">9 High</Badge>
            <Badge tone="blue">4 RFIs drafted</Badge>
          </div>
        </Card>
      </div>
    </div>
  )
}
