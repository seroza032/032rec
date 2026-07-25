import type { Localized } from './types'

export interface PricingTier {
  id: string
  title: Localized<string>
  price: Localized<string>
  unit: Localized<string>
  popular?: boolean
}

export const pricing: PricingTier[] = [
  {
    id: 'hourly',
    title: { ua: 'Погодинно', en: 'Hourly' },
    price: { ua: 'Ціна уточнюється', en: 'Price TBD' },
    unit: { ua: 'за годину', en: 'per hour' },
  },
  {
    id: 'package',
    title: { ua: 'Пакет 10 год', en: '10-hour package' },
    price: { ua: 'Ціна уточнюється', en: 'Price TBD' },
    unit: { ua: 'вигідніше погодинного', en: 'better value than hourly' },
    popular: true,
  },
]

export const pricingNote: Localized<string> = {
  ua: 'Знижки для постійних клієнтів обговорюються індивідуально',
  en: 'Discounts for regular clients are discussed individually',
}
