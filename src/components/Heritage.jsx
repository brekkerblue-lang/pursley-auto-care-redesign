import { Icon } from './icons.jsx'
import { heritageFacts } from '../data/heritage.js'

// A section type unique to this entry: a real, documented rebrand story
// (same shop and address, formerly Ayers Automotive, now Pursley Auto
// Care LLC since 2024), shown as a simple timeline rather than folded
// quietly into the About copy.
export default function Heritage() {
  return (
    <section id="story" className="bg-void-800 py-20 text-cream">
      <div className="container-page">
        <p className="eyebrow text-teal-400">New Name, Same Trusted Shop</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold uppercase sm:text-4xl">
          Still the same shop on WA-3
        </h2>
        <p className="mt-4 max-w-2xl text-cream/70">
          If the name sounds new but the building looks familiar, that's
          because it is — this shop operated for years as Ayers Automotive
          before becoming Pursley Auto Care LLC in 2024, at the exact same
          address and phone number.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {heritageFacts.map((f, i) => (
            <div key={f.label} className="relative rounded-md border border-cream/10 bg-void p-6">
              <div className="flex items-center gap-2 text-teal-400">
                <Icon name="calendar" className="h-4 w-4" />
                <p className="font-mono text-xs uppercase tracking-widest">{f.year}</p>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-cream">
                {f.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">{f.detail}</p>
              {i < heritageFacts.length - 1 && (
                <Icon
                  name="arrow"
                  className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-turbo-500 sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
