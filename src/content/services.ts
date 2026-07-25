import type { Localized } from './types'

export interface Service {
  id: string
  icon: string
  title: Localized<string>
  description: Localized<string>
  price: Localized<string>
  note?: Localized<string>
}

export const services: Service[] = [
  {
    id: 'recording',
    icon: 'mic',
    title: { ua: 'Запис треку', en: 'Track recording' },
    description: {
      ua: 'Приходь з ідеєю — виходь з готовою піснею. Професійне обладнання та атмосфера, де хочеться творити, а не нервувати.',
      en: 'Come in with an idea, walk out with a finished song. Professional gear and a vibe that makes you want to create, not stress.',
    },
    price: { ua: '700 грн/год', en: '700 UAH/hour' },
  },
  {
    id: 'mixing-mastering',
    icon: 'tune',
    title: { ua: 'Зведення та мастерінг', en: 'Mixing & mastering' },
    description: {
      ua: 'Зробимо так, щоб трек звучав потужно і в навушниках, і в колонці на всю гучність. Чисто, соковито, готово до релізу.',
      en: "We'll make your track hit hard in headphones and on a speaker at full volume. Clean, punchy, release-ready.",
    },
    price: { ua: '3000–3500 грн', en: '3000–3500 UAH' },
    note: {
      ua: 'Хочеш бути присутнім особисто? +1000 грн/год',
      en: 'Want to sit in on the session? +1000 UAH/hour',
    },
  },
  {
    id: 'lyrics',
    icon: 'edit',
    title: { ua: 'Напишемо текст під твій інструментал', en: 'Lyrics for your beat' },
    description: {
      ua: 'Є біт, але немає слів? Відчуємо настрій твоєї музики і підберемо текст, який ляже точно в кожну ноту.',
      en: "Got a beat but no words? We'll catch the mood of your track and write lyrics that land on every note.",
    },
    price: { ua: '3000 грн', en: '3000 UAH' },
  },
  {
    id: 'flow',
    icon: 'whatshot',
    title: { ua: 'Допомога з флоу', en: 'Flow coaching' },
    description: {
      ua: 'Губишся в ритмі або не знаєш, як подати рядок? Підкажемо, як звучати впевненіше — прямо під час запису, без зайвого тиску.',
      en: "Losing the rhythm or not sure how to deliver a line? We'll help you sound more confident — right during the session, no pressure.",
    },
    price: { ua: '+350 грн/год', en: '+350 UAH/hour' },
  },
  {
    id: 'distribution',
    icon: 'rocket_launch',
    title: { ua: 'Дистрибуція на всі майданчики', en: 'Distribution everywhere' },
    description: {
      ua: "Твій трек з'явиться на Spotify, Apple Music, YouTube Music та інших платформах. Усе беремо на себе — тобі залишається тільки чекати релізу.",
      en: 'Your track goes up on Spotify, Apple Music, YouTube Music and more. We handle everything — you just wait for release day.',
    },
    price: { ua: '1000 грн', en: '1000 UAH' },
  },
  {
    id: 'bonus-hour',
    icon: 'card_giftcard',
    title: { ua: 'Година в подарунок', en: 'A free hour on us' },
    description: {
      ua: 'Запишись на 4 години — 1 годину отримаєш безкоштовно. Більше часу на пісню, менше — на думки про бюджет.',
      en: 'Book 4 hours, get 1 hour free. More time for the song, less time worrying about the budget.',
    },
    price: { ua: '1 год у подарунок', en: '1 hour free' },
  },
  {
    id: 'newcomer-discount',
    icon: 'local_offer',
    title: { ua: 'Знижка новачкам', en: 'First-timer discount' },
    description: {
      ua: 'Записуєшся вперше? Отримай знижку на перше зведення та мастерінг — спробуй якісний звук без переплат.',
      en: 'Recording for the first time? Get a discount on your first mixing & mastering — try quality sound without overpaying.',
    },
    price: { ua: '-20% на перше зведення та мастерінг', en: '-20% on your first mixing & mastering' },
  },
  {
    id: 'video',
    icon: 'movie',
    title: { ua: 'Відео під твій трек', en: 'Video for your track' },
    description: {
      ua: 'Змонтуємо коротке відео просто в студії — з субтитрами, щоб трек можна було одразу викласти в сторіз чи рілз.',
      en: "We'll cut a short video right in the studio — with subtitles, ready to post straight to Stories or Reels.",
    },
    price: { ua: '1000 грн', en: '1000 UAH' },
  },
]
