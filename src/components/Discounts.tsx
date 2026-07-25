import { motion } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { discounts } from '../content/discounts'
import { SectionTitle } from './ui/SectionTitle'
import { Icon } from './ui/Icon'

export function Discounts() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="discounts" className="px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <SectionTitle
          eyebrow={lang === 'ua' ? 'Вигідно' : 'Worth it'}
          title={lang === 'ua' ? 'Знижки' : 'Discounts'}
        />
        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {discounts.map((discount, i) => (
            <motion.div
              key={discount.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-accent bg-accent/[0.06] p-8"
            >
              <Icon name={discount.icon} className="text-3xl text-accent" />
              <h3 className="mt-4 text-lg font-bold uppercase text-foreground">
                {lang === 'ua' ? discount.title.ua : discount.title.en}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {lang === 'ua' ? discount.description.ua : discount.description.en}
              </p>
              <p className="mt-5 font-mono text-lg font-bold text-accent">
                {lang === 'ua' ? discount.value.ua : discount.value.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
