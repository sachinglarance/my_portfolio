import { skills, softSkills } from '../data'
import { useTilt } from '../hooks'

function SkillCard({ icon, title, tags, i, wide, note }) {
  const tilt = useTilt(12)
  return (
    <div className={`skill-card reveal ${wide ? 'wide' : ''}`} ref={tilt} style={{ '--delay': `${i * 80}ms` }}>
      <div className="sc-icon">{icon}</div>
      <div className="sc-body">
        <h3>{title}</h3>
        {note && <p className="sc-note">{note}</p>}
        <div className="tags">{tags.map((t, j) => <span key={t} style={{ '--j': j }}>{t}</span>)}</div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head reveal">
        <span className="eyebrow mono">02 · pubspec.yaml</span>
        <h2>My <span className="grad">dependencies</span></h2>
        <p className="muted">The tools I reach for every day to build and ship apps.</p>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => <SkillCard key={s.title} {...s} i={i} />)}
      </div>
      <div className="soft reveal">
        <span className="mono muted">soft_skills:</span>
        {softSkills.map((s) => <span className="soft-chip" key={s}>{s}</span>)}
      </div>
    </section>
  )
}
