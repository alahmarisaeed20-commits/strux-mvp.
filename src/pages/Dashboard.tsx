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
import Sparkline from '../components/ui/Sparkline'
import ProjectThumb from '../components/ProjectThumb'
import IntelligenceIndex from '../components/IntelligenceIndex'
import { CountUp } from '../components/ui/motion'
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

const toneColor = {
  blue: '#2f6bff',
  amber: '#f59e0b',
  red: '#ef4444',
  green: '#22c55e',
} as const

function Kpi({
  id,
  label,
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  delta,
  series,
  icon: Icon,
  tone = 'blue',
}: {
  id: string
  label: string
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  delta?: string
  series: number[]
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
  const deltaUp = delta?.startsWith('+')
  return (
    <Card className="group transition hover:-translate-y-0.5 hover:border-electric-500/30">
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${ring}`}>
          <Icon className="h-5 w-5" />
        </div>
        {delta && (
          <span
            className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
              deltaUp ? 'bg-emerald-500/10 text-emerald-300' : 'bg-red-500/10 text-red-300'
            }`}
          >
            {delta}
          </span>
        )}
      </div>
      <div className="mt-3 text-2xl font-bold tracking-tight text-silver-100">
        <CountUp to={to} decimals={decimals} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-xs font-medium text-silver-400">{label}</div>
      <div className="mt-2 -mb-1 opacity-80">
        <Sparkline id={id} data={series} color={toneColor[tone]} />
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
        <Kpi id="ki" label={t('kpi.totalIssues')} to={247} delta="-8%" series={[290, 280, 271, 263, 258, 252, 247]} icon={IconAnalysis} />
        <Kpi id="kh" label={t('kpi.highRisk')} to={38} delta="-5%" series={[52, 49, 47, 44, 42, 40, 38]} icon={IconClash} tone="red" />
        <Kpi id="kr" label={t('kpi.openRfis')} to={16} delta="+2" series={[9, 11, 12, 14, 13, 15, 16]} icon={IconRfi} tone="amber" />
        <Kpi id="kp" label={t('kpi.projects')} to={18} delta="+3" series={[12, 13, 14, 15, 16, 17, 18]} icon={IconProjects} tone="blue" />
        <Kpi id="kg" label={t('kpi.reports')} to={4200} delta="+12%" series={[3200, 3400, 3650, 3800, 3950, 4080, 4200]} icon={IconReport} tone="green" />
        <Kpi id="kb" label={t('kpi.bimScore')} to={92} suffix="%" delta="+4%" series={[81, 83, 84, 86, 88, 90, 92]} icon={IconBolt} tone="green" />
        <Kpi id="kc" label={t('kpi.complianceScore')} to={88} suffix="%" delta="+6%" series={[78, 80, 82, 84, 85, 87, 88]} icon={IconShield} tone="blue" />
        <Kpi id="kx" label={t('kpi.highClashes')} to={14} delta="-3" series={[22, 20, 19, 17, 16, 15, 14]} icon={IconClash} tone="red" />
      </div>

      {/* Signature metric */}
      <IntelligenceIndex />

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
                <div className="hidden w-24 shrink-0 overflow-hidden rounded-md border border-white/5 sm:block">
                  <ProjectThumb projectId={p.id} />
                </div>
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
