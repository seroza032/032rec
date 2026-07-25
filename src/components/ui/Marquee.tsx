import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Marquee({ children, speed = 20, className = '' }: MarqueeProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 gap-8">{children}</div>
        <div className="flex shrink-0 gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
