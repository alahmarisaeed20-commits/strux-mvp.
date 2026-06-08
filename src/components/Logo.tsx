// =============================================================================
// Official STRUX mark — a hexagonal cube with a negative-space "S" split
// blue (top-left) / charcoal (bottom-right), flanked by silver accent
// triangles. Rebuilt as a crisp, scalable SVG.
// =============================================================================

export function StruxMark({
  size = 32,
  animated = false,
  className = '',
}: {
  size?: number
  animated?: boolean
  className?: string
}) {
  const uid = animated ? 'a' : 's'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="STRUX"
    >
      <defs>
        <linearGradient id={`blue-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f7bff" />
          <stop offset="100%" stopColor="#1f3f96" />
        </linearGradient>
        <linearGradient id={`dark-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#39435b" />
          <stop offset="100%" stopColor="#1a2030" />
        </linearGradient>
      </defs>

      {/* Accent triangles (exploded-cube cue) */}
      <polygon points="6,29 6,41 13,35" fill="#9aa6c4" className={animated ? 'animate-float-slower' : ''} />
      <polygon points="58,23 58,35 51,29" fill="#4a5570" className={animated ? 'animate-float-slower' : ''} />

      {/* Hexagon halves split along the UR→LL diagonal */}
      <polygon points="15,21 32,11 49,21 15,43" fill={`url(#blue-${uid})`} />
      <polygon points="49,21 49,43 32,53 15,43" fill={`url(#dark-${uid})`} />

      {/* Negative-space S — dark base for depth, light groove on top */}
      <path
        d="M44 22 L26 22 L26 29.5 L38 33.5 L38 42 L20 42"
        fill="none"
        stroke="#0a1024"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M44 22 L26 22 L26 29.5 L38 33.5 L38 42 L20 42"
        fill="none"
        stroke="#eef2fb"
        strokeWidth="3.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StruxWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-[0.28em] text-silver-100 ${className}`}>STRUX</span>
  )
}
