import { motion } from 'framer-motion'
import { useLang } from '../../hooks/useLang'
import { getTelegramBookingUrl } from '../../lib/telegram'

export function FloatingTelegramButton() {
  const { lang } = useLang()

  return (
    <motion.a
      href={getTelegramBookingUrl(lang)}
      target="_blank"
      rel="noreferrer"
      aria-label="Telegram"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 sm:hidden"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M21 4 L2.5 11.5 L9 13.5 L11.5 20.5 L14.5 15.5 L19.5 19 Z M9 13.5 L18 6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </motion.a>
  )
}
