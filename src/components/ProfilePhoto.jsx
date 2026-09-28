import { useState } from 'react'

// Put your photo at public/profile.jpg — falls back to initials if it's missing.
const src = `${import.meta.env.BASE_URL}profile.jpg`

export default function ProfilePhoto({ className = '', initials = 'SA' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`${className} photo-fallback`}>{initials}</div>
  return <img src={src} alt="SachinCharles A" className={className} onError={() => setFailed(true)} loading="lazy" />
}
