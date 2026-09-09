import { Pretzel, Stein, Hops, Barrel, RautenRule, Sparkle } from '@/components/BavarianArt'
import Float from '@/components/FloatingDecor'
import { BOOK_URL } from '@/data/properties'

/** Marks that drift along the bottom of the hero on anything narrower than xl */
const BAND = [
  { key: 'pretzel', node: <Pretzel className="w-full" />, tilt: -10, variant: 'float' as const, delay: '0s' },
  { key: 'stein-l', node: <Stein className="w-full" />, tilt: 8, variant: 'clink' as const, delay: '0.5s' },
  { key: 'barrel', node: <Barrel className="w-full" />, tilt: -4, variant: 'float-slow' as const, delay: '1s' },
  { key: 'stein-r', node: <Stein className="w-full -scale-x-100" />, tilt: -8, variant: 'clink' as const, delay: '1.4s' },
  { key: 'hops', node: <Hops className="w-full" />, tilt: 12, variant: 'float' as const, delay: '0.8s' },
]

const HeroSection = () => {
  return (
    <header className="relative overflow-hidden bg-brand-blue">
      <RautenRule className="border-t-0" />

      {/* Wide screens have room in the margins for full size steins */}
      <Float className="left-8 top-28 hidden w-52 xl:block" tilt={-14} variant="clink">
        <Stein className="w-full drop-shadow-[6px_6px_0_rgba(4,34,61,0.25)]" />
      </Float>
      <Float
        className="right-8 top-40 hidden w-52 xl:block"
        tilt={12}
        variant="clink"
        delay="0.8s"
      >
        <Stein className="w-full -scale-x-100 drop-shadow-[6px_6px_0_rgba(4,34,61,0.25)]" />
      </Float>
      <Float className="bottom-16 left-12 hidden w-32 xl:block" tilt={-8} variant="float-slow" delay="1.2s">
        <Pretzel className="w-full" />
      </Float>
      <Float className="bottom-16 right-16 hidden w-28 xl:block" tilt={16} variant="float" delay="0.4s">
        <Hops className="w-full" />
      </Float>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 py-14 text-center md:py-20 xl:py-24">
        <p className="inline-flex items-center gap-2 border-4 border-brand-ink bg-brand-gold px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-ink poster-shadow-sm sm:tracking-[0.28em] md:text-xs">
          <Sparkle className="h-3 w-3" />
          Mad Monkey Hostels presents
          <Sparkle className="h-3 w-3" />
        </p>

        <h1 className="mt-8 font-display leading-[0.82] text-white">
          <span className="block text-[20vw] text-outline drop-shadow-[10px_10px_0_hsl(var(--brand-gold))] sm:text-[16vw] md:text-[8.5rem] xl:text-[10.5rem]">
            OKTOBER
          </span>
          <span className="mt-2 block text-[20vw] text-brand-gold text-outline drop-shadow-[10px_10px_0_rgba(4,34,61,0.35)] sm:text-[16vw] md:text-[8.5rem] xl:text-[10.5rem]">
            FEST
          </span>
        </h1>

        <div className="mt-8 w-full max-w-2xl border-4 border-brand-ink bg-white px-4 py-3 poster-shadow">
          <p className="font-display text-lg tracking-[0.08em] text-brand-ink sm:text-2xl sm:tracking-[0.12em] md:text-3xl">
            Fri 2 <span className="text-brand-blue">·</span> Sat 3{' '}
            <span className="text-brand-blue">·</span> Sun 4 October 2026
          </p>
        </div>

        <p className="mt-7 max-w-xl text-sm font-semibold leading-relaxed text-white/95 sm:text-base md:text-lg">
          Three nights of free flow steins, a Beer Olympics nobody wins with dignity, and a pub crawl
          that refuses to end. Running across Mad Monkey hostels in Southeast Asia.
        </p>

        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#hostels"
            className="lift border-4 border-brand-ink bg-brand-gold px-8 py-4 text-center font-display text-lg tracking-wider text-brand-ink poster-shadow"
          >
            Find your hostel
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lift border-4 border-brand-ink bg-white px-8 py-4 text-center font-display text-lg tracking-wider text-brand-ink poster-shadow"
          >
            Book a bed
          </a>
        </div>

        {/* Below xl the margins are gone, so the art becomes a band instead */}
        <div className="mt-10 flex items-end justify-center gap-4 sm:gap-7 xl:hidden">
          {BAND.map((mark) => (
            <Float
              key={mark.key}
              inline
              tilt={mark.tilt}
              variant={mark.variant}
              delay={mark.delay}
              className="w-12 shrink-0 sm:w-16 md:w-20"
            >
              {mark.node}
            </Float>
          ))}
        </div>

        <p className="mt-9 text-[10px] font-black uppercase tracking-[0.24em] text-white/80 sm:tracking-[0.3em] md:text-xs">
          Open to guests and non guests · Lederhosen encouraged
        </p>
      </div>

      <RautenRule className="border-b-0" />
    </header>
  )
}

export default HeroSection
