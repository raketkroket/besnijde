import { useState, useEffect } from 'react';
import { Link } from '@/router';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { LinkButton } from '@/components/Button';
import { manNavSections, manTimeline } from '@/data/treatment';
import { Plus, Minus, AlertTriangle, Phone, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/site';

const heroImage = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800';

const manComplications = [
  { title: 'Nabloeding', description: 'Bij aanhoudende bloeding die niet stopt, neem direct contact op.' },
  { title: 'Infectie', description: 'Bij tekenen van infectie (roodheid, pus, koorts) neemt u contact op.' },
  { title: 'Afwijkend herstel', description: 'Bij afwijkend herstel of twijfel over het genezingsproces, neem contact op.' },
  { title: 'Ernstige complicaties', description: 'Bij ernstige complicaties of acute klachten neemt u direct contact op met uw huisarts.' },
];

export function ManTreatmentPage() {
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
  const activeLabel = manNavSections.find((s) => s.id === activeSection)?.label || 'Op deze pagina';

  return (
    <>
      <section className="pt-[72px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6 lg:mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link><span>/</span>
              <Link to="/besnijdenis-volwassen-man" className="text-ink">Mannen</Link>
            </nav>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <Reveal stagger>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">Behandeling</span>
                <h1 className="mt-4 text-[clamp(2rem,7vw,4.75rem)] font-bold text-ink leading-[1.05] tracking-tight text-balance">Besnijdenis voor mannen.</h1>
                <p className="mt-5 text-base lg:text-body-lg text-ink-muted max-w-lg text-pretty leading-relaxed">Professionele behandeling voor volwassen mannen, zowel om medische als religieuze redenen. De arts bespreekt vooraf uitgebreid de procedure en nazorg.</p>
              </Reveal>
              <Reveal>
                <div className="mt-8 p-5 lg:p-6 bg-bcn-ice rounded-xl2">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div><div className="text-xs text-ink-muted mb-1">Kosten</div><div className="text-3xl font-bold text-bcn-deep">€495</div><div className="text-xs text-ink-muted mt-1">vanaf 16 jaar</div></div>
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                      <LinkButton to="/afspraak" size="md" withArrow className="w-full sm:w-auto">Afspraak maken</LinkButton>
                      <LinkButton to="/vestigingen" variant="secondary" size="sm" className="w-full sm:w-auto">Bekijk vestigingen</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div><ImageReveal><Image src={heroImage} alt="Arts in gesprek met een volwassen patiënt" aspect="aspect-[4/5]" rounded="rounded-xl2" /></ImageReveal></div>
          </div>
        </div>
      </section>

      {/* Sticky nav: mobile dropdown / desktop horizontal */}
      <div className="sticky top-[64px] z-30 bg-white border-y border-bcn-100 py-3">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="lg:hidden relative">
            <button onClick={() => setTocOpen(!tocOpen)} className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-bcn-ice text-sm font-semibold text-ink">
              <span>{activeLabel}</span><ChevronDown size={16} className={`transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
            </button>
            {tocOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-deep border border-bcn-100 p-2 z-10 max-h-[400px] overflow-y-auto">
                {manNavSections.map((s) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)} className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${activeSection === s.id ? 'bg-bcn-blue text-white' : 'text-ink hover:bg-bcn-ice'}`}>{s.label}</button>
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

      <div className="bg-white">
        <section id="hoe-gaat" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">Hoe gaat de behandeling?</h2>
              <p className="text-ink leading-relaxed mb-8">De behandeling wordt uitgevoerd door een ervaren arts onder plaatselijke verdoving. Het herstel bij volwassen mannen kan iets langer duren dan bij jongens.</p>
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

        {[
          { id: 'redenen', bg: 'bg-bcn-ice', title: 'Redenen', text: 'Wij voeren besnijdenissen uit om zowel medische als religieuze redenen. Bij medische indicatie, zoals phimosis, bespreekt de arts de medische noodzaak met u.' },
          { id: 'wanneer-niet', bg: '', title: 'Wanneer niet?', text: 'Er zijn situaties waarin een besnijdenis niet direct kan worden uitgevoerd. De arts beoordeelt dit tijdens het consult. Bespreek eventuele medische aandoeningen of medicatie altijd vooraf met de arts.' },
          { id: 'stijl', bg: 'bg-bcn-ice', title: 'Welke stijl besnijdenis voeren wij uit?', text: 'BCN voert een complete besnijdenis uit. De arts bespreekt vooraf de exacte methode en het verwachte resultaat met u, zodat u weet wat u kunt verwachten.' },
          { id: 'toestemming', bg: '', title: 'Toestemming', text: 'Voor volwassen mannen is eigen toestemming vereist. U tekent hiervoor de behandelovereenkomst voorafgaand aan de behandeling.' },
          { id: 'genezing', bg: 'bg-bcn-ice', title: 'Genezing', text: 'Het herstel bij volwassen mannen kan iets langer duren dan bij jongens. U ontvangt specifiek nazorgadvies per patiënt. Volg de instructies van de arts nauwkeurig op.' },
          { id: 'nazorg', bg: 'bg-bcn-ice', title: 'Nazorg', text: 'Na de behandeling ontvangt u duidelijke nazorginstructies. Bij vragen kunt u altijd contact opnemen met de vestiging.' },
          { id: 'kosten', bg: '', title: 'Kosten', text: 'Informeer bij uw aanvullende verzekering of de behandeling (gedeeltelijk) wordt vergoed.', priceBlock: true },
          { id: 'klachten', bg: 'bg-bcn-ice', title: 'Klachten', text: 'Bent u niet tevreden? Neem contact op met de betreffende vestiging. Wij nemen klachten serieus en behandelen deze volgens onze klachtenprocedure.' },
        ].map((sec) => (
          <section key={sec.id} id={sec.id} className={`py-14 lg:py-24 scroll-mt-32 ${sec.bg}`}>
            <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
              <Reveal>
                <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink mb-6">{sec.title}</h2>
                {sec.priceBlock && <div className="bg-bcn-ice rounded-xl2 p-6 lg:p-8 mb-6"><div className="text-3xl font-bold text-bcn-deep">€495</div><div className="text-sm text-ink-muted mt-1">vanaf 16 jaar</div></div>}
                <p className="text-ink leading-relaxed">{sec.text}</p>
              </Reveal>
            </div>
          </section>
        ))}

        <section id="mogelijke-problemen" className="py-14 lg:py-24 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle size={22} className="text-amber-500 flex-shrink-0" /><h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-ink">Wanneer moet u contact opnemen?</h2></div>
              <div className="space-y-2">
                {manComplications.map((comp, i) => (
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
