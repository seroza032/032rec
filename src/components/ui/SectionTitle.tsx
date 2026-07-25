import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({ eyebrow, title, align = 'left', className = '' }: SectionTitleProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5 }}
          className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl"
      >
        {title}
      </motion.h2>
    </div>
  )
}
