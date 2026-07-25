import type { Lang } from '../hooks/useLang'

export type Localized<T> = Record<Lang, T>
