import { useState, useEffect } from 'react';
import { Link } from '@/router';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { LinkButton } from '@/components/Button';
import { Plus, Minus, AlertTriangle, Phone, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

const heroImage = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800';

export function ManTreatmentPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const manNavSections = [
    ['hoe-gaat', t('Hoe gaat het?', 'How does it work?')], ['redenen', t('Redenen', 'Reasons')], ['wanneer-niet', t('Wanneer niet?', 'When not?')], ['stijl', t('Stijl', 'Style')], ['toestemming', t('Toestemming', 'Consent')], ['genezing', t('Genezing', 'Recovery')], ['mogelijke-problemen', t('Mogelijke problemen', 'Possible problems')], ['nazorg', t('Nazorg', 'Aftercare')], ['kosten', t('Kosten', 'Costs')], ['klachten', t('Klachten', 'Complaints')],
  ].map(([id, label]) => ({ id, label }));
  const manTimeline = [
    ['01', t('Consult', 'Consultation'), t('U bespreekt met de arts de reden, verwachtingen en de procedure.', 'You discuss the reason, expectations and procedure with the doctor.')],
    ['02', t('Voorbereiding & verdoving', 'Preparation & anaesthesia'), t('Plaatselijke verdoving wordt toegediend voor een zo min mogelijk belastende ingreep.', 'Local anaesthetic is administered to make the procedure as minimally burdensome as possible.')],
    ['03', t('Behandeling', 'Treatment'), t('De besnijdenis wordt uitgevoerd door een ervaren arts.', 'The circumcision is performed by an experienced doctor.')],
    ['04', t('Direct na de behandeling', 'Immediately after treatment'), t('U krijgt nazorginstructies en kan kort uitrusten.', 'You receive aftercare instructions and can rest briefly.')],
    ['05', t('Herstel & nazorg', 'Recovery & aftercare'), t('Het herstel bij volwassen mannen kan iets langer duren. U ontvangt specifiek nazorgadvies.', 'Recovery for adult men can take somewhat longer. You receive patient-specific aftercare advice.')],
  ].map(([number, title, description]) => ({ number, title, description }));
  const manComplications = [
    [t('Nabloeding', 'Persistent bleeding'), t('Bij aanhoudende bloeding die niet stopt, neem direct contact op.', 'For bleeding that does not stop, contact us immediately.')],
    [t('Infectie', 'Infection'), t('Bij tekenen van infectie (roodheid, pus, koorts) neemt u contact op.', 'Contact us if there are signs of infection, such as redness, pus or fever.')],
    [t('Afwijkend herstel', 'Unexpected recovery'), t('Bij afwijkend herstel of twijfel over het genezingsproces, neem contact op.', 'Contact us if recovery is unusual or you are unsure about the healing process.')],
    [t('Ernstige complicaties', 'Serious complications'), t('Bij ernstige complicaties of acute klachten neemt u direct contact op met uw huisarts.', 'For serious complications or acute symptoms, contact your GP immediately.')],
  ].map(([title, description]) => ({ title, description }));
  const sections = [
    ['redenen', 'bg-bcn-ice', t('Redenen', 'Reasons'), t('Wij voeren besnijdenissen uit om zowel medische als religieuze redenen. Bij medische indicatie, zoals phimosis, bespreekt de arts de medische noodzaak met u.', 'We perform circumcisions for both medical and religious reasons. For a medical indication, such as phimosis, the doctor discusses the medical necessity with you.')],
    ['wanneer-niet', '', t('Wanneer niet?', 'When not?'), t('Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd. De arts beoordeelt dit tijdens het consult. Bespreek eventuele medische aandoeningen of medicatie altijd vooraf met de arts.', 'There are situations in which a circumcision cannot be performed immediately. The doctor assesses this during the consultation. Always discuss any medical conditions or medication with the doctor in advance.')],
    ['stijl', 'bg-bcn-ice', t('Welke stijl besnijdenis voeren wij uit?', 'Which circumcision style do we perform?'), t('BCN voert een complete besnijdenis uit. De arts bespreekt vooraf de exacte methode en het verwachte resultaat met u, zodat u weet wat u kunt verwachten.', 'BCN performs a complete circumcision. The doctor discusses the exact method and expected result with you beforehand, so you know what to expect.')],
    ['toestemming', '', t('Toestemming', 'Consent'), t('Voor volwassen mannen is eigen toestemming vereist. U tekent hiervoor de behandelovereenkomst voorafgaand aan de behandeling.', 'Adult men must provide their own consent. You sign the treatment agreement before treatment.')],
    ['genezing', 'bg-bcn-ice', t('Genezing', 'Recovery'), t('Het herstel bij volwassen mannen kan iets langer duren dan bij jongens. U ontvangt specifiek nazorgadvies per patiënt. Volg de instructies van de arts nauwkeurig op.', 'Recovery for adult men can take somewhat longer than for boys. You receive patient-specific aftercare advice. Follow the doctor’s instructions carefully.')],
    ['nazorg', 'bg-bcn-ice', t('Nazorg', 'Aftercare'), t('Na de behandeling ontvangt u duidelijke nazorginstructies. Bij vragen kunt u altijd contact opnemen met de vestiging.', 'After treatment, you receive clear aftercare instructions. You can always contact the location with questions.')],
    ['kosten', '', t('Kosten', 'Costs'), t('Informeer bij uw aanvullende verzekering of de behandeling (gedeeltelijk) wordt vergoed.', 'Ask your supplementary insurer whether treatment is reimbursed in full or in part.'), true],
    ['klachten', 'bg-bcn-ice', t('Klachten', 'Complaints'), t('Bent u niet tevreden? Neem contact op met de betreffende vestiging. Wij nemen klachten serieus en behandelen deze volgens onze klachtenprocedure.', 'Are you dissatisfied? Contact the relevant location. We take complaints seriously and handle them according to our complaints procedure.')],
  ].map(([id, bg, title, text, priceBlock]) => ({ id: String(id), bg: String(bg), title: String(title), text: String(text), priceBlock: Boolean(priceBlock) }));
  const [activeSection, setActiveSection] = useState('hoe-gaat');
  const [openComplication, setOpenComplication] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    manNavSections.forEach((s) => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setTocOpen(false); };
  const activeLabel = manNavSections.find((s) => s.id === activeSection)?.label || t('Op deze pagina', 'On this page');

  return (
    <>
      <section className="pt-[72px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 lg:mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link><span>/</span>
              <Link to="/besnijdenis-volwassen-man" className="text-ink">{t('Mannen', 'Men')}</Link>
            </nav>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Reveal stagger>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">{t('Behandeling', 'Treatment')}</span>
                <h1 className="mt-4 text-[clamp(2rem,7vw,4.75rem)] font-bold text-ink leading-[1.05] tracking-tight text-balance">{t('Besnijdenis voor mannen.', 'Circumcision for men.')}</h1>
                <p className="mt-5 text-base lg:text-body-lg text-ink-muted max-w-lg text-pretty leading-relaxed">{t('Professionele behandeling voor volwassen mannen, zowel om medische als religieuze redenen. De arts bespreekt vooraf uitgebreid de procedure en nazorg.', 'Professional treatment for adult men, for medical or religious reasons. The doctor discusses the procedure and aftercare with you in detail beforehand.')}</p>
              </Reveal>
              <Reveal>
                <div className="mt-8 p-5 lg:p-6 bg-bcn-ice rounded-xl2">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div><div className="text-xs text-ink-muted mb-1">{t('Kosten', 'Costs')}</div><div className="text-3xl font-bold text-bcn-deep">€495</div><div className="text-xs text-ink-muted mt-1">{t('vanaf 16 jaar', 'age 16 and over')}</div></div>
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                      <LinkButton to="/afspraak" size="md" withArrow className="w-full sm:w-auto">{t('Afspraak maken', 'Make an appointment')}</LinkButton>
                      <LinkButton to="/vestigingen" variant="secondary" size="sm" className="w-full sm:w-auto">{t('Bekijk vestigingen', 'View locations')}</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div><ImageReveal><Image src={heroImage} alt={t('Arts in gesprek met een volwassen patiënt', 'Doctor speaking with an adult patient')} aspect="aspect-[4/5]" rounded="rounded-xl2" /></ImageReveal></div>
          </div>
        </div>
      </section>

      {/* Sticky nav: mobile dropdown / desktop horizontal */}
      <div className="sticky top-[72px] lg:top-[64px] z-30 bg-white border-y border-bcn-100 py-3">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="lg:hidden relative">
            <button onClick={() => setTocOpen(!tocOpen)} className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-bcn-ice text-sm font-semibold text-ink">
              <span className="min-w-0 truncate">{t('Op deze pagina', 'On this page')}: {activeLabel}</span><ChevronDown size={16} className={`flex-shrink-0 transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
            </button>
            {tocOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-deep border border-bcn-100 p-2 z-10 max-h-[400px] overflow-y-auto">
                {manNavSections.map((s) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)} className={`flex min-h-12 w-full items-center rounded-lg px-3 py-2 text-left text-sm font-medium ${activeSection === s.id ? 'bg-bcn-blue text-white' : 'text-ink hover:bg-bcn-ice'}`}>{s.label}</button>
                ))}
              </div>
            )}
          </div>
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {manNavSections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className={`flex-shrink-0 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${activeSection === s.id ? 'bg-bcn-blue text-white' : 'text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep'}`}>{s.label}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white editorial-content">
        <section id="hoe-gaat" className="editorial-section py-16 lg:py-24 scroll-mt-40 lg:scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{t('Hoe gaat de behandeling?', 'How does treatment work?')}</h2>
              <p className="text-ink leading-relaxed mb-8">{t('De behandeling wordt uitgevoerd door een ervaren arts onder plaatselijke verdoving. Het herstel bij volwassen mannen kan iets langer duren dan bij jongens.', 'Treatment is performed by an experienced doctor under local anaesthetic. Recovery for adult men can take somewhat longer than for boys.')}</p>
              <div className="space-y-0">
                {manTimeline.map((step, i) => (
                  <div key={step.number} className="flex gap-5 pb-8 last:pb-0 relative">
                    {i < manTimeline.length - 1 && <div className="absolute left-[19px] top-10 bottom-0 w-px bg-bcn-200" />}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bcn-blue text-white flex items-center justify-center text-sm font-bold relative z-10">{step.number}</div>
                    <div className="pt-1.5"><h4 className="font-bold text-ink mb-1">{step.title}</h4><p className="text-ink-muted text-sm leading-relaxed">{step.description}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {sections.map((sec) => (
          <section key={sec.id} id={sec.id} className={`editorial-section py-16 lg:py-24 scroll-mt-40 lg:scroll-mt-32 ${sec.bg}`}>
            <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
              <Reveal>
                <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{sec.title}</h2>
                {sec.priceBlock && <div className="bg-bcn-ice rounded-xl2 p-6 lg:p-8 mb-6"><div className="text-3xl font-bold text-bcn-deep">€495</div><div className="text-sm text-ink-muted mt-1">{t('vanaf 16 jaar', 'age 16 and over')}</div></div>}
                <p className="text-ink leading-relaxed">{sec.text}</p>
              </Reveal>
            </div>
          </section>
        ))}

        <section id="mogelijke-problemen" className="editorial-section py-16 lg:py-24 scroll-mt-40 lg:scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle size={22} className="text-amber-500 flex-shrink-0" /><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink">{t('Wanneer moet u contact opnemen?', 'When should you contact us?')}</h2></div>
              <div className="space-y-2">
                {manComplications.map((comp, i) => (
                  <div key={i} className="border border-bcn-100 rounded-xl2 overflow-hidden">
                    <button onClick={() => setOpenComplication(openComplication === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-bcn-50 transition-colors min-h-[56px]">
                      <span className="font-semibold text-ink">{comp.title}</span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-bcn-ice flex items-center justify-center text-bcn-deep">{openComplication === i ? <Minus size={15} /> : <Plus size={15} />}</span>
                    </button>
                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openComplication === i ? '1000px' : '0px' }}>
                      <p className="px-4 sm:px-5 pb-5 text-ink-muted text-sm leading-relaxed">{comp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
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
