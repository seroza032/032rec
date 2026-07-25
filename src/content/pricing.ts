import type { Localized } from './types'

export interface PricingTier {
  id: string
  title: Localized<string>
  price: string
  unit: Localized<string>
  popular?: boolean
}

export const pricing: PricingTier[] = [
  {
    id: 'hourly',
    title: { ua: 'Погодинно', en: 'Hourly' },
    price: '—',
    unit: { ua: 'грн/год', en: 'UAH/hour' },
  },
  {
    id: 'package',
    title: { ua: 'Пакет 10 год', en: '10-hour package' },
    price: '—',
    unit: { ua: 'грн', en: 'UAH' },
    popular: true,
  },
]

export const pricingNote: Localized<string> = {
  ua: 'Знижки для постійних клієнтів обговорюються індивідуально',
  en: 'Discounts for regular clients are discussed individually',
}
