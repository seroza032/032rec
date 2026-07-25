import { useLang } from '../hooks/useLang'
import { studio } from '../content/studio'
import { getTelegramBookingUrl } from '../lib/telegram'
import { SectionTitle } from './ui/SectionTitle'
import { Button } from './ui/Button'

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
      <p className="mt-1 text-lg text-foreground">{value}</p>
    </div>
  )
}

export function Contact() {
  const { lang } = useLang()
  const telegramUrl = getTelegramBookingUrl(lang)

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-16">
        <SectionTitle
          eyebrow={lang === 'ua' ? 'Наступний крок' : 'Next step'}
          title={lang === 'ua' ? 'Записатись' : 'Book a session'}
        />

        <div className="flex flex-wrap gap-4">
          <Button href={telegramUrl} target="_blank" rel="noreferrer" variant="primary" breathing>
            {lang === 'ua' ? 'Написати в Telegram' : 'Message on Telegram'}
          </Button>
          <Button href={studio.instagram} target="_blank" rel="noreferrer" variant="ghost">
            Instagram Direct
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-6">
            <InfoRow
              label={lang === 'ua' ? 'Адреса' : 'Address'}
              value={lang === 'ua' ? studio.address.ua : studio.address.en}
            />
            <InfoRow
              label={lang === 'ua' ? 'Орієнтир' : 'Landmark'}
              value={lang === 'ua' ? studio.landmark.ua : studio.landmark.en}
            />
            <InfoRow
              label={lang === 'ua' ? 'Години роботи' : 'Hours'}
              value={lang === 'ua' ? studio.hours.ua : studio.hours.en}
            />
            <a
              href={`tel:${studio.phone}`}
              className="inline-block font-mono text-lg text-foreground transition-colors hover:text-accent"
            >
              {studio.phone}
            </a>
          </div>

          <a
            href={studio.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-64 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-accent/60"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent">
              ●
            </span>
            <span className="font-mono text-xs uppercase tracking-wide text-muted transition-colors group-hover:text-accent">
              {lang === 'ua' ? 'Прокласти маршрут →' : 'Get directions →'}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
