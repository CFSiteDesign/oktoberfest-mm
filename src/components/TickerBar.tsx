interface TickerBarProps {
  items?: string[]
  tone?: 'gold' | 'blue'
  speed?: 'normal' | 'slow'
}

const DEFAULT_ITEMS = [
  'PROST!',
  'FREE FLOW BEER',
  'BEER OLYMPICS',
  'STEIN HOLDING',
  'BBQ + PUB CRAWL',
  'KARAOKE',
  'PUB QUIZ',
  'LEDERHOSEN OPTIONAL',
]

const TickerBar = ({ items = DEFAULT_ITEMS, tone = 'gold', speed = 'normal' }: TickerBarProps) => {
  const surface =
    tone === 'gold' ? 'bg-brand-gold text-brand-ink' : 'bg-brand-blue text-white'
  const dot = tone === 'gold' ? 'text-brand-blue' : 'text-brand-gold'
  const animation = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
  const track = [...items, ...items]

  return (
    <div className={`relative overflow-hidden border-y-4 border-brand-ink py-3 ${surface}`}>
      <div className={`flex w-max ${animation}`}>
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center font-display text-base tracking-[0.16em] sm:text-xl"
          >
            {item}
            <span className={`mx-6 ${dot}`} aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TickerBar
