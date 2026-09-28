import { marquee } from '../data'

const second = ['Android', 'iOS', 'Play Store', 'App Store', 'CI/CD', 'Clean Code', '60 FPS', 'Hot Reload', 'Offline-first', 'Real-time']

export default function Marquee() {
  const items = [...marquee, ...marquee]
  const items2 = [...second, ...second]
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((m, i) => <span key={i}>{m}<em>✦</em></span>)}
        </div>
      </div>
      <div className="marquee alt">
        <div className="marquee-track reverse">
          {items2.map((m, i) => <span key={i}>{m}<em>◆</em></span>)}
        </div>
      </div>
    </div>
  )
}
