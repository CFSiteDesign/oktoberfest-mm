import { useMemo, useState } from 'react'
import { COUNTRIES, PROPERTIES, type CountryFilter } from '@/data/properties'
import { GingerHeart, Pretzel } from '@/components/BavarianArt'
import Float from '@/components/FloatingDecor'
import Kicker from '@/components/Kicker'

const PropertySelector = () => {
  const [filter, setFilter] = useState<CountryFilter>('All')

  const visible = useMemo(
    () => (filter === 'All' ? PROPERTIES : PROPERTIES.filter((p) => p.country === filter)),
    [filter],
  )

  return (
    <section id="hostels" className="relative overflow-hidden bg-white py-16 md:py-24">
      <Float className="left-4 top-24 hidden w-28 opacity-90 2xl:block" tilt={-12} variant="float">
        <GingerHeart className="w-full" />
      </Float>
      <Float
        className="bottom-28 right-4 hidden w-28 opacity-90 2xl:block"
        tilt={14}
        variant="float-slow"
        delay="0.7s"
      >
        <Pretzel className="w-full" />
      </Float>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Kicker>Pick your Monkey</Kicker>
          <h2 className="mt-6 font-display text-4xl leading-[0.9] text-brand-ink sm:text-5xl md:text-6xl">
            Where are you
            <br />
            <span className="text-brand-blue">drinking?</span>
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-brand-ink/75 md:text-base">
            Choose your hostel to book your Oktoberfest spot. Booking opens soon for every property,
            so check back here.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COUNTRIES.map((country) => {
            const active = country === filter
            return (
              <button
                key={country}
                type="button"
                onClick={() => setFilter(country)}
                aria-pressed={active}
                className={`border-4 border-brand-ink px-4 py-2 font-display text-sm tracking-[0.14em] transition-colors ${
                  active
                    ? 'bg-brand-ink text-brand-gold'
                    : 'bg-white text-brand-ink hover:bg-brand-gold'
                }`}
              >
                {country}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((property) => {
            // A hostel goes live as soon as its Stripe link is added in src/data/properties.ts
            const live = Boolean(property.url)
            const card =
              'flex items-center justify-between gap-4 border-4 border-brand-ink bg-white px-5 py-5 poster-shadow-sm'
            const body = (
              <>
                <span>
                  <span className="block font-display text-xl leading-tight text-brand-ink sm:text-2xl">
                    {property.name}
                  </span>
                  <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink/55">
                    {property.country}
                  </span>
                </span>
                <span
                  className={`shrink-0 border-4 border-brand-ink px-3 py-1.5 text-center text-[10px] font-black uppercase leading-tight tracking-[0.14em] ${
                    live ? 'bg-brand-gold text-brand-ink' : 'bg-brand-ink text-white'
                  }`}
                >
                  {live ? 'Get access' : 'Coming soon'}
                </span>
              </>
            )

            return live ? (
              <a
                key={property.id}
                href={property.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`lift ${card}`}
              >
                {body}
              </a>
            ) : (
              <div key={property.id} className={`${card} cursor-not-allowed`}>
                {body}
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-[10px] font-black uppercase tracking-[0.22em] text-brand-ink/50 md:text-xs">
          Timings and pricing set by each property
        </p>
      </div>
    </section>
  )
}

export default PropertySelector
