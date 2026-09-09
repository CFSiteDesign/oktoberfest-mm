import type { ReactNode } from 'react'

type Variant = 'float' | 'float-slow' | 'clink'

interface FloatProps {
  children: ReactNode
  className?: string
  /** resting rotation in degrees */
  tilt?: number
  variant?: Variant
  delay?: string
  /** drift in normal flow instead of being pinned to the section */
  inline?: boolean
}

// Written out in full so Tailwind's scanner keeps these classes.
const ANIMATION: Record<Variant, string> = {
  float: 'animate-float',
  'float-slow': 'animate-float-slow',
  clink: 'animate-clink',
}

/**
 * Absolutely positioned art that drifts between sections.
 * Purely decorative, hidden from assistive tech and frozen for
 * anyone who prefers reduced motion.
 */
const Float = ({
  children,
  className,
  tilt = 0,
  variant = 'float',
  delay = '0s',
  inline = false,
}: FloatProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none ${inline ? '' : 'absolute'} ${ANIMATION[variant]} ${
      className ?? ''
    }`}
    style={{ ['--tilt' as string]: `${tilt}deg`, animationDelay: delay }}
  >
    {children}
  </div>
)

export default Float
