import { useEffect, useState } from 'react'
import { useInView } from '../hooks'

export default function Counter({ to, duration = 1400 }) {
  const [ref, visible] = useInView(0.5)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!visible) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [visible, to, duration])
  return <span ref={ref}>{val}</span>
}
