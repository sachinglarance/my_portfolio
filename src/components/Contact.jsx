import { profile } from '../data'
import Dash from './Dash'

export default function Contact() {
  const links = [
    { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: '📞', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneRaw}` },
    { icon: '💼', label: 'LinkedIn', value: '/in/sachinglarance', href: profile.linkedin, ext: true },
    { icon: '🐙', label: 'GitHub', value: '@sachinglarance', href: profile.github, ext: true },
  ]
  return (
    <section className="section" id="contact">
      <div className="contact-card reveal">
        <div className="contact-left">
          <span className="eyebrow mono">05 · Navigator.push(context, you)</span>
          <h2>Get in <span className="grad">touch</span></h2>
          <p className="muted">You can reach me through any of these.</p>
          <div className="contact-links">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="c-link" {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <span>{l.icon}</span><div><small>{l.label}</small><b>{l.value}</b></div>
              </a>
            ))}
          </div>
        </div>
        <div className="contact-right">
          <Dash size={200} laptop track className="contact-dash" />
        </div>
      </div>
    </section>
  )
}
