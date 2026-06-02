import { useI18n } from '../i18n'

// STRUX wordmark + glyph, reused on the login screen and sidebar.
export function StruxGlyph({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0">
      <rect width="64" height="64" rx="14" fill="#0a1024" stroke="#1d2c61" />
      <path d="M20 16h18a8 8 0 0 1 0 16h-6l14 16h-9L24 34v14h-7V16h3z" fill="#2f6bff" />
      <circle cx="44" cy="22" r="3" fill="#7aa6ff" />
    </svg>
  )
}

export function Brand({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n()
  return (
    <div className="flex items-center gap-2.5">
      <StruxGlyph size={32} />
      {!compact && (
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-extrabold tracking-tight text-silver-100">STRUX</span>
            <span className="rounded bg-gradient-to-r from-electric-500 to-cyan-400 px-1 py-px text-[9px] font-black leading-none text-white">
              AI
            </span>
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-electric-300">
            {t('brand.tagline')}
          </div>
        </div>
      )}
    </div>
  )
}
