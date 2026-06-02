import { Card, Badge, ProgressBar, ScoreRing, toneFor } from '../../components/ui/primitives'
import { IconShield, IconWarning } from '../../components/ui/Icons'
import { complianceAreas, complianceViolations } from '../../data/mock'

export default function Compliance() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="flex items-center gap-5 lg:col-span-1">
          <ScoreRing value={88} size={104} label="Overall" />
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconShield className="h-4 w-4 text-electric-300" /> Saudi Compliance Engine
            </h3>
            <p className="mt-1 text-xs text-silver-400">
              Benchmarked against SBC, Civil Defense, Accessibility, Municipality and Energy codes.
            </p>
            <div className="mt-2 flex gap-1.5">
              <Badge tone="green">3 Compliant</Badge>
              <Badge tone="amber">3 At Risk</Badge>
            </div>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold text-silver-100">Compliance by Regulatory Area</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {complianceAreas.map((a) => (
              <div key={a.id} className="rounded-lg border border-white/5 bg-navy-950/40 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-silver-100">{a.name}</div>
                    <div className="text-[11px] text-silver-500">{a.code}</div>
                  </div>
                  <Badge tone={toneFor(a.status)}>{a.score}%</Badge>
                </div>
                <ProgressBar value={a.score} className="mt-2.5" />
                <div className="mt-1.5 text-[11px] text-silver-500">
                  {a.passed}/{a.checks} checks passed
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="border-b border-white/5 p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
            <IconWarning className="h-4 w-4 text-amber-300" /> Detected Violations
          </h3>
          <p className="text-xs text-silver-400">Regulatory gaps requiring resolution before authority submission</p>
        </div>
        <div className="divide-y divide-white/5">
          {complianceViolations.map((v) => (
            <div key={v.id} className="grid grid-cols-1 gap-3 p-5 transition hover:bg-white/[0.02] lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2">
                  <Badge tone={toneFor(v.severity)}>{v.severity}</Badge>
                  <span className="font-mono text-xs text-silver-500">{v.id}</span>
                </div>
                <div className="mt-1.5 text-sm font-semibold text-silver-100">{v.title}</div>
                <div className="mt-0.5 text-xs text-electric-300">
                  {v.area} · {v.clause}
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-silver-500">Finding</div>
                <p className="mt-0.5 text-sm text-silver-300">{v.description}</p>
              </div>
              <div className="lg:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-silver-500">Recommended Action</div>
                <p className="mt-0.5 text-sm text-silver-300">{v.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
