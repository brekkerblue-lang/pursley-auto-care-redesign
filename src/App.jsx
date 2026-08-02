import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Heritage from './components/Heritage.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// Structure intentionally varies again from every earlier entry in this
// portfolio: Hero is dark and logo-forward (built around this business's
// real graphic logo, the first in the series to have one) rather than a
// full-bleed photo or split layout; Services is a row-list rather than a
// card grid, accordion, or numbered list; Heritage is a brand-new section
// type unique to this entry, telling the real, documented story of this
// shop's 2024 rebrand from Ayers Automotive to Pursley Auto Care LLC;
// Reviews is a small spotlight of three large, fully-read review cards
// rather than a dense multi-quote wall.
export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Services />
        <Heritage />
        <About />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
