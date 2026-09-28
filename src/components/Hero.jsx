import { useEffect, useState } from 'react'
import { profile, stats } from '../data'
import Counter from './Counter'
import PhoneMockup from './PhoneMockup'

function useTyping(words) {
  const [text, setText] = useState('')
  useEffect(() => {
    let w = 0, i = 0, deleting = false, t
    const tick = () => {
      const word = words[w]
      i += deleting ? -1 : 1
      setText(word.slice(0, i))
      let delay = deleting ? 45 : 90
      if (!deleting && i === word.length) { deleting = true; delay = 1600 }
      else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 300 }
      t = setTimeout(tick, delay)
    }
    t = setTimeout(tick, 2000)
    return () => clearTimeout(t)
  }, [words])
  return text
}

export default function Hero() {
  const typed = useTyping(profile.roles)
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="pill reveal"><span className="dot" /> Available for new opportunities</div>
        <h1 className="reveal hero-title">
          <span className="hello">{[...'Hi, I\u2019m'].map((c, i) => <span className="char" key={i} style={{ '--i': i }}>{c === ' ' ? '\u00a0' : c}</span>)}</span>{' '}
          <span className="name-wipe"><span className="grad">{profile.name}</span></span>
        </h1>
        <h2 className="typing-line reveal">
          <span className="mono muted">&gt;</span> <span>{typed}</span><span className="caret">|</span>
        </h2>
        <p className="lead reveal">
          I build <b>scalable, high-performance</b> cross-platform mobile apps with <b>Flutter</b>, <b>Dart</b> &amp; <b>Firebase</b>,
          from the first widget all the way to the Play Store &amp; App Store.
        </p>
        <div className="hero-cta reveal">
          <a href="#projects" className="btn btn-primary">
            <span>View My Work</span>
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8z" /></svg>
          </a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">{s.prefix}<Counter to={s.to} />{s.suffix}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="float-chip chip-1"><span>⚡</span> Hot Reload</div>
        <div className="float-chip chip-2"><span>🔥</span> Firebase</div>
        <div className="float-chip chip-3"><span>🎯</span> Riverpod</div>
        <div className="float-code mono">
          <span className="k">class</span> <span className="t">Sachin</span> <span className="k">extends</span> <span className="t">StatelessWidget</span> {'{'}<br />
          &nbsp;&nbsp;<span className="t">Widget</span> <span className="f">build</span>(ctx) =&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="t">AwesomeApp</span>();<br />
          {'}'}
        </div>
        <PhoneMockup />
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down"><span /></a>
    </section>
  )
}
