import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import { studio } from '../content/studio'
import { Button } from './ui/Button'
import { Tag } from './ui/Tag'
import { Marquee } from './ui/Marquee'

function AnimatedHeading({ text }: { text: string }) {
  const reduceMotion = useReducedMotion()
  const words = text.split(' ')

  return (
    <motion.h1
      key={text}
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.03 } } }}
      aria-label={text}
      className="text-6xl font-bold uppercase leading-[0.9] tracking-tight text-foreground sm:text-8xl lg:text-9xl"
    >
      {words.map((word, wi) => (
        <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap last:mr-0">
          {Array.from(word).map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden">
              <motion.span
                aria-hidden="true"
                className="inline-block"
                variants={{
                  hidden: { y: reduceMotion ? 0 : '110%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.h1>
  )
}

export function Hero() {
  const { lang } = useLang()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-start justify-center gap-8 overflow-hidden px-6 pb-20 pt-32"
    >
      <Tag pulse>{lang === 'ua' ? 'Приймаємо записи' : 'Booking open'}</Tag>

      <AnimatedHeading text={lang === 'ua' ? studio.heroTitle.ua : studio.heroTitle.en} />

      <p className="max-w-xl text-lg text-muted">
        {lang === 'ua' ? studio.heroSubtitle.ua : studio.heroSubtitle.en}
      </p>

      <div className="flex flex-wrap gap-4">
        <Button href={studio.telegram} target="_blank" rel="noreferrer" variant="primary" breathing>
          Telegram
        </Button>
        <Button href={studio.instagram} target="_blank" rel="noreferrer" variant="ghost">
          Instagram
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Marquee className="border-t border-white/10 py-4" speed={18}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-xl font-bold uppercase text-foreground/40">
              {studio.name} &middot;
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
