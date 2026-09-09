import { DAYS } from '@/data/schedule'
import { Pretzel, Bratwurst, Barrel } from '@/components/BavarianArt'
import Float from '@/components/FloatingDecor'

const WeekendSection = () => {
  return (
    <section id="weekend" className="relative overflow-hidden bg-white py-16 md:py-24">
      <Float className="left-1 top-8 w-20 opacity-90 sm:w-28 md:left-6 md:w-36" tilt={-18} variant="float-slow">
        <Pretzel className="w-full" />
      </Float>
      <Float
        className="right-4 top-1/3 hidden w-36 opacity-90 2xl:block"
        tilt={14}
        variant="float"
        delay="0.9s"
      >
        <Bratwurst className="w-full" />
      </Float>
      <Float
        className="bottom-12 left-4 hidden w-28 opacity-90 2xl:block"
        tilt={-6}
        variant="float"
        delay="1.4s"
      >
        <Barrel className="w-full" />
      </Float>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block border-4 border-brand-ink bg-brand-blue px-4 py-1.5 font-display text-xs tracking-[0.24em] text-white poster-shadow-sm">
            The weekend
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[0.9] text-brand-ink sm:text-5xl md:text-6xl">
            Three nights.
            <br />
            <span className="text-brand-blue">One very long weekend.</span>
          </h2>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-brand-ink/75 md:text-base">
            Every night has its own format, its own price and its own way of ending badly. Below is the
            line up as it runs at Mad Monkey Siem Reap. Other hostels run the same three night shape
            with their own timings.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {DAYS.map((day, i) => {
            const featured = i === 1
            return (
              <article
                key={day.id}
                className={`lift flex flex-col border-4 border-brand-ink poster-shadow ${
                  featured ? 'bg-brand-blue text-white' : 'bg-white text-brand-ink'
                }`}
              >
                <div
                  className={`flex items-baseline justify-between border-b-4 border-brand-ink px-5 py-4 ${
                    featured ? 'bg-brand-gold text-brand-ink' : 'bg-brand-ink text-white'
                  }`}
                >
                  <span className="font-display text-2xl tracking-wide">{day.day}</span>
                  <span className="text-xs font-black uppercase tracking-[0.2em]">{day.date}</span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`border-4 border-brand-ink px-3 py-1 font-display text-2xl leading-none ${
                        featured ? 'bg-white text-brand-ink' : 'bg-brand-gold text-brand-ink'
                      }`}
                    >
                      {day.price}
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase tracking-[0.18em] ${
                        featured ? 'text-white/85' : 'text-brand-ink/60'
                      }`}
                    >
                      {day.priceNote}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl leading-tight sm:text-[1.75rem]">
                    {day.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm font-medium leading-relaxed ${
                      featured ? 'text-white/90' : 'text-brand-ink/75'
                    }`}
                  >
                    {day.blurb}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {day.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm font-bold leading-snug">
                        <span
                          aria-hidden="true"
                          className={featured ? 'text-brand-gold' : 'text-brand-blue'}
                        >
                          ◆
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`mt-auto pt-7 text-[10px] font-black uppercase tracking-[0.22em] ${
                      featured ? 'text-white/80' : 'text-brand-ink/55'
                    }`}
                  >
                    {day.doors}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WeekendSection
