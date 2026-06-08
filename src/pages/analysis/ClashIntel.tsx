import { Card, Badge, SAR, toneFor } from '../../components/ui/primitives'
import { IconClash } from '../../components/ui/Icons'
import { useI18n } from '../../i18n'
import { clashes } from '../../data/mock'
import { clashAr, tEnum, tDiscipline } from '../../data/ar'

export default function ClashIntel() {
  const { t, lang } = useI18n()
  const ar = lang === 'ar'
  const totalCost = clashes.reduce((s, c) => s + c.costImpact, 0)
  const totalDelay = clashes.reduce((s, c) => s + c.delayDays, 0)
  const critical = clashes.filter((c) => c.priority === 'Critical').length

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <div className="text-xs text-silver-400">{t('cl.active')}</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">{clashes.length}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">{t('cl.criticalPriority')}</div>
          <div className="mt-1 text-2xl font-bold text-red-300">{critical}</div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">{t('cl.estCost')}</div>
          <div className="mt-1 text-2xl font-bold text-amber-300">
            <SAR value={totalCost} />
          </div>
        </Card>
        <Card>
          <div className="text-xs text-silver-400">{t('cl.potentialDelay')}</div>
          <div className="mt-1 text-2xl font-bold text-silver-100">
            {totalDelay} {t('cl.days')}
          </div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="flex items-center justify-between border-b border-white/5 p-5">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconClash className="h-4 w-4 text-electric-300" /> {t('cl.register')}
            </h3>
            <p className="text-xs text-silver-400">{t('cl.registerSub')}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-start text-sm">
            <thead className="text-xs uppercase tracking-wide text-silver-500">
              <tr className="border-b border-white/5">
                <th className="px-5 py-3 font-semibold">{t('cl.colId')}</th>
                <th className="px-5 py-3 font-semibold">{t('cl.colConflict')}</th>
                <th className="px-5 py-3 font-semibold">{t('cl.colDisc')}</th>
                <th className="px-5 py-3 font-semibold">{t('common.severity')}</th>
                <th className="px-5 py-3 font-semibold">{t('cl.colCost')}</th>
                <th className="px-5 py-3 font-semibold">{t('cl.colDelay')}</th>
                <th className="px-5 py-3 font-semibold">{t('common.priority')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clashes.map((c) => {
                const a = ar ? clashAr[c.id] : null
                return (
                  <tr key={c.id} className="align-top transition hover:bg-white/[0.02]">
                    <td className="px-5 py-4 font-mono text-xs font-semibold text-electric-300">{c.id}</td>
                    <td className="px-5 py-4">
                      <div className="font-medium text-silver-100">
                        {a?.element1 ?? c.element1} <span className="text-silver-500">×</span> {a?.element2 ?? c.element2}
                      </div>
                      <div className="text-xs text-silver-500">{a?.location ?? c.location}</div>
                      <div className="mt-1 text-xs text-silver-400">↪ {a?.recommendation ?? c.recommendation}</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1">
                        <Badge tone="blue">{tDiscipline(c.discipline1, ar)}</Badge>
                        <Badge tone="gray">{tDiscipline(c.discipline2, ar)}</Badge>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <Badge tone={toneFor(c.severity)}>{tEnum(c.severity, ar)}</Badge>
                    </td>
                    <td className="px-5 py-4 font-semibold text-amber-300">
                      <SAR value={c.costImpact} />
                    </td>
                    <td className="px-5 py-4 text-silver-200">
                      {c.delayDays} {t('cl.days')}
                    </td>
                    <td className="px-5 py-4">
                      <Badge tone={toneFor(c.priority)}>{tEnum(c.priority, ar)}</Badge>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
