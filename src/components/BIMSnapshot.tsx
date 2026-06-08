// ---------------------------------------------------------------------------
// Stylised "BIM screenshot" placeholders. These are pure SVG mock-ups that
// resemble model viewports / clash views — used on the landing page and
// dashboards in place of real product screenshots.
// ---------------------------------------------------------------------------

type Variant = 'model' | 'clash' | 'compliance' | 'analytics'

function Chrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900/80 shadow-card">
      <div className="flex items-center gap-2 border-b border-white/5 bg-navy-850/80 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ms-2 truncate text-[11px] font-medium text-silver-400">{title}</span>
        <span className="ms-auto rounded bg-electric-500/15 px-1.5 py-0.5 text-[9px] font-bold text-electric-300">
          STRUX AI
        </span>
      </div>
      {children}
    </div>
  )
}

function ModelView() {
  // Isometric building massing + structure wireframe.
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1430" />
          <stop offset="100%" stopColor="#070b18" />
        </linearGradient>
        <linearGradient id="face1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d2c61" />
          <stop offset="100%" stopColor="#16224d" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#bg1)" />
      {/* grid floor */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`gx${i}`} x1={40 + i * 40} y1="200" x2={20 + i * 40} y2="240" stroke="#15224a" strokeWidth="1" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`gy${i}`} x1={40} y1={200 + i * 8} x2={360} y2={200 + i * 8} stroke="#101a3a" strokeWidth="1" />
      ))}
      {/* tower massing (isometric blocks) */}
      <g>
        <polygon points="150,40 250,60 250,180 150,160" fill="url(#face1)" stroke="#2f6bff" strokeWidth="1.2" />
        <polygon points="150,40 110,60 110,180 150,160" fill="#0e1a3c" stroke="#2f6bff" strokeWidth="1.2" />
        <polygon points="150,40 110,60 210,80 250,60" fill="#24356f" stroke="#4f86ff" strokeWidth="1.2" />
        {/* floor lines */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`fl${i}`} x1="150" y1={56 + i * 16} x2="250" y2={76 + i * 16} stroke="#2f6bff" strokeOpacity="0.35" strokeWidth="1" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`flb${i}`} x1="150" y1={56 + i * 16} x2="110" y2={76 + i * 16} stroke="#2f6bff" strokeOpacity="0.25" strokeWidth="1" />
        ))}
      </g>
      {/* MEP duct */}
      <path d="M110 120 L150 132 L250 112" fill="none" stroke="#22d3ee" strokeWidth="2.2" strokeOpacity="0.8" />
      {/* dimension chip */}
      <g>
        <rect x="270" y="70" width="84" height="22" rx="5" fill="#0a1024" stroke="#1d2c61" />
        <circle cx="282" cy="81" r="3" fill="#22c55e" />
        <text x="291" y="85" fill="#c7d0e3" fontSize="10" fontFamily="monospace">48,210 elem</text>
      </g>
    </svg>
  )
}

function ClashView() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <rect width="400" height="260" fill="#070b18" />
      {/* structural beam */}
      <rect x="60" y="120" width="280" height="16" rx="2" fill="#3a4a6b" stroke="#5a6b90" />
      {/* duct crossing */}
      <rect x="180" y="60" width="36" height="150" rx="4" fill="#163a6e" stroke="#2f6bff" />
      {/* clash glow */}
      <circle cx="198" cy="128" r="34" fill="#ef4444" fillOpacity="0.18" />
      <circle cx="198" cy="128" r="18" fill="#ef4444" fillOpacity="0.3" />
      <circle cx="198" cy="128" r="7" fill="#ef4444" />
      {/* callout */}
      <line x1="198" y1="128" x2="300" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
      <g>
        <rect x="296" y="48" width="92" height="46" rx="6" fill="#0a1024" stroke="#ef4444" strokeOpacity="0.5" />
        <text x="304" y="64" fill="#fca5a5" fontSize="9" fontFamily="monospace">CL-1042 · HIGH</text>
        <text x="304" y="78" fill="#c7d0e3" fontSize="9">SAR 85,000</text>
        <text x="304" y="89" fill="#9aa6c4" fontSize="8">4 days delay</text>
      </g>
      <text x="20" y="240" fill="#6b7798" fontSize="10">MEP duct × Structural beam — Level 03</text>
    </svg>
  )
}

function ComplianceView() {
  // Floor plan with compliance markers.
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <rect width="400" height="260" fill="#070b18" />
      <g stroke="#1d2c61" strokeWidth="2" fill="#0c1530">
        <rect x="40" y="40" width="320" height="180" rx="2" />
        <line x1="160" y1="40" x2="160" y2="220" />
        <line x1="160" y1="130" x2="360" y2="130" />
        <rect x="60" y="60" width="80" height="60" fill="#10204a" />
      </g>
      {/* exit path */}
      <path d="M100 90 L160 90 L160 180 L300 180" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="5 4" />
      <circle cx="300" cy="180" r="6" fill="#22c55e" />
      <text x="280" y="200" fill="#86efac" fontSize="9">EXIT</text>
      {/* violation marker */}
      <g>
        <circle cx="250" cy="80" r="22" fill="#ef4444" fillOpacity="0.12" />
        <circle cx="250" cy="80" r="9" fill="#ef4444" />
        <text x="246" y="84" fill="#fff" fontSize="11" fontWeight="bold">!</text>
        <rect x="266" y="64" width="100" height="34" rx="5" fill="#0a1024" stroke="#ef4444" strokeOpacity="0.4" />
        <text x="272" y="79" fill="#fca5a5" fontSize="8">SBC 801 · Fire exit</text>
        <text x="272" y="90" fill="#9aa6c4" fontSize="8">48m {'>'} 30m limit</text>
      </g>
      <text x="40" y="245" fill="#6b7798" fontSize="10">Saudi Building Code · Civil Defense overlay</text>
    </svg>
  )
}

function AnalyticsView() {
  const bars = [60, 90, 75, 120, 100, 140, 130, 160]
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full">
      <rect width="400" height="260" fill="#070b18" />
      {/* line/area */}
      <polyline
        points="20,180 70,150 120,160 170,120 220,130 270,90 320,100 380,60"
        fill="none"
        stroke="#2f6bff"
        strokeWidth="2.5"
      />
      <polygon points="20,180 70,150 120,160 170,120 220,130 270,90 320,100 380,60 380,210 20,210" fill="#2f6bff" fillOpacity="0.12" />
      {/* bars */}
      {bars.map((h, i) => (
        <rect key={i} x={28 + i * 44} y={210 - h * 0.6} width="22" height={h * 0.6} rx="3" fill="#22d3ee" fillOpacity="0.5" />
      ))}
      <line x1="20" y1="210" x2="380" y2="210" stroke="#1d2c61" />
      <g>
        <rect x="280" y="24" width="96" height="22" rx="5" fill="#0a1024" stroke="#1d2c61" />
        <circle cx="292" cy="35" r="3" fill="#22c55e" />
        <text x="300" y="39" fill="#c7d0e3" fontSize="10">Health ↑ 92%</text>
      </g>
    </svg>
  )
}

const views: Record<Variant, () => JSX.Element> = {
  model: ModelView,
  clash: ClashView,
  compliance: ComplianceView,
  analytics: AnalyticsView,
}

export default function BIMSnapshot({
  variant = 'model',
  title,
  className = '',
}: {
  variant?: Variant
  title?: string
  className?: string
}) {
  const View = views[variant]
  const defaultTitle =
    variant === 'clash'
      ? 'Clash Intelligence — Riyadh Tower'
      : variant === 'compliance'
        ? 'Saudi Compliance — Floor 04'
        : variant === 'analytics'
          ? 'Portfolio Analytics'
          : 'Federated Model — Riyadh Tower'
  return (
    <Chrome title={title ?? defaultTitle}>
      <div className={`aspect-[400/260] w-full ${className}`}>
        <View />
      </div>
    </Chrome>
  )
}
