import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import { galleryPhotos, type GalleryPhoto } from '../content/gallery'
import { SectionTitle } from './ui/SectionTitle'

function GalleryTile({ photo, index }: { photo: GalleryPhoto; index: number }) {
  const { lang } = useLang()

  return (
    <>
      {photo.src && (
        <>
          <img
            src={photo.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </>
      )}
      <div className="relative">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="mt-2 text-xl font-bold uppercase text-foreground">
          {lang === 'ua' ? photo.caption.ua : photo.caption.en}
        </p>
      </div>
    </>
  )
}

export function Gallery() {
  const { lang } = useLang()
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    function measure() {
      if (!trackRef.current) return
      setScrollDistance(Math.max(trackRef.current.scrollWidth - window.innerWidth, 0))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (activeIndex === null) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  const cardClass =
    'relative flex h-[420px] w-[300px] shrink-0 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 text-left transition-colors hover:border-accent/60 sm:h-[520px] sm:w-[380px]'

  const cards = galleryPhotos.map((photo, i) => (
    <button key={photo.id} type="button" onClick={() => setActiveIndex(i)} className={cardClass}>
      <GalleryTile photo={photo} index={i} />
    </button>
  ))

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative"
      style={reduceMotion ? undefined : { height: `${galleryPhotos.length * 60 + 100}vh` }}
    >
      <div
        className={
          reduceMotion
            ? 'px-6 py-24'
            : 'sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden px-6'
        }
      >
        <SectionTitle eyebrow={lang === 'ua' ? 'Місце' : 'The place'} title={lang === 'ua' ? 'Галерея' : 'Gallery'} />
        {reduceMotion ? (
          <div className="flex gap-6 overflow-x-auto pb-4">{cards}</div>
        ) : (
          <motion.div ref={trackRef} style={{ x }} className="flex gap-6">
            {cards}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex aspect-[4/5] w-full max-w-md flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={lang === 'ua' ? 'Закрити' : 'Close'}
                className="absolute right-4 top-4 z-10 rounded-full border border-white/20 px-3 py-1 font-mono text-xs uppercase text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                ×
              </button>
              <GalleryTile photo={galleryPhotos[activeIndex]} index={activeIndex} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
