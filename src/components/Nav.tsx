import { studio } from '../content/studio'
import { LangSwitch } from './LangSwitch'

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4">
      <span className="text-lg font-bold uppercase tracking-tight text-foreground">{studio.name}</span>
      <LangSwitch />
    </header>
  )
}
