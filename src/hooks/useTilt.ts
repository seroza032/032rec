import { useRef, type PointerEvent } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 300, damping: 20 })
  const rotateY = useSpring(rawRotateY, { stiffness: 300, damping: 20 })

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rawRotateY.set(px * maxTilt * 2)
    rawRotateX.set(-py * maxTilt * 2)
  }

  const handlePointerLeave = () => {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }

  return { ref, rotateX, rotateY, handlePointerMove, handlePointerLeave }
}
