// ---------------------------------------------------------------------------
// Stylised project thumbnails — a distinct SVG scene per project archetype.
// Used on project cards in place of real photography.
// ---------------------------------------------------------------------------

type Kind = 'tower' | 'infra' | 'hospital' | 'factory'

const kindByProject: Record<string, Kind> = {
  'riyadh-tower': 'tower',
  'neom-infra': 'infra',
  'hospital-expansion': 'hospital',
  'industrial-factory': 'factory',
}

function Sky({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1a3c" />
          <stop offset="100%" stopColor="#070b18" />
        </linearGradient>
        <linearGradient id={`hl-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f6bff" />
          <stop offset="100%" stopColor="#16224d" />
        </linearGradient>
      </defs>
      <rect width="320" height="150" fill={`url(#sky-${id})`} />
      <circle cx="250" cy="34" r="40" fill="#2f6bff" opacity="0.12" />
      {/* grid ground */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={i * 46} y1="150" x2={i * 46 - 30} y2="118" stroke="#15224a" strokeWidth="1" />
      ))}
      <line x1="0" y1="118" x2="320" y2="118" stroke="#1d2c61" strokeWidth="1" />
    </>
  )
}

function Tower({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Sky id={id} />
      {/* surrounding buildings */}
      <rect x="20" y="74" width="34" height="44" fill="#16224d" />
      <rect x="60" y="60" width="28" height="58" fill="#101a3a" />
      <rect x="250" y="68" width="34" height="50" fill="#16224d" />
      <rect x="290" y="82" width="22" height="36" fill="#101a3a" />
      {/* hero tower */}
      <polygon points="150,18 186,30 186,118 150,118" fill={`url(#hl-${id})`} />
      <polygon points="150,18 114,30 114,118 150,118" fill="#11204a" />
      <polygon points="150,18 114,30 150,38 186,30" fill="#3f7bff" opacity="0.8" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1="114" y1={42 + i * 8} x2="186" y2={42 + i * 8} stroke="#2f6bff" strokeOpacity="0.3" />
      ))}
      <circle cx="150" cy="14" r="2.5" fill="#22d3ee" />
    </svg>
  )
}

function Infra({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Sky id={id} />
      {/* bridge deck */}
      <rect x="0" y="86" width="320" height="8" fill="#3a4a6b" />
      <rect x="0" y="94" width="320" height="4" fill="#16224d" />
      {/* pylons + cables */}
      {[80, 220].map((x) => (
        <g key={x}>
          <rect x={x - 3} y="38" width="6" height="56" fill="#5a6b90" />
          {[-46, -24, 24, 46].map((dx) => (
            <line key={dx} x1={x} y1="40" x2={x + dx} y2="86" stroke="#2f6bff" strokeOpacity="0.5" />
          ))}
        </g>
      ))}
      {/* pipeline below */}
      <line x1="0" y1="116" x2="320" y2="116" stroke="#22d3ee" strokeWidth="3" strokeOpacity="0.7" />
      <line x1="0" y1="106" x2="320" y2="106" stroke="#2f6bff" strokeWidth="2" strokeOpacity="0.4" />
    </svg>
  )
}

function Hospital({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Sky id={id} />
      <rect x="70" y="50" width="180" height="68" fill={`url(#hl-${id})`} opacity="0.92" />
      <rect x="70" y="50" width="180" height="68" fill="none" stroke="#2f6bff" strokeOpacity="0.5" />
      {/* windows */}
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={80 + c * 19} y={58 + r * 11} width="11" height="6" fill="#0a1024" opacity="0.6" />
        )),
      )}
      {/* red cross sign */}
      <rect x="150" y="28" width="20" height="20" rx="3" fill="#0a1024" stroke="#ef4444" />
      <rect x="158" y="32" width="4" height="12" fill="#ef4444" />
      <rect x="154" y="36" width="12" height="4" fill="#ef4444" />
    </svg>
  )
}

function Factory({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 320 150" className="h-full w-full">
      <Sky id={id} />
      {/* saw-tooth roof sheds */}
      {[30, 110, 190].map((x) => (
        <g key={x}>
          <rect x={x} y="74" width="80" height="44" fill="#16224d" />
          {[0, 20, 40, 60].map((dx) => (
            <polygon key={dx} points={`${x + dx},74 ${x + dx + 20},64 ${x + dx + 20},74`} fill="#1d2c61" />
          ))}
        </g>
      ))}
      {/* chimneys */}
      <rect x="276" y="44" width="10" height="74" fill="#3a4a6b" />
      <rect x="294" y="54" width="8" height="64" fill="#2b3447" />
      <circle cx="281" cy="40" r="6" fill="#9aa6c4" opacity="0.3" />
      <circle cx="281" cy="30" r="9" fill="#9aa6c4" opacity="0.16" />
    </svg>
  )
}

const scenes: Record<Kind, (p: { id: string }) => JSX.Element> = {
  tower: Tower,
  infra: Infra,
  hospital: Hospital,
  factory: Factory,
}

export default function ProjectThumb({
  projectId,
  className = '',
}: {
  projectId: string
  className?: string
}) {
  const kind = kindByProject[projectId] ?? 'tower'
  const Scene = scenes[kind]
  return (
    <div className={`relative aspect-[320/150] w-full overflow-hidden ${className}`}>
      <Scene id={projectId} />
    </div>
  )
}
