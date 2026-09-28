export default function FlutterLogo({ size = 24, animated = false }) {
  return (
    <svg viewBox="0 0 256 317" width={size} height={size * 1.24} aria-hidden="true" className={animated ? 'flutter-anim' : ''}>
      <path className="fl fl-1" fill="#47C5FB" d="M157.7 0L0 157.7l48.8 48.8L255.3 0z" />
      <path className="fl fl-2" fill="#47C5FB" d="M156.6 145.4l-84.4 84.4 49 49.7 48.7-48.7 85.4-85.4z" />
      <path className="fl fl-3" fill="#00569E" d="M121.1 279.5l37.1 37.1h97.1l-85.4-85.8z" />
      <path className="fl fl-4" fill="#00B5F8" d="M71.6 230.4l48.8-48.8 49.4 49.3-48.7 48.7z" />
    </svg>
  )
}
