import { Card, Badge, ScoreRing, SAR, toneFor } from '../../components/ui/primitives'
import { IconDownload, IconReport, IconCheck } from '../../components/ui/Icons'
import { StruxGlyph } from '../../components/Brand'
import { useI18n } from '../../i18n'
import { executiveReport as r } from '../../data/mock'
import { execReportAr, tEnum } from '../../data/ar'

export default function ExecReport() {
  const { t, lang } = useI18n()
  const ar = lang === 'ar'

  const project = ar ? execReportAr.project : r.project
  const client = ar ? execReportAr.client : r.client
  const summary = ar ? execReportAr.summary : r.summary
  const decision = ar ? execReportAr.decision : r.decision
  const recommendations = ar ? execReportAr.recommendations : r.recommendations

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-silver-400">
          <IconReport className="h-4 w-4 text-electric-300" />
          {t('er.subtitle')}
        </div>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="strux-btn-ghost px-3.5 py-2 text-xs">
            {t('er.print')}
          </button>
          <button className="strux-btn-primary px-3.5 py-2 text-xs">
            <IconDownload className="h-4 w-4" /> {t('common.download')}
          </button>
        </div>
      </div>

      {/* The "document" */}
      <Card className="overflow-hidden p-0">
        {/* Letterhead */}
        <div className="flex items-start justify-between border-b border-white/5 bg-gradient-to-r from-navy-850 to-navy-900 p-6">
          <div className="flex items-center gap-3">
            <StruxGlyph size={40} />
            <div>
              <div className="text-lg font-extrabold tracking-tight text-silver-100">STRUX</div>
              <div className="text-xs text-electric-300">{t('er.executiveReport')}</div>
            </div>
          </div>
          <div className="text-end text-xs text-silver-400">
            <div className="font-mono text-silver-300">{r.reportId}</div>
            <div>{r.date}</div>
            <div>{t('er.confidential')}</div>
          </div>
        </div>

        <div className="space-y-6 p-6">
          {/* Title */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-silver-100">{project}</h2>
            <p className="text-sm text-silver-400">{client}</p>
          </div>

          {/* Scorecards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-navy-950/40 p-4">
              <ScoreRing value={r.bimHealthScore} size={88} label="BIM" />
              <span className="mt-2 text-xs text-silver-400">{t('dash.bimHealth')}</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-white/5 bg-navy-950/40 p-4">
              <ScoreRing value={r.complianceScore} size={88} label="KSA" />
              <span className="mt-2 text-xs text-silver-400">{t('dash.compliance')}</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-navy-950/40 p-4 text-center">
              <span className="text-3xl font-bold text-amber-300">
                <SAR value={r.financialExposure} />
              </span>
              <span className="mt-1 text-xs text-silver-400">{t('er.finExposure')}</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-navy-950/40 p-4 text-center">
              <span className="text-3xl font-bold text-silver-100">{r.potentialDelay}{ar ? ' ي' : 'd'}</span>
              <span className="mt-1 text-xs text-silver-400">{t('er.potentialDelay')}</span>
            </div>
          </div>

          {/* Summary */}
          <Section title={t('er.s1')}>
            <p className="text-sm leading-relaxed text-silver-300">{summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="blue">{r.openIssues} {t('er.openIssues')}</Badge>
              <Badge tone="amber">{r.highRisk} {t('er.highRiskN')}</Badge>
              <Badge tone="red">2 {t('er.criticalN')}</Badge>
            </div>
          </Section>

          {/* Top 10 issues */}
          <Section title={t('er.s2')}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-start text-sm">
                <thead className="text-xs uppercase tracking-wide text-silver-500">
                  <tr className="border-b border-white/5">
                    <th className="py-2 pe-3 font-semibold">#</th>
                    <th className="py-2 pe-3 font-semibold">{t('er.colRef')}</th>
                    <th className="py-2 pe-3 font-semibold">{t('er.colIssue')}</th>
                    <th className="py-2 pe-3 font-semibold">{t('common.severity')}</th>
                    <th className="py-2 pe-3 font-semibold">{t('er.colImpact')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {r.topIssues.map((ti) => {
                    const a = ar ? execReportAr.topIssues[ti.rank] : null
                    return (
                      <tr key={ti.rank}>
                        <td className="py-2.5 pe-3 font-bold text-silver-400">{ti.rank}</td>
                        <td className="py-2.5 pe-3 font-mono text-xs text-electric-300">{ti.ref}</td>
                        <td className="py-2.5 pe-3 text-silver-200">{a?.issue ?? ti.issue}</td>
                        <td className="py-2.5 pe-3">
                          <Badge tone={toneFor(ti.severity)}>{tEnum(ti.severity, ar)}</Badge>
                        </td>
                        <td className="py-2.5 pe-3 text-silver-400">{a?.impact ?? ti.impact}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Recommendations */}
          <Section title={t('er.s3')}>
            <ul className="space-y-2">
              {recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-silver-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {rec}
                </li>
              ))}
            </ul>
          </Section>

          {/* Decision */}
          <Section title={t('er.s4')}>
            <div className="rounded-xl border border-electric-500/30 bg-electric-500/10 p-4">
              <p className="text-sm leading-relaxed text-silver-200">{decision}</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge tone="green">{t('er.recProceed')}</Badge>
              </div>
            </div>
          </Section>

          <div className="border-t border-white/5 pt-4 text-center text-[11px] text-silver-500">
            {t('er.footer')}
          </div>
        </div>
      </Card>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-2.5 border-s-2 border-electric-500 ps-2.5 text-sm font-semibold uppercase tracking-wide text-silver-100">
        {title}
      </h3>
      {children}
    </section>
  )
}
