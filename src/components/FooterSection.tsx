import { Stein } from '@/components/BavarianArt'
import { ALL_EVENTS_URL, BOOK_URL } from '@/data/properties'
import wristband from '@/assets/oktoberfest-wristband.webp'
import allInLogo from '@/assets/all-in-logo.webp'
import madMonkeyLogo from '@/assets/mad-monkey-logo-white.webp'

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
      {/* the event wristband artwork, used as-is as the footer band */}
      <div className="border-b-4 border-brand-ink bg-brand-blue">
        <img
          src={wristband}
          alt=""
          aria-hidden="true"
          width={2148}
          height={123}
          loading="lazy"
          className="block h-12 w-full object-cover object-left sm:h-16 lg:h-auto"
        />
      </div>

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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12">
          <div className="flex items-center gap-6 md:gap-10">
            <img
              src={allInLogo}
              alt="ALL IN"
              width={520}
              height={357}
              loading="lazy"
              className="h-14 w-auto -rotate-6 md:h-20"
            />
            <span aria-hidden="true" className="h-12 w-1 bg-white/25 md:h-16" />
            <img
              src={madMonkeyLogo}
              alt="Mad Monkey Hostels"
              width={640}
              height={186}
              loading="lazy"
              className="h-10 w-auto md:h-14"
            />
          </div>

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
            © 2026 Mad Monkey Hostels · ALL IN Oktoberfest · 2 to 4 October 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
