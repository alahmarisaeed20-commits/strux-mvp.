import { Link } from 'react-router-dom'
import { Card, Badge, ProgressBar, toneFor } from '../components/ui/primitives'
import { IconArrowRight, IconBuilding, IconUpload, IconBolt, IconShield } from '../components/ui/Icons'
import { projects } from '../data/mock'

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-silver-100">Project Workspace</h2>
          <p className="text-sm text-silver-400">{projects.length} active projects · sorted by risk exposure</p>
        </div>
        <Link to="/app/upload" className="strux-btn-primary self-start">
          <IconUpload className="h-4 w-4" /> Upload New Model
        </Link>
      </div>

      {/* Summary band */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: 'Portfolio Value', value: 'SAR 5.7B', icon: IconBuilding },
          { label: 'Avg BIM Score', value: '88%', icon: IconBolt },
          { label: 'Open Issues', value: '247', icon: IconBolt },
          { label: 'Avg Compliance', value: '86%', icon: IconShield },
        ].map((s) => (
          <Card key={s.label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/10 text-electric-300">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-silver-100">{s.value}</div>
              <div className="text-xs text-silver-400">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.id} className="flex flex-col gap-4 transition hover:border-electric-500/30">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/30 to-electric-600/10 text-electric-300">
                  <IconBuilding className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-tight text-silver-100">{p.name}</h3>
                  <p className="text-xs text-silver-400">
                    {p.client} · {p.location}
                  </p>
                  <p className="mt-0.5 text-[11px] text-silver-500">
                    {p.type} · {p.phase} · {p.value}
                  </p>
                </div>
              </div>
              <Badge tone={toneFor(p.riskLevel)}>{p.riskLevel} risk</Badge>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-2 border-y border-white/5 py-3 text-center">
              <div>
                <div className="text-lg font-bold text-silver-100">{p.bimScore}%</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">BIM Score</div>
              </div>
              <div>
                <div className="text-lg font-bold text-silver-100">{p.issues}</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">Issues</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-300">{p.highRisk}</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">High Risk</div>
              </div>
              <div>
                <div className="text-lg font-bold text-silver-100">{p.compliance}%</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">Compliance</div>
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-silver-400">Project progress</span>
                <span className="font-semibold text-silver-200">{p.progress}%</span>
              </div>
              <ProgressBar value={p.progress} tone="blue" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge tone={toneFor(p.complianceStatus)}>{p.complianceStatus}</Badge>
                <span className="text-xs text-silver-500">Last upload: {p.lastUpload}</span>
              </div>
              <Link to="/app/analysis" className="strux-btn-primary px-3.5 py-2 text-xs">
                Open Project <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
