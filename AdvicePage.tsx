import { Phone, AlertTriangle } from 'lucide-react';
import { Link } from '@/router';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder';
import { adviceProcess, adviceOutcomes } from '@/data/treatment';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

export function AdvicePage() {
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
              <Link to="/advies-en-correcties" className="text-ink">{t('Advies & correcties', 'Advice & corrections')}</Link>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Reveal stagger>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">{t('Behandeling', 'Treatment')}</span>
                <h1 className="mt-4 text-hero text-ink text-balance">{t('Advies na een eerdere besnijdenis.', 'Advice after an earlier circumcision.')}</h1>
                <p className="mt-5 text-body-lg text-ink-muted max-w-lg text-pretty">
                  {t('BCN kan patiënten onderzoeken die problemen ervaren of vragen hebben over het resultaat van een besnijdenis die elders is uitgevoerd.', 'BCN can assess patients who have concerns or questions about the outcome of a circumcision performed elsewhere.')}
                </p>
              </Reveal>

              <Reveal>
                <div className="mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl2">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={18} className="text-amber-600" />
                    <span className="font-semibold text-amber-800 text-sm">{t('Afspraak voor advies: uitsluitend telefonisch', 'Advice appointments: by telephone only')}</span>
                  </div>
                  <p className="text-sm text-amber-700 mb-4">
                    {t('Een afspraak voor onderzoek of advies kan niet online worden gemaakt.', 'An appointment for assessment or advice cannot be made online.')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${companyInfo.amsterdamPhone}`} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-all">
                      <Phone size={15} />
                      Amsterdam & Almere: {companyInfo.amsterdamPhone}
                    </a>
                    <a href={`tel:${companyInfo.mainPhone}`} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition-all">
                      <Phone size={15} />
                      {t('Overig', 'Other locations')}: {companyInfo.mainPhone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <ImageReveal>
                <PhotoPlaceholder label="Advies — consultatie" sublabel="Fotografie volgt binnenkort" aspect="aspect-[4/5]" rounded="rounded-xl2" />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-bcn-ice">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-10">{t('Het adviestraject', 'The advice process')}</h2>
          </Reveal>
          <div className="space-y-0">
            {adviceProcess.map((step, i) => (
              <Reveal key={step.number}>
                <div className="flex gap-6 pb-8 last:pb-0 relative">
                  {i < adviceProcess.length - 1 && <div className="absolute left-[19px] top-10 bottom-0 w-px bg-bcn-200" />}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bcn-blue text-white flex items-center justify-center text-sm font-bold relative z-10">{step.number}</div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-ink mb-1">{step.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Mogelijke uitkomsten', 'Possible outcomes')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {adviceOutcomes.map((outcome) => (
                <div key={outcome.title} className="p-6 border border-bcn-100 rounded-xl2">
                  <h3 className="font-bold text-ink mb-2">{outcome.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Correctie */}
      <section className="py-16 lg:py-24 bg-bcn-ice">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Corrigerende operatie', 'Corrective surgery')}</h2>
            <p className="text-ink leading-relaxed mb-4">
              {t('In bepaalde gevallen kan BCN een corrigerende operatie uitvoeren. Dit is afhankelijk van de aard van het probleem en de beoordeling door de arts.', 'In certain cases, BCN can perform corrective surgery. This depends on the nature of the issue and the doctor\'s assessment.')}
            </p>
            <p className="text-ink leading-relaxed mb-6">
              {t('Niet elke correctie kan door BCN worden uitgevoerd. Sommige procedures vereisen een uroloog of plastisch chirurg. De arts beoordeelt dit tijdens het onderzoek.', 'Not every correction can be performed by BCN. Some procedures require a urologist or plastic surgeon. The doctor assesses this during the consultation.')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl2">
                <div className="text-xs text-ink-muted mb-1">{t('Kosten jongen tot 16', 'Cost for a boy up to age 16')}</div>
                <div className="text-2xl font-bold text-bcn-deep">€325</div>
              </div>
              <div className="bg-white p-6 rounded-xl2">
                <div className="text-xs text-ink-muted mb-1">{t('Kosten volwassen man', 'Cost for an adult man')}</div>
                <div className="text-2xl font-bold text-bcn-deep">€495</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-bcn-blue">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-h3 text-white mb-6">{t('Bel voor een afspraak', 'Call to make an appointment')}</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${companyInfo.amsterdamPhone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg bg-white text-bcn-dark hover:bg-bcn-50 transition-all">
                <Phone size={16} />
                {companyInfo.amsterdamPhone}
                <span className="text-sm font-normal text-ink-muted ml-2">Amsterdam/Almere</span>
              </a>
              <a href={`tel:${companyInfo.mainPhone}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all">
                <Phone size={16} />
                {companyInfo.mainPhone}
                <span className="text-sm font-normal text-white/60 ml-2">{t('overig', 'other locations')}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
