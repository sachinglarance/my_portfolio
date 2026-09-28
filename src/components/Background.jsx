import { useEffect, useRef } from 'react'

export default function Background() {
  const glow = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <>
      <div className="bg">
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
        <div className="grid-dots" />
      </div>
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
    </>
  )
}
