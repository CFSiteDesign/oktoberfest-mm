import { MadMonkeyWordmark, RautenRule, Stein } from '@/components/BavarianArt'
import { ALL_EVENTS_URL, BOOK_URL } from '@/data/properties'

const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/madmonkeyhostels/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@madmonkeyhostels' },
  { name: 'Facebook', url: 'https://www.facebook.com/MadMonkeyHostels' },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw' },
  { name: 'Website', url: 'https://madmonkeyhostels.com' },
]

const FooterSection = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <RautenRule className="border-t-0" />

      {/* final call to action */}
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center md:py-20">
        <Stein className="w-24 animate-clink md:w-28" />
        <h2 className="mt-6 font-display text-4xl leading-[0.9] text-white sm:text-5xl md:text-6xl">
          Steins up.
          <br />
          <span className="text-brand-gold">See you on the 2nd.</span>
        </h2>
        <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#hostels"
            className="lift border-4 border-white bg-brand-gold px-8 py-4 text-center font-display text-lg tracking-wider text-brand-ink"
            style={{ boxShadow: '8px 8px 0 0 #0081f7' }}
          >
            Find your hostel
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lift border-4 border-white bg-white px-8 py-4 text-center font-display text-lg tracking-wider text-brand-ink"
            style={{ boxShadow: '8px 8px 0 0 #0081f7' }}
          >
            Book a bed
          </a>
        </div>
      </div>

      <div className="border-t-4 border-white/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 py-12">
          <MadMonkeyWordmark className="w-56 text-white md:w-72" />

          <nav className="flex flex-wrap justify-center gap-3">
            {[...SOCIALS, { name: 'All events', url: ALL_EVENTS_URL }].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors hover:border-brand-gold hover:text-brand-gold md:text-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] text-white/45 md:text-[10px]">
            © 2026 Mad Monkey Hostels · Oktoberfest · 2 to 4 October 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
