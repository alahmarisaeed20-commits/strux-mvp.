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
import { useI18n } from '../../i18n'
import { qaqcChecks, clashes, complianceAreas, clashTrend } from '../../data/mock'
import { complianceAreaAr } from '../../data/ar'

const tooltipStyle = {
  background: '#0a1024',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: 12,
  color: '#e3e8f2',
}

const funnelNameKey: Record<string, string> = {
  Detected: 'ov.detected',
  Coordinated: 'ov.coordinated',
  Resolved: 'ov.resolved',
}

export default function Overview() {
  const { t, lang } = useI18n()
  const ar = lang === 'ar'
  const failed = qaqcChecks.filter((c) => c.status === 'Failed').length
  const warnings = qaqcChecks.filter((c) => c.status === 'Warning').length
  const criticalClashes = clashes.filter((c) => c.priority === 'Critical').length
  const totalCost = clashes.reduce((s, c) => s + c.costImpact, 0)

  const radar = [
    { axis: t('ov.axisQuality'), score: 94 },
    { axis: t('ov.axisCoord'), score: 78 },
    { axis: t('ov.axisCompliance'), score: 91 },
    { axis: t('ov.axisData'), score: 83 },
    { axis: t('ov.axisQty'), score: 88 },
    { axis: t('ov.axisDocs'), score: 90 },
  ]

  return (
    <div className="space-y-5">
      {/* Top metric cards */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <Card className="flex items-center gap-4">
          <ScoreRing value={94} size={92} label="Health" />
          <div>
            <div className="text-sm font-semibold text-silver-100">{t('ov.bimHealth')}</div>
            <p className="mt-1 text-xs text-silver-400">{t('ov.bimHealthDesc')}</p>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-silver-400">
            <IconCheck className="h-4 w-4 text-amber-300" />
            <span className="text-xs font-medium">{t('ov.qaqcStatus')}</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-silver-100">
            {failed} <span className="text-base font-medium text-silver-400">{t('ov.failed')}</span>
          </div>
          <div className="mt-1 text-xs text-silver-400">
            {warnings} {t('ov.warnings')} · 4 {t('ov.passedOf')} 7 {t('ov.checks')}
          </div>
          <ProgressBar value={57} className="mt-3" />
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-silver-400">
            <IconClash className="h-4 w-4 text-red-300" />
            <span className="text-xs font-medium">{t('ov.clashExposure')}</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-silver-100">SAR {(totalCost / 1000).toFixed(0)}K</div>
          <div className="mt-1 text-xs text-silver-400">
            {criticalClashes} {t('ov.critical')} · 6 {t('ov.activeClashes')}
          </div>
          <ProgressBar value={62} className="mt-3" />
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-silver-400">
            <IconShield className="h-4 w-4 text-emerald-300" />
            <span className="text-xs font-medium">{t('ov.compliance')}</span>
          </div>
          <div className="mt-2 text-2xl font-bold text-silver-100">91%</div>
          <div className="mt-1 text-xs text-silver-400">{t('ov.atRisk1')}</div>
          <ProgressBar value={91} className="mt-3" />
        </Card>
      </div>

      {/* Radar + clash funnel */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-1 text-sm font-semibold text-silver-100">{t('ov.profile')}</h3>
          <p className="mb-2 text-xs text-silver-400">{t('ov.profileSub')}</p>
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
          <h3 className="mb-1 text-sm font-semibold text-silver-100">{t('ov.funnel')}</h3>
          <p className="mb-2 text-xs text-silver-400">{t('ov.funnelSub')}</p>
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
                {t(funnelNameKey[c.name] ?? c.name)} <span className="ms-auto font-semibold text-silver-200">{c.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Compliance mini + AI summary */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-silver-100">
            <IconQuantity className="h-4 w-4 text-electric-300" /> {t('ov.snapshot')}
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {complianceAreas.map((a) => (
              <div key={a.id} className="rounded-lg border border-white/5 bg-navy-950/40 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-silver-100">{ar ? complianceAreaAr[a.id] ?? a.name : a.name}</span>
                  <Badge tone={toneFor(a.status)}>{a.score}%</Badge>
                </div>
                <ProgressBar value={a.score} className="mt-2" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-electric-500/10 to-transparent">
          <h3 className="mb-2 text-sm font-semibold text-silver-100">⚡ {t('ov.aiSummary')}</h3>
          <p className="text-sm leading-relaxed text-silver-300">{t('ov.aiBody1')}</p>
          <p className="mt-3 text-sm leading-relaxed text-silver-300">{t('ov.aiBody2')}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge tone="red">2 {t('ov.critical')}</Badge>
            <Badge tone="amber">9 {t('an.highRisk')}</Badge>
            <Badge tone="blue">4 RFIs</Badge>
          </div>
        </Card>
      </div>
    </div>
  )
}
