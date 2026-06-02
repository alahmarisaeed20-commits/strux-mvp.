import { useI18n } from '../i18n'
import { StruxMark } from './Logo'

// Re-export the official mark under the historical name so existing imports
// (Login, Landing, reports, chat) pick up the new branding automatically.
export function StruxGlyph({ size = 32 }: { size?: number }) {
  return <StruxMark size={size} />
}

export function Brand({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n()
  return (
    <div className="flex items-center gap-2.5">
      <StruxMark size={34} />
      {!compact && (
        <div className="leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-extrabold tracking-[0.26em] text-silver-100">STRUX</span>
            <span className="rounded bg-gradient-to-r from-electric-500 to-cyan-400 px-1 py-px text-[9px] font-black leading-none text-white">
              AI
            </span>
          </div>
          <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-electric-300">
            {t('brand.tagline')}
          </div>
        </div>
      )}
    </div>
  )
}
