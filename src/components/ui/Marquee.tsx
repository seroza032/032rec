import { Children, type ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Marquee({ children, speed = 20, className = '' }: MarqueeProps) {
  const items = Children.toArray(children)

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((child, i) => (
          <div key={`a-${i}`} className="mr-8 shrink-0">
            {child}
          </div>
        ))}
        <div aria-hidden="true" className="contents">
          {items.map((child, i) => (
            <div key={`b-${i}`} className="mr-8 shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
