import { motion } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { pricing, pricingNote } from '../content/pricing'
import { SectionTitle } from './ui/SectionTitle'

export function Pricing() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <SectionTitle
          eyebrow={lang === 'ua' ? 'Скільки коштує' : 'How much'}
          title={lang === 'ua' ? 'Ціни' : 'Pricing'}
        />
        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {pricing.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 ${
                tier.popular ? 'border-accent bg-accent/[0.06]' : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-6 rounded-full border border-accent bg-background px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
                  {lang === 'ua' ? 'популярне' : 'popular'}
                </span>
              )}
              <h3 className="text-lg font-bold uppercase text-foreground">
                {lang === 'ua' ? tier.title.ua : tier.title.en}
              </h3>
              <p className="mt-4 font-mono text-3xl font-bold text-foreground">
                {lang === 'ua' ? tier.price.ua : tier.price.en}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                {lang === 'ua' ? tier.unit.ua : tier.unit.en}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="font-mono text-xs text-muted">{lang === 'ua' ? pricingNote.ua : pricingNote.en}</p>
      </div>
    </section>
  )
}
