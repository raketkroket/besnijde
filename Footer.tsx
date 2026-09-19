import { useState } from 'react';
import { Phone, Mail, Plus, Minus } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from '@/router';
import { LinkButton } from './Button';
import { locations } from '@/data/locations';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:block">
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden w-full flex items-center justify-between py-3 text-sm font-semibold text-white/60 uppercase tracking-wider"
      >
        {title}
        <span className="text-white/40">{open ? <Minus size={16} /> : <Plus size={16} />}</span>
      </button>
      <h3 className="hidden lg:block text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">{title}</h3>
      <div className={`${open ? 'block' : 'hidden'} lg:block pb-2 lg:pb-0`}>
        {children}
      </div>
    </div>
  );
}

export function Footer() {
  const { language, setLanguage: onLanguageChange } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  return (
    <footer className="bg-bcn-dark text-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-12 lg:py-20">
        {/* Mobile: logo + description + CTA first */}
        <div className="lg:hidden mb-8">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/50">{t('Gespecialiseerde besnijdeniszorg sinds 2001.', 'Specialist circumcision care since 2001.')}</p>
          <div className="mt-5"><LinkButton to="/afspraak" size="md" withArrow className="w-full">{t('Afspraak maken', 'Make an appointment')}</LinkButton></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand — desktop only here */}
          <div className="hidden lg:block lg:col-span-3">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/50 max-w-xs">{t('Gespecialiseerde besnijdeniszorg sinds 2001.', 'Specialist circumcision care since 2001.')}</p>
            <div className="mt-6 space-y-2">
              <a href={`tel:${companyInfo.mainPhone}`} className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Phone size={15} className="text-bcn-light" />{companyInfo.mainPhone}
              </a>
              <a href={`mailto:${companyInfo.mainEmail}`} className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Mail size={15} className="text-bcn-light" />{companyInfo.mainEmail}
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterAccordion title={t('Behandelingen', 'Treatments')}>
              <ul className="space-y-2 lg:space-y-2">
                <li><Link to="/besnijdenis-jongen" className="text-sm text-white/70 hover:text-white">{t('Jongens', 'Boys')}</Link></li>
                <li><Link to="/besnijdenis-volwassen-man" className="text-sm text-white/70 hover:text-white">{t('Mannen', 'Men')}</Link></li>
                <li><Link to="/advies-en-correcties" className="text-sm text-white/70 hover:text-white">{t('Advies & correcties', 'Advice & corrections')}</Link></li>
              </ul>
            </FooterAccordion>
          </div>

          <div className="lg:col-span-3">
            <FooterAccordion title={t('Vestigingen', 'Locations')}>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {locations.map((loc) => (
                  <li key={loc.slug}><Link to={`/vestigingen/${loc.slug}`} className="text-sm text-white/70 hover:text-white">{loc.city}</Link></li>
                ))}
              </ul>
            </FooterAccordion>
          </div>

          <div className="lg:col-span-2">
            <FooterAccordion title={t('Informatie', 'Information')}>
              <ul className="space-y-2">
                <li><Link to="/over-bcn" className="text-sm text-white/70 hover:text-white">{t('Over BCN', 'About BCN')}</Link></li>
                <li><Link to="/informatie-voor-artsen" className="text-sm text-white/70 hover:text-white">{t('Voor artsen', 'For clinicians')}</Link></li>
                <li><Link to="/faq" className="text-sm text-white/70 hover:text-white">{t('Downloads', 'Downloads')}</Link></li>
                <li><Link to="/privacy" className="text-sm text-white/70 hover:text-white">Privacy</Link></li>
                <li><Link to="/contact" className="text-sm text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </FooterAccordion>
          </div>

          <div className="lg:col-span-2">
            <FooterAccordion title={t('Contact', 'Contact')}>
              <div className="text-sm text-white/70 space-y-1">
                <p>{companyInfo.administration.address}</p>
                <p>{companyInfo.administration.postalCode} {companyInfo.administration.city}</p>
                <p className="mt-2 text-white/40">KvK {companyInfo.kvk}</p>
              </div>
              {/* Mobile phone links */}
              <div className="mt-4 space-y-2 lg:hidden">
                <a href={`tel:${companyInfo.mainPhone}`} className="flex items-center gap-2.5 text-sm text-white/70">
                  <Phone size={15} className="text-bcn-light" />{companyInfo.mainPhone}
                </a>
                <a href={`mailto:${companyInfo.mainEmail}`} className="flex items-center gap-2.5 text-sm text-white/70">
                  <Mail size={15} className="text-bcn-light" />{companyInfo.mainEmail}
                </a>
              </div>
            </FooterAccordion>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">&copy; 2026 Besnijdenis Centrum Nederland</p>
          <div className="flex items-center gap-1.5 text-xs">
            <button onClick={() => onLanguageChange('nl')} aria-pressed={language === 'nl'} className={`px-2 transition-colors ${language === 'nl' ? 'font-semibold text-white' : 'font-medium text-white/50 hover:text-white/70'}`}>NL</button>
            <span className="text-white/30">/</span>
            <button onClick={() => onLanguageChange('en')} aria-pressed={language === 'en'} className={`px-2 transition-colors ${language === 'en' ? 'font-semibold text-white' : 'font-medium text-white/50 hover:text-white/70'}`}>EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
