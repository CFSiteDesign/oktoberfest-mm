import type { ReactNode } from 'react'
import { Dings } from '@/components/BavarianArt'

// Below 360px the dings would push the longest label past the viewport, so they drop out
const DING = 'hidden h-7 w-7 shrink-0 min-[360px]:block md:h-8 md:w-8'

/** Section label styled as an ALL IN sticker, with ding marks either side */
const Kicker = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 text-brand-ink">
    <Dings className={DING} />
    <span className="sticker">{children}</span>
    <Dings flip className={DING} />
  </span>
)

export default Kicker
