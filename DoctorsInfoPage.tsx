import { Phone } from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { companyInfo } from '@/data/site';

const sections = [
  { id: 'anesthesie', label: 'Lokale anesthesie' },
  { id: 'contra', label: 'Contra-indicaties' },
  { id: 'leeftijd', label: 'Leeftijd' },
  { id: 'toestemming', label: 'Toestemming' },
  { id: 'genezing', label: 'Genezing' },
  { id: 'complicaties', label: 'Complicaties' },
  { id: 'nazorg', label: 'Nazorg' },
  { id: 'overleg', label: 'Overleg' },
];

export function DoctorsInfoPage() {
  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/informatie-voor-artsen" className="text-ink">Voor artsen</Link>
            </nav>
          </Reveal>

          <Reveal stagger>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">Professioneel</span>
            <h1 className="mt-4 text-hero text-ink text-balance">
              Medische informatie voor verwijzers en artsen.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Sticky nav */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-left px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep rounded-lg transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-12">
              <Reveal>
                <section id="anesthesie" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Lokale anesthesie</h2>
                  <p className="text-ink leading-relaxed">
                    Alle besnijdenissen worden uitgevoerd onder plaatselijke verdoving. De artsen
                    van BCN streven naar een zo min mogelijk belastende ingreep door toepassing van
                    goede verdoving en sedatie.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="contra" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Contra-indicaties</h2>
                  <p className="text-ink leading-relaxed">
                    Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd.
                    De arts beoordeelt contra-indicaties tijdens het consult. Vermeld altijd
                    medische aandoeningen en medicatie.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="leeftijd" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Leeftijd</h2>
                  <p className="text-ink leading-relaxed">
                    BCN voert besnijdenissen uit bij jongens tot 16 jaar en bij volwassen mannen
                    vanaf 16 jaar. De behandeling wordt aangepast aan de leeftijd van de patiënt.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="toestemming" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Toestemming</h2>
                  <p className="text-ink leading-relaxed">
                    Bij minderjarigen is toestemming vereist van beide ouders met gezag. Bij
                    volwassenen geldt eigen toestemming. Dit wordt vastgelegd op de
                    behandelovereenkomst.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="genezing" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Genezing</h2>
                  <p className="text-ink leading-relaxed">
                    Het genezingsproces verloopt bij de meeste patiënten voorspoedig. Bij
                    volwassen mannen kan het herstel iets langer duren. Patiënten ontvangen
                    duidelijke nazorginstructies.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="complicaties" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Complicaties</h2>
                  <p className="text-ink leading-relaxed">
                    BCN streft naar een zo gering mogelijk aantal complicaties. Bij complicaties
                    of twijfels kunnen patiënten contact opnemen met de vestiging.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="nazorg" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">Nazorg</h2>
                  <p className="text-ink leading-relaxed">
                    Na de behandeling ontvangt de patiënt duidelijke nazorginstructies. Bij
                    vragen staat BCN klaar.
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="overleg" className="scroll-mt-28">
                  <div className="p-8 bg-bcn-ice rounded-xl2">
                    <h2 className="text-xl font-bold text-ink mb-3">Overleg met een BCN-arts</h2>
                    <p className="text-ink leading-relaxed mb-6">
                      Voor professioneel overleg of verwijzingen kunt u contact opnemen met BCN.
                    </p>
                    <a href={`tel:${companyInfo.mainPhone}`} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-bcn-blue text-white hover:bg-bcn-deep transition-all">
                      <Phone size={16} />
                      {companyInfo.mainPhone}
                    </a>
                  </div>
                </section>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
