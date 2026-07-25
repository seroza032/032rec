import { studio } from '../content/studio'
import type { Lang } from '../hooks/useLang'

export function getTelegramBookingUrl(lang: Lang) {
  const message = lang === 'ua' ? studio.bookingMessage.ua : studio.bookingMessage.en
  return `${studio.telegram}?text=${encodeURIComponent(message)}`
}
