import type { Localized } from './types'

export interface Service {
  id: string
  title: Localized<string>
  description: Localized<string>
}

export const services: Service[] = [
  {
    id: 'vocal',
    title: { ua: 'Запис вокалу', en: 'Vocal recording' },
    description: {
      ua: 'Опис послуги буде додано',
      en: 'Service description coming soon',
    },
  },
  {
    id: 'mixing',
    title: { ua: 'Зведення', en: 'Mixing' },
    description: {
      ua: 'Опис послуги буде додано',
      en: 'Service description coming soon',
    },
  },
  {
    id: 'mastering',
    title: { ua: 'Мастеринг', en: 'Mastering' },
    description: {
      ua: 'Опис послуги буде додано',
      en: 'Service description coming soon',
    },
  },
  {
    id: 'rental',
    title: { ua: 'Оренда студії', en: 'Studio rental' },
    description: {
      ua: 'Опис послуги буде додано',
      en: 'Service description coming soon',
    },
  },
  {
    id: 'production',
    title: { ua: 'Продакшн', en: 'Production' },
    description: {
      ua: 'Опис послуги буде додано',
      en: 'Service description coming soon',
    },
  },
]
