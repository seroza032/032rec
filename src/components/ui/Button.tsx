import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'ghost'
  breathing?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
  children: ReactNode
  ariaLabel?: string
}

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
  primary: 'bg-accent text-accent-foreground hover:bg-accent/90',
  ghost: 'border border-white/20 text-foreground hover:border-accent hover:text-accent',
}

export function Button({
  variant = 'primary',
  breathing = false,
  type = 'button',
  onClick,
  href,
  target,
  rel,
  className = '',
  children,
  ariaLabel,
}: ButtonProps) {
  const reduceMotion = useReducedMotion()
  const idle = breathing && !reduceMotion ? { scale: [1, 1.03, 1] } : undefined
  const idleTransition =
    breathing && !reduceMotion
      ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' as const }
      : { type: 'spring' as const, stiffness: 400, damping: 20 }

  const sharedProps = {
    className: `${base} ${variants[variant]} ${className}`,
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    animate: idle,
    transition: idleTransition,
    'aria-label': ariaLabel,
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  )
}
