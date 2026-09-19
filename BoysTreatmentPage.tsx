import { useState, useEffect } from 'react';
import { Link } from '@/router';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { LinkButton } from '@/components/Button';
import { boysNavSections, boysTimeline, boysRecoveryCards, boysComplications, treatmentText } from '@/data/treatment';
import { Plus, Minus, AlertTriangle, Check, Phone, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';
import heroImage from './images/little.png';

export function BoysTreatmentPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
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

  const activeLabel = boysNavSections.find((s) => s.id === activeSection)?.label;

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 lg:mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link><span>/</span>
              <Link to="/besnijdenis-jongen" className="text-ink">{t('Jongens', 'Boys')}</Link>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Reveal stagger>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">{t('Behandeling', 'Treatment')}</span>
                <h1 className="mt-4 text-[clamp(2rem,7vw,4.75rem)] font-bold text-ink leading-[1.05] tracking-tight text-balance">{t('Besnijdenis voor jongens.', 'Circumcision for boys.')}</h1>
                <p className="mt-5 text-base lg:text-body-lg text-ink-muted max-w-lg text-pretty leading-relaxed">
                  {t('Zorgvuldige behandeling voor jongens tot 16 jaar, uitgevoerd onder plaatselijke verdoving door ervaren artsen in een rustige omgeving.', 'Careful treatment for boys up to age 16, performed under local anaesthetic by experienced doctors in a calm environment.')}
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-8 p-5 lg:p-6 bg-bcn-ice rounded-xl2">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <div className="text-xs text-ink-muted mb-1">{t('Kosten', 'Costs')}</div>
                      <div className="text-3xl font-bold text-bcn-deep">€325</div>
                      <div className="text-xs text-ink-muted mt-1">{t('jongen tot 16 jaar', 'boy up to age 16')}</div>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                      <LinkButton to="/afspraak" size="md" withArrow className="w-full sm:w-auto">{t('Afspraak maken', 'Make an appointment')}</LinkButton>
                      <LinkButton to="/vestigingen" variant="secondary" size="sm" className="w-full sm:w-auto">{t('Bekijk vestigingen', 'View locations')}</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <ImageReveal>
                <Image src={heroImage} alt={t('Arts in gesprek met ouder en kind in een moderne kliniek', 'Doctor speaking with a parent and child in a modern clinic')} aspect="aspect-[4/5] lg:aspect-[4/5]" rounded="rounded-xl2" objectPosition="object-center" />
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
              <span>{activeLabel ? treatmentText(boysNavSections.find((s) => s.id === activeSection)!, language).label : t('Op deze pagina', 'On this page')}</span>
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
                    {treatmentText(s, language).label}
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
                {treatmentText(s, language).label}
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
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Over de behandeling', 'About the treatment')}</h2>
              <div className="space-y-4 text-ink leading-relaxed">
                <p>{t('Besnijdenis Centrum Nederland voert besnijdenissen uit bij jongens tot 16 jaar. De behandeling wordt uitgevoerd door ervaren artsen onder plaatselijke verdoving, in een zorgvuldige en medisch verantwoorde procedure.', 'Besnijdenis Centrum Nederland performs circumcisions for boys up to age 16. Experienced doctors carry out the treatment under local anaesthetic in a careful, medically responsible procedure.')}</p>
                <p>{t('Wij streven naar een optimaal resultaat van onze ingrepen en naar een zo gering mogelijk aantal complicaties. Voor de patiënt moet de ingreep zo min mogelijk belastend zijn, door toepassing van goede verdoving.', 'We aim for the best possible outcome and as few complications as possible. Appropriate anaesthesia helps keep the procedure as minimally burdensome as possible for the patient.')}</p>
              </div>
            </Reveal>
            <Reveal className="mt-12">
              <h3 className="text-xl font-bold text-ink mb-8">{t('Hoe gaat een jongensbesnijdenis?', 'How does circumcision for boys work?')}</h3>
              <div className="space-y-0">
                {boysTimeline.map((step, i) => (
                  <div key={step.number} className="flex gap-5 pb-8 last:pb-0 relative">
                    {i < boysTimeline.length - 1 && <div className="absolute left-[19px] top-10 bottom-0 w-px bg-bcn-200" />}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bcn-blue text-white flex items-center justify-center text-sm font-bold relative z-10">{step.number}</div>
                    <div className="pt-1.5">
                      <h4 className="font-bold text-ink mb-1">{treatmentText(step, language).title}</h4>
                      <p className="text-ink-muted text-sm leading-relaxed">{treatmentText(step, language).description}</p>
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
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Redenen voor een besnijdenis', 'Reasons for circumcision')}</h2>
              <p className="text-ink leading-relaxed mb-8">{t('Wij doen besnijdenissen zowel vanwege medische als religieuze redenen. De arts bespreekt met u de reden voor de besnijdenis en wat u kunt verwachten.', 'We perform circumcisions for both medical and religious reasons. The doctor discusses the reason for circumcision and what to expect with you.')}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl2"><h3 className="font-bold text-ink mb-2">{t('Medische redenen', 'Medical reasons')}</h3><p className="text-sm text-ink-muted leading-relaxed">{t('Bij medische indicatie, zoals phimosis, bespreekt de arts de medische noodzaak met u.', 'For a medical indication such as phimosis, the doctor discusses the medical necessity with you.')}</p></div>
                <div className="bg-white p-6 rounded-xl2"><h3 className="font-bold text-ink mb-2">{t('Religieuze redenen', 'Religious reasons')}</h3><p className="text-sm text-ink-muted leading-relaxed">{t('De behandeling gebeurt altijd op een medisch verantwoorde wijze door ervaren artsen.', 'Experienced doctors always perform the treatment in a medically responsible manner.')}</p></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="wanneer-niet" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Wanneer wordt er niet besneden?', 'When is circumcision not performed?')}</h2>
            <p className="text-ink leading-relaxed">{t('Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd, of waarin aanvullend onderzoek nodig is. De arts beoordeelt dit tijdens het consult. Bespreek eventuele medische aandoeningen of medicatie altijd vooraf met de arts.', 'There are situations in which circumcision cannot be performed immediately or additional assessment is needed. The doctor evaluates this during the consultation. Always discuss medical conditions or medication with the doctor in advance.')}</p></Reveal>
          </div>
        </section>

        <section id="leeftijd-angst" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Leeftijd & angst', 'Age & anxiety')}</h2>
            <p className="text-ink leading-relaxed">{t('De behandeling wordt aangepast aan de leeftijd van het kind. Bij jongere kinderen wordt extra aandacht besteed aan een rustige sfeer. Als uw zoon erg angstig is, bespreek dit dan vooraf met de arts. De arts heeft ervaring met angstige kinderen en zal de tijd nemen om uw zoon op zijn gemak te stellen.', 'Treatment is adapted to the child\'s age. For younger children, special attention is given to a calm atmosphere. If your son is very anxious, discuss this with the doctor beforehand. The doctor is experienced with anxious children and takes time to put your son at ease.')}</p></Reveal>
          </div>
        </section>

        <section id="toestemming" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Toestemming', 'Consent')}</h2>
            <p className="text-ink leading-relaxed">{t('Voor een besnijdenis bij minderjarigen is toestemming nodig van de ouders of voogden. Beide ouders met gezag moeten toestemming geven. Dit wordt vastgelegd op het behandelovereenkomst-formulier.', 'Circumcision for minors requires consent from parents or guardians. Both parents with legal authority must give consent. This is recorded on the treatment agreement form.')}</p></Reveal>
          </div>
        </section>

        <section id="genezing" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-4">{t('Genezing', 'Recovery')}</h2>
              <p className="text-ink leading-relaxed mb-8">{t('Het genezingsproces verloopt bij de meeste jongens voorspoedig. Hieronder vindt u wat u tijdens het herstel kunt verwachten.', 'Most boys recover well. Below is what to expect during recovery.')}</p>
              <h3 className="text-xl font-bold text-ink mb-6">{t('Wat kunt u tijdens het herstel verwachten?', 'What can you expect during recovery?')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {boysRecoveryCards.map((card) => (
                  <div key={card.title} className="bg-white p-5 lg:p-6 rounded-xl2">
                    <div className="w-8 h-8 rounded-full bg-bcn-ice flex items-center justify-center mb-3"><Check size={16} className="text-bcn-blue" /></div>
                    <h4 className="font-bold text-ink mb-2 text-sm">{treatmentText(card, language).title}</h4>
                    <p className="text-sm text-ink-muted leading-relaxed">{treatmentText(card, language).description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="mogelijke-problemen" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle size={22} className="text-amber-500 flex-shrink-0" /><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink">{t('Wanneer moet u contact opnemen?', 'When should you contact us?')}</h2></div>
              <p className="text-ink leading-relaxed mb-8">{t('Bij de volgende situaties dient u contact op te nemen met de vestiging of uw huisarts.', 'In the following situations, contact the location or your GP.')}</p>
              <div className="space-y-2">
                {boysComplications.map((comp, i) => (
                  <div key={i} className="border border-bcn-100 rounded-xl2 overflow-hidden">
                    <button onClick={() => setOpenComplication(openComplication === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-bcn-50 transition-colors min-h-[56px]">
                      <span className="font-semibold text-ink">{treatmentText(comp, language).title}</span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-bcn-ice flex items-center justify-center text-bcn-deep">{openComplication === i ? <Minus size={15} /> : <Plus size={15} />}</span>
                    </button>
                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openComplication === i ? '200px' : '0px' }}>
                      <p className="px-4 sm:px-5 pb-5 text-ink-muted text-sm leading-relaxed">{treatmentText(comp, language).description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="nazorg" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Nazorg', 'Aftercare')}</h2>
            <p className="text-ink leading-relaxed">{t('Na de behandeling ontvangt u duidelijke nazorginstructies. Deze bevatten informatie over verzorging, baden, vaseline en eventuele ongemakken. Bij vragen kunt u altijd contact opnemen met de vestiging.', 'After treatment, you receive clear aftercare instructions, including information on care, bathing, petroleum jelly, and possible discomfort. Contact the location with any questions.')}</p></Reveal>
          </div>
        </section>

        <section id="kosten" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Kosten', 'Costs')}</h2>
              <div className="bg-bcn-ice rounded-xl2 p-6 lg:p-8 mb-6"><div className="text-3xl font-bold text-bcn-deep">€325</div><div className="text-sm text-ink-muted mt-1">{t('jongen tot 16 jaar', 'boy up to age 16')}</div></div>
              <p className="text-ink leading-relaxed">{t('Sinds 2005 worden jongensbesnijdenissen in het ziekenhuis niet meer vergoed vanuit de basisverzekering. Informeer bij uw aanvullende verzekering of de behandeling (gedeeltelijk) wordt vergoed.', 'Since 2005, circumcision for boys in hospital has no longer been reimbursed under basic health insurance. Ask your supplementary insurer whether treatment is reimbursed in whole or in part.')}</p>
            </Reveal>
          </div>
        </section>

        <section id="klachten" className="py-14 lg:py-24 bg-bcn-ice scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Klachten', 'Complaints')}</h2>
            <p className="text-ink leading-relaxed">{t('Bent u niet tevreden over de behandeling of heeft u een klacht? Neem dan contact op met de betreffende vestiging. Wij nemen klachten serieus en zullen deze in behandeling nemen volgens onze klachtenprocedure.', 'If you are dissatisfied with treatment or have a complaint, contact the relevant location. We take complaints seriously and handle them under our complaints procedure.')}</p></Reveal>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-bcn-blue">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-white mb-6">{t('Klaar om een afspraak te maken?', 'Ready to make an appointment?')}</h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <LinkButton to="/afspraak" variant="light" size="lg" withArrow>{t('Afspraak maken', 'Make an appointment')}</LinkButton>
                <a href={`tel:${companyInfo.mainPhone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"><Phone size={16} />{companyInfo.mainPhone}</a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
