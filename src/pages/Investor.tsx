import { Card, Badge } from '../components/ui/primitives'
import { CountUp, Reveal } from '../components/ui/motion'
import { useI18n } from '../i18n'
import Vision2030 from '../components/Vision2030'
import { IconBolt, IconShield, IconCheck, IconReport, IconClash, IconCube } from '../components/ui/Icons'

export default function Investor() {
  const { t, lang } = useI18n()

  const market = [
    { key: 'inv.tam', value: 18, suffix: 'B', tone: 'text-silver-300', w: '100%' },
    { key: 'inv.sam', value: 3.2, decimals: 1, suffix: 'B', tone: 'text-electric-300', w: '62%' },
    { key: 'inv.som', value: 480, suffix: 'M', tone: 'text-emerald-300', w: '28%' },
  ]

  const traction = [
    { key: 'inv.arr', value: 6.4, decimals: 1, prefix: 'SAR ', suffix: 'M', icon: IconBolt },
    { key: 'inv.growth', value: 38, suffix: '%', icon: IconReport },
    { key: 'inv.pipeline', value: 51, prefix: 'SAR ', suffix: 'M', icon: IconCube },
    { key: 'inv.nrr', value: 142, suffix: '%', icon: IconShield },
    { key: 'inv.cac', value: 7, suffix: ' mo', icon: IconClash },
    { key: 'inv.gross', value: 84, suffix: '%', icon: IconCheck },
  ]

  const why =
    lang === 'ar'
      ? [
          'طبقة فوق Autodesk/Revit وليست بديلاً — تبنٍّ منخفض الاحتكاك.',
          'محرك الامتثال السعودي خندق دفاعي يصعب تكراره.',
          'استضافة محلية للبيانات تفتح المشاريع الحكومية والعملاقة.',
          'كل وحدة تنتج بيانات تُحسّن نماذج الذكاء الاصطناعي.',
        ]
      : [
          'Sits on top of Autodesk/Revit, not against it — low-friction adoption.',
          'The Saudi Compliance Engine is a hard-to-replicate moat.',
          'Local data residency unlocks government & giga-projects.',
          'Every module generates proprietary data that compounds the AI.',
        ]

  return (
    <div className="space-y-6">
      {/* Header / confidential banner */}
      <div className="flex flex-col gap-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-silver-100">{t('page.investor')}</h2>
          <p className="text-sm text-silver-400">{t('inv.subtitle')}</p>
        </div>
        <Badge tone="amber">🔒 {t('inv.confidential')}</Badge>
      </div>

      {/* Thesis */}
      <Reveal>
        <Card className="bg-gradient-to-br from-electric-500/10 to-transparent">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-silver-100">
            <IconBolt className="h-4 w-4 text-electric-300" /> {t('inv.thesis')}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-silver-300">{t('inv.thesisBody')}</p>
        </Card>
      </Reveal>

      {/* Market TAM/SAM/SOM */}
      <Card>
        <h3 className="mb-4 text-sm font-semibold text-silver-100">{t('inv.market')}</h3>
        <div className="space-y-4">
          {market.map((m, i) => (
            <Reveal key={m.key} delay={i * 90}>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-silver-400">{t(m.key)}</span>
                  <span className={`text-xl font-extrabold ${m.tone}`}>
                    $<CountUp to={m.value} decimals={m.decimals ?? 0} />
                    {m.suffix}
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-1000"
                    style={{ width: m.w }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Card>

      {/* Traction grid */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-silver-100">{t('inv.traction')}</h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {traction.map((tr, i) => (
            <Reveal key={tr.key} delay={(i % 3) * 80}>
              <Card>
                <div className="flex items-center gap-2 text-silver-400">
                  <tr.icon className="h-4 w-4 text-electric-300" />
                  <span className="text-xs font-medium">{t(tr.key)}</span>
                </div>
                <div className="mt-2 text-2xl font-extrabold text-silver-100">
                  <CountUp to={tr.value} decimals={tr.decimals ?? 0} prefix={tr.prefix ?? ''} suffix={tr.suffix ?? ''} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Why we win + raise */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-sm font-semibold text-silver-100">{t('inv.why')}</h3>
          <ul className="space-y-2.5">
            {why.map((w, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-silver-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <IconCheck className="h-3 w-3" />
                </span>
                {w}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex flex-col justify-center bg-gradient-to-br from-emerald-500/10 to-transparent">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-silver-100">{t('inv.raise')}</span>
          </div>
          <div className="mt-2 text-4xl font-extrabold text-gradient">
            SAR <CountUp to={45} />M
          </div>
          <div className="mt-1 text-sm text-silver-400">Series A</div>
          <p className="mt-3 text-sm leading-relaxed text-silver-300">{t('inv.raiseBody')}</p>
        </Card>
      </div>

      {/* Vision 2030 */}
      <Vision2030 />
    </div>
  )
}
