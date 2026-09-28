import { useEffect, useState } from 'react'
import { codeTokens } from '../data'
import { useInView, useTilt } from '../hooks'
import ProfilePhoto from './ProfilePhoto'

const totalChars = codeTokens.reduce((n, [t]) => n + t.length, 0)

function TypedCode() {
  const [ref, visible] = useInView(0.3)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    const id = setInterval(() => setCount((c) => (c >= totalChars ? (clearInterval(id), c) : c + 2)), 18)
    return () => clearInterval(id)
  }, [visible])

  let left = count
  return (
    <pre className="mono code" ref={ref}>
      {codeTokens.map(([text, cls], i) => {
        if (left <= 0) return null
        const part = text.slice(0, left)
        left -= text.length
        return <span key={i} className={cls}>{part}</span>
      })}
      <span className="caret">▋</span>
    </pre>
  )
}

export default function About() {
  const tilt = useTilt(10)
  return (
    <section className="section" id="about">
      <div className="section-head reveal">
        <span className="eyebrow mono">01 · about_me.dart</span>
        <h2>Turning ideas into <span className="grad">smooth 60fps</span> experiences</h2>
      </div>
      <div className="about-grid">
        <div className="photo-wrap reveal">
          <div className="photo-card" ref={tilt}>
            <div className="photo-ring" />
            <ProfilePhoto className="photo" />
          </div>
          <div className="photo-chip pc-1">💙 Flutter Dev</div>
          <div className="photo-chip pc-2"><b>3+</b> yrs building apps</div>
          <div className="photo-chip pc-3">📍 Chennai, IN</div>
        </div>
        <div className="about-text reveal">
          <p>
            I'm a <b>Flutter Developer with 3+ years of experience</b> building scalable, cross-platform mobile
            applications for Android &amp; iOS. I work mainly with Flutter, Dart, Firebase and REST API integration.
          </p>
          <p>
            I care about <b>performance</b>. I've optimized UI rendering, cut API response time by ~25% and reduced
            crash rates with Sentry monitoring. I've worked across the full software lifecycle, from requirements to
            deployment, in fast-paced teams.
          </p>
          <div className="about-cards">
            <div className="mini-card"><span>🎓</span><div><b>B.E. (ECE)</b><small>Sri Shanmugha College of Engg. &amp; Tech · CGPA 8.49</small></div></div>
            <div className="mini-card"><span>🏆</span><div><b>Leadership</b><small>President, Sports &amp; Cultural team · Overall championship in intercollege events</small></div></div>
            <div className="mini-card"><span>🗣️</span><div><b>Languages</b><small>Tamil · English</small></div></div>
          </div>
        </div>
      </div>
      <div className="editor reveal">
        <div className="editor-top">
          <i style={{ background: '#ff5f57' }} /><i style={{ background: '#febc2e' }} /><i style={{ background: '#28c840' }} />
          <span className="mono">lib/developer.dart</span>
        </div>
        <TypedCode />
      </div>
    </section>
  )
}
