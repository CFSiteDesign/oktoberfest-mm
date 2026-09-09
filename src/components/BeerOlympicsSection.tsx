import { BEER_OLYMPICS } from '@/data/schedule'
import { Stein, Hops, Sparkle } from '@/components/BavarianArt'
import Float from '@/components/FloatingDecor'

const BeerOlympicsSection = () => {
  return (
    <section id="olympics" className="relative overflow-hidden bg-brand-blue py-16 md:py-24">
      <div className="rauten absolute inset-0 opacity-[0.13]" aria-hidden="true" />

      <Float className="bottom-16 left-8 hidden w-40 opacity-95 xl:block" tilt={12} variant="clink">
        <Stein className="w-full" />
      </Float>
      <Float className="right-10 top-12 hidden w-32 opacity-95 xl:block" tilt={-16} variant="float">
        <Hops className="w-full" />
      </Float>

      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="inline-block border-4 border-brand-ink bg-brand-gold px-4 py-1.5 font-display text-xs tracking-[0.24em] text-brand-ink poster-shadow-sm">
            Saturday 3 October · Free entry
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.9] text-white text-outline-sm sm:text-5xl md:text-6xl">
            Beer Olympics
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm font-semibold leading-relaxed text-white/90 md:text-base">
            Pick a team, pick a name, then defend it through six events of increasingly poor decision
            making. Prizes for the winners, stories for everyone else.
          </p>
        </div>

        <ol className="mt-12 border-4 border-brand-ink bg-white poster-shadow">
          {BEER_OLYMPICS.map((event, i) => (
            <li
              key={event.name}
              className={`flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7 ${
                i > 0 ? 'border-t-4 border-brand-ink' : ''
              }`}
            >
              <span className="shrink-0 border-4 border-brand-ink bg-brand-gold px-3 py-1 text-center font-display text-base tracking-wider text-brand-ink sm:w-32 sm:text-lg">
                {event.time}
              </span>
              <span className="flex-1">
                <span className="block font-display text-xl leading-tight text-brand-ink sm:text-2xl">
                  {event.name}
                </span>
                <span className="mt-1 block text-sm font-semibold text-brand-ink/65">
                  {event.note}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="hidden shrink-0 font-display text-2xl text-brand-blue/35 sm:block"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-[10px] font-black uppercase tracking-[0.24em] text-white/85 md:text-xs">
          <Sparkle className="h-3 w-3" />
          Last one standing takes the big beer
          <Sparkle className="h-3 w-3" />
        </p>
      </div>
    </section>
  )
}

export default BeerOlympicsSection
