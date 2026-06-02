import type { ReactNode } from 'react'

// ---------------------------------------------------------------------------
// Shared presentational primitives used across STRUX pages.
// ---------------------------------------------------------------------------

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`strux-card p-5 ${className}`}>{children}</div>
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-silver-100">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-silver-400">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

type Tone = 'green' | 'amber' | 'red' | 'blue' | 'gray' | 'yellow'

const toneMap: Record<Tone, string> = {
  green: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  yellow: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
  red: 'bg-red-500/10 text-red-300 border-red-500/30',
  blue: 'bg-electric-500/10 text-electric-300 border-electric-500/30',
  gray: 'bg-white/5 text-silver-300 border-white/10',
}

export function Badge({
  children,
  tone = 'gray',
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${toneMap[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

// Maps a severity/risk/status string to a colour tone.
export function toneFor(value: string): Tone {
  switch (value) {
    case 'Critical':
    case 'Failed':
    case 'Non-Compliant':
    case 'High':
      return value === 'High' ? 'amber' : 'red'
    case 'Warning':
    case 'Medium':
    case 'At Risk':
    case 'Issued':
      return value === 'Medium' || value === 'Warning' ? 'yellow' : 'amber'
    case 'Passed':
    case 'Compliant':
    case 'Low':
    case 'Answered':
    case 'Active':
    case 'Connected':
      return 'green'
    case 'Draft':
    case 'Available':
    case 'Invited':
      return 'blue'
    default:
      return 'gray'
  }
}

export function ProgressBar({
  value,
  tone,
  className = '',
}: {
  value: number
  tone?: 'auto' | 'blue'
  className?: string
}) {
  const color =
    tone === 'blue'
      ? 'bg-electric-500'
      : value >= 85
        ? 'bg-emerald-500'
        : value >= 70
          ? 'bg-amber-400'
          : 'bg-red-500'
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-white/5 ${className}`}>
      <div
        className={`h-full rounded-full ${color} transition-all duration-700`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}

// Animated circular score gauge (SVG).
export function ScoreRing({
  value,
  size = 120,
  label,
}: {
  value: number
  size?: number
  label?: string
}) {
  const stroke = 9
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  const color = value >= 85 ? '#22c55e' : value >= 70 ? '#f59e0b' : '#ef4444'
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.07)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-silver-100">{value}%</span>
        {label && <span className="text-[11px] uppercase tracking-wide text-silver-400">{label}</span>}
      </div>
    </div>
  )
}

export function SAR({ value }: { value: number }) {
  return <span>SAR {value.toLocaleString('en-US')}</span>
}
