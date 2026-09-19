import { useEffect, useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

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
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { rootMargin: '-25% 0px -60% 0px' },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const sectionLabel = (section: (typeof sections)[number]) => t(
    section.label,
    ({ 'Lokale anesthesie': 'Local anaesthesia', 'Contra-indicaties': 'Contraindications', Leeftijd: 'Age', Toestemming: 'Consent', Genezing: 'Recovery', Complicaties: 'Complications', Nazorg: 'Aftercare', Overleg: 'Consultation' } as Record<string, string>)[section.label],
  );
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTocOpen(false);
  };
  const activeLabel = sectionLabel(sections.find((section) => section.id === activeSection) ?? sections[0]);

  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/informatie-voor-artsen" className="text-ink">{t('Voor artsen', 'For clinicians')}</Link>
            </nav>
          </Reveal>

          <Reveal stagger>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">{t('Professioneel', 'Professional')}</span>
            <h1 className="mt-4 text-hero text-ink text-balance">
              {t('Medische informatie voor verwijzers en artsen.', 'Medical information for referrers and clinicians.')}
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Sticky nav */}
            <div className="lg:col-span-3">
              <div className="sticky top-[72px] z-20 -mx-5 border-y border-bcn-100 bg-white px-5 py-3 sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                <div className="relative lg:hidden">
                  <button
                    type="button"
                    onClick={() => setTocOpen(!tocOpen)}
                    aria-expanded={tocOpen}
                    aria-controls="doctors-toc-menu"
                    className="flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-bcn-100 bg-white px-4 py-3 text-left text-sm font-semibold text-ink"
                  >
                    <span className="min-w-0 truncate">{t('Op deze pagina', 'On this page')}: {activeLabel}</span>
                    <ChevronDown size={18} className={`flex-shrink-0 transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {tocOpen && (
                    <div id="doctors-toc-menu" className="absolute left-0 right-0 top-full z-10 mt-1 max-h-[min(24rem,calc(100vh-10rem))] overflow-y-auto rounded-lg border border-bcn-100 bg-white p-1 shadow-deep">
                      {sections.map((section, index) => (
                        <button key={section.id} type="button" onClick={() => scrollTo(section.id)} className={`flex min-h-12 w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${activeSection === section.id ? 'bg-bcn-blue text-white' : 'text-ink hover:bg-bcn-ice'}`}>
                          <span className="w-5 flex-shrink-0 text-xs font-semibold tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                          <span>{sectionLabel(section)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="hidden lg:block lg:sticky lg:top-28 lg:space-y-1">
                  {sections.map((section) => (
                    <button key={section.id} type="button" onClick={() => scrollTo(section.id)} className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${activeSection === section.id ? 'bg-bcn-ice text-bcn-deep' : 'text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep'}`}>
                      {sectionLabel(section)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-14">
              <Reveal>
                <section id="anesthesie" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Lokale anesthesie', 'Local anaesthesia')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Alle besnijdenissen worden uitgevoerd onder plaatselijke verdoving. De artsen van BCN streven naar een zo min mogelijk belastende ingreep door toepassing van goede verdoving en sedatie.', 'All circumcisions are performed under local anaesthetic. BCN doctors aim to make the procedure as minimally burdensome as possible through appropriate anaesthesia and sedation.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="contra" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Contra-indicaties', 'Contraindications')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd. De arts beoordeelt contra-indicaties tijdens het consult. Vermeld altijd medische aandoeningen en medicatie.', 'There are situations in which circumcision cannot be performed immediately. The doctor assesses contraindications during the consultation. Always report medical conditions and medication.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="leeftijd" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Leeftijd', 'Age')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('BCN voert besnijdenissen uit bij jongens tot 16 jaar en bij volwassen mannen vanaf 16 jaar. De behandeling wordt aangepast aan de leeftijd van de patiënt.', 'BCN performs circumcisions for boys up to age 16 and adult men from age 16. Treatment is adapted to the patient\'s age.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="toestemming" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Toestemming', 'Consent')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Bij minderjarigen is toestemming vereist van beide ouders met gezag. Bij volwassenen geldt eigen toestemming. Dit wordt vastgelegd op de behandelovereenkomst.', 'For minors, consent is required from both parents with legal authority. Adults provide their own consent. This is recorded in the treatment agreement.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="genezing" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Genezing', 'Recovery')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Het genezingsproces verloopt bij de meeste patiënten voorspoedig. Bij volwassen mannen kan het herstel iets langer duren. Patiënten ontvangen duidelijke nazorginstructies.', 'Most patients recover well. Recovery may take slightly longer for adult men. Patients receive clear aftercare instructions.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="complicaties" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Complicaties', 'Complications')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('BCN streft naar een zo gering mogelijk aantal complicaties. Bij complicaties of twijfels kunnen patiënten contact opnemen met de vestiging.', 'BCN aims for as few complications as possible. Patients can contact the location with complications or concerns.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="nazorg" className="scroll-mt-36 lg:scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Nazorg', 'Aftercare')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Na de behandeling ontvangt de patiënt duidelijke nazorginstructies. Bij vragen staat BCN klaar.', 'After treatment, the patient receives clear aftercare instructions. BCN is available for questions.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="overleg" className="scroll-mt-36 lg:scroll-mt-28">
                  <div className="p-8 bg-bcn-ice rounded-xl2">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Overleg met een BCN-arts', 'Consultation with a BCN doctor')}</h2>
                    <p className="text-ink leading-relaxed mb-6">
                      {t('Voor professioneel overleg of verwijzingen kunt u contact opnemen met BCN.', 'Contact BCN for professional consultation or referrals.')}
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
