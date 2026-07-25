import type { Localized } from './types'

export interface GalleryPhoto {
  id: string
  src?: string
  caption: Localized<string>
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'booth', caption: { ua: 'Вокальна кабіна', en: 'Vocal booth' } },
  { id: 'control-room', caption: { ua: 'Апаратна', en: 'Control room' } },
  { id: 'mixing', caption: { ua: 'Зведення', en: 'Mixing session' } },
  { id: 'lounge', caption: { ua: 'Зона відпочинку', en: 'Lounge' } },
  { id: 'gear', caption: { ua: 'Обладнання', en: 'Gear' } },
  { id: 'session', caption: { ua: 'Наживо в студії', en: 'Live in the studio' } },
]
