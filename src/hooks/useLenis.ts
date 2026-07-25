import { useEffect } from 'react'
import Lenis from 'lenis'

const NAV_OFFSET = -80

export function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    let frameId: number
    function raf(time: number) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: NAV_OFFSET })
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])
}
