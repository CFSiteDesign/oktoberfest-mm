/**
 * Hand-built SVG art for the Oktoberfest page.
 * Everything is inline so there are no external asset requests and the
 * marks scale cleanly at any size. Palette is locked to the three brand
 * colours plus the deep-blue ink used for outlines.
 */

const INK = '#04223d'
const BLUE = '#0081f7'
const GOLD = '#ffc100'
const WHITE = '#ffffff'

type ArtProps = {
  className?: string
  title?: string
}

const base = (className?: string) => `select-none ${className ?? ''}`

export const Pretzel = ({ className, title = 'Pretzel' }: ArtProps) => {
  const strokes = [
    'M16 58C10 92 110 92 104 58',
    'M16 58C6 22 46 10 60 34C68 48 74 66 88 80',
    'M104 58C114 22 74 10 60 34C52 48 46 66 32 80',
  ]

  return (
    <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {strokes.map((d) => (
          <path key={`ink-${d}`} d={d} stroke={INK} strokeWidth="16" />
        ))}
        {strokes.map((d) => (
          <path key={`gold-${d}`} d={d} stroke={GOLD} strokeWidth="8" />
        ))}
      </g>
      <g fill={WHITE}>
        <circle cx="30" cy="34" r="2.6" />
        <circle cx="60" cy="24" r="2.6" />
        <circle cx="90" cy="34" r="2.6" />
        <circle cx="44" cy="86" r="2.6" />
        <circle cx="76" cy="86" r="2.6" />
      </g>
    </svg>
  )
}

export const Stein = ({ className, title = 'Beer stein' }: ArtProps) => (
  <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
    {/* handle */}
    <path
      d="M84 52h8a16 16 0 0 1 0 32h-8"
      fill="none"
      stroke={INK}
      strokeWidth="8"
      strokeLinecap="round"
    />
    {/* body */}
    <path d="M24 42h60v54a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8Z" fill={GOLD} stroke={INK} strokeWidth="6" />
    {/* beer level shading */}
    <path d="M24 62h60v34a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8Z" fill={GOLD} opacity="0.55" />
    {/* glass facets */}
    <g stroke={INK} strokeWidth="3" opacity="0.35">
      <path d="M40 44v58M56 44v58M72 44v58" />
    </g>
    {/* foam */}
    <path
      d="M22 42c-2-10 6-14 12-11 1-9 12-12 18-6 4-8 16-8 20 0 7-5 17 0 16 9 8 1 10 8 6 12Z"
      fill={WHITE}
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    {/* drip */}
    <path d="M90 46c4 5 4 10 0 12s-8-3-6-8Z" fill={WHITE} stroke={INK} strokeWidth="4" />
  </svg>
)

export const Hops = ({ className, title = 'Hops' }: ArtProps) => (
  <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
    <path d="M60 26V10" fill="none" stroke={INK} strokeWidth="6" strokeLinecap="round" />
    <path
      d="M60 16c-11-7-19-4-21 3 7 5 16 4 21-3Z"
      fill={BLUE}
      stroke={INK}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M60 24c22 4 34 22 32 42-2 24-18 44-32 46-14-2-30-22-32-46-2-20 10-38 32-42Z"
      fill={GOLD}
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <g fill="none" stroke={INK} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M31 46q14 13 29 0 15 13 29 0" />
      <path d="M30 64q15 13 30 0 15 13 30 0" />
      <path d="M34 82q13 12 26 0 13 12 26 0" />
    </g>
  </svg>
)

export const Bratwurst = ({ className, title = 'Bratwurst' }: ArtProps) => {
  const body = 'M20 42C28 78 62 96 100 84'

  return (
    <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
      <path d={body} fill="none" stroke={INK} strokeWidth="34" strokeLinecap="round" />
      <path d={body} fill="none" stroke={GOLD} strokeWidth="24" strokeLinecap="round" />
      <g fill="none" stroke={INK} strokeWidth="4.5" strokeLinecap="round" opacity="0.85">
        <path d="M22 55l12-6M31 69l10-9M45 80l8-11M62 87l5-12M81 88l1-13" />
      </g>
    </svg>
  )
}

export const Barrel = ({ className, title = 'Beer keg' }: ArtProps) => (
  <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
    <path
      d="M34 22c17-5 35-5 52 0 10 16 10 54 0 70-17 5-35 5-52 0-10-16-10-54 0-70Z"
      fill={GOLD}
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <g stroke={INK} strokeWidth="4" opacity="0.45">
      <path d="M50 20v76M70 20v76" />
    </g>
    <path d="M26 40c23-6 45-6 68 0v10c-23-6-45-6-68 0Z" fill={INK} />
    <path d="M26 66c23 6 45 6 68 0v10c-23 6-45 6-68 0Z" fill={INK} />
    <ellipse cx="60" cy="22" rx="26" ry="7" fill={WHITE} stroke={INK} strokeWidth="5" />
    <g stroke={INK} strokeLinejoin="round" strokeLinecap="round" fill="none">
      <path d="M86 84h12v8h-6v10" strokeWidth="7" />
      <circle cx="98" cy="80" r="5" fill={BLUE} strokeWidth="4" />
    </g>
  </svg>
)

export const GingerHeart = ({ className, title = 'Gingerbread heart' }: ArtProps) => (
  <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
    <path
      d="M60 100C34 82 16 66 16 48c0-14 11-24 24-24 8 0 15 4 20 11 5-7 12-11 20-11 13 0 24 10 24 24 0 18-18 34-44 52Z"
      fill={GOLD}
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <path
      d="M60 90C40 76 26 63 26 49c0-9 7-15 14-15 6 0 12 4 14 10h12c2-6 8-10 14-10 7 0 14 6 14 15 0 14-14 27-34 41Z"
      fill="none"
      stroke={WHITE}
      strokeWidth="4"
      strokeDasharray="6 6"
    />
    <text
      x="60"
      y="62"
      textAnchor="middle"
      fontFamily="Anton, Montserrat, sans-serif"
      fontSize="20"
      fill={INK}
    >
      PROST
    </text>
  </svg>
)

export const Sparkle = ({ className, title = 'Sparkle' }: ArtProps) => (
  <svg viewBox="0 0 120 120" className={base(className)} role="img" aria-label={title}>
    <path
      d="M60 8l12 38 40 14-40 14-12 38-12-38-40-14 40-14Z"
      fill={GOLD}
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
  </svg>
)

/** Bavarian lozenge band, used as a section rule */
export const RautenRule = ({ className }: { className?: string }) => (
  <div
    className={`rauten h-11 w-full border-y-4 border-brand-ink bg-center ${className ?? ''}`}
    aria-hidden="true"
  />
)

export const MadMonkeyWordmark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 420 60" className={className} role="img" aria-label="Mad Monkey Hostels">
    <text
      x="210"
      y="44"
      textAnchor="middle"
      fontFamily="Anton, Montserrat, sans-serif"
      fontSize="46"
      letterSpacing="2"
      fill="currentColor"
    >
      MAD MONKEY
    </text>
  </svg>
)
