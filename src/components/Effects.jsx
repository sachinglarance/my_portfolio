import { useEffect, useRef } from 'react'

const RIPPLE = '.btn, .c-link, .tags span, .soft-chip, .mini-card, .nav-links a, .hot-reload, .skill-card, .tl-card'
const MAGNET = '.btn, .hot-reload, .brand'
const HOVERABLE = 'a, button, .skill-card, .tl-card, .tags span, .soft-chip, .mini-card, .bottom-nav span'

// Flutter logo paths (viewBox 256x317) for the floating background icons
const FLUTTER = [
  'M157.7 0L0 157.7l48.8 48.8L255.3 0zM156.6 145.4l-84.4 84.4 49 49.7 48.7-48.7 85.4-85.4z',
  'M121.1 279.5l37.1 37.1h97.1l-85.4-85.8z',
  'M71.6 230.4l48.8-48.8 49.4 49.3-48.7 48.7z',
]

function FloatingIcons() {
  const canvas = useRef(null)
  useEffect(() => {
    const cv = canvas.current
    const ctx = cv.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const paths = FLUTTER.map((d) => new Path2D(d))
    const kinds = ['flutter', 'braces', 'tag', 'dart', 'ring', 'flutter', 'widget']
    let w, h, dpr, raf
    let mx = 0, my = 0, tx = 0, ty = 0
    const count = window.innerWidth < 720 ? 14 : 26
    const parts = Array.from({ length: count }, () => ({
      kind: kinds[Math.floor(Math.random() * kinds.length)],
      x: Math.random(), y: Math.random(),
      z: 0.3 + Math.random() * 0.9,
      s: 14 + Math.random() * 20,
      r: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.004,
      vy: 0.00008 + Math.random() * 0.00022,
      a: 0.06 + Math.random() * 0.12,
    }))
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = cv.width = window.innerWidth * dpr
      h = cv.height = window.innerHeight * dpr
      cv.style.width = window.innerWidth + 'px'
      cv.style.height = window.innerHeight + 'px'
    }
    const draw = (p) => {
      const size = p.s * p.z * dpr
      ctx.save()
      ctx.translate((p.x * w) + tx * p.z * 40 * dpr, (p.y * h) + ty * p.z * 40 * dpr)
      ctx.rotate(p.r)
      ctx.globalAlpha = p.a
      ctx.strokeStyle = ctx.fillStyle = '#47c5fb'
      ctx.lineWidth = 1.6 * dpr
      if (p.kind === 'flutter') {
        const k = size / 290
        ctx.scale(k, k); ctx.translate(-128, -158)
        paths.forEach((path) => ctx.fill(path))
      } else if (p.kind === 'dart') {
        ctx.beginPath(); ctx.moveTo(0, -size / 2); ctx.lineTo(size / 2, 0); ctx.lineTo(0, size / 2); ctx.lineTo(-size / 2, 0); ctx.closePath(); ctx.stroke()
      } else if (p.kind === 'ring') {
        ctx.beginPath(); ctx.arc(0, 0, size / 2.4, 0, Math.PI * 2); ctx.stroke()
      } else if (p.kind === 'widget') {
        ctx.strokeRect(-size / 2, -size / 2.6, size, size / 1.3)
        ctx.beginPath(); ctx.moveTo(-size / 2, -size / 6); ctx.lineTo(size / 2, -size / 6); ctx.stroke()
      } else {
        ctx.font = `600 ${size}px JetBrains Mono, monospace`
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillText(p.kind === 'braces' ? '{ }' : '</>', 0, 0)
      }
      ctx.restore()
    }
    const tick = () => {
      tx += (mx - tx) * 0.05; ty += (my - ty) * 0.05
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.y -= p.vy * p.z * 3
        p.r += p.vr
        if (p.y < -0.08) { p.y = 1.08; p.x = Math.random() }
        draw(p)
      }
      raf = requestAnimationFrame(tick)
    }
    const move = (e) => { mx = e.clientX / window.innerWidth - 0.5; my = e.clientY / window.innerHeight - 0.5 }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move)
    if (reduce) parts.forEach(draw); else tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move) }
  }, [])
  return <canvas ref={canvas} className="float-icons" aria-hidden="true" />
}

export default function Effects() {
  const bar = useRef(null)
  const ring = useRef(null)

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Material-style ink ripple
  useEffect(() => {
    const down = (e) => {
      const el = e.target.closest(RIPPLE)
      if (!el) return
      const r = el.getBoundingClientRect()
      const size = Math.max(r.width, r.height) * 2.2
      const ink = document.createElement('span')
      ink.className = 'ink'
      ink.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`
      el.appendChild(ink)
      setTimeout(() => ink.remove(), 700)
    }
    document.addEventListener('pointerdown', down)
    return () => document.removeEventListener('pointerdown', down)
  }, [])

  // Magnetic buttons + cursor ring (mouse devices only)
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    let x = -100, y = -100, rx = -100, ry = -100, raf, magnet = null
    const move = (e) => {
      x = e.clientX; y = e.clientY
      const m = e.target.closest?.(MAGNET)
      if (magnet && magnet !== m) { magnet.style.translate = ''; magnet = null }
      if (m) {
        const r = m.getBoundingClientRect()
        m.style.translate = `${(x - r.left - r.width / 2) * 0.25}px ${(y - r.top - r.height / 2) * 0.35}px`
        magnet = m
      }
      ring.current?.classList.toggle('big', !!e.target.closest?.(HOVERABLE))
    }
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    const down = () => ring.current?.classList.add('press')
    const up = () => ring.current?.classList.remove('press')
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" ref={bar} />
      <FloatingIcons />
      <div className="cursor-ring" ref={ring} aria-hidden="true"><span /></div>
    </>
  )
}
