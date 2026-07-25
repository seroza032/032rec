import { motion } from 'framer-motion'
import { LangProvider, useLang } from '../hooks/useLang'
import { useTilt } from '../hooks/useTilt'
import { Layout } from '../components/Layout'
import { LangSwitch } from '../components/LangSwitch'
import { Button } from '../components/ui/Button'
import { Tag } from '../components/ui/Tag'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Marquee } from '../components/ui/Marquee'
import { studio } from '../content/studio'

const swatches = [
  { name: 'background', var: '--color-background' },
  { name: 'foreground', var: '--color-foreground' },
  { name: 'muted', var: '--color-muted' },
  { name: 'accent', var: '--color-accent' },
]

function TiltCard() {
  const { ref, rotateX, rotateY, handlePointerMove, handlePointerLeave } = useTilt()

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 600 }}
      className="flex h-40 w-56 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-mono text-xs uppercase tracking-wide text-foreground/70"
    >
      hover me
    </motion.div>
  )
}

function StyleguideContent() {
  const { lang } = useLang()

  return (
    <main className="mx-auto max-w-4xl space-y-20 px-6 pb-32 pt-32">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold uppercase">Styleguide</h1>
        <LangSwitch />
      </div>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Palette</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map((s) => (
            <div key={s.name} className="space-y-2">
              <div
                className="h-20 rounded-xl border border-white/10"
                style={{ backgroundColor: `var(${s.var})` }}
              />
              <p className="font-mono text-xs text-muted">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Typography</h2>
        <p className="font-display text-6xl font-bold uppercase leading-none">Aa Бб</p>
        <p className="font-mono text-sm text-muted">JetBrains Mono — 1 год / 800 грн</p>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">SectionTitle</h2>
        <SectionTitle
          eyebrow={lang === 'ua' ? 'Студія' : 'Studio'}
          title={lang === 'ua' ? studio.tagline.ua : studio.tagline.en}
        />
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" breathing>
            {lang === 'ua' ? 'Записатись' : 'Book now'}
          </Button>
          <Button variant="ghost">{lang === 'ua' ? 'Детальніше' : 'Learn more'}</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Tags</h2>
        <div className="flex flex-wrap gap-3">
          <Tag>{lang === 'ua' ? 'вокал' : 'vocal'}</Tag>
          <Tag pulse>{lang === 'ua' ? 'наживо' : 'live'}</Tag>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Marquee</h2>
        <Marquee className="border-y border-white/10 py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="font-display text-2xl font-bold uppercase text-foreground/60">
              {studio.name} &middot;
            </span>
          ))}
        </Marquee>
      </section>

      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Tilt card</h2>
        <TiltCard />
      </section>
    </main>
  )
}

export function StyleguidePage() {
  return (
    <LangProvider>
      <Layout>
        <StyleguideContent />
      </Layout>
    </LangProvider>
  )
}
