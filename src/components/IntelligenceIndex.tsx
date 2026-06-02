import { ScoreRing } from './ui/primitives'
import { useI18n } from '../i18n'
import { intelligenceIndex } from '../data/mock'
import { IconSparkle } from './ui/Icons'

// =============================================================================
// STRUX Intelligence Index™ — the signature composite metric of the platform.
// Combines compliance, quality, risk, cost and schedule into a single score.
// =============================================================================

function partColor(v: number) {
  return v >= 90 ? '#22c55e' : v >= 80 ? '#2f6bff' : v >= 70 ? '#f59e0b' : '#ef4444'
}

export default function IntelligenceIndex({
  score = intelligenceIndex.score,
  compact = false,
}: {
  score?: number
  compact?: boolean
}) {
  const { t } = useI18n()

  return (
    <div className="strux-card relative overflow-hidden p-5">
      {/* ambient */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-electric-500/10 blur-2xl" />

      <div className="relative flex items-center gap-5">
        <ScoreRing value={score} size={compact ? 96 : 112} label="INDEX" />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <IconSparkle className="h-4 w-4 text-electric-300" />
            <h3 className="truncate text-sm font-semibold text-silver-100">{t('idx.name')}</h3>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-silver-400">{t('idx.desc')}</p>

          {!compact && (
            <div className="mt-3 space-y-1.5">
              {intelligenceIndex.parts.map((p) => (
                <div key={p.key} className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-[11px] text-silver-400">{t(p.key)}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${p.value}%`, background: partColor(p.value) }}
                    />
                  </div>
                  <span className="w-7 shrink-0 text-end text-[11px] font-semibold text-silver-200">{p.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-4 border-t border-white/5 pt-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-electric-300/80">
        {t('idx.powered')}
      </div>
    </div>
  )
}

// Small inline badge variant for headers/cards.
export function IndexBadge({ score = intelligenceIndex.score }: { score?: number }) {
  const { t } = useI18n()
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 px-2.5 py-1 text-xs font-semibold text-electric-300">
      <IconSparkle className="h-3.5 w-3.5" />
      {t('idx.name')} <span className="font-bold text-silver-100">{score}</span>
      <span className="text-electric-300/70">/100</span>
    </span>
  )
}
