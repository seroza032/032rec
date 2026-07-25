import type { Localized } from './types'

export const studio = {
  name: 'Studio',
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
    ua: 'Адреса уточнюється',
    en: 'Address TBD',
  } satisfies Localized<string>,
  hours: {
    ua: 'Щодня 10:00–22:00',
    en: 'Daily 10:00–22:00',
  } satisfies Localized<string>,
  phone: '+380000000000',
  telegram: 'https://t.me/studio_handle',
  instagram: 'https://instagram.com/studio_handle',
  mapsUrl: 'https://maps.google.com',
}
