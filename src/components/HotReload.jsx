import { useState } from 'react'

export default function HotReload({ onReload }) {
  const [toast, setToast] = useState(false)
  const [ms, setMs] = useState(142)
  const [flash, setFlash] = useState(false)

  const reload = () => {
    setMs(90 + Math.round(Math.random() * 120))
    setFlash(true)
    setTimeout(() => setFlash(false), 450)
    onReload()
    setToast(true)
    setTimeout(() => setToast(false), 2600)
  }

  return (
    <>
      {flash && <div className="reload-flash" />}
      <button className="hot-reload" onClick={reload} title="Hot Reload ⚡" aria-label="Hot reload">⚡</button>
      <div className={`toast mono ${toast ? 'show' : ''}`}>Performing hot reload… <b>Reloaded in {ms}ms</b></div>
    </>
  )
}
