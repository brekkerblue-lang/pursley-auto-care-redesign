import { useState } from 'react'
import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#story', label: 'Our Story' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-void/10 bg-void/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/images/pursley-logo.png"
            alt="Pursley Auto Care LLC logo"
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wide text-cream/80 hover:text-teal-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={business.phoneHref} className="text-sm font-bold uppercase tracking-wide text-cream">
            {business.phone}
          </a>
          <a href="#contact" className="btn-primary">
            Get an Estimate
          </a>
        </div>

        <button
          className="p-2 text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'x' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-void lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-sm font-bold uppercase tracking-wide text-cream/85"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-3" onClick={() => setOpen(false)}>
              Get an Estimate
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
