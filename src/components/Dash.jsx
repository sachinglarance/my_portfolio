import { useEffect, useRef } from 'react'

// Hand-drawn SVG take on Dash, the Flutter mascot. `laptop` adds a laptop with the Flutter logo.
export default function Dash({ size = 120, laptop = false, track = false, className = '' }) {
  const svg = useRef(null)
  const pupils = useRef(null)
  useEffect(() => {
    if (!track) return
    const move = (e) => {
      if (!svg.current || !pupils.current) return
      const r = svg.current.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height * 0.5)
      const d = Math.hypot(dx, dy) || 1
      const k = Math.min(d / 200, 1) * 5
      pupils.current.style.transform = `translate(${(dx / d) * k}px, ${(dy / d) * k}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [track])
  return (
    <svg ref={svg} className={`dash ${track ? 'tracking' : ''} ${className}`} viewBox="0 0 200 210" width={size} height={size * 1.05} aria-hidden="true">
      <defs>
        <radialGradient id="dashBody" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#b8ecff" />
          <stop offset="55%" stopColor="#6fd0fb" />
          <stop offset="100%" stopColor="#2eb5f0" />
        </radialGradient>
        <radialGradient id="dashTuft" cx="40%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#8fe0ff" />
          <stop offset="100%" stopColor="#1fa8e8" />
        </radialGradient>
      </defs>

      {/* feet */}
      <g fill="#7a5238">
        <ellipse cx="80" cy="188" rx="16" ry="7" />
        <ellipse cx="120" cy="188" rx="16" ry="7" />
      </g>

      {/* tuft */}
      <g className="dash-tuft">
        <ellipse cx="96" cy="44" rx="16" ry="24" fill="url(#dashTuft)" transform="rotate(-18 96 44)" />
        <ellipse cx="112" cy="40" rx="13" ry="22" fill="url(#dashTuft)" transform="rotate(20 112 40)" />
      </g>

      {/* back wing */}
      <ellipse className="dash-wing-r" cx="160" cy="118" rx="20" ry="30" fill="#29aee8" transform="rotate(25 160 118)" />

      {/* body */}
      <circle cx="100" cy="115" r="68" fill="url(#dashBody)" />
      <ellipse cx="100" cy="150" rx="42" ry="30" fill="#e8f8ff" opacity=".9" />
      {/* face mask */}
      <path d="M44 100 C 50 70, 150 70, 156 100 C 150 90, 50 90, 44 100 Z" fill="#1fa8e8" opacity=".55" />

      {/* eyes */}
      <g className="dash-eyes">
        <circle cx="78" cy="104" r="17" fill="#fff" />
        <circle cx="122" cy="104" r="17" fill="#fff" />
        <g ref={pupils} className="dash-pupils">
          <circle className="dash-pupil" cx="80" cy="106" r="10" fill="#1d2433" />
          <circle className="dash-pupil" cx="120" cy="106" r="10" fill="#1d2433" />
          <circle cx="84" cy="101" r="3.5" fill="#fff" />
          <circle cx="124" cy="101" r="3.5" fill="#fff" />
        </g>
      </g>

      {/* cheeks */}
      <ellipse cx="60" cy="126" rx="8" ry="5" fill="#ff9fb8" opacity=".75" />
      <ellipse cx="140" cy="126" rx="8" ry="5" fill="#ff9fb8" opacity=".75" />

      {/* beak */}
      <path d="M88 120 Q100 114 112 120 Q106 140 100 146 Q94 140 88 120 Z" fill="#8a5a3c" />
      <path d="M90 121 Q100 117 110 121 Q100 125 90 121 Z" fill="#a8734f" />

      {/* front wing (waves) */}
      <ellipse className="dash-wing" cx="38" cy="120" rx="18" ry="30" fill="#48c1f5" />

      {laptop && (
        <g className="dash-laptop">
          <rect x="112" y="128" width="72" height="48" rx="5" fill="#b9c2cf" />
          <rect x="116" y="132" width="64" height="40" rx="3" fill="#8e99a8" />
          <circle cx="148" cy="152" r="13" fill="#fff" />
          <g transform="translate(141 143) scale(.055)">
            <path fill="#47C5FB" d="M157.7 0L0 157.7l48.8 48.8L255.3 0zM156.6 145.4l-84.4 84.4 49 49.7 48.7-48.7 85.4-85.4z" />
            <path fill="#00569E" d="M121.1 279.5l37.1 37.1h97.1l-85.4-85.8z" />
            <path fill="#00B5F8" d="M71.6 230.4l48.8-48.8 49.4 49.3-48.7 48.7z" />
          </g>
          <rect x="106" y="176" width="84" height="6" rx="3" fill="#9aa4b2" />
        </g>
      )}
    </svg>
  )
}
