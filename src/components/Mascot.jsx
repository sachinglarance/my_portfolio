import { useEffect, useRef, useState } from 'react'
import Dash from './Dash'

const lines = {
  home: "Hi! I'm Dash 👋 Welcome to Sachin's portfolio!",
  about: "That's Sachin! 3+ years of Flutter 💙",
  skills: 'He knows Riverpod better than I do 🐦',
  experience: 'Shipping apps since 2023 🚀',
  projects: 'Real apps, real users, real-time!',
  contact: "Here's how to reach Sachin 📬",
}
const order = ['home', 'about', 'skills', 'experience', 'projects', 'contact']

export default function Mascot() {
  const [section, setSection] = useState('home')
  const [show, setShow] = useState(false)
  const [hop, setHop] = useState(false)
  const timer = useRef()

  const say = () => {
    setShow(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setShow(false), 3800)
  }

  useEffect(() => {
    const onScroll = () => {
      let current = 'home'
      for (const id of order) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) current = id
      }
      setSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Speak when the section changes (first greeting waits for the splash screen)
  useEffect(() => {
    const t = setTimeout(say, section === 'home' ? 2600 : 200)
    return () => clearTimeout(t)
  }, [section])

  const poke = () => {
    setHop(true)
    setTimeout(() => setHop(false), 600)
    say()
  }

  return (
    <div className="mascot">
      <div className={`mascot-bubble ${show ? 'show' : ''}`}>{lines[section]}</div>
      <button className={`mascot-btn ${hop ? 'hop' : ''}`} onClick={poke} aria-label="Dash the Flutter mascot">
        <Dash size={78} track />
      </button>
    </div>
  )
}
