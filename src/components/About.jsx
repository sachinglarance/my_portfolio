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
          <div className="photo-chip pc-1">📱 Mobile Dev</div>
          <div className="photo-chip pc-2"><b>3+</b> yrs building apps</div>
          <div className="photo-chip pc-3">📍 Chennai, IN</div>
        </div>
        <div className="about-text reveal">
          <p>
            I'm a <b>Mobile Developer with 3+ years of experience</b> building and shipping scalable, high-performance
            apps for Android &amp; iOS. <b>Flutter and Dart</b> are my core strength. I write native Android modules in
            <b>Kotlin</b> through Platform Channels and handle iOS project setup in Xcode.
            I build with Clean Architecture / MVVM, Firebase, REST APIs, WebSocket / MQTT and offline-first design.
          </p>
          <p>
            I care about <b>performance and stability</b>. I profile with Flutter DevTools (cutting API response time by <b>~25%</b>),
            use Sentry and unit &amp; widget tests (crash rates down <b>~90%</b>), and automate releases with Fastlane &amp; Jenkins. I've shipped <b>3 production apps</b>
            to the App Store &amp; Play Store, end-to-end.
          </p>
          <div className="about-cards">
            <div className="mini-card"><span>🎓</span><div><b>B.E. (ECE)</b><small>Sri Shanmugha College of Engg. &amp; Tech · 2023 · CGPA 8.49</small></div></div>
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
