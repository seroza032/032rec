import type { Localized } from './types'

export const studio = {
  name: '032rec',
  tagline: {
    ua: 'Звукозаписна студія',
    en: 'Recording studio',
  } satisfies Localized<string>,
  heroTitle: {
    ua: 'ТВІЙ ЗВУК. НАША СТУДІЯ.',
    en: 'YOUR SOUND. OUR STUDIO.',
  } satisfies Localized<string>,
  heroSubtitle: {
    ua: 'Запис вокалу, зведення, мастеринг і оренда — для реперів, співаків і продюсерів, які не хочуть чекати.',
    en: "Vocal recording, mixing, mastering and studio rental — for rappers, singers and producers who don't want to wait.",
  } satisfies Localized<string>,
  address: {
    ua: 'вул. Лісна, 1, Львів, 81135',
    en: '1 Lisna St, Lviv, 81135',
  } satisfies Localized<string>,
  hours: {
    ua: 'Цілодобово',
    en: '24/7',
  } satisfies Localized<string>,
  bookingMessage: {
    ua: 'Привіт! Хочу записатися в 032rec.',
    en: 'Hi! I want to book a session at 032rec.',
  } satisfies Localized<string>,
  phone: '+380960320033',
  telegram: 'https://t.me/rec032',
  instagram: 'https://www.instagram.com/032rec',
  tiktok: 'https://www.tiktok.com/@032rec',
  mapsUrl: 'https://maps.app.goo.gl/gPYiaKTmDEXzi3y29?g_st=ic',
}
