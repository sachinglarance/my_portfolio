import Dash from './Dash'

export default function Splash({ hidden }) {
  return (
    <div id="splash" className={hidden ? 'hide' : ''}>
      <div className="splash-inner">
        <div className="splash-dash">
          <Dash size={130} />
          <span className="splash-shadow" />
        </div>
        <div className="splash-text mono">flutter run <span className="blink">▋</span></div>
        <div className="splash-bar"><span /></div>
      </div>
    </div>
  )
}
