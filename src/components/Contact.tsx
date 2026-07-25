import { useLang } from '../hooks/useLang'
import { studio } from '../content/studio'
import { getTelegramBookingUrl } from '../lib/telegram'
import { SectionTitle } from './ui/SectionTitle'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'

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
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(studio.address.ua)}&output=embed`

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
          <Button href={studio.tiktok} target="_blank" rel="noreferrer" variant="ghost">
            TikTok
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-6">
            <InfoRow
              label={lang === 'ua' ? 'Адреса' : 'Address'}
              value={lang === 'ua' ? studio.address.ua : studio.address.en}
            />
            <InfoRow
              label={lang === 'ua' ? 'Години роботи' : 'Hours'}
              value={lang === 'ua' ? studio.hours.ua : studio.hours.en}
            />
            <a
              href={`tel:${studio.phone}`}
              aria-label={lang === 'ua' ? 'Подзвонити' : 'Call'}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="call" className="text-xl" />
            </a>
          </div>

          <a
            href={studio.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={lang === 'ua' ? 'Прокласти маршрут' : 'Get directions'}
            className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-accent/60"
          >
            <iframe
              src={mapEmbedSrc}
              title="map"
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full border-0"
              style={{ filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <span className="relative m-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent bg-background/80 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
              {lang === 'ua' ? 'Прокласти маршрут →' : 'Get directions →'}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
