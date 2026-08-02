import { Icon } from './icons.jsx'
import { business } from '../data/business.js'
import { summaryHighlights, featuredReviews } from '../data/testimonials.js'

// A small spotlight of large, fully-read review cards -- different from
// the dense multi-quote "wall" grid used elsewhere in this portfolio.
export default function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Featured Reviews</p>
            <h2 className="section-title mt-3">What customers on WA-3 actually say</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-turbo-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-mono text-sm text-void/70">
              {business.rating} &middot; {business.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {summaryHighlights.map((h) => (
            <p
              key={h}
              className="rounded-md border border-turbo-200 bg-turbo-50 px-4 py-2 text-sm italic text-turbo-800"
            >
              &ldquo;{h}&rdquo;
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredReviews.map((r) => (
            <div key={r.name} className="flex flex-col rounded-md border border-void/10 bg-cream-100 p-6">
              <Icon name="quote" className="h-6 w-6 text-turbo-400" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-void/85">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-5 border-t border-void/10 pt-4">
                <p className="font-bold text-void">{r.name}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-void/50">
                  {r.source} &middot; {r.when}
                </p>
              </div>
              {r.ownerResponse && (
                <div className="mt-4 rounded-md bg-teal-50 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-teal-700">
                    Owner replied
                  </p>
                  <p className="mt-1 text-xs italic leading-relaxed text-teal-800">
                    &ldquo;{r.ownerResponse}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
