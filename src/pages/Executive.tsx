import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { Card, Badge, ScoreRing, toneFor } from '../components/ui/primitives'
import { CountUp } from '../components/ui/motion'
import { useI18n } from '../i18n'
import { IconBolt, IconClash, IconShield, IconReport, IconArrowRight } from '../components/ui/Icons'
import { Link } from 'react-router-dom'
import { projects, executiveReport, dashboardKpis } from '../data/mock'

const tooltipStyle = {
  background: '#0a1024',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e3e8f2',
}

// Derived heatmap scores per project across review dimensions.
const heatDims = ['BIM', 'Clash', 'Compliance', 'Quantity', 'Schedule'] as const
const heat: Record<string, number[]> = {
  'riyadh-tower': [94, 78, 91, 88, 82],
  'neom-infra': [88, 64, 84, 80, 58],
  'hospital-expansion': [90, 86, 93, 92, 88],
  'industrial-factory': [79, 71, 76, 74, 62],
}

function heatColor(v: number) {
  if (v >= 85) return 'bg-emerald-500/80'
  if (v >= 75) return 'bg-yellow-500/80'
  if (v >= 65) return 'bg-amber-500/80'
  return 'bg-red-500/80'
}

// Illustrative financial exposure per project (SAR thousands).
const exposure = [
  { name: 'Riyadh Tower', value: 363 },
  { name: 'NEOM Infra', value: 612 },
  { name: 'Hospital', value: 148 },
  { name: 'Factory', value: 240 },
]

function Kpi({
  label,
  children,
  icon: Icon,
  tone,
}: {
  label: string
  children: React.ReactNode
  icon: (p: { className?: string }) => JSX.Element
  tone: string
}) {
  return (
    <Card className="flex items-center gap-4">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${tone}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-2xl font-bold tracking-tight text-silver-100">{children}</div>
        <div className="text-xs font-medium text-silver-400">{label}</div>
      </div>
    </Card>
  )
}

export default function Executive() {
  const { t } = useI18n()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-silver-100">{t('page.executive')}</h2>
        <p className="text-sm text-silver-400">{t('exec.subtitle')}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label={t('exec.portfolioHealth')} icon={IconBolt} tone="text-emerald-300">
          <CountUp to={dashboardKpis.bimHealthScore} suffix="%" />
        </Kpi>
        <Kpi label={t('exec.financialExposure')} icon={IconClash} tone="text-amber-300">
          SAR <CountUp to={1.36} decimals={2} />M
        </Kpi>
        <Kpi label={t('exec.reworkAvoided')} icon={IconShield} tone="text-electric-300">
          SAR <CountUp to={42} />M
        </Kpi>
        <Kpi label={t('exec.scheduleRisk')} icon={IconReport} tone="text-red-300">
          <CountUp to={34} /> {t('3d.days')}
        </Kpi>
      </div>

      {/* Heatmap + ring */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-silver-100">{t('exec.riskHeatmap')}</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-1.5">
              <thead>
                <tr>
                  <th className="text-start text-xs font-semibold text-silver-500"></th>
                  {heatDims.map((d) => (
                    <th key={d} className="px-2 text-center text-[11px] font-semibold uppercase text-silver-500">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id}>
                    <td className="whitespace-nowrap pe-3 text-sm font-medium text-silver-200">{p.name}</td>
                    {heat[p.id].map((v, i) => (
                      <td key={i} className="p-0">
                        <div
                          className={`flex h-10 items-center justify-center rounded-md text-xs font-bold text-navy-950 ${heatColor(v)}`}
                          title={`${heatDims[i]}: ${v}%`}
                        >
                          {v}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[11px] text-silver-500">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-500/80" /> ≥85</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-yellow-500/80" /> 75–84</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-amber-500/80" /> 65–74</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-red-500/80" /> &lt;65</span>
          </div>
        </Card>

        <Card className="flex flex-col items-center justify-center text-center">
          <ScoreRing value={dashboardKpis.complianceScore} size={140} label={t('dash.compliance')} />
          <p className="mt-3 text-sm text-silver-400">{t('exec.portfolioHealth')}</p>
          <div className="mt-3 flex gap-2">
            <Badge tone="green">2 Compliant</Badge>
            <Badge tone="amber">2 At Risk</Badge>
          </div>
        </Card>
      </div>

      {/* Exposure chart + top risks */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold text-silver-100">{t('exec.financialByProject')}</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={exposure} margin={{ left: -12, right: 6 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} unit="K" />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(255,255,255,0.03)' }} formatter={(v: number) => [`SAR ${v}K`, 'Exposure']} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {exposure.map((e, i) => (
                  <Cell key={i} fill={e.value > 400 ? '#ef4444' : e.value > 200 ? '#f59e0b' : '#2f6bff'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-3 text-sm font-semibold text-silver-100">{t('exec.topRisks')}</h3>
          <div className="space-y-2">
            {executiveReport.topIssues.slice(0, 5).map((r) => (
              <div key={r.rank} className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-navy-950/40 p-2.5">
                <span className="font-mono text-xs font-bold text-electric-300">{r.ref}</span>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs text-silver-200">{r.issue}</p>
                  <span className="text-[10px] text-silver-500">{r.impact}</span>
                </div>
                <Badge tone={toneFor(r.severity)}>{r.severity}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Decisions */}
      <Card className="bg-gradient-to-br from-electric-500/10 to-transparent">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-silver-100">{t('exec.decisions')}</h3>
          <Link to="/app/analysis" className="inline-flex items-center gap-1 text-xs font-semibold text-electric-300 hover:text-electric-200">
            {t('common.viewAll')} <IconArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
          </Link>
        </div>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {executiveReport.recommendations.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5 rounded-lg bg-navy-950/40 p-3 text-sm text-silver-300">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-500/20 text-[11px] font-bold text-electric-300">
                {i + 1}
              </span>
              {r}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
