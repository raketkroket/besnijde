import { Phone, Mail, MapPin, Navigation, Calendar, AlertCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { Link } from '@/router';
import { ArrowRight } from '@/components/ArrowIcon';
import { Counter } from '@/components/Counter';
import type { Location } from '@/data/locations';

interface LocationPageProps {
  location: Location;
}

export function LocationPage({ location }: LocationPageProps) {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${location.mapLng - 0.02}%2C${location.mapLat - 0.01}%2C${location.mapLng + 0.02}%2C${location.mapLat + 0.01}&layer=mapnik&marker=${location.mapLat}%2C${location.mapLng}`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.mapQuery)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-[80px] bg-bcn-dark text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-white/50 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/vestigingen" className="hover:text-white">Vestigingen</Link>
              <span>/</span>
              <span className="text-white">{location.city}</span>
            </nav>
          </Reveal>

          <Reveal stagger>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-light">Vestiging</span>
            <h1 className="mt-4 text-hero text-white text-balance">
              Besnijdenis Centrum {location.city}
            </h1>
            <p className="mt-5 text-lg text-white/60 max-w-xl text-pretty">{location.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <LinkButton to="/afspraak" variant="light" size="lg" withArrow>Afspraak maken</LinkButton>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Navigation size={16} />
                Route bekijken
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Address card */}
            <Reveal className="lg:col-span-5">
              <div className="bg-bcn-ice rounded-xl2 p-8">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-6">Contact</h2>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-bcn-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted mb-0.5">Adres</div>
                    {location.building && <div className="text-sm font-medium text-ink">{location.building}</div>}
                    <div className="text-ink">{location.address}</div>
                    <div className="text-ink">{location.postalCode} {location.area}</div>
                  </div>
                </div>

                <a href={`tel:${location.phone}`} className="flex items-center gap-4 py-3 group border-t border-bcn-200/50">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-bcn-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted">Telefoon</div>
                    <div className="font-semibold text-ink group-hover:text-bcn-deep transition-colors">{location.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${location.email}`} className="flex items-center gap-4 py-3 group border-t border-bcn-200/50">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-bcn-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted">Email</div>
                    <div className="font-semibold text-ink text-sm group-hover:text-bcn-deep transition-colors">{location.email}</div>
                  </div>
                </a>

                {location.navigationNote && (
                  <div className="mt-5 flex items-start gap-2.5 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 leading-relaxed">{location.navigationNote}</p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Dates */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-6 flex items-center gap-2">
                  <Calendar size={14} />
                  Eerstvolgende behandeldagen
                </h2>
                <div className="space-y-2">
                  {location.nextDates.map((date, i) => (
                    <Reveal key={i}>
                      <div className="flex items-center justify-between p-4 bg-white border border-bcn-100 rounded-xl2 hover:border-bcn-200 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-bcn-ice flex items-center justify-center">
                            <Calendar size={16} className="text-bcn-deep" />
                          </div>
                          <span className="font-semibold text-ink">{date}</span>
                        </div>
                        <Link to="/afspraak" className="inline-flex items-center gap-2 text-sm font-semibold text-bcn-deep hover:text-bcn-blue transition-colors">
                          Aanvragen
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 lg:py-24 bg-bcn-ice">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-h3 text-ink mb-6">Over deze vestiging</h2>
                <p className="text-ink leading-relaxed text-pretty">{location.longDescription}</p>
                {location.founders && (
                  <p className="mt-4 text-ink-muted leading-relaxed">
                    Opgericht door {location.founders}.
                  </p>
                )}
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal stagger>
                <div className="grid grid-cols-2 gap-px bg-bcn-200/50 rounded-xl2 overflow-hidden">
                  <div className="bg-white p-6">
                    <div className="text-3xl font-bold text-bcn-deep">
                      <Counter target={parseInt(location.founded)} />
                    </div>
                    <div className="mt-1 text-xs text-ink-muted">opgericht</div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="text-3xl font-bold text-bcn-deep">
                      {location.treatmentsCount === '—' ? '—' : location.treatmentsCount}
                    </div>
                    <div className="mt-1 text-xs text-ink-muted">behandelingen</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 lg:pb-24 bg-bcn-ice">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-xl2 overflow-hidden shadow-card border border-bcn-100 h-[400px] lg:h-[500px]">
              <iframe
                title={`Kaart van ${location.name}`}
                src={mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
