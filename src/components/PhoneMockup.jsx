import { useEffect, useState } from 'react'
import { useTilt } from '../hooks'
import ProfilePhoto from './ProfilePhoto'

const bars = [40, 65, 50, 80, 70, 95, 88]
const skillBars = [['Flutter', 95], ['Dart', 92], ['Firebase', 88], ['Riverpod', 85], ['REST APIs', 90], ['CI/CD', 78]]
const pipeline = ['git push origin main', 'Jenkins build', 'flutter test', 'fastlane beta']

export default function PhoneMockup() {
  const [screen, setScreen] = useState(0)
  const [time, setTime] = useState('')
  const tilt = useTilt(14)

  useEffect(() => {
    const id = setInterval(() => setScreen((s) => (s + 1) % 3), 3800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const update = () => {
      const d = new Date()
      setTime(`${d.getHours() % 12 || 12}:${String(d.getMinutes()).padStart(2, '0')}`)
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="phone-float">
    <div className="phone" ref={tilt}>
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="status-bar mono"><span>{time}</span><span>▂▄▆ 5G ▮</span></div>

        <div className="screens">
          <div className={`screen ${screen === 0 ? 'active' : ''}`}>
            <div className="app-bar">
              <ProfilePhoto className="avatar" />
              <div><small>Welcome back 👋</small><b>Sachin's App</b></div>
              <div className="bell">🔔</div>
            </div>
            <div className="hero-card">
              <small>Crash-free sessions</small>
              <div className="big">99.8%</div>
              <div className="spark">{bars.map((h, i) => <i key={i} style={{ '--h': `${h}%`, '--d': `${i * 80}ms` }} />)}</div>
            </div>
            <div className="tile"><span className="ic" style={{ '--c': '#13B9FD' }}>🚗</span><div><b>Roadside Assist</b><small>Tow truck · 6 min away</small></div></div>
            <div className="tile"><span className="ic" style={{ '--c': '#22c55e' }}>📝</span><div><b>Field Forms</b><small>3 reports saved offline</small></div></div>
            <div className="tile"><span className="ic" style={{ '--c': '#f59e0b' }}>🔔</span><div><b>Push sent</b><small>12k devices · just now</small></div></div>
          </div>

          <div className={`screen ${screen === 1 ? 'active' : ''}`}>
            <div className="app-bar plain"><b>Tech Stack</b></div>
            {skillBars.map(([n, w], i) => (
              <div className="skill-bar" key={n}><span>{n}</span><div><i style={{ '--w': `${w}%`, '--d': `${i * 90}ms` }} /></div></div>
            ))}
          </div>

          <div className={`screen ${screen === 2 ? 'active' : ''}`}>
            <div className="app-bar plain"><b>Deploy Pipeline</b></div>
            {pipeline.map((p, i) => (
              <div className="pipe" key={p} style={{ '--d': `${i * 250}ms` }}><span className="ok">✓</span> {p}</div>
            ))}
            <div className="pipe run" style={{ '--d': '1000ms' }}><span className="spin" /> Uploading to stores…</div>
            <div className="store-row"><div className="store">▶ Play Store</div><div className="store"> App Store</div></div>
          </div>
        </div>

        <div className="fab">+</div>
        <div className="bottom-nav" style={{ '--i': screen }}>
          {['⌂', '◈', '🚀'].map((ic, i) => (
            <span key={i} className={screen === i ? 'active' : ''} onClick={() => setScreen(i)}>{ic}</span>
          ))}
          <i className="indicator" />
        </div>
      </div>
    </div>
    </div>
  )
}
