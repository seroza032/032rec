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
      ua: 'Запишемо голос так, щоб він звучав як хіт, а не як голосове в чаті.',
      en: "We'll record your vocals to sound like a hit, not a voice memo.",
    },
  },
  {
    id: 'mixing',
    title: { ua: 'Зведення', en: 'Mixing' },
    description: {
      ua: 'Баланс, простір, характер — зводимо трек так, щоб він грав на будь-яких колонках.',
      en: 'Balance, space, character — we mix your track to hit on any speakers.',
    },
  },
  {
    id: 'mastering',
    title: { ua: 'Мастеринг', en: 'Mastering' },
    description: {
      ua: 'Останній штрих перед релізом: гучність, чіткість і готовність для стрімінгів.',
      en: 'The final touch before release: loudness, clarity, streaming-ready.',
    },
  },
  {
    id: 'rental',
    title: { ua: 'Оренда студії', en: 'Studio rental' },
    description: {
      ua: 'Своя сесія, своя команда, наше обладнання. Оренда студії погодинно.',
      en: 'Your session, your crew, our gear. Studio rental by the hour.',
    },
  },
  {
    id: 'production',
    title: { ua: 'Продакшн', en: 'Production' },
    description: {
      ua: 'Біти, аранжування, продакшн під ключ — від ідеї до готового треку.',
      en: 'Beats, arrangement, full production — from idea to finished track.',
    },
  },
]
