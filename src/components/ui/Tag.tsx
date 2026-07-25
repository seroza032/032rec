import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  pulse?: boolean
  className?: string
}

export function Tag({ children, pulse = false, className = '' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wide text-foreground/80 ${className}`}
    >
      {pulse && (
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      {children}
    </span>
  )
}
