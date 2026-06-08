import { useEffect, useState } from 'react'
import { StruxMark } from './Logo'
import { useI18n } from '../i18n'

// Full-screen branded splash shown on first app load.
export function Splash() {
  const { t } = useI18n()
  const [progress, setProgress] = useState(8)

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 96 ? p : p + Math.random() * 14))
    }, 140)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-600/15 blur-[120px]" />

      <div className="relative flex flex-col items-center">
        <div className="relative">
          <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-electric-500/30" />
          <div className="relative animate-float">
            <StruxMark size={84} animated />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-[0.3em] text-silver-100">STRUX</span>
          <span className="rounded bg-gradient-to-r from-electric-500 to-cyan-400 px-1.5 py-0.5 text-[10px] font-black leading-none text-white">
            AI
          </span>
        </div>

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-electric-300">
          {t('brand.tagline')}
        </p>

        <div className="mt-7 h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-150"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
        <p className="mt-3 text-[11px] text-silver-500">{t('load.tagline')}</p>
      </div>
    </div>
  )
}

// Inline branded loader for lazy boundaries (e.g. the 3D viewer).
export function InlineLoader({ label }: { label?: string }) {
  const { t } = useI18n()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-navy-950">
      <div className="relative">
        <span className="absolute inset-0 animate-pulse-ring rounded-xl bg-electric-500/25" />
        <StruxMark size={48} />
      </div>
      <span className="text-sm text-silver-400">{label ?? t('3d.loading')}</span>
    </div>
  )
}
