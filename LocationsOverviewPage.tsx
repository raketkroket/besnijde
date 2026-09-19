import { MapPin, Phone, ArrowRight, Calendar } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { useRouter } from '@/router';
import { locations } from '@/data/locations';

export function LocationsOverviewPage() {
  const { navigate } = useRouter();

  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">Vestigingen</span>
            <h1 className="mt-4 text-hero text-ink text-balance">
              Zorg op negen locaties door heel Nederland.
            </h1>
            <p className="mt-5 text-body-lg text-ink-muted max-w-xl text-pretty">
              Met negen gespecialiseerde vestigingen is er altijd een locatie in uw buurt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Reveal key={loc.slug}>
                <article
                  onClick={() => navigate(`/vestigingen/${loc.slug}`)}
                  className="group cursor-pointer p-6 bg-white border border-bcn-100 rounded-xl2 hover:border-bcn-300 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-bcn-ice flex items-center justify-center group-hover:bg-bcn-200 transition-colors">
                      <MapPin size={18} className="text-bcn-deep" />
                    </div>
                    <span className="text-xs text-ink-muted">sinds {loc.founded}</span>
                  </div>

                  <h2 className="text-lg font-bold text-ink mb-1">{loc.city}</h2>
                  <p className="text-sm text-ink-muted mb-4">{loc.area}</p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-2">{loc.description}</p>

                  <div className="space-y-1.5 text-sm border-t border-bcn-100 pt-4">
                    <div className="flex items-center gap-2 text-ink-muted">
                      <Calendar size={13} className="text-bcn-blue" />
                      <span>Volgende: {loc.nextDates[0]}</span>
                    </div>
                    <a href={`tel:${loc.phone}`} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-ink-muted hover:text-bcn-deep transition-colors">
                      <Phone size={13} className="text-bcn-blue" />
                      <span>{loc.phone}</span>
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-bcn-deep group-hover:text-bcn-blue transition-colors">
                    Bekijk locatie
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <LinkButton to="/afspraak" size="lg" withArrow>Afspraak maken</LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
