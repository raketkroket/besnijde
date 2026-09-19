import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

const tocSectionIds = [
  'avg-wgbo', 'verwerkingsdoeleinden', 'vertrouwelijkheid', 'beveiliging', 'bewaartermijnen', 'patintenrechten', 'inzage-afschrift', 'delen-met-derden', 'informatie-uitwisseling', 'klachten',
];

export function PrivacyPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const tocItems = [
    { id: 'avg-wgbo', label: t('AVG & WGBO', 'GDPR & WGBO') }, { id: 'verwerkingsdoeleinden', label: t('Verwerkingsdoeleinden', 'Purposes of processing') }, { id: 'vertrouwelijkheid', label: t('Vertrouwelijkheid', 'Confidentiality') }, { id: 'beveiliging', label: t('Beveiliging', 'Security') }, { id: 'bewaartermijnen', label: t('Bewaartermijnen', 'Retention periods') }, { id: 'patintenrechten', label: t('Patiëntenrechten', 'Patient rights') }, { id: 'inzage-afschrift', label: t('Inzage & afschrift', 'Access & copy') }, { id: 'delen-met-derden', label: t('Delen met derden', 'Sharing with third parties') }, { id: 'informatie-uitwisseling', label: t('Informatie-uitwisseling', 'Information exchange') }, { id: 'klachten', label: t('Klachten', 'Complaints') },
  ];
  const [activeSection, setActiveSection] = useState(tocItems[0].id);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { rootMargin: '-25% 0px -60% 0px' },
    );

    tocSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTocOpen(false);
  };
  const activeLabel = tocItems.find((item) => item.id === activeSection)?.label ?? tocItems[0].label;

  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/privacy" className="text-ink">Privacy</Link>
            </nav>
            <h1 className="text-hero text-ink text-balance">{t('Privacyreglement.', 'Privacy policy.')}</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* TOC */}
            <div className="lg:col-span-3">
              <div className="sticky top-[72px] z-20 -mx-5 border-y border-bcn-100 bg-white px-5 py-3 sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                <div className="relative lg:hidden">
                  <button type="button" onClick={() => setTocOpen(!tocOpen)} aria-expanded={tocOpen} aria-controls="privacy-toc-menu" className="flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-bcn-100 bg-white px-4 py-3 text-left text-sm font-semibold text-ink">
                    <span className="min-w-0 truncate">{t('Op deze pagina', 'On this page')}: {activeLabel}</span>
                    <ChevronDown size={18} className={`flex-shrink-0 transition-transform ${tocOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {tocOpen && (
                    <div id="privacy-toc-menu" className="absolute left-0 right-0 top-full z-10 mt-1 max-h-[min(24rem,calc(100vh-10rem))] overflow-y-auto rounded-lg border border-bcn-100 bg-white p-1 shadow-deep">
                      {tocItems.map((item, index) => (
                        <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className={`flex min-h-12 w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${activeSection === item.id ? 'bg-bcn-blue text-white' : 'text-ink hover:bg-bcn-ice'}`}>
                          <span className="w-5 flex-shrink-0 text-xs font-semibold tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="hidden lg:block lg:sticky lg:top-28">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">{t('Inhoud', 'Contents')}</h2>
                  <nav className="space-y-1">
                    {tocItems.map((item) => (
                      <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${activeSection === item.id ? 'bg-bcn-ice text-bcn-deep' : 'text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep'}`}>{item.label}</button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 max-w-2xl">
              <Reveal>
                <div className="prose prose-slate max-w-none">
                  <section id="avg-wgbo" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('AVG & WGBO', 'GDPR & WGBO')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Besnijdenis Centrum Nederland verwerkt persoons- en medische gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de Wet op de geneeskundige behandelingsovereenkomst (WGBO).', 'Besnijdenis Centrum Nederland processes personal and medical data in accordance with the General Data Protection Regulation (GDPR) and the Dutch Medical Treatment Contracts Act (WGBO).')}
                    </p>
                  </section>

                  <section id="verwerkingsdoeleinden" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Verwerkingsdoeleinden', 'Purposes of processing')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Van alle patiënten worden medische gegevens geregistreerd en bewaard volgens de wettelijke richtlijnen en bewaartermijnen. Deze gegevens worden gebruikt voor de uitvoering van de behandeling, de nazorg en het medisch dossier.', 'Medical data of all patients are recorded and retained in accordance with statutory guidelines and retention periods. These data are used to provide treatment, aftercare and the medical record.')}
                    </p>
                  </section>

                  <section id="vertrouwelijkheid" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Vertrouwelijkheid', 'Confidentiality')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Alle medische gegevens worden vertrouwelijk behandeld. Alleen bevoegd personeel met betrokkenheid bij uw behandeling heeft toegang tot deze gegevens.', 'All medical data are treated confidentially. Only authorised staff involved in your treatment have access to these data.')}
                    </p>
                  </section>

                  <section id="beveiliging" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Beveiliging', 'Security')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('BCN neemt passende technische en organisatorische maatregelen om uw gegevens te beveiligen tegen verlies, inbreuk of onbevoegde toegang.', 'BCN takes appropriate technical and organisational measures to protect your data against loss, breaches or unauthorised access.')}
                    </p>
                  </section>

                  <section id="bewaartermijnen" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Bewaartermijnen', 'Retention periods')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Medische gegevens worden bewaard volgens de wettelijke bewaartermijnen die gelden voor medische dossiers in Nederland.', 'Medical data are retained in accordance with the statutory retention periods that apply to medical records in the Netherlands.')}
                    </p>
                  </section>

                  <section id="patintenrechten" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Patiëntenrechten', 'Patient rights')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Als patiënt heeft u recht op inzage in uw dossier, rectificatie van onjuiste gegevens, en het vragen van verwijdering van gegevens voor zover dit binnen de wettelijke kaders mogelijk is.', 'As a patient, you have the right to access your record, rectify incorrect data and request deletion of data where this is possible within the legal framework.')}
                    </p>
                  </section>

                  <section id="inzage-afschrift" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Inzage & afschrift', 'Access & copy')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('U kunt een verzoek tot inzage of afschrift van uw medische gegevens indienen bij de vestiging waar u bent behandeld.', 'You may submit a request to access or obtain a copy of your medical data to the location where you were treated.')}
                    </p>
                  </section>

                  <section id="delen-met-derden" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Delen met derden', 'Sharing with third parties')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Uw medische gegevens worden alleen gedeeld met derden met uw expliciete toestemming, of wanneer de wet dit vereist.', 'Your medical data are shared with third parties only with your explicit consent, or where required by law.')}
                    </p>
                  </section>

                  <section id="informatie-uitwisseling" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Informatie-uitwisseling', 'Information exchange')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Informatie-uitwisseling met andere zorgverleners vindt alleen plaats met uw toestemming.', 'Information is exchanged with other healthcare providers only with your consent.')}
                    </p>
                  </section>

                  <section id="klachten" className="mb-10 scroll-mt-36 lg:scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">{t('Klachten', 'Complaints')}</h2>
                    <p className="text-ink leading-relaxed">
                      {t('Heeft u een klacht over de verwerking van uw gegevens of over de behandeling? Neem dan contact op met de betreffende vestiging. U heeft ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.', 'Do you have a complaint about the processing of your data or the treatment? Contact the relevant location. You also have the right to lodge a complaint with the Dutch Data Protection Authority.')}
                    </p>
                  </section>
                </div>
              </Reveal>

              <div className="mt-10 p-6 bg-bcn-ice rounded-xl2 text-sm text-ink-muted">
                <p className="font-semibold text-ink mb-2">{t('Contact', 'Contact')}</p>
                <p>{companyInfo.name}</p>
                <p>{companyInfo.administration.address}, {companyInfo.administration.postalCode} {companyInfo.administration.city}</p>
                <p>{t('KvK', 'Chamber of Commerce')} {companyInfo.kvk}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
