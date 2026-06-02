import { Link } from 'react-router-dom'
import { Card, Badge, ProgressBar, toneFor } from '../components/ui/primitives'
import { IconArrowRight, IconBuilding, IconUpload, IconBolt, IconShield } from '../components/ui/Icons'
import { useI18n } from '../i18n'
import ProjectThumb from '../components/ProjectThumb'
import { projects } from '../data/mock'

export default function Projects() {
  const { t } = useI18n()
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-silver-100">{t('page.projects')}</h2>
          <p className="text-sm text-silver-400">{projects.length} {t('proj.subtitle')}</p>
        </div>
        <Link to="/app/upload" className="strux-btn-primary self-start">
          <IconUpload className="h-4 w-4" /> {t('proj.uploadNew')}
        </Link>
      </div>

      {/* Summary band */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: t('proj.portfolioValue'), value: 'SAR 5.7B', icon: IconBuilding },
          { label: t('proj.avgBim'), value: '88%', icon: IconBolt },
          { label: t('proj.openIssues'), value: '247', icon: IconBolt },
          { label: t('proj.avgCompliance'), value: '86%', icon: IconShield },
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
          <Card key={p.id} className="group flex flex-col overflow-hidden p-0 transition hover:border-electric-500/30">
            {/* Thumbnail banner */}
            <div className="relative">
              <ProjectThumb projectId={p.id} className="transition duration-500 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
              <div className="absolute left-4 top-3 flex items-center gap-1.5 rounded-md border border-white/10 bg-navy-950/70 px-2 py-1 text-[10px] font-bold text-electric-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> STRUX AI
              </div>
              <div className="absolute right-4 top-3">
                <Badge tone={toneFor(p.riskLevel)}>{p.riskLevel} {t('common.risk')}</Badge>
              </div>
              <div className="absolute inset-x-4 bottom-3">
                <h3 className="text-base font-semibold leading-tight text-silver-100 drop-shadow">{p.name}</h3>
                <p className="text-xs text-silver-300">
                  {p.client} · {p.location}
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              <p className="text-[11px] text-silver-500">
                {p.type} · {p.phase} · <span className="font-semibold text-silver-400">{p.value}</span>
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-2 border-y border-white/5 py-3 text-center">
              <div>
                <div className="text-lg font-bold text-silver-100">{p.bimScore}%</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">{t('common.bimScore')}</div>
              </div>
              <div>
                <div className="text-lg font-bold text-silver-100">{p.issues}</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">{t('common.issues')}</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-300">{p.highRisk}</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">{t('proj.highRisk')}</div>
              </div>
              <div>
                <div className="text-lg font-bold text-silver-100">{p.compliance}%</div>
                <div className="text-[10px] uppercase tracking-wide text-silver-500">{t('dash.compliance')}</div>
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-silver-400">{t('proj.progress')}</span>
                <span className="font-semibold text-silver-200">{p.progress}%</span>
              </div>
              <ProgressBar value={p.progress} tone="blue" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge tone={toneFor(p.complianceStatus)}>{p.complianceStatus}</Badge>
                <span className="text-xs text-silver-500">{t('common.lastUpload')}: {p.lastUpload}</span>
              </div>
              <Link to="/app/analysis" className="strux-btn-primary px-3.5 py-2 text-xs">
                {t('common.openProject')} <IconArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
              </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
