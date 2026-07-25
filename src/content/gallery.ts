import type { Localized } from './types'
import controlRoomPhoto from '../assets/photos/control-room.webp'
import mixingPhoto from '../assets/photos/mixing.webp'
import gearPhoto from '../assets/photos/gear.webp'
import sessionPhoto from '../assets/photos/session.webp'

export interface GalleryPhoto {
  id: string
  src?: string
  caption: Localized<string>
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'control-room', src: controlRoomPhoto, caption: { ua: 'Апаратна', en: 'Control room' } },
  { id: 'mixing', src: mixingPhoto, caption: { ua: 'Зведення', en: 'Mixing session' } },
  { id: 'gear', src: gearPhoto, caption: { ua: 'Обладнання', en: 'Gear' } },
  { id: 'session', src: sessionPhoto, caption: { ua: 'Наживо в студії', en: 'Live in the studio' } },
]
