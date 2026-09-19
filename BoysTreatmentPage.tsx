import { useState, useEffect } from 'react';
import { Link } from '@/router';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { LinkButton } from '@/components/Button';
import { boysNavSections, boysTimeline, boysRecoveryCards, boysComplications } from '@/data/treatment';
import { Plus, Minus, AlertTriangle, Check, Phone, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/site';

const heroImage = 'https://images.pexels.com/photos/7653088/pexels-photo-7653088.jpeg?auto=compress&cs=tinysrgb&w=800';

export function BoysTreatmentPage() {
  const [activeSection, setActiveSection] = useState('over');
  const [openComplication, setOpenComplication] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    boysNavSections.forEach((s) => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTocOpen(false);
  };

  const activeLabel = boysNavSections.find((s) => s.id === activeSection)?.label || 'Op deze pagina';

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 lg:mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link><span>/</span>
              <Link to="/besnijdenis-jongen" className="text-ink">Jongens</Link>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Reveal stagger>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">Behandeling</span>
                <h1 className="mt-4 text-[clamp(2rem,7vw,4.75rem)] font-bold text-ink leading-[1.05] tracking-tight text-balance">Besnijdenis voor jongens.</h1>
                <p className="mt-5 text-base lg:text-body-lg text-ink-muted max-w-lg text-pretty leading-relaxed">
                  Zorgvuldige behandeling voor jongens tot 16 jaar, uitgevoerd onder plaatselijke verdoving door ervaren artsen in een rustige omgeving.
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-8 p-5 lg:p-6 bg-bcn-ice rounded-xl2">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <div className="text-xs text-ink-muted mb-1">Kosten</div>
                      <div className="text-3xl font-bold text-bcn-deep">€325</div>
                      <div className="text-xs text-ink-muted mt-1">jongen tot 16 jaar</div>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                      <LinkButton to="/afspraak" size="md" withArrow className="w-full sm:w-auto">Afspraak maken</LinkButton>
                      <LinkButton to="/vestigingen" variant="secondary" size="sm" className="w-full sm:w-auto">Bekijk vestigingen</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <ImageReveal>
                <Image src={heroImage} alt="Arts in gesprek met ouder en kind in een moderne kliniek" aspect="aspect-[4/5] lg:aspect-[4/5]" rounded="rounded-xl2" objectPosition="object-center" />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: dropdown TOC. Desktop: horizontal scroll */}
      <div className="sticky top-[64px] z-30 bg-white border-y border-bcn-100 py-3">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          {/* Mobile dropdown */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-bcn-ice text-sm font-semibold text-ink"
            >
              <span>{activeLabel}</span>
              <ChevronDown size={16} className={`transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
            </button>
            {tocOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-deep border border-bcn-100 p-2 z-10 max-h-[400px] overflow-y-auto">
                {boysNavSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === s.id ? 'bg-bcn-blue text-white' : 'text-ink hover:bg-bcn-ice'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop horizontal */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {boysNavSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex-shrink-0 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeSection === s.id ? 'bg-bcn-blue text-white' : 'text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <section id="over" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Over de behandeling</h2>
              <div className="space-y-4 text-ink leading-relaxed">
                <p>Besnijdenis Centrum Nederland voert besnijdenissen uit bij jongens tot 16 jaar. De behandeling wordt uitgevoerd door ervaren artsen onder plaatselijke verdoving, in een zorgvuldige en medisch verantwoorde procedure.</p>
                <p>Wij streven naar een optimaal resultaat van onze ingrepen en naar een zo gering mogelijk aantal complicaties. Voor de patiënt moet de ingreep zo min mogelijk belastend zijn, door toepassing van goede verdoving.</p>
              </div>
            </Reveal>
            <Reveal className="mt-12">
              <h3 className="text-xl font-bold text-ink mb-8">Hoe gaat een jongensbesnijdenis?</h3>
              <div className="space-y-0">
                {boysTimeline.map((step, i) => (
                  <div key={step.number} className="flex gap-5 pb-8 last:pb-0 relative">
                    {i < boysTimeline.length - 1 && <div className="absolute left-[19px] top-10 bottom-0 w-px bg-bcn-200" />}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bcn-blue text-white flex items-center justify-center text-sm font-bold relative z-10">{step.number}</div>
                    <div className="pt-1.5">
                      <h4 className="font-bold text-ink mb-1">{step.title}</h4>
                      <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="redenen" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Redenen voor een besnijdenis</h2>
              <p className="text-ink leading-relaxed mb-8">Wij doen besnijdenissen zowel vanwege medische als religieuze redenen. De arts bespreekt met u de reden voor de besnijdenis en wat u kunt verwachten.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl2"><h3 className="font-bold text-ink mb-2">Medische redenen</h3><p className="text-sm text-ink-muted leading-relaxed">Bij medische indicatie, zoals phimosis, bespreekt de arts de medische noodzaak met u.</p></div>
                <div className="bg-white p-6 rounded-xl2"><h3 className="font-bold text-ink mb-2">Religieuze redenen</h3><p className="text-sm text-ink-muted leading-relaxed">De behandeling gebeurt altijd op een medisch verantwoorde wijze door ervaren artsen.</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="wanneer-niet" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Wanneer wordt er niet besneden?</h2>
            <p className="text-ink leading-relaxed">Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd, of waarin aanvullend onderzoek nodig is. De arts beoordeelt dit tijdens het consult. Bespreek eventuele medische aandoeningen of medicatie altijd vooraf met de arts.</p></Reveal>
          </div>
        </section>

        <section id="leeftijd-angst" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Leeftijd & angst</h2>
            <p className="text-ink leading-relaxed">De behandeling wordt aangepast aan de leeftijd van het kind. Bij jongere kinderen wordt extra aandacht besteed aan een rustige sfeer. Als uw zoon erg angstig is, bespreek dit dan vooraf met de arts. De arts heeft ervaring met angstige kinderen en zal de tijd nemen om uw zoon op zijn gemak te stellen.</p></Reveal>
          </div>
        </section>

        <section id="toestemming" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Toestemming</h2>
            <p className="text-ink leading-relaxed">Voor een besnijdenis bij minderjarigen is toestemming nodig van de ouders of voogden. Beide ouders met gezag moeten toestemming geven. Dit wordt vastgelegd op het behandelovereenkomst-formulier.</p></Reveal>
          </div>
        </section>

        <section id="genezing" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-4">Genezing</h2>
              <p className="text-ink leading-relaxed mb-8">Het genezingsproces verloopt bij de meeste jongens voorspoedig. Hieronder vindt u wat u tijdens het herstel kunt verwachten.</p>
              <h3 className="text-xl font-bold text-ink mb-6">Wat kunt u tijdens het herstel verwachten?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {boysRecoveryCards.map((card) => (
                  <div key={card.title} className="bg-white p-5 lg:p-6 rounded-xl2">
                    <div className="w-8 h-8 rounded-full bg-bcn-ice flex items-center justify-center mb-3"><Check size={16} className="text-bcn-blue" /></div>
                    <h4 className="font-bold text-ink mb-2 text-sm">{card.title}</h4>
                    <p className="text-sm text-ink-muted leading-relaxed">{card.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="mogelijke-problemen" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle size={22} className="text-amber-500 flex-shrink-0" /><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink">Wanneer moet u contact opnemen?</h2></div>
              <p className="text-ink leading-relaxed mb-8">Bij de volgende situaties dient u contact op te nemen met de vestiging of uw huisarts.</p>
              <div className="space-y-2">
                {boysComplications.map((comp, i) => (
                  <div key={i} className="border border-bcn-100 rounded-xl2 overflow-hidden">
                    <button onClick={() => setOpenComplication(openComplication === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-bcn-50 transition-colors min-h-[56px]">
                      <span className="font-semibold text-ink">{comp.title}</span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-bcn-ice flex items-center justify-center text-bcn-deep">{openComplication === i ? <Minus size={15} /> : <Plus size={15} />}</span>
                    </button>
                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openComplication === i ? '200px' : '0px' }}>
                      <p className="px-4 sm:px-5 pb-5 text-ink-muted text-sm leading-relaxed">{comp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="nazorg" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Nazorg</h2>
            <p className="text-ink leading-relaxed">Na de behandeling ontvangt u duidelijke nazorginstructies. Deze bevatten informatie over verzorging, baden, vaseline en eventuele ongemakken. Bij vragen kunt u altijd contact opnemen met de vestiging.</p></Reveal>
          </div>
        </section>

        <section id="kosten" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Kosten</h2>
              <div className="bg-bcn-ice rounded-xl2 p-6 lg:p-8 mb-6"><div className="text-3xl font-bold text-bcn-deep">€325</div><div className="text-sm text-ink-muted mt-1">jongen tot 16 jaar</div></div>
              <p className="text-ink leading-relaxed">Sinds 2005 worden jongensbesnijdenissen in het ziekenhuis niet meer vergoed vanuit de basisverzekering. Informeer bij uw aanvullende verzekering of de behandeling (gedeeltelijk) wordt vergoed.</p>
            </Reveal>
          </div>
        </section>

        <section id="klachten" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Klachten</h2>
            <p className="text-ink leading-relaxed">Bent u niet tevreden over de behandeling of heeft u een klacht? Neem dan contact op met de betreffende vestiging. Wij nemen klachten serieus en zullen deze in behandeling nemen volgens onze klachtenprocedure.</p></Reveal>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-bcn-blue">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-white mb-6">Klaar om een afspraak te maken?</h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LinkButton to="/afspraak" variant="light" size="lg" withArrow>Afspraak maken</LinkButton>
                <a href={`tel:${companyInfo.mainPhone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"><Phone size={16} />{companyInfo.mainPhone}</a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
