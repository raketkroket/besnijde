import { Phone, Mail, MapPin, Navigation, Calendar, AlertCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { Link } from '@/router';
import { ArrowRight } from '@/components/ArrowIcon';
import { Counter } from '@/components/Counter';
import type { Location } from '@/data/locations';
import { copy, useLanguage } from '@/language';

interface LocationPageProps {
  location: Location;
}

const englishLocationCopy: Record<string, { description: string; longDescription: string; navigationNote?: string }> = {
  amsterdam: { description: 'Our first and main location, founded in 2001.', longDescription: 'Besnijdenis Centrum Amsterdam is the first location of Besnijdenis Centrum Nederland, founded in 2001 by general practitioners Erik Robberse and Lex Klein. Since its foundation, more than 40,000 boys and men have been treated here. The clinic is based at Gezondheidscentrum Venserpolder in Amsterdam Zuidoost, where experienced doctors perform circumcisions under local anaesthetic every week.' },
  almere: { description: 'Our second location, opened in Almere Buiten in 2003.', longDescription: 'Besnijdenis Centrum Almere started in 2003 as BCN’s second location, after Amsterdam. Since opening, more than 10,000 boys and men have been treated here. The clinic is based at Gezondheidscentrum De Bouwmeester in Almere Buiten, a modern and accessible health centre.' },
  arnhem: { description: 'Founded in 2005 by general practitioner Lex Klein.', longDescription: 'Besnijdenis Centrum Arnhem was founded in 2005 by general practitioner Lex Klein. Since opening, more than 6,000 boys and men have been treated here. The clinic is based at the Andros Men’s Clinic in Arnhem.' },
  breda: { description: 'Founded in 2007, at its current location since 2014.', longDescription: 'Besnijdenis Centrum Breda was founded in 2007 and has been based at Gezondheidscentrum Kapelhof since 2014. Since opening, more than 8,500 boys and men have been treated here.', navigationNote: 'Please note: Breda has two streets called Kapelstraat. Enter postcode 4817 NZ for navigation. The health centre is on the corner of Heerbaan.' },
  'eindhoven-regio': { description: 'Location for the Eindhoven region, physically based in Valkenswaard.', longDescription: 'Besnijdenis Centrum Eindhoven Region was founded in 2011 and serves patients from the southeast of the Netherlands. The physical location is at Medisch Centrum Emmalaan in Valkenswaard. Since opening, more than 3,500 boys and men have been treated here.', navigationNote: 'This location serves the Eindhoven region. The physical location is in Valkenswaard.' },
  haaglanden: { description: 'Location in The Hague, serving the Haaglanden region.', longDescription: 'Besnijdenis Centrum Haaglanden was founded in 2005 and serves patients from the Haaglanden region. The clinic is based at Gezondheidscentrum De Rubenshoek in The Hague. Since opening, more than 11,000 boys and men have been treated here.' },
  maastricht: { description: 'Our southernmost location, for patients from Limburg.', longDescription: 'Besnijdenis Centrum Maastricht was founded in 2007 and is our southernmost location. The clinic is based at Gezondheidscentrum Heer in Maastricht and serves patients from Limburg and the surrounding area. Since opening, more than 5,000 boys and men have been treated here.' },
  rotterdam: { description: 'Location in Rotterdam-West for the Rijnmond region.', longDescription: 'Besnijdenis Centrum Rotterdam was founded in 2006 and is based at Gezondheidscentrum Het Nieuwe Westen in Rotterdam. The clinic serves patients from the Rijnmond region and surrounding area.' },
  utrecht: { description: 'Centrally located clinic, founded in 2002.', longDescription: 'Besnijdenis Centrum Utrecht was founded in 2002 by general practitioner Lex Klein and surgeon Roderick Schmitz. Since 2005, the clinic has been based at Gezondheidscentrum Lombok, on the corner with Kanaalstraat. Since opening, more than 10,000 boys and men have been treated here. Its central location makes the clinic easily accessible from all parts of the Netherlands.' },
};

export function LocationPage({ location }: LocationPageProps) {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const localized = language === 'en' ? englishLocationCopy[location.slug] : undefined;
  const nextDates = location.nextDates.map((date) => language === 'en' ? date.replace('januari', 'January').replace('februari', 'February').replace('maart', 'March').replace('april', 'April').replace('mei', 'May').replace('juni', 'June').replace('juli', 'July').replace('augustus', 'August').replace('september', 'September').replace('oktober', 'October').replace('november', 'November').replace('december', 'December') : date);
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${location.mapLng - 0.02}%2C${location.mapLat - 0.01}%2C${location.mapLng + 0.02}%2C${location.mapLat + 0.01}&layer=mapnik&marker=${location.mapLat}%2C${location.mapLng}`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.mapQuery)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-[80px] bg-bcn-dark text-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-white/50 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/vestigingen" className="hover:text-white">{t('Vestigingen', 'Locations')}</Link>
              <span>/</span>
              <span className="text-white">{location.city}</span>
            </nav>
          </Reveal>

          <Reveal stagger>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-light">{t('Vestiging', 'Location')}</span>
            <h1 className="mt-4 text-hero text-white text-balance">
              Besnijdenis Centrum {location.city}
            </h1>
            <p className="mt-5 text-lg text-white/60 max-w-xl text-pretty">{localized?.description ?? location.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <LinkButton to="/afspraak" variant="light" size="lg" withArrow className="w-full sm:w-auto">{t('Afspraak maken', 'Make an appointment')}</LinkButton>
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"
              >
                <Navigation size={16} />
                {t('Route bekijken', 'View directions')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Address card */}
            <Reveal className="lg:col-span-5">
              <div className="bg-bcn-ice rounded-xl2 p-5 sm:p-8">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-6">Contact</h2>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-bcn-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-muted mb-0.5">{t('Adres', 'Address')}</div>
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
                    <div className="text-xs text-ink-muted">{t('Telefoon', 'Phone')}</div>
                    <div className="font-semibold text-ink group-hover:text-bcn-deep transition-colors">{location.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${location.email}`} className="flex min-w-0 items-center gap-4 py-3 group border-t border-bcn-200/50">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-bcn-blue" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-ink-muted">{t('Email', 'Email')}</div>
                    <div className="break-all font-semibold text-ink text-sm group-hover:text-bcn-deep transition-colors">{location.email}</div>
                  </div>
                </a>

                {location.navigationNote && (
                  <div className="mt-5 flex items-start gap-2.5 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800 leading-relaxed">{localized?.navigationNote ?? location.navigationNote}</p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Dates */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-6 flex items-center gap-2">
                  <Calendar size={14} />
                  {t('Eerstvolgende behandeldagen', 'Upcoming treatment days')}
                </h2>
                <div className="space-y-2">
                  {nextDates.map((date, i) => (
                    <Reveal key={i}>
                      <div className="flex flex-col items-start gap-3 p-4 bg-white border border-bcn-100 rounded-xl2 hover:border-bcn-200 transition-colors group sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-bcn-ice flex items-center justify-center">
                            <Calendar size={16} className="text-bcn-deep" />
                          </div>
                          <span className="font-semibold text-ink">{date}</span>
                        </div>
                        <Link to="/afspraak" className="inline-flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-bcn-deep hover:text-bcn-blue transition-colors">
                          {t('Aanvragen', 'Request')}
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
                <h2 className="text-h3 text-ink mb-6">{t('Over deze vestiging', 'About this location')}</h2>
                <p className="text-ink leading-relaxed text-pretty">{localized?.longDescription ?? location.longDescription}</p>
                {location.founders && (
                  <p className="mt-4 text-ink-muted leading-relaxed">
                    {t('Opgericht door', 'Founded by')} {language === 'en' ? location.founders.replace('huisartsen', 'general practitioners').replace('huisarts', 'general practitioner').replace('chirurg', 'surgeon') : location.founders}.
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
                    <div className="mt-1 text-xs text-ink-muted">{t('opgericht', 'founded')}</div>
                  </div>
                  <div className="bg-white p-6">
                    <div className="text-3xl font-bold text-bcn-deep">
                      {location.treatmentsCount === '—' ? '—' : location.treatmentsCount}
                    </div>
                    <div className="mt-1 text-xs text-ink-muted">{t('behandelingen', 'treatments')}</div>
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
                title={t(`Kaart van ${location.name}`, `Map of ${location.name}`)}
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
