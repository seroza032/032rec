import { studio } from '../content/studio'
import { useLang } from '../hooks/useLang'
import { LangSwitch } from './LangSwitch'

const links = [
  { id: 'services', ua: 'Послуги', en: 'Services' },
  { id: 'pricing', ua: 'Ціни', en: 'Pricing' },
]

export function Nav() {
  const { lang } = useLang()

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-background/70 px-6 py-4 backdrop-blur-sm">
      <a href="#hero" className="text-lg font-bold uppercase tracking-tight text-foreground">
        {studio.name}
      </a>
      <nav className="hidden items-center gap-6 sm:flex">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="font-mono text-xs uppercase tracking-wide text-foreground/70 transition hover:text-accent"
          >
            {lang === 'ua' ? link.ua : link.en}
          </a>
        ))}
      </nav>
      <LangSwitch />
    </header>
  )
}
