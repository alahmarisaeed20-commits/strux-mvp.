import { Card, Badge, ProgressBar, ScoreRing, toneFor } from '../../components/ui/primitives'
import { IconShield, IconWarning } from '../../components/ui/Icons'
import { useI18n } from '../../i18n'
import { complianceAreas, complianceViolations } from '../../data/mock'
import { complianceAreaAr, complianceViolationAr, tEnum } from '../../data/ar'

export default function Compliance() {
  const { t, lang } = useI18n()
  const ar = lang === 'ar'
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="flex items-center gap-5 lg:col-span-1">
          <ScoreRing value={88} size={104} label={t('cmp.overallLabel')} />
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconShield className="h-4 w-4 text-electric-300" /> {t('cmp.overall')}
            </h3>
            <p className="mt-1 text-xs text-silver-400">{t('cmp.overallSub')}</p>
            <div className="mt-2 flex gap-1.5">
              <Badge tone="green">3 {t('cmp.compliantN')}</Badge>
              <Badge tone="amber">3 {t('cmp.atRiskN')}</Badge>
            </div>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold text-silver-100">{t('cmp.byArea')}</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {complianceAreas.map((area) => (
              <div key={area.id} className="rounded-lg border border-white/5 bg-navy-950/40 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-semibold text-silver-100">{ar ? complianceAreaAr[area.id] ?? area.name : area.name}</div>
                    <div className="text-[11px] text-silver-500">{area.code}</div>
                  </div>
                  <Badge tone={toneFor(area.status)}>{area.score}%</Badge>
                </div>
                <ProgressBar value={area.score} className="mt-2.5" />
                <div className="mt-1.5 text-[11px] text-silver-500">
                  {area.passed}/{area.checks} {t('cmp.checksPassed')}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="border-b border-white/5 p-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
            <IconWarning className="h-4 w-4 text-amber-300" /> {t('cmp.violations')}
          </h3>
          <p className="text-xs text-silver-400">{t('cmp.violationsSub')}</p>
        </div>
        <div className="divide-y divide-white/5">
          {complianceViolations.map((v) => {
            const a = ar ? complianceViolationAr[v.id] : null
            return (
              <div key={v.id} className="grid grid-cols-1 gap-3 p-5 transition hover:bg-white/[0.02] lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2">
                    <Badge tone={toneFor(v.severity)}>{tEnum(v.severity, ar)}</Badge>
                    <span className="font-mono text-xs text-silver-500">{v.id}</span>
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-silver-100">{a?.title ?? v.title}</div>
                  <div className="mt-0.5 text-xs text-electric-300">
                    {a?.area ?? v.area} · {v.clause}
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-silver-500">{t('cmp.finding')}</div>
                  <p className="mt-0.5 text-sm text-silver-300">{a?.description ?? v.description}</p>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-silver-500">{t('common.recommendation')}</div>
                  <p className="mt-0.5 text-sm text-silver-300">{a?.recommendation ?? v.recommendation}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
