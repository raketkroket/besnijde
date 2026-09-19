import { Download, ExternalLink, FileText } from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { copy, useLanguage } from '@/language';
import aftercareBoysPdf from '@/downloads/Aftercare Boys-download.pdf?url';
import aftercareArabicPdf from '@/downloads/Nazorg-Arabisch-download.pdf?url';
import aftercareFrenchPdf from '@/downloads/Nazorg-Francais-download.pdf?url';
import aftercareBoysDutchPdf from '@/downloads/Nazorg-info-jongen-download.pdf?url';
import aftercareAdultsPdf from '@/downloads/Nazorg-na-de-besnijdenis-volwassene-download.pdf?url';
import aftercareTurkishPdf from '@/downloads/Nazorg-Turks-download.pdf?url';
import consentChildPdf from '@/downloads/Toestemmingsverklaring-kind-download.pdf?url';
import consentAdultPdf from '@/downloads/Toestemmingsverklaring-volwassene-download.pdf?url';

const downloads = [
  { href: aftercareBoysPdf, filename: 'Aftercare Boys-download.pdf', nl: 'Nazorg jongens', en: 'Aftercare for boys' },
  { href: aftercareBoysDutchPdf, filename: 'Nazorg-info-jongen-download.pdf', nl: 'Nazorginformatie jongen', en: 'Aftercare information for boys' },
  { href: aftercareAdultsPdf, filename: 'Nazorg-na-de-besnijdenis-volwassene-download.pdf', nl: 'Nazorg na de besnijdenis voor volwassenen', en: 'Aftercare following adult circumcision' },
  { href: aftercareArabicPdf, filename: 'Nazorg-Arabisch-download.pdf', nl: 'Nazorginformatie Arabisch', en: 'Aftercare information in Arabic' },
  { href: aftercareFrenchPdf, filename: 'Nazorg-Francais-download.pdf', nl: 'Nazorginformatie Frans', en: 'Aftercare information in French' },
  { href: aftercareTurkishPdf, filename: 'Nazorg-Turks-download.pdf', nl: 'Nazorginformatie Turks', en: 'Aftercare information in Turkish' },
  { href: consentChildPdf, filename: 'Toestemmingsverklaring-kind-download.pdf', nl: 'Toestemmingsverklaring kind', en: 'Child consent form' },
  { href: consentAdultPdf, filename: 'Toestemmingsverklaring-volwassene-download.pdf', nl: 'Toestemmingsverklaring volwassene', en: 'Adult consent form' },
];

export function DownloadsPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);

  return (
    <>
      <section className="bg-white pt-[80px]">
        <div className="mx-auto max-w-8xl px-5 py-10 sm:px-6 lg:px-10 lg:py-20">
          <Reveal>
            <nav className="mb-8 flex items-center gap-2 text-xs text-ink-muted">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <span className="text-ink">{t('Downloads', 'Downloads')}</span>
            </nav>
            <h1 className="text-hero text-ink text-balance">{t('Downloads.', 'Downloads.')}</h1>
            <p className="mt-4 max-w-2xl text-body-lg text-ink-muted">
              {t('Kies het document dat u wilt bekijken of downloaden.', 'Choose the document you would like to view or download.')}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
          <Reveal>
            <div className="divide-y divide-bcn-100 border-y border-bcn-100">
              {downloads.map((document) => (
                <div key={document.filename} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-bcn-ice text-bcn-deep">
                      <FileText size={20} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-bold text-ink">{t(document.nl, document.en)}</h2>
                      <p className="mt-1 text-sm text-ink-muted">PDF</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                    <a
                      href={document.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-bcn-100 px-4 py-2 text-sm font-semibold text-bcn-deep transition-colors hover:bg-bcn-ice sm:flex-none"
                    >
                      <ExternalLink size={17} aria-hidden="true" />
                      {t('Bekijken', 'View')}
                    </a>
                    <a
                      href={document.href}
                      download={document.filename}
                      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-bcn-deep px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-bcn-blue sm:flex-none"
                    >
                      <Download size={17} aria-hidden="true" />
                      {t('Downloaden', 'Download')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}