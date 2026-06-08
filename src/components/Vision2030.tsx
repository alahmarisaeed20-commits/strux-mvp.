import { useI18n } from '../i18n'
import { Reveal } from './ui/motion'
import { IconShield, IconBolt, IconCheck, IconBuilding } from './ui/Icons'

const gigaProjects = ['NEOM', 'The Line', 'Qiddiya', 'Red Sea Global', 'Diriyah', 'ROSHN', 'AlUla', 'King Salman Park']

export default function Vision2030() {
  const { t } = useI18n()
  const pillars = [
    { icon: IconShield, key: 'v2030.localization' },
    { icon: IconBolt, key: 'v2030.digital' },
    { icon: IconCheck, key: 'v2030.quality' },
    { icon: IconBuilding, key: 'v2030.giga' },
  ]

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-navy-900 to-navy-950 p-8 sm:p-12">
      {/* ambient */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-electric-500/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">
              <span className="text-base leading-none">🇸🇦</span> {t('v2030.tag')}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-silver-100 sm:text-4xl">
              {t('v2030.title')}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-silver-400">{t('v2030.desc')}</p>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={180 + i * 70}>
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-navy-900/60 p-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-silver-200">{t(p.key)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Giga-project emblem grid */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {gigaProjects.map((g, i) => (
              <div
                key={g}
                className="group relative flex h-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70 animate-shimmer"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:18px_18px] opacity-40" />
                <span className="relative text-center text-sm font-bold tracking-tight text-silver-200">{g}</span>
                <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
