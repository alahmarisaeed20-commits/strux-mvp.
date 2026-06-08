import { Link } from 'react-router-dom'
import { Brand, StruxGlyph } from '../components/Brand'
import { useI18n } from '../i18n'
import { Reveal, CountUp } from '../components/ui/motion'
import BIMSnapshot from '../components/BIMSnapshot'
import Vision2030 from '../components/Vision2030'
import {
  IconArrowRight,
  IconCheck,
  IconClash,
  IconShield,
  IconQuantity,
  IconRfi,
  IconChat,
  IconReport,
  IconBolt,
  IconCube,
  IconSparkle,
} from '../components/ui/Icons'

// Market context (giga-projects & frameworks STRUX is built for) — not customer claims.
const partners = [
  'NEOM',
  'Red Sea Global',
  'ROSHN',
  'Qiddiya',
  'Diriyah Gate',
  'King Salman Park',
  'Vision 2030',
  'Saudi Building Code',
]

const modules = [
  { icon: IconCheck, key: 'feat.qaqc', en: 'BIM QA/QC', desc: { en: 'Automated model-hygiene checks against your BIM Execution Plan.', ar: 'فحوصات آلية لنظافة النموذج وفق خطة تنفيذ BIM.' } },
  { icon: IconClash, key: 'feat.clash', en: 'Clash Intelligence', desc: { en: 'Clashes ranked by real cost and schedule impact — not just count.', ar: 'تعارضات مرتبة حسب الأثر المالي والزمني الفعلي وليس العدد فقط.' } },
  { icon: IconShield, key: 'feat.compliance', en: 'Saudi Compliance', desc: { en: 'SBC, Civil Defense, Accessibility & Energy code, automated.', ar: 'كود البناء السعودي والدفاع المدني وإمكانية الوصول والطاقة، آليًا.' } },
  { icon: IconQuantity, key: 'tab.quantity', en: 'Quantity Extraction', desc: { en: 'Model take-off reconciled against the BOQ with variance flags.', ar: 'حصر من النموذج ومطابقته بجدول الكميات مع تنبيهات الفروقات.' } },
  { icon: IconRfi, key: 'tab.rfi', en: 'RFI Generator', desc: { en: 'Draft construction RFIs automatically from detected issues.', ar: 'صياغة طلبات المعلومات تلقائيًا من المشكلات المكتشفة.' } },
  { icon: IconChat, key: 'tab.chat', en: 'Engineering AI Chat', desc: { en: 'Ask anything about your model and get construction-grade answers.', ar: 'اسأل أي شيء عن نموذجك واحصل على إجابات هندسية دقيقة.' } },
  { icon: IconReport, key: 'tab.report', en: 'Executive Smart Report', desc: { en: 'Board-ready intelligence with financial impact and decisions.', ar: 'تقرير ذكي جاهز للمجلس بالأثر المالي والقرارات.' } },
]

export default function Landing() {
  const { t, lang, toggle } = useI18n()

  return (
    <div className="min-h-screen overflow-x-hidden bg-navy-950 text-silver-100">
      {/* ===== Nav ===== */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-navy-950/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Brand />
          <nav className="hidden items-center gap-7 text-sm font-medium text-silver-300 lg:flex">
            <a href="#modules" className="hover:text-silver-100">{t('land.navModules')}</a>
            <a href="#showcase" className="hover:text-silver-100">{t('land.navProduct')}</a>
            <a href="#vision" className="hover:text-silver-100">{t('land.navVision')}</a>
            <a href="#investors" className="hover:text-silver-100">{t('land.navInvestors')}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-silver-200 hover:text-white"
              title={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {t('lang.toggle')}
            </button>
            <Link to="/login" className="hidden rounded-lg px-3 py-1.5 text-sm font-semibold text-silver-200 hover:text-white sm:block">
              {t('land.signin')}
            </Link>
            <Link to="/app/dashboard" className="strux-btn-primary px-3.5 py-2 text-sm">
              {t('land.launch')} <IconArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-electric-600/20 blur-[130px]" />
          <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
          <div className="absolute inset-0 bg-grid-faint bg-[size:46px_46px] opacity-50" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-3 py-1 text-xs font-semibold text-electric-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-electric-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
                </span>
                {t('land.heroBadge')}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                {t('land.heroTitle1')}{' '}
                <span className="text-gradient animate-gradient">{t('land.heroTitle2')}</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-silver-400 sm:text-lg">{t('land.heroDesc')}</p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/app/dashboard" className="strux-btn-primary px-5 py-3 text-base">
                  <IconBolt className="h-5 w-5" /> {t('land.ctaPrimary')}
                </Link>
                <a href="#investors" className="strux-btn-ghost px-5 py-3 text-base">
                  {t('land.ctaSecondary')} <IconArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-silver-500">
                <span className="flex items-center gap-1.5"><IconCheck className="h-3.5 w-3.5 text-emerald-400" /> {t('login.residency')}</span>
                <span className="flex items-center gap-1.5"><IconCheck className="h-3.5 w-3.5 text-emerald-400" /> {t('login.iso')}</span>
                <span className="flex items-center gap-1.5"><IconCheck className="h-3.5 w-3.5 text-emerald-400" /> {t('login.sso')}</span>
              </div>
            </Reveal>
          </div>

          {/* Floating product visual */}
          <Reveal delay={180}>
            <div className="relative">
              <div className="animate-float">
                <BIMSnapshot variant="model" />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden w-56 animate-float-slower sm:block">
                <BIMSnapshot variant="clash" title="Clash · CL-1042" />
              </div>
              <div className="absolute -right-4 -top-8 hidden w-48 animate-float-slower sm:block" style={{ animationDelay: '1.2s' }}>
                <div className="strux-card flex items-center gap-3 p-3">
                  <StruxGlyph size={34} />
                  <div>
                    <div className="text-xs font-semibold text-silver-100">BIM Health</div>
                    <div className="text-xl font-extrabold text-emerald-300">
                      <CountUp to={94} suffix="%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trusted-by marquee */}
        <div className="relative border-y border-white/5 bg-navy-900/40 py-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-silver-500">
            {t('land.trusted')}
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee gap-12 px-6">
              {[...partners, ...partners].map((p, i) => (
                <span key={i} className="whitespace-nowrap text-lg font-bold tracking-tight text-silver-400/70">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { value: <CountUp to={7} />, label: t('land.statModules') },
            { value: <CountUp to={6} />, label: t('land.statDisciplines') },
            { value: <CountUp to={6} />, label: t('land.statCodes') },
            { value: <><CountUp to={100} />%</>, label: t('land.statResidency') },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="strux-card p-6 text-center">
                <div className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">{s.value}</div>
                <div className="mt-2 text-sm text-silver-400">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Positioning band ===== */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-850 to-navy-950 p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-30" />
            <p className="relative text-2xl font-extrabold tracking-tight text-silver-100 sm:text-3xl">
              {t('land.posBand')}
            </p>
            <p className="relative mx-auto mt-3 max-w-3xl text-base leading-relaxed text-silver-300">{t('pos.notViewer')}</p>
            {/* "above the stack" chips */}
            <div className="relative mt-6 flex flex-col items-center gap-2">
              <span className="rounded-lg border border-electric-500/40 bg-electric-500/15 px-4 py-2 text-sm font-bold text-electric-200">
                STRUX · {t('pos.layer')}
              </span>
              <span className="text-silver-600">↑</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Autodesk Revit', 'Navisworks', 'IFC Ecosystem'].map((s) => (
                  <span key={s} className="rounded-lg border border-white/10 bg-navy-900/70 px-4 py-2 text-sm font-medium text-silver-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p className="relative mt-6 text-sm font-semibold text-electric-300">“{t('pos.os')}”</p>
          </div>
        </Reveal>
      </section>

      {/* ===== Modules ===== */}
      <section id="modules" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t('land.featuresTitle')}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 text-base text-silver-400">{t('land.featuresSub')}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.en} delay={(i % 3) * 80}>
              <div className="group strux-card h-full p-6 transition hover:-translate-y-1 hover:border-electric-500/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500/15 text-electric-300 transition group-hover:bg-electric-500/25">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-silver-100">{m.en}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-silver-400">{lang === 'ar' ? m.desc.ar : m.desc.en}</p>
              </div>
            </Reveal>
          ))}
          {/* AI accent card */}
          <Reveal delay={160}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-electric-500/30 bg-gradient-to-br from-electric-500/20 to-cyan-500/5 p-6">
              <div>
                <div className="flex items-center gap-2">
                  <IconSparkle className="h-5 w-5 text-electric-300" />
                  <span className="text-sm font-bold text-silver-100">STRUX AI</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-silver-200">
                  {lang === 'ar'
                    ? 'محرك ذكاء واحد يربط كل وحدة — من النموذج إلى القرار التنفيذي.'
                    : 'One AI engine connecting every module — from model to executive decision.'}
                </p>
              </div>
              <Link to="/app/dashboard" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-300 hover:text-electric-200">
                {t('land.launch')} <IconArrowRight className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Showcase ===== */}
      <section id="showcase" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{t('land.showcaseTitle')}</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {[
            { v: 'clash' as const, d: 0 },
            { v: 'compliance' as const, d: 90 },
            { v: 'analytics' as const, d: 180 },
          ].map((s) => (
            <Reveal key={s.v} delay={s.d}>
              <BIMSnapshot variant={s.v} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Vision 2030 ===== */}
      <section id="vision" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Vision2030 />
      </section>

      {/* ===== Investor teaser ===== */}
      <section id="investors" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-electric-500/20 bg-gradient-to-br from-electric-600/20 via-navy-900 to-navy-950 p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:40px_40px] opacity-40" />
          <Reveal>
            <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">{t('land.investorTitle')}</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="relative mx-auto mt-4 max-w-2xl text-base text-silver-300">{t('land.investorSub')}</p>
          </Reveal>
          <Reveal delay={160}>
            <Link to="/app/investor" className="strux-btn-primary relative mt-7 px-5 py-3 text-base">
              <IconReport className="h-5 w-5" /> {t('land.investorCta')}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <Reveal>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-500/15">
            <IconCube className="h-7 w-7 text-electric-300" />
          </div>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t('land.finalTitle')}</h2>
        </Reveal>
        <Reveal delay={130}>
          <p className="mt-3 text-base text-silver-400">{t('land.finalSub')}</p>
        </Reveal>
        <Reveal delay={190}>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/app/dashboard" className="strux-btn-primary px-6 py-3 text-base">
              {t('land.ctaPrimary')} <IconArrowRight className="h-4 w-4 rtl:-scale-x-100" />
            </Link>
            <Link to="/login" className="strux-btn-ghost px-6 py-3 text-base">
              {t('land.signin')}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-white/5 bg-navy-900/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
          <div>
            <Brand />
            <p className="mt-2 text-xs text-silver-500">{t('land.footerTagline')}</p>
          </div>
          <p className="text-center text-[11px] text-silver-600 sm:text-end">{t('land.footerRights')}</p>
        </div>
      </footer>
    </div>
  )
}
