import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { companyInfo } from '@/data/site';

const tocItems = [
  'AVG & WGBO',
  'Verwerkingsdoeleinden',
  'Vertrouwelijkheid',
  'Beveiliging',
  'Bewaartermijnen',
  'Patiëntenrechten',
  'Inzage & afschrift',
  'Delen met derden',
  'Informatie-uitwisseling',
  'Klachten',
];

export function PrivacyPage() {
  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/privacy" className="text-ink">Privacy</Link>
            </nav>
            <h1 className="text-hero text-ink text-balance">Privacyreglement.</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* TOC */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">Inhoud</h2>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'en')}`}
                      className="block px-3 py-2 text-sm font-medium text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep rounded-lg transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 max-w-2xl">
              <Reveal>
                <div className="prose prose-slate max-w-none">
                  <section id="avg-wgbo" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">AVG & WGBO</h2>
                    <p className="text-ink leading-relaxed">
                      Besnijdenis Centrum Nederland verwerkt persoons- en medische gegevens in
                      overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de
                      Wet op de geneeskundige behandelingsovereenkomst (WGBO).
                    </p>
                  </section>

                  <section id="verwerkingsdoeleinden" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Verwerkingsdoeleinden</h2>
                    <p className="text-ink leading-relaxed">
                      Van alle patiënten worden medische gegevens geregistreerd en bewaard volgens de
                      wettelijke richtlijnen en bewaartermijnen. Deze gegevens worden gebruikt voor
                      de uitvoering van de behandeling, de nazorg en het medisch dossier.
                    </p>
                  </section>

                  <section id="vertrouwelijkheid" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Vertrouwelijkheid</h2>
                    <p className="text-ink leading-relaxed">
                      Alle medische gegevens worden vertrouwelijk behandeld. Alleen bevoegd
                      personeel met betrokkenheid bij uw behandeling heeft toegang tot deze gegevens.
                    </p>
                  </section>

                  <section id="beveiliging" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Beveiliging</h2>
                    <p className="text-ink leading-relaxed">
                      BCN neemt passende technische en organisatorische maatregelen om uw gegevens
                      te beveiligen tegen verlies, inbreuk of onbevoegde toegang.
                    </p>
                  </section>

                  <section id="bewaartermijnen" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Bewaartermijnen</h2>
                    <p className="text-ink leading-relaxed">
                      Medische gegevens worden bewaard volgens de wettelijke bewaartermijnen die
                      gelden voor medische dossiers in Nederland.
                    </p>
                  </section>

                  <section id="patintenrechten" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Patiëntenrechten</h2>
                    <p className="text-ink leading-relaxed">
                      Als patiënt heeft u recht op inzage in uw dossier, rectificatie van onjuiste
                      gegevens, en het vragen van verwijdering van gegevens voor zover dit binnen
                      de wettelijke kaders mogelijk is.
                    </p>
                  </section>

                  <section id="inzage-afschrift" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Inzage & afschrift</h2>
                    <p className="text-ink leading-relaxed">
                      U kunt een verzoek tot inzage of afschrift van uw medische gegevens indienen
                      bij de vestiging waar u bent behandeld.
                    </p>
                  </section>

                  <section id="delen-met-derden" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Delen met derden</h2>
                    <p className="text-ink leading-relaxed">
                      Uw medische gegevens worden alleen gedeeld met derden met uw expliciete
                      toestemming, of wanneer de wet dit vereist.
                    </p>
                  </section>

                  <section id="informatie-uitwisseling" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Informatie-uitwisseling</h2>
                    <p className="text-ink leading-relaxed">
                      Informatie-uitwisseling met andere zorgverleners vindt alleen plaats met uw
                      toestemming.
                    </p>
                  </section>

                  <section id="klachten" className="mb-10 scroll-mt-28">
                    <h2 className="text-xl font-bold text-ink mb-3">Klachten</h2>
                    <p className="text-ink leading-relaxed">
                      Heeft u een klacht over de verwerking van uw gegevens of over de behandeling?
                      Neem dan contact op met de betreffende vestiging. U heeft ook het recht een
                      klacht in te dienen bij de Autoriteit Persoonsgegevens.
                    </p>
                  </section>
                </div>
              </Reveal>

              <div className="mt-10 p-6 bg-bcn-ice rounded-xl2 text-sm text-ink-muted">
                <p className="font-semibold text-ink mb-2">Contact</p>
                <p>{companyInfo.name}</p>
                <p>{companyInfo.administration.address}, {companyInfo.administration.postalCode} {companyInfo.administration.city}</p>
                <p>KvK {companyInfo.kvk}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
