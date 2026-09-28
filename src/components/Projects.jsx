import { useEffect, useState } from 'react'
import { projects } from '../data'
import { useInView } from '../hooks'

function CarScreen() {
  return (
    <div className="mp-screen car">
      <div className="map">
        <svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice">
          <path id="route" className="road" d="M-10 200 C 40 170, 50 70, 105 100 S 165 185, 190 45" />
          <g>
            <circle r="13" className="car-halo" />
            <circle r="6" className="car-dot" />
            <animateMotion dur="5s" repeatCount="indefinite" keyPoints="0.1;0.95" keyTimes="0;1" calcMode="linear">
              <mpath href="#route" />
            </animateMotion>
          </g>
        </svg>
        <div className="pin">📍</div>
      </div>
      <div className="mp-sheet">
        <b>Help is on the way 🚨</b>
        <small>Tow truck · 6 min away</small>
        <div className="services">
          {['🚛 Towing', '🔧 Repair', '🚗 Rental', '🛡️ Insurance'].map((sv, i) => (
            <span key={sv} style={{ '--d': `${i * 0.6}s` }}>{sv}</span>
          ))}
        </div>
        <div className="mp-btn">Track Request</div>
      </div>
    </div>
  )
}

const formFields = [
  ['Report type', 'Maintenance'],
  ['Pump ID', 'DO-PMP-0712'],
  ['Community', 'Kisoro Village'],
  ['Status', 'Working ✓'],
]

function FormScreen() {
  const [ref, visible] = useInView(0.3)
  return (
    <div className={`mp-screen form ${visible ? 'on' : ''}`} ref={ref}>
      <div className="sync-pill"><span className="sync-dot" /><span className="sync-text" /></div>
      <div className="form-head"><b>New Report</b><small>BT DO · Field form</small></div>
      <div className="form-tabs"><span>Installation</span><span>Assessment</span><span className="on">Maintenance</span></div>
      {formFields.map(([label, value], i) => (
        <div className="field" key={label} style={{ '--d': `${0.3 + i * 0.7}s`, '--n': value.length }}>
          <small>{label}</small>
          <div className="input"><span className="typed">{value}</span></div>
        </div>
      ))}
      <div className="mp-btn form-btn">Save &amp; Submit</div>
    </div>
  )
}

function CareScreen() {
  const [ref, visible] = useInView(0.3)
  const [role, setRole] = useState(0)
  const [bpm, setBpm] = useState(72)
  useEffect(() => {
    if (!visible) return
    const r = setInterval(() => setRole((x) => 1 - x), 4000)
    const b = setInterval(() => setBpm(68 + Math.round(Math.random() * 8)), 1500)
    return () => { clearInterval(r); clearInterval(b) }
  }, [visible])
  const tasks = role === 0
    ? ['Morning medication', 'Check vitals', 'Lunch assistance']
    : ['Mom checked in · 9:02 AM', 'Vitals updated', 'Care plan on track']
  return (
    <div className={`mp-screen care ${visible ? 'on' : ''}`} ref={ref}>
      <div className="care-head">
        <img src={`${import.meta.env.BASE_URL}bt-homecare.png`} alt="" />
        <b>BT Homecare</b>
      </div>
      <div className="role-toggle" style={{ '--r': role }}>
        <i /><span className={role === 0 ? 'on' : ''}>Caregiver</span><span className={role === 1 ? 'on' : ''}>Family</span>
      </div>
      <div className="resident">
        <div className="r-avatar">MJ</div>
        <div><b>Mary J.</b><small>Room 204 · Sunrise Community</small></div>
      </div>
      <div className="vitals">
        <div><small>Heart rate</small><b><span className="beat">❤</span> {bpm}</b><em>bpm</em></div>
        <div><small>SpO₂</small><b>98</b><em>%</em></div>
      </div>
      <div className="checklist" key={role}>
        {tasks.map((t, i) => (
          <div className="check" key={t} style={{ '--d': `${400 + i * 500}ms` }}><span className="box">✓</span>{t}</div>
        ))}
      </div>
      <div className="qr-btn"><span className="qr"><i /></span> Scan QR to check in</div>
    </div>
  )
}

const screens = { care: CareScreen, car: CarScreen, form: FormScreen }

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head reveal">
        <span className="eyebrow mono">04 · build/outputs</span>
        <h2>Featured <span className="grad">projects</span></h2>
      </div>
      {projects.map((p, i) => {
        const Screen = screens[p.id]
        return (
          <div className={`project reveal ${i % 2 ? 'reverse' : ''}`} key={p.id}>
            <div className="project-phone"><div className="mini-phone"><Screen /></div></div>
            <div className="project-info">
              <span className="proj-tag mono">{p.tag}</span>
              <h3>{p.name} <span className="muted">— {p.subtitle}</span></h3>
              <ul className="bullets">
                {p.points.map((pt, j) => <li key={j} style={{ '--j': j }} dangerouslySetInnerHTML={{ __html: pt }} />)}
              </ul>
              <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
