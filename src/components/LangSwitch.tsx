import { useLang } from '../hooks/useLang'

export function LangSwitch() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 p-1 font-mono text-xs uppercase tracking-wide">
      {(['ua', 'en'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-full px-2 py-1 transition ${
            lang === option ? 'bg-accent text-black' : 'text-white/60 hover:text-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
