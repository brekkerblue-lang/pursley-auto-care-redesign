import { Icon } from './icons.jsx'
import { business } from '../data/business.js'

// A new hero pattern for this portfolio: dark and logo-forward rather than
// a full-bleed storefront photo, because this is the first business in the
// series with a real graphic logo mark (a turbocharger design on solid
// black) to build the page around.
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-void">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-turbo-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-teal-700/20 blur-3xl" />

      <div className="container-page relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow text-teal-400">Allyn, Washington &middot; WA-3</p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-cream sm:text-5xl">
            Straight answers before a single bolt gets turned.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Pursley Auto Care looked over one customer's car for no charge
            just to explain what was actually wrong before any work began.
            That's the shop, in one story.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get an Estimate
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href={business.phoneHref}
              className="btn-outline border-cream/40 text-cream hover:bg-cream hover:text-void"
            >
              <Icon name="phone" className="h-4 w-4" />
              {business.phone}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/10 pt-8">
            <div className="flex items-center gap-2">
              <div className="flex text-teal-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="font-mono text-sm text-cream">
                {business.rating} &middot; {business.reviewCount} Google reviews
              </span>
            </div>
            <div className="flex items-center gap-2 text-cream/80">
              <Icon name="map-pin" className="h-5 w-5 text-teal-400" />
              <span className="font-mono text-sm">{business.addressFull}</span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-turbo-700/20 blur-2xl" />
          <img
            src="/images/pursley-logo.png"
            alt="Pursley Auto Care LLC logo — a turbocharger mark, established 2024"
            className="relative w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
