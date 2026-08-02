import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#story', label: 'Our Story' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-void py-14 text-cream">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/images/pursley-logo.png"
            alt="Pursley Auto Care LLC logo"
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            Auto repair on WA-3 in Allyn, WA &mdash; {business.rating} stars
            across {business.reviewCount} Google reviews. Formerly Ayers
            Automotive, now Pursley Auto Care LLC since 2024.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-cream/70 hover:text-teal-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>{business.addressFull}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-teal-400">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="inline-flex items-center gap-1.5 break-all hover:text-teal-400">
                <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/50">Hours</p>
          <ul className="mt-4 space-y-1 text-sm text-cream/70">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className={h.time === 'Closed' ? 'text-cream/40' : ''}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-cream/10 pt-6 text-xs text-cream/50">
        <p>&copy; {new Date().getFullYear()} Pursley Auto Care LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}
