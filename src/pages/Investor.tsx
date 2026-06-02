import { Card, Badge } from '../components/ui/primitives'
import { CountUp, Reveal } from '../components/ui/motion'
import { useI18n } from '../i18n'
import IntelligenceIndex from '../components/IntelligenceIndex'
import Vision2030 from '../components/Vision2030'
import {
  IconBolt,
  IconShield,
  IconCheck,
  IconReport,
  IconClash,
  IconCube,
  IconQuantity,
  IconBuilding,
  IconChat,
  IconX,
  IconSparkle,
} from '../components/ui/Icons'

type L = { en: string; ar: string }

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-5">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-electric-300">{tag}</span>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-silver-100 sm:text-3xl">{title}</h2>
    </div>
  )
}

export default function Investor() {
  const { t, lang } = useI18n()
  const tx = (l: L) => (lang === 'ar' ? l.ar : l.en)

  const problems: L[] = [
    { en: 'Cost overruns', ar: 'تجاوزات التكلفة' },
    { en: 'Coordination failures', ar: 'إخفاقات التنسيق بين التخصصات' },
    { en: 'BIM governance gaps', ar: 'فجوات في حوكمة نماذج BIM' },
    { en: 'Rework', ar: 'إعادة العمل' },
    { en: 'Compliance risk', ar: 'مخاطر عدم الامتثال' },
  ]

  const capabilities: { icon: (p: { className?: string }) => JSX.Element; l: L }[] = [
    { icon: IconBolt, l: { en: 'AI Risk Detection', ar: 'كشف المخاطر بالذكاء الاصطناعي' } },
    { icon: IconShield, l: { en: 'Compliance Validation', ar: 'التحقق من الامتثال' } },
    { icon: IconClash, l: { en: 'Clash Intelligence', ar: 'ذكاء التعارضات' } },
    { icon: IconQuantity, l: { en: 'Portfolio Analytics', ar: 'تحليلات المحفظة' } },
    { icon: IconReport, l: { en: 'Executive Reporting', ar: 'التقارير التنفيذية' } },
  ]

  const whyNow: L[] = [
    { en: 'Vision 2030 construction boom', ar: 'طفرة الإنشاءات ضمن رؤية 2030' },
    { en: 'BIM adoption acceleration', ar: 'تسارع تبنّي نمذجة BIM' },
    { en: 'Saudi Building Code enforcement', ar: 'إلزامية كود البناء السعودي' },
    { en: 'Digital transformation mandates', ar: 'متطلبات التحول الرقمي' },
    { en: 'Rising rework costs', ar: 'ارتفاع تكاليف إعادة العمل' },
    { en: 'Engineering talent shortages', ar: 'نقص الكفاءات الهندسية' },
  ]

  const market = [
    { l: { en: 'TAM', ar: 'الكلي' }, key: 'inv.tam', value: 2.4, w: '100%', tone: 'text-silver-300' },
    { l: { en: 'SAM', ar: 'المتاح' }, key: 'inv.sam', value: 0.38, decimals: 2, w: '46%', tone: 'text-electric-300' },
    { l: { en: 'SOM', ar: 'المستهدف' }, key: 'inv.som', value: 0.045, decimals: 3, w: '16%', tone: 'text-emerald-300' },
  ]

  const revenue: { icon: (p: { className?: string }) => JSX.Element; l: L; recurring?: boolean }[] = [
    { icon: IconBolt, l: { en: 'SaaS Subscription', ar: 'اشتراكات البرمجيات (SaaS)' }, recurring: true },
    { icon: IconBuilding, l: { en: 'Enterprise Licensing', ar: 'تراخيص المؤسسات' }, recurring: true },
    { icon: IconShield, l: { en: 'Compliance Engine', ar: 'محرك الامتثال السعودي' }, recurring: true },
    { icon: IconReport, l: { en: 'Executive Intelligence Reports', ar: 'تقارير الذكاء التنفيذي' } },
    { icon: IconQuantity, l: { en: 'Portfolio Analytics', ar: 'تحليلات المحفظة' }, recurring: true },
    { icon: IconCube, l: { en: 'Government & Mega Projects', ar: 'المشاريع الحكومية والعملاقة' } },
  ]

  // Competitive comparison — true | false | 'partial'
  type Cell = boolean | 'partial'
  const compFeatures: { l: L; strux: Cell; autodesk: Cell; navis: Cell; trad: Cell }[] = [
    { l: { en: 'Saudi Compliance Engine', ar: 'محرك الامتثال السعودي' }, strux: true, autodesk: false, navis: false, trad: 'partial' },
    { l: { en: 'Arabic Native Experience', ar: 'تجربة عربية أصيلة' }, strux: true, autodesk: false, navis: false, trad: 'partial' },
    { l: { en: 'AI Risk Detection', ar: 'كشف المخاطر بالذكاء الاصطناعي' }, strux: true, autodesk: 'partial', navis: false, trad: false },
    { l: { en: 'Executive Dashboards', ar: 'لوحات القيادة التنفيذية' }, strux: true, autodesk: 'partial', navis: false, trad: false },
    { l: { en: 'Portfolio Intelligence', ar: 'ذكاء المحفظة' }, strux: true, autodesk: false, navis: false, trad: false },
    { l: { en: 'Local Hosting', ar: 'استضافة محلية داخل المملكة' }, strux: true, autodesk: 'partial', navis: false, trad: true },
    { l: { en: 'Saudi Market Focus', ar: 'تركيز على السوق السعودي' }, strux: true, autodesk: false, navis: false, trad: true },
  ]

  const moat: { icon: (p: { className?: string }) => JSX.Element; l: L }[] = [
    { icon: IconShield, l: { en: 'Saudi Compliance Knowledge Base', ar: 'قاعدة معرفة الامتثال السعودي' } },
    { icon: IconQuantity, l: { en: 'Proprietary Engineering Dataset', ar: 'بيانات هندسية مملوكة حصريًا' } },
    { icon: IconSparkle, l: { en: 'Localized AI Models', ar: 'نماذج ذكاء اصطناعي محلية' } },
    { icon: IconCube, l: { en: 'BIM Intelligence Engine', ar: 'محرك ذكاء نماذج BIM' } },
    { icon: IconBolt, l: { en: 'Portfolio Learning Network', ar: 'شبكة تعلّم من المحافظ' } },
    { icon: IconBuilding, l: { en: 'Future Government Integrations', ar: 'تكاملات حكومية مستقبلية' } },
  ]

  const wins: L[] = [
    { en: 'Built for Saudi Arabia', ar: 'مبنية للسوق السعودي' },
    { en: 'Built for Vision 2030', ar: 'مبنية لرؤية 2030' },
    { en: 'Native Arabic Experience', ar: 'تجربة عربية أصيلة' },
    { en: 'Construction Intelligence Layer', ar: 'طبقة الذكاء الهندسي للإنشاءات' },
    { en: 'High-Margin SaaS Model', ar: 'نموذج برمجيات عالي الهامش' },
    { en: 'Regulatory Alignment', ar: 'توافق تنظيمي وتشريعي' },
  ]

  const funds = [
    { l: { en: 'Product Development', ar: 'تطوير المنتج' }, pct: 40, color: '#2f6bff' },
    { l: { en: 'AI & Compliance Engine', ar: 'الذكاء الاصطناعي ومحرك الامتثال' }, pct: 25, color: '#22d3ee' },
    { l: { en: 'Sales & Business Development', ar: 'المبيعات وتطوير الأعمال' }, pct: 20, color: '#7aa6ff' },
    { l: { en: 'Cloud Infrastructure', ar: 'البنية السحابية' }, pct: 10, color: '#f59e0b' },
    { l: { en: 'Governance & Operations', ar: 'الحوكمة والعمليات' }, pct: 5, color: '#6b7798' },
  ]

  const seedMilestones: L[] = [
    { en: '20 Enterprise Customers', ar: '20 عميلًا من المؤسسات' },
    { en: 'Proven ARR', ar: 'إيراد سنوي متكرر مُثبت' },
    { en: 'Saudi Compliance Engine', ar: 'محرك امتثال سعودي مكتمل' },
    { en: 'GCC Expansion', ar: 'التوسع الخليجي' },
  ]

  const cell = (v: Cell) =>
    v === true ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
        <IconCheck className="h-3.5 w-3.5" />
      </span>
    ) : v === 'partial' ? (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold">
        ~
      </span>
    ) : (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-silver-600">
        <IconX className="h-3.5 w-3.5" />
      </span>
    )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-electric-500/20 bg-gradient-to-br from-electric-600/15 via-navy-900 to-navy-950 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-40" />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Badge tone="amber" className="mb-2">🔒 {t('inv.confidential')}</Badge>
            <h1 className="text-2xl font-extrabold tracking-tight text-silver-100 sm:text-3xl">{t('page.investor')}</h1>
            <p className="mt-1 max-w-xl text-sm text-silver-300">{t('inv.subtitle')}</p>
          </div>
          <div className="shrink-0 rounded-xl border border-electric-500/30 bg-navy-950/60 px-4 py-3 text-center">
            <div className="text-xs text-silver-400">{t('inv.currentRound')}</div>
            <div className="text-lg font-extrabold text-electric-300">{t('inv.stageBadge')}</div>
          </div>
        </div>
      </div>

      {/* 1 — Problem */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.problemTag')} title={t('inv.problemTitle')} />
          <p className="max-w-3xl text-sm leading-relaxed text-silver-300">{t('inv.problemDesc')}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {problems.map((p) => (
              <span key={p.en} className="rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs font-medium text-red-200">
                {tx(p)}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="text-2xl font-extrabold text-amber-300">5–15%</div>
              <p className="mt-1 text-sm text-silver-300">{t('inv.stat1')}</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-navy-950/40 p-4">
              <IconClash className="h-5 w-5 text-red-300" />
              <p className="mt-1 text-sm text-silver-300">{t('inv.stat2')}</p>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* 2 — Solution */}
      <Reveal>
        <Card className="bg-gradient-to-br from-electric-500/10 to-transparent">
          <SectionHeader tag={t('inv.solutionTag')} title={t('inv.solutionTitle')} />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {capabilities.map((c) => (
              <div key={c.l.en} className="rounded-xl border border-white/5 bg-navy-950/40 p-3 text-center">
                <c.icon className="mx-auto h-6 w-6 text-electric-300" />
                <div className="mt-2 text-xs font-semibold text-silver-200">{tx(c.l)}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center rounded-xl border border-electric-500/30 bg-navy-950/50 px-4 py-3 text-center">
            <span className="text-sm font-bold text-electric-200">“{t('inv.solOS')}”</span>
          </div>
        </Card>
      </Reveal>

      {/* 3 — Why now */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.whyNowTag')} title={t('inv.whyNowTitle')} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyNow.map((w, i) => (
              <div key={w.en} className="flex items-start gap-3 rounded-xl border border-white/5 bg-navy-950/40 p-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-electric-500/15 text-xs font-bold text-electric-300">
                  {i + 1}
                </span>
                <span className="text-sm text-silver-200">{tx(w)}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 border-s-2 border-electric-500 ps-3 text-base font-semibold text-silver-100">
            “{t('inv.whyNowClose')}”
          </p>
        </Card>
      </Reveal>

      {/* 4 — Market */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.marketTag')} title={t('inv.market')} />
          <div className="space-y-4">
            {market.map((m) => (
              <div key={m.key}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-silver-400">{t(m.key)}</span>
                  <span className={`text-lg font-extrabold ${m.tone}`}>
                    $<CountUp to={m.value} decimals={m.decimals ?? 1} />B
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-1000" style={{ width: m.w }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-silver-500">{t('inv.marketNote')}</p>
        </Card>
      </Reveal>

      {/* 5 — Business model */}
      <Reveal>
        <Card>
          <div className="flex items-start justify-between gap-3">
            <SectionHeader tag={t('inv.bmTag')} title={t('inv.bmTitle')} />
            <Badge tone="green">{t('inv.bmRecurring')}</Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {revenue.map((r, i) => (
              <div key={r.l.en} className="flex items-center gap-3 rounded-xl border border-white/5 bg-navy-950/40 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500/15 text-electric-300">
                  <r.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-silver-100">
                    {i + 1}. {tx(r.l)}
                  </div>
                </div>
                {r.recurring && <Badge tone="blue">↻</Badge>}
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* 6 — Competitive advantage */}
      <Reveal>
        <Card className="p-0">
          <div className="p-5 pb-0">
            <SectionHeader tag={t('inv.compTag')} title={t('inv.compTitle')} />
          </div>
          <div className="overflow-x-auto p-5 pt-0">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-white/5 text-xs uppercase tracking-wide text-silver-500">
                  <th className="py-3 text-start font-semibold">{t('common.description')}</th>
                  <th className="px-2 py-3 text-center font-bold text-electric-300">STRUX</th>
                  <th className="px-2 py-3 text-center font-semibold">Autodesk</th>
                  <th className="px-2 py-3 text-center font-semibold">Navisworks</th>
                  <th className="px-2 py-3 text-center font-semibold">{t('inv.colTraditional')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {compFeatures.map((f) => (
                  <tr key={f.l.en} className="transition hover:bg-white/[0.02]">
                    <td className="py-3 pe-3 font-medium text-silver-200">{tx(f.l)}</td>
                    <td className="bg-electric-500/5 px-2 py-3 text-center">{cell(f.strux)}</td>
                    <td className="px-2 py-3 text-center">{cell(f.autodesk)}</td>
                    <td className="px-2 py-3 text-center">{cell(f.navis)}</td>
                    <td className="px-2 py-3 text-center">{cell(f.trad)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Reveal>

      {/* 7 — Moat */}
      <Reveal>
        <Card className="bg-gradient-to-br from-navy-850 to-navy-950">
          <SectionHeader tag={t('inv.moatTag')} title={t('inv.moatTitle')} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moat.map((m) => (
              <div key={m.l.en} className="flex items-center gap-3 rounded-xl border border-white/5 bg-navy-900/60 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500/15 text-electric-300">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-silver-200">{tx(m.l)}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-electric-500/30 bg-electric-500/10 p-4 text-center text-base font-bold text-electric-200">
            “{t('inv.moatHeadline')}”
          </p>
        </Card>
      </Reveal>

      {/* 8 — Intelligence Index */}
      <Reveal>
        <div>
          <SectionHeader tag={t('inv.indexTag')} title={t('inv.indexTitle')} />
          <IntelligenceIndex />
        </div>
      </Reveal>

      {/* 9 — Why STRUX wins */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.winTag')} title={t('inv.winTitle')} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {wins.map((w) => (
              <div key={w.en} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-navy-950/40 p-3 text-sm text-silver-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  <IconCheck className="h-3 w-3" />
                </span>
                {tx(w)}
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      {/* 10 — Fundraising */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.fundTag')} title={t('inv.fundTitle')} />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="rounded-xl border border-electric-500/30 bg-electric-500/10 p-4">
                <div className="text-xs text-silver-400">{t('inv.target')}</div>
                <div className="text-3xl font-extrabold text-gradient">
                  SAR <CountUp to={7} />M
                </div>
                <Badge tone="blue" className="mt-2">{t('inv.round')}</Badge>
              </div>
              <div className="rounded-xl border border-white/5 bg-navy-950/40 p-4">
                <div className="text-xs text-silver-400">{t('inv.runway')}</div>
                <div className="text-lg font-bold text-silver-100">{t('inv.runwayValue')}</div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-2 text-sm font-semibold text-silver-100">{t('inv.useOfFunds')}</div>
              {/* stacked bar */}
              <div className="flex h-4 w-full overflow-hidden rounded-full">
                {funds.map((f) => (
                  <div key={f.l.en} style={{ width: `${f.pct}%`, background: f.color }} title={`${tx(f.l)} ${f.pct}%`} />
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {funds.map((f) => (
                  <div key={f.l.en} className="flex items-center gap-3">
                    <span className="h-3 w-3 shrink-0 rounded-sm" style={{ background: f.color }} />
                    <span className="flex-1 text-sm text-silver-300">{tx(f.l)}</span>
                    <span className="text-sm font-bold text-silver-100">{f.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* 11 — Roadmap */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.roadmapTag')} title={t('inv.roadmapTitle')} />
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            {[
              { label: t('inv.stagePre'), current: true },
              { label: t('inv.stageSeed'), current: false },
              { label: t('inv.stageA'), current: false },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex flex-1 items-center gap-3">
                <div
                  className={`flex-1 rounded-xl border p-4 text-center ${
                    s.current
                      ? 'border-electric-500/50 bg-electric-500/10'
                      : 'border-white/5 bg-navy-950/40'
                  }`}
                >
                  <div className={`text-sm font-bold ${s.current ? 'text-electric-200' : 'text-silver-300'}`}>{s.label}</div>
                  {s.current && <div className="mt-0.5 text-[11px] font-semibold text-emerald-300">● {t('inv.current')}</div>}
                </div>
                {i < arr.length - 1 && <span className="hidden text-silver-500 sm:block rtl:-scale-x-100">→</span>}
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-silver-100">
              <IconChat className="h-4 w-4 text-electric-300" /> {t('inv.seedMilestones')}
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {seedMilestones.map((m) => (
                <div key={m.en} className="rounded-lg border border-white/5 bg-navy-950/40 p-3 text-sm text-silver-200">
                  {tx(m)}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Vision 2030 */}
      <Reveal>
        <Vision2030 />
      </Reveal>
    </div>
  )
}
