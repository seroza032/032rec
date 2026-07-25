import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export function CursorBlob() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 })
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 })

  useEffect(() => {
    if (reduceMotion) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [reduceMotion, x, y])

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-xl md:block"
      style={{ x: springX, y: springY }}
    />
  )
}
