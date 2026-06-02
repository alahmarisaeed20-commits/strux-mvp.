import { Link } from 'react-router-dom'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { useI18n } from '../i18n'
import { Card, Badge, ProgressBar, ScoreRing, toneFor } from '../components/ui/primitives'
import {
  IconAnalysis,
  IconClash,
  IconShield,
  IconReport,
  IconProjects,
  IconRfi,
  IconArrowRight,
  IconBolt,
} from '../components/ui/Icons'
import {
  dashboardKpis as k,
  issueTrend,
  issuesByDiscipline,
  severityBreakdown,
  projects,
} from '../data/mock'

const tooltipStyle = {
  background: '#0a1024',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e3e8f2',
}

function Kpi({
  label,
  value,
  sub,
  icon: Icon,
  tone = 'blue',
}: {
  label: string
  value: string
  sub?: string
  icon: (p: { className?: string }) => JSX.Element
  tone?: 'blue' | 'amber' | 'red' | 'green'
}) {
  const ring =
    tone === 'red'
      ? 'text-red-300 bg-red-500/10'
      : tone === 'amber'
        ? 'text-amber-300 bg-amber-500/10'
        : tone === 'green'
          ? 'text-emerald-300 bg-emerald-500/10'
          : 'text-electric-300 bg-electric-500/10'
  return (
    <Card className="flex items-center gap-4">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${ring}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <div className="text-2xl font-bold tracking-tight text-silver-100">{value}</div>
        <div className="text-xs font-medium text-silver-400">{label}</div>
        {sub && <div className="mt-0.5 text-[11px] text-silver-500">{sub}</div>}
      </div>
    </Card>
  )
}

export default function Dashboard() {
  const { t } = useI18n()
  return (
    <div className="space-y-6">
      {/* Hero strip */}
      <div className="strux-card flex flex-col gap-4 overflow-hidden p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 px-2.5 py-0.5 text-xs font-semibold text-electric-300">
            <IconBolt className="h-3.5 w-3.5" /> {t('dash.portfolioLive')}
          </div>
          <h2 className="text-xl font-bold tracking-tight text-silver-100">
            {t('dash.greeting')} <span className="text-emerald-300">{t('dash.healthy')}</span>.
          </h2>
          <p className="mt-1 text-sm text-silver-400">{t('dash.portfolioSub')}</p>
        </div>
        <div className="flex items-center gap-6">
          <ScoreRing value={k.bimHealthScore} label={t('dash.bimHealth')} />
          <ScoreRing value={k.complianceScore} label={t('dash.compliance')} />
        </div>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi label={t('kpi.totalIssues')} value={k.totalIssues.toString()} icon={IconAnalysis} />
        <Kpi label={t('kpi.highRisk')} value={k.highRiskIssues.toString()} icon={IconClash} tone="red" />
        <Kpi label={t('kpi.openRfis')} value={k.openRfis.toString()} icon={IconRfi} tone="amber" />
        <Kpi label={t('kpi.projects')} value={k.projects.toString()} icon={IconProjects} tone="blue" />
        <Kpi label={t('kpi.reports')} value={k.reportsGenerated.toLocaleString()} icon={IconReport} tone="green" />
        <Kpi label={t('kpi.bimScore')} value={`${k.bimHealthScore}%`} icon={IconBolt} tone="green" />
        <Kpi label={t('kpi.complianceScore')} value={`${k.complianceScore}%`} icon={IconShield} tone="blue" />
        <Kpi label={t('kpi.highClashes')} value="14" icon={IconClash} tone="red" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-silver-100">{t('dash.trend')}</h3>
              <p className="text-xs text-silver-400">{t('dash.trendSub')}</p>
            </div>
            <Badge tone="green">Health ↑ 11 pts</Badge>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={issueTrend} margin={{ left: -18, right: 6, top: 6 }}>
              <defs>
                <linearGradient id="gDetected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gResolved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2f6bff" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#2f6bff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="week" stroke="#6b7798" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6b7798" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="detected" stroke="#ef4444" fill="url(#gDetected)" strokeWidth={2} name="Detected" />
              <Area type="monotone" dataKey="resolved" stroke="#2f6bff" fill="url(#gResolved)" strokeWidth={2} name="Resolved" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h3 className="mb-1 text-sm font-semibold text-silver-100">{t('dash.byDiscipline')}</h3>
          <p className="mb-2 text-xs text-silver-400">247 {t('common.issues')}</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={issuesByDiscipline}
                dataKey="value"
                nameKey="name"
                innerRadius={45}
                outerRadius={75}
                paddingAngle={2}
                stroke="none"
              >
                {issuesByDiscipline.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {issuesByDiscipline.map((d) => (
              <div key={d.name} className="flex items-center gap-2 text-xs text-silver-400">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: d.color }} />
                {d.name} <span className="ml-auto font-semibold text-silver-200">{d.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Severity + Projects */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <h3 className="mb-1 text-sm font-semibold text-silver-100">{t('dash.severity')}</h3>
          <p className="mb-3 text-xs text-silver-400">{t('common.severity')}</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={severityBreakdown} margin={{ left: -20, right: 6 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="severity" stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#6b7798" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {severityBreakdown.map((s) => (
                  <Cell key={s.severity} fill={s.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="lg:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-silver-100">{t('dash.projectStatus')}</h3>
            <Link to="/app/projects" className="inline-flex items-center gap-1 text-xs font-semibold text-electric-300 hover:text-electric-200">
              {t('common.viewAll')} <IconArrowRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
            </Link>
          </div>
          <div className="space-y-3">
            {projects.map((p) => (
              <Link
                to="/app/analysis"
                key={p.id}
                className="flex items-center gap-4 rounded-lg border border-white/5 bg-navy-950/40 p-3 transition hover:border-electric-500/30 hover:bg-navy-850"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate text-sm font-semibold text-silver-100">{p.name}</span>
                    <Badge tone={toneFor(p.riskLevel)} className="hidden sm:inline-flex">
                      {p.riskLevel} {t('common.risk')}
                    </Badge>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3">
                    <ProgressBar value={p.progress} className="max-w-[180px]" tone="blue" />
                    <span className="text-xs text-silver-400">{p.progress}%</span>
                  </div>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="text-sm font-bold text-silver-100">{p.bimScore}%</div>
                  <div className="text-[11px] text-silver-500">{t('common.bimScore')}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-silver-100">{p.issues}</div>
                  <div className="text-[11px] text-silver-500">{t('common.issues')}</div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
