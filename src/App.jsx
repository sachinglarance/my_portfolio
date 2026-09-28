import { useEffect, useState } from 'react'
import { useReveal } from './hooks'
import Splash from './components/Splash'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import HotReload from './components/HotReload'
import Mascot from './components/Mascot'
import Effects from './components/Effects'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  // Changing this key remounts <main>, replaying every animation ("hot reload")
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1900)
    return () => clearTimeout(t)
  }, [])

  useReveal([loaded, reloadKey])

  return (
    <>
      <Splash hidden={loaded} />
      <Background />
      <Effects />
      <Navbar />
      <main key={reloadKey} className={loaded ? 'ready' : ''}>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p className="mono">
          Built with 💙 React &amp; lots of <span className="accent">hot reloads</span> · © {new Date().getFullYear()} SachinCharles A
        </p>
      </footer>
      <Mascot />
      <HotReload onReload={() => setReloadKey((k) => k + 1)} />
    </>
  )
}
