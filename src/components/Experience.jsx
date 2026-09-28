import { experience } from '../data'
import { useScrollVar } from '../hooks'

export default function Experience() {
  const line = useScrollVar('--p')
  return (
    <section className="section" id="experience">
      <div className="section-head reveal">
        <span className="eyebrow mono">03 · git log --oneline</span>
        <h2>Where I've <span className="grad">shipped</span></h2>
      </div>
      <div className="timeline" ref={line}>
        {experience.map((e) => (
          <div className="tl-item reveal" key={e.role}>
            <div className="tl-dot" />
            <div className="tl-card">
              <div className="tl-head">
                <div>
                  <h3>{e.role}</h3>
                  <div className="company">{e.company}</div>
                </div>
                <span className="badge mono">{e.period}</span>
              </div>
              <ul className="bullets">
                {e.points.map((p, i) => <li key={i} style={{ '--j': i }} dangerouslySetInnerHTML={{ __html: p }} />)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
