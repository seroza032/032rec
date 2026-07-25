import { motion } from 'framer-motion'
import { useLang } from '../hooks/useLang'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTilt } from '../hooks/useTilt'
import { services, type Service } from '../content/services'
import { SectionTitle } from './ui/SectionTitle'

function ServiceCard({ service }: { service: Service }) {
  const { lang } = useLang()
  const { ref, rotateX, rotateY, handlePointerMove, handlePointerLeave } = useTilt(6)

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/60"
    >
      <h3 className="text-xl font-bold uppercase text-foreground">
        {lang === 'ua' ? service.title.ua : service.title.en}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {lang === 'ua' ? service.description.ua : service.description.en}
      </p>
    </motion.div>
  )
}

export function Services() {
  const { lang } = useLang()
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionTitle
          eyebrow={lang === 'ua' ? 'Що ми робимо' : 'What we do'}
          title={lang === 'ua' ? 'Послуги' : 'Services'}
        />
        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
