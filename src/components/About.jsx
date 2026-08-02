import { Icon } from './icons.jsx'
import { aboutQuote, aboutQuoteAttribution, aboutParagraphs } from '../data/about.js'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src="/images/pursley-storefront.jpg"
            alt="The shop building at 18271 WA-3 in Allyn, WA, still showing its previous Ayers Automotive signage"
            className="w-full rounded-md border border-void/10 object-cover shadow-xl"
          />
          <p className="mt-3 text-xs text-void/50">
            The shop's real building on WA-3 — photographed with its
            previous Ayers Automotive signage still in place.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Rich &amp; Megan</p>
          <h2 className="section-title mt-3">Run by people who answer their own reviews</h2>

          <div className="mt-6 space-y-4">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-void/75">
                {p}
              </p>
            ))}
          </div>

          <blockquote className="mt-8 rounded-md border-l-4 border-teal-500 bg-teal-50 py-4 pl-6 pr-4">
            <div className="flex items-start gap-3">
              <Icon name="quote" className="mt-1 h-6 w-6 shrink-0 text-teal-500" />
              <div>
                <p className="italic text-void">{aboutQuote}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wide text-teal-700">
                  &mdash; {aboutQuoteAttribution}
                </p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
