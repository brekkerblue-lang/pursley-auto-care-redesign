import { Icon } from './icons.jsx'
import { missionLine, services } from '../data/services.js'

// A row-list layout -- deliberately different from this portfolio's prior
// card grids, accordions, and numbered lists.
export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container-page">
        <p className="eyebrow">What We Fix</p>
        <h2 className="section-title mt-3 max-w-2xl">Every service, backed by a real review</h2>
        <p className="mt-4 max-w-2xl text-void/70">{missionLine}</p>

        <div className="mt-12 divide-y divide-void/10 border-y border-void/10">
          {services.map((s) => (
            <div key={s.title} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-turbo-500 text-cream">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-void">{s.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-void/70">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
