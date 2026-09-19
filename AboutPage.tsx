import { Reveal } from '@/components/Reveal';
import { Link } from '@/router';
import { Stethoscope } from 'lucide-react';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

export function AboutPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const timeline = [
    { year: '2001', text: t('Besnijdenis Centrum Amsterdam opgericht door huisartsen Erik Robberse en Lex Klein.', 'Besnijdenis Centrum Amsterdam founded by general practitioners Erik Robberse and Lex Klein.') },
    { year: '2002', text: t('Vestiging Utrecht geopend door huisarts Lex Klein en chirurg Roderick Schmitz.', 'Utrecht location opened by general practitioner Lex Klein and surgeon Roderick Schmitz.') },
    { year: '2003', text: t('Vestiging Almere geopend.', 'Almere location opened.') },
    { year: '2005', text: t('Vestiging Haaglanden geopend. Jongensbesnijdenissen worden niet meer vergoed vanuit de basisverzekering.', 'Haaglanden location opened. Circumcisions for boys are no longer reimbursed under basic health insurance.') },
    { year: '2005–2016', text: t('Uitbreiding naar Arnhem, Breda, Rotterdam, Eindhoven Regio en Maastricht.', 'Expansion to Arnhem, Breda, Rotterdam, Eindhoven Region and Maastricht.') },
    { year: t('Vandaag', 'Today'), text: t('Negen gespecialiseerde locaties, meer dan 90.000 behandelingen sinds 2001.', 'Nine specialised locations, more than 90,000 treatments since 2001.') },
  ];
  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/over-bcn" className="text-ink">{t('Over BCN', 'About BCN')}</Link>
            </nav>
          </Reveal>

          <Reveal stagger>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">{t('Over ons', 'About us')}</span>
            <h1 className="mt-4 text-hero text-ink text-balance">{t('Gespecialiseerd sinds 2001.', 'Specialists since 2001.')}</h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Besnijdenis Centrum Nederland', 'Besnijdenis Centrum Nederland')}</h2>
            <div className="space-y-4 text-ink leading-relaxed">
              <p>
                {t('Besnijdenis Centrum Nederland (BCN) is de oudste en grootste kliniek voor besnijdenissen in Nederland, waar sinds 2001 meer dan 90.000 jongens en mannen zijn besneden. BCN telt 9 gespecialiseerde centra verspreid over Nederland waar ervaren artsen besnijdenissen uitvoeren bij jongens en mannen onder plaatselijke verdoving.', 'Besnijdenis Centrum Nederland (BCN) is the oldest and largest circumcision clinic in the Netherlands. Since 2001, more than 90,000 boys and men have been circumcised here. BCN has 9 specialised centres throughout the Netherlands where experienced doctors perform circumcisions for boys and men under local anaesthetic.')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visie */}
      <section className="py-16 lg:py-24 bg-bcn-ice">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Onze visie', 'Our vision')}</h2>
            <div className="space-y-4 text-ink leading-relaxed">
              <p>
                {t('De artsen van Besnijdenis Centrum Nederland verrichten op een zorgvuldige en medisch verantwoorde wijze besnijdenissen bij jongens en mannen. Wij streven naar een optimaal resultaat van onze ingrepen en naar een zo gering mogelijk aantal complicaties. Voor de patiënt moet de ingreep zo min mogelijk belastend zijn, door toepassing van goede verdoving.', 'The doctors at Besnijdenis Centrum Nederland perform circumcisions for boys and men carefully and in a medically responsible manner. We aim for the best possible outcome from our procedures and for as few complications as possible. The procedure should be as minimally burdensome as possible for the patient through the use of effective anaesthesia.')}
              </p>
              <p>
                {t('Wij doen besnijdenissen zowel vanwege medische als religieuze redenen. Wij weten hoe belangrijk en spannend de besnijdenis is voor de ouders van de patiënt en voor de patiënt zelf.', 'We perform circumcisions for both medical and religious reasons. We know how important and daunting circumcision can be for the patient’s parents and for the patient.')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Geschiedenis timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-10">{t('Onze geschiedenis', 'Our history')}</h2>
          </Reveal>
          <div className="relative pl-8 pb-20 lg:hidden">
            <div className="absolute left-3.5 top-2 bottom-20 w-px bg-bcn-200" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <Reveal key={item.year}>
                  <div className="relative">
                    <div className="absolute -left-8 top-0 w-7 h-7 rounded-full bg-bcn-blue text-white flex items-center justify-center text-[10px] font-bold">
                      {item.year === t('Vandaag', 'Today') ? '★' : item.year.slice(-2)}
                    </div>
                    <div className="font-bold text-bcn-deep text-sm mb-1">{item.year}</div>
                    <p className="text-sm text-ink-muted leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="relative hidden pl-8 lg:block">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-bcn-200" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <Reveal key={item.year}>
                  <div className="relative">
                    <div className="absolute -left-8 top-0.5 w-8 h-8 rounded-full bg-bcn-blue text-white flex items-center justify-center text-[10px] font-bold">
                      {item.year === t('Vandaag', 'Today') ? '★' : item.year.slice(-2)}
                    </div>
                    <div className="font-bold text-bcn-deep text-sm mb-1">{item.year}</div>
                    <p className="text-ink-muted leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artsen */}
      <section className="py-16 lg:py-24 bg-bcn-ice">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Onze artsen & assistenten', 'Our doctors & assistants')}</h2>
            <p className="text-ink leading-relaxed mb-8">
              {t('BCN-artsen hebben relevante medische en chirurgische achtergronden en ontvangen interne training. Zij werken op vaste vestigingen en zijn ervaren in het uitvoeren van besnijdenissen bij jongens en mannen.', 'BCN doctors have relevant medical and surgical backgrounds and receive internal training. They work at fixed locations and are experienced in performing circumcisions for boys and men.')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl2">
                <div className="w-12 h-12 rounded-full bg-bcn-ice flex items-center justify-center mb-3">
                  <Stethoscope size={20} className="text-bcn-deep" />
                </div>
                <h3 className="font-bold text-ink mb-1">{t('Medische achtergrond', 'Medical background')}</h3>
                <p className="text-sm text-ink-muted">{t('Artsen met relevante medische en chirurgische ervaring.', 'Doctors with relevant medical and surgical experience.')}</p>
              </div>
              <div className="bg-white p-6 rounded-xl2">
                <div className="w-12 h-12 rounded-full bg-bcn-ice flex items-center justify-center mb-3">
                  <Stethoscope size={20} className="text-bcn-deep" />
                </div>
                <h3 className="font-bold text-ink mb-1">{t('Interne training', 'Internal training')}</h3>
                <p className="text-sm text-ink-muted">{t('Specifieke BCN-training en protocollen.', 'Specific BCN training and protocols.')}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resultaten */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <h2 className="text-h3 text-ink mb-6">{t('Onze resultaten', 'Our results')}</h2>
            <p className="text-ink leading-relaxed mb-8">
              {t('De hoge beoordelingen die wij ontvangen', 'The high ratings we receive')} &mdash; {t('een gemiddelde van', 'an average of')} {companyInfo.patientRating} {t('bij patiënten en', 'from patients and')} {companyInfo.googleRating} {t('sterren op Google', 'stars on Google')} &mdash; {t('tonen aan dat wij zeer goede zorg leveren.', 'show that we provide very good care.')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-bcn-ice rounded-xl2 text-center">
                <div className="text-4xl font-bold text-bcn-deep">{companyInfo.googleRating}★</div>
                <div className="text-sm text-ink-muted mt-1">{t('Google beoordeling', 'Google rating')}</div>
              </div>
              <div className="p-6 bg-bcn-ice rounded-xl2 text-center">
                <div className="text-4xl font-bold text-bcn-deep">{companyInfo.patientRating}</div>
                <div className="text-sm text-ink-muted mt-1">{t('Patiëntbeoordeling', 'Patient rating')}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
