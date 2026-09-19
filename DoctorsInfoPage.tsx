import { Phone } from 'lucide-react';
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
              <div className="flex gap-1 overflow-x-auto scrollbar-hide pb-2 lg:sticky lg:top-28 lg:block lg:space-y-1 lg:pb-0">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-shrink-0 text-left px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep rounded-lg transition-colors lg:block lg:w-full"
                  >
                    {t(s.label, ({ 'Lokale anesthesie': 'Local anaesthesia', 'Contra-indicaties': 'Contraindications', Leeftijd: 'Age', Toestemming: 'Consent', Genezing: 'Recovery', Complicaties: 'Complications', Nazorg: 'Aftercare', Overleg: 'Consultation' } as Record<string, string>)[s.label])}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 space-y-14">
              <Reveal>
                <section id="anesthesie" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Lokale anesthesie', 'Local anaesthesia')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Alle besnijdenissen worden uitgevoerd onder plaatselijke verdoving. De artsen van BCN streven naar een zo min mogelijk belastende ingreep door toepassing van goede verdoving en sedatie.', 'All circumcisions are performed under local anaesthetic. BCN doctors aim to make the procedure as minimally burdensome as possible through appropriate anaesthesia and sedation.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="contra" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Contra-indicaties', 'Contraindications')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd. De arts beoordeelt contra-indicaties tijdens het consult. Vermeld altijd medische aandoeningen en medicatie.', 'There are situations in which circumcision cannot be performed immediately. The doctor assesses contraindications during the consultation. Always report medical conditions and medication.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="leeftijd" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Leeftijd', 'Age')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('BCN voert besnijdenissen uit bij jongens tot 16 jaar en bij volwassen mannen vanaf 16 jaar. De behandeling wordt aangepast aan de leeftijd van de patiënt.', 'BCN performs circumcisions for boys up to age 16 and adult men from age 16. Treatment is adapted to the patient\'s age.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="toestemming" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Toestemming', 'Consent')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Bij minderjarigen is toestemming vereist van beide ouders met gezag. Bij volwassenen geldt eigen toestemming. Dit wordt vastgelegd op de behandelovereenkomst.', 'For minors, consent is required from both parents with legal authority. Adults provide their own consent. This is recorded in the treatment agreement.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="genezing" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Genezing', 'Recovery')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Het genezingsproces verloopt bij de meeste patiënten voorspoedig. Bij volwassen mannen kan het herstel iets langer duren. Patiënten ontvangen duidelijke nazorginstructies.', 'Most patients recover well. Recovery may take slightly longer for adult men. Patients receive clear aftercare instructions.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="complicaties" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Complicaties', 'Complications')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('BCN streft naar een zo gering mogelijk aantal complicaties. Bij complicaties of twijfels kunnen patiënten contact opnemen met de vestiging.', 'BCN aims for as few complications as possible. Patients can contact the location with complications or concerns.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="nazorg" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-ink mb-3">{t('Nazorg', 'Aftercare')}</h2>
                  <p className="text-ink leading-relaxed">
                    {t('Na de behandeling ontvangt de patiënt duidelijke nazorginstructies. Bij vragen staat BCN klaar.', 'After treatment, the patient receives clear aftercare instructions. BCN is available for questions.')}
                  </p>
                </section>
              </Reveal>

              <Reveal>
                <section id="overleg" className="scroll-mt-28">
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
