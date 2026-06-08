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

  // Customer journey demo story
  const journey: { who: L; step: L }[] = [
    { who: { en: 'BIM Manager', ar: 'مدير BIM' }, step: { en: 'Uploads the federated Revit/IFC model and BOQ — no plugin, no migration.', ar: 'يرفع النموذج الموحّد Revit/IFC وجدول الكميات — دون إضافات أو ترحيل.' } },
    { who: { en: 'STRUX AI', ar: 'STRUX AI' }, step: { en: 'Parses ~48,000 elements in minutes and builds a queryable element graph.', ar: 'يحلّل نحو 48,000 عنصر خلال دقائق ويبني رسمًا بيانيًا قابلًا للاستعلام.' } },
    { who: { en: 'STRUX AI', ar: 'STRUX AI' }, step: { en: 'Runs QA/QC, clash intelligence and the Saudi Compliance Engine automatically.', ar: 'يشغّل ضبط الجودة وذكاء التعارضات ومحرك الامتثال السعودي تلقائيًا.' } },
    { who: { en: 'Project Director', ar: 'مدير المشروع' }, step: { en: 'Reviews an Intelligence Index of 91 with financial exposure quantified in SAR.', ar: 'يراجع مؤشر ذكاء بقيمة 91 مع تحديد التعرض المالي بالريال.' } },
    { who: { en: 'Project Director', ar: 'مدير المشروع' }, step: { en: 'Issues auto-drafted RFIs and an executive report — a decision in one sitting.', ar: 'يصدر طلبات معلومات وتقريرًا تنفيذيًا مولّدًا تلقائيًا — قرار في جلسة واحدة.' } },
  ]

  // Technology architecture layers (top → bottom)
  const techLayers = [
    { titleKey: 'inv.layerApp', itemsKey: 'inv.layerAppItems', tone: 'border-electric-500/40 bg-electric-500/10' },
    { titleKey: 'inv.layerEngine', itemsKey: 'inv.layerEngineItems', tone: 'border-cyan-500/30 bg-cyan-500/10' },
    { titleKey: 'inv.layerIngest', itemsKey: 'inv.layerIngestItems', tone: 'border-white/10 bg-navy-950/50' },
  ]
  const techInputs = ['Autodesk Revit', 'Navisworks', 'IFC', 'BOQ (Excel)', 'Specs (PDF)']

  // Financial projections — clearly marked, illustrative, pre-revenue
  const projections = [
    { year: 'Y1', customers: 3, arr: 0.6 },
    { year: 'Y2', customers: 12, arr: 3.0 },
    { year: 'Y3', customers: 30, arr: 9.0 },
  ]
  const maxArr = 9

  // Why incumbents can't easily replicate
  const replicate: { l: L; d: L }[] = [
    { l: { en: 'Innovator’s dilemma', ar: 'معضلة المبتكر' }, d: { en: 'Incumbents monetize authoring tools; a neutral intelligence & compliance layer creates channel conflict they are structurally slow to pursue.', ar: 'يعتمد اللاعبون الكبار على بيع أدوات التأليف؛ وطبقة ذكاء وامتثال محايدة تخلق تعارضًا مع قنواتهم يجعل ملاحقتها بطيئة هيكليًا.' } },
    { l: { en: 'Saudi regulatory depth', ar: 'عمق التنظيم السعودي' }, d: { en: 'SBC, Civil Defense, Balady and Energy codes encoded as a living knowledge base — local expertise, not a global roadmap priority.', ar: 'كود البناء السعودي والدفاع المدني وبلدي والطاقة مُرمّزة كقاعدة معرفة حيّة — خبرة محلية وليست أولوية في خارطة طريق عالمية.' } },
    { l: { en: 'Data sovereignty', ar: 'سيادة البيانات' }, d: { en: 'KSA-hosted and PDPL/SDAIA-aligned from day one — global vendors localize slowly.', ar: 'مستضافة داخل المملكة ومتوافقة مع نظام حماية البيانات وسدايا منذ اليوم الأول — والمورّدون العالميون يبطئون في التوطين.' } },
    { l: { en: 'Vendor neutrality', ar: 'الحياد التقني' }, d: { en: 'STRUX works across Revit, IFC and Navisworks; an Autodesk-owned layer would lock customers in, which the market resists.', ar: 'تعمل STRUX عبر Revit وIFC وNavisworks؛ بينما أي طبقة مملوكة لـAutodesk ستقيّد العملاء، وهو ما يقاومه السوق.' } },
    { l: { en: 'Compounding local dataset', ar: 'بيانات محلية متراكمة' }, d: { en: 'A Saudi-specific portfolio learning network improves with every project — a data moat that cannot be bought.', ar: 'شبكة تعلّم من المحافظ خاصة بالسعودية تتحسّن مع كل مشروع — خندق بيانات لا يمكن شراؤه.' } },
    { l: { en: 'Local GTM & trust', ar: 'الحضور المحلي والثقة' }, d: { en: 'Arabic-native product and on-the-ground relationships with KSA developers and authorities.', ar: 'منتج عربي أصيل وعلاقات ميدانية مع المطوّرين والجهات في المملكة.' } },
  ]

  // Product roadmap — Now / Next / Later
  const roadmap: { phaseKey: string; items: L[]; tone: string }[] = [
    {
      phaseKey: 'inv.phaseNow',
      tone: 'border-electric-500/40',
      items: [
        { en: 'IFC/Revit ingestion + QA/QC engine', ar: 'استيعاب IFC/Revit + محرك ضبط الجودة' },
        { en: 'Clash intelligence with cost & delay scoring', ar: 'ذكاء التعارضات مع تقدير الكلفة والتأخير' },
        { en: 'Saudi Compliance Engine v1 (SBC, Civil Defense)', ar: 'محرك الامتثال السعودي ـ الإصدار 1 (كود البناء، الدفاع المدني)' },
        { en: 'Executive reports + Intelligence Index™', ar: 'التقارير التنفيذية + مؤشر الذكاء™' },
      ],
    },
    {
      phaseKey: 'inv.phaseNext',
      tone: 'border-cyan-500/30',
      items: [
        { en: 'Autodesk ACC & Navisworks connectors', ar: 'موصلات Autodesk ACC وNavisworks' },
        { en: 'STRUX Copilot grounded on project data', ar: 'مساعد STRUX معتمد على بيانات المشروع' },
        { en: 'BOQ ↔ model auto-reconciliation', ar: 'مطابقة تلقائية بين جدول الكميات والنموذج' },
        { en: 'Compliance Engine v2 (Balady, Energy)', ar: 'محرك الامتثال ـ الإصدار 2 (بلدي، الطاقة)' },
      ],
    },
    {
      phaseKey: 'inv.phaseLater',
      tone: 'border-white/10',
      items: [
        { en: 'Portfolio learning network', ar: 'شبكة التعلّم من المحافظ' },
        { en: 'Government & Etimad integrations', ar: 'تكاملات حكومية ومع منصة اعتماد' },
        { en: 'Predictive risk & cost forecasting', ar: 'التنبؤ بالمخاطر والتكاليف' },
        { en: 'GCC expansion (UAE, Qatar)', ar: 'التوسع الخليجي (الإمارات، قطر)' },
      ],
    },
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

      {/* 5 — Customer journey */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.journeyTag')} title={t('inv.journeyTitle')} />
          <p className="-mt-3 mb-4 text-sm text-silver-400">{t('inv.journeySub')}</p>
          <ol className="relative space-y-3 border-s border-white/10 ps-5">
            {journey.map((j, i) => (
              <li key={i} className="relative">
                <span className="absolute -start-[26px] flex h-6 w-6 items-center justify-center rounded-full bg-electric-500/20 text-xs font-bold text-electric-300">
                  {i + 1}
                </span>
                <div className="rounded-xl border border-white/5 bg-navy-950/40 p-3">
                  <Badge tone="blue" className="mb-1">{tx(j.who)}</Badge>
                  <p className="text-sm text-silver-200">{tx(j.step)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </Reveal>

      {/* 6 — Technology architecture */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.techTag')} title={t('inv.techTitle')} />
          <p className="-mt-3 mb-4 text-sm text-silver-400">{t('inv.techSub')}</p>
          <div className="space-y-2">
            {techLayers.map((layer) => (
              <div key={layer.titleKey} className={`rounded-xl border p-3.5 ${layer.tone}`}>
                <div className="text-sm font-bold text-silver-100">{t(layer.titleKey)}</div>
                <div className="mt-0.5 text-xs text-silver-300">{t(layer.itemsKey)}</div>
              </div>
            ))}
            <div className="flex justify-center py-0.5 text-silver-600">▲</div>
            <div className="rounded-xl border border-dashed border-white/15 bg-navy-950/30 p-3.5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-silver-500">{t('inv.layerData')}</div>
              <div className="flex flex-wrap gap-2">
                {techInputs.map((s) => (
                  <span key={s} className="rounded-lg border border-white/10 bg-navy-900/70 px-3 py-1.5 text-xs font-medium text-silver-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-xs font-medium text-emerald-200">
            <IconShield className="h-4 w-4" /> {t('inv.techResidency')}
          </div>
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

      {/* 8 — Financial projections (clearly marked) */}
      <Reveal>
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <SectionHeader tag={t('inv.projTag')} title={t('inv.projTitle')} />
            <Badge tone="amber">⚠ {t('inv.projBadge')}</Badge>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {projections.map((p) => (
              <div key={p.year} className="rounded-xl border border-white/5 bg-navy-950/40 p-3 text-center">
                <div className="text-xs font-semibold text-silver-400">{p.year}</div>
                <div className="mt-2 flex h-28 items-end justify-center">
                  <div
                    className="w-10 rounded-t-md bg-gradient-to-t from-electric-600 to-cyan-400 transition-all duration-700"
                    style={{ height: `${(p.arr / maxArr) * 100}%` }}
                    title={`SAR ${p.arr}M`}
                  />
                </div>
                <div className="mt-2 text-sm font-bold text-silver-100">SAR {p.arr}M</div>
                <div className="text-[11px] text-silver-500">{t('inv.projArr')}</div>
                <div className="mt-1 text-xs font-semibold text-electric-300">
                  {p.customers} <span className="font-normal text-silver-500">{t('inv.projCustomers')}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-relaxed text-amber-100/90">
            {t('inv.projNote')}
          </p>
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

      {/* 11 — Why incumbents can't easily replicate */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.replicateTag')} title={t('inv.replicateTitle')} />
          <div className="grid gap-3 sm:grid-cols-2">
            {replicate.map((r) => (
              <div key={r.l.en} className="rounded-xl border border-white/5 bg-navy-950/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-500/15 text-electric-300">
                    <IconShield className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-sm font-bold text-silver-100">{tx(r.l)}</h4>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-silver-300">{tx(r.d)}</p>
              </div>
            ))}
          </div>
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

      {/* 14 — Product roadmap */}
      <Reveal>
        <Card>
          <SectionHeader tag={t('inv.prodRoadTag')} title={t('inv.prodRoadTitle')} />
          <div className="grid gap-4 lg:grid-cols-3">
            {roadmap.map((phase) => (
              <div key={phase.phaseKey} className={`rounded-xl border ${phase.tone} bg-navy-950/40 p-4`}>
                <div className="mb-3 text-sm font-bold text-silver-100">{t(phase.phaseKey)}</div>
                <ul className="space-y-2">
                  {phase.items.map((it) => (
                    <li key={it.en} className="flex items-start gap-2 text-sm text-silver-300">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric-500/15 text-electric-300">
                        <IconCheck className="h-2.5 w-2.5" />
                      </span>
                      {tx(it)}
                    </li>
                  ))}
                </ul>
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
