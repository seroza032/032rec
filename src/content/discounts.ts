import type { Localized } from './types'

export interface Discount {
  id: string
  icon: string
  title: Localized<string>
  description: Localized<string>
  value: Localized<string>
}

export const discounts: Discount[] = [
  {
    id: 'bonus-hour',
    icon: 'card_giftcard',
    title: { ua: 'Година в подарунок', en: 'A free hour on us' },
    description: {
      ua: 'Запишись на 4 години — 1 годину отримаєш безкоштовно. Більше часу на пісню, менше — на думки про бюджет.',
      en: 'Book 4 hours, get 1 hour free. More time for the song, less time worrying about the budget.',
    },
    value: { ua: '1 год у подарунок', en: '1 hour free' },
  },
  {
    id: 'newcomer-discount',
    icon: 'local_offer',
    title: { ua: 'Знижка новачкам', en: 'First-timer discount' },
    description: {
      ua: 'Записуєшся вперше? Отримай знижку на перше зведення та мастерінг — спробуй якісний звук без переплат.',
      en: 'Recording for the first time? Get a discount on your first mixing & mastering — try quality sound without overpaying.',
    },
    value: { ua: '-20% на перше зведення та мастерінг', en: '-20% on your first mixing & mastering' },
  },
]
