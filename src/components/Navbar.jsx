import { useEffect, useState } from 'react'
import FlutterLogo from './FlutterLogo'

const links = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let current = ''
      for (const id of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="brand">
        <FlutterLogo size={22} />
        <span>sachin<span className="accent">.dart</span></span>
      </a>
      <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} className={active === l ? 'active' : ''}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
      </nav>
      <button className={`burger ${open ? 'open' : ''}`} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>
    </header>
  )
}
