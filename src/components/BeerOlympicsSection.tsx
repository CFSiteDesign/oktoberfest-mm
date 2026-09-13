import { BEER_OLYMPICS } from '@/data/schedule'
import { Stein, Hops, Dings } from '@/components/BavarianArt'
import Float from '@/components/FloatingDecor'
import Kicker from '@/components/Kicker'

const BeerOlympicsSection = () => {
  return (
    <section id="olympics" className="halftone relative overflow-hidden py-16 md:py-24">
      <Float className="bottom-16 left-8 hidden w-40 opacity-95 xl:block" tilt={12} variant="clink">
        <Stein className="w-full" />
      </Float>
      <Float className="right-10 top-12 hidden w-32 opacity-95 xl:block" tilt={-16} variant="float">
        <Hops className="w-full" />
      </Float>

      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <div className="text-center">
          <Kicker>Sat 3 October · Free entry</Kicker>
          <h2 className="mt-6 font-display text-4xl leading-[0.9] text-white text-outline-sm sm:text-5xl md:text-6xl">
            Beer Olympics
          </h2>
          <p className="mx-auto mt-6 max-w-xl border-4 border-brand-ink bg-brand-ink px-5 py-4 text-sm font-semibold leading-relaxed text-white poster-shadow-gold md:text-base">
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
            </li>
          ))}
        </ol>

        <p className="mt-8 flex items-center justify-center gap-1 text-center text-[10px] font-black uppercase tracking-[0.14em] text-white sm:tracking-[0.24em] md:text-xs">
          <Dings className="h-6 w-6 shrink-0 text-brand-ink" />
          <span className="bg-brand-ink px-3 py-1.5">Last one standing takes the big beer</span>
          <Dings flip className="h-6 w-6 shrink-0 text-brand-ink" />
        </p>
      </div>
    </section>
  )
}

export default BeerOlympicsSection
