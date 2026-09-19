import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { LinkButton } from './Button';
import { Link, useRouter } from '@/router';
import { useScrollPosition } from '@/hooks/useReveal';
import { locations } from '@/data/locations';
import { navLinks, companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

export function Navigation() {
  const { language, setLanguage: onLanguageChange } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const translatedNavLinks = navLinks.map((link) => ({
    ...link,
    label: t(link.label, ({
      'Behandelingen': 'Treatments',
      'Vestigingen': 'Locations',
      'Over BCN': 'About BCN',
      'Voor artsen': 'For clinicians',
      'Informatie': 'Information',
    } as Record<string, string>)[link.label] || link.label),
    children: link.children?.map((child) => ({
      ...child,
      label: t(child.label, ({
        'Besnijdenis voor jongens': 'Circumcision for boys',
        'Besnijdenis voor mannen': 'Circumcision for men',
        'Advies & correcties': 'Advice & corrections',
        'Kosten': 'Costs',
        'Algemene informatie': 'General information',
        'Veelgestelde vragen': 'Frequently asked questions',
        'Downloads': 'Downloads',
        'Privacy': 'Privacy',
        'Klachten & geschillen': 'Complaints & disputes',
      } as Record<string, string>)[child.label] || child.label),
    })),
  }));
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { path, navigate } = useRouter();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return path === '/';
    const base = href.split('#')[0];
    return path === base || path.startsWith(base + '/');
  };

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setOpenMenu(null);
    if (href.includes('#')) {
      const [page, anchor] = href.split('#');
      navigate(page);
      setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 200);
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-bcn-100 h-[64px]'
            : 'bg-white border-b border-transparent h-[72px] lg:h-[80px]'
        }`}
      >
        <nav className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 h-full" aria-label={t('Hoofdnavigatie', 'Main navigation')}>
          <div className="flex items-center justify-between h-full gap-4 lg:gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" ariaLabel={t('Besnijdenis Centrum Nederland — Home', 'Besnijdenis Centrum Nederland — Home')}>
              <Logo />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {translatedNavLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium tracking-tight transition-colors duration-200 rounded-lg whitespace-nowrap ${
                      isActive(link.href) ? 'text-bcn-deep' : 'text-ink hover:text-bcn-deep'
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown size={14} className={`transition-transform duration-300 ${openMenu === link.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {link.children && openMenu === link.label && (
                    <div className="absolute top-full left-0 pt-3 animate-slide-down z-10">
                      <div className="bg-white rounded-xl2 shadow-deep border border-bcn-100 p-2 min-w-[260px]">
                        {link.href === '/vestigingen' ? (
                          <>
                            {locations.map((loc) => (
                              <button key={loc.slug} onClick={() => handleNav(`/vestigingen/${loc.slug}`)} className="group flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bcn-ice transition-colors text-left">
                                <MapPin size={16} className="text-bcn-blue flex-shrink-0" />
                                <span className="text-sm font-medium text-ink group-hover:text-bcn-deep">{loc.city}</span>
                              </button>
                            ))}
                            <div className="border-t border-bcn-100 mt-1 pt-1">
                              <button onClick={() => handleNav('/vestigingen')} className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-bcn-ice transition-colors text-left">
                                <span className="text-sm font-semibold text-bcn-blue">{t('Bekijk alle vestigingen', 'View all locations')}</span>
                                <span className="text-bcn-blue">→</span>
                              </button>
                            </div>
                          </>
                        ) : (
                          link.children.map((child) => (
                            <button key={child.href} onClick={() => handleNav(child.href)} className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-ink hover:bg-bcn-ice hover:text-bcn-deep transition-colors">
                              {child.label}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-1.5 text-sm">
                <button onClick={() => onLanguageChange('nl')} aria-pressed={language === 'nl'} className={`px-2 py-1 rounded transition-colors ${language === 'nl' ? 'font-semibold text-ink' : 'font-medium text-ink-muted hover:text-ink'}`}>NL</button>
                <span className="text-bcn-200">/</span>
                <button onClick={() => onLanguageChange('en')} aria-pressed={language === 'en'} className={`px-2 py-1 rounded transition-colors ${language === 'en' ? 'font-semibold text-ink' : 'font-medium text-ink-muted hover:text-ink'}`}>EN</button>
              </div>
              <button onClick={() => handleNav('/contact')} className="text-sm font-medium text-ink hover:text-bcn-deep transition-colors">{t('Contact', 'Contact')}</button>
              <LinkButton to="/afspraak" size="sm" withArrow>{t('Afspraak maken', 'Make an appointment')}</LinkButton>
            </div>

            {/* Mobile: logo + menu only */}
            <div className="flex lg:hidden items-center">
              <button onClick={() => setMobileOpen(true)} aria-label={t('Menu openen', 'Open menu')} className="p-2 -mr-2 text-ink rounded-lg">
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu — full screen */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-bcn-dark/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-[400px] bg-white flex flex-col transition-transform duration-300 ease-smooth ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-[64px] border-b border-bcn-100 flex-shrink-0">
            <Logo />
            <button onClick={() => setMobileOpen(false)} aria-label={t('Menu sluiten', 'Close menu')} className="p-2 -mr-2 text-ink rounded-lg">
              <X size={22} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 scrollbar-hide">
            {/* Main links */}
            <div className="space-y-0">
              {translatedNavLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={() => link.children ? setOpenMenu(openMenu === link.label ? null : link.label) : handleNav(link.href)}
                    className="flex items-center justify-between w-full py-4 text-lg font-bold text-ink border-b border-bcn-50"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={18} className={`transition-transform duration-300 ${openMenu === link.label ? 'rotate-180' : ''}`} />}
                  </button>
                  {link.children && openMenu === link.label && (
                    <div className="py-2 pl-4 space-y-0">
                      {link.href === '/vestigingen' ? (
                        <>
                          {locations.map((loc) => (
                            <button key={loc.slug} onClick={() => handleNav(`/vestigingen/${loc.slug}`)} className="flex items-center gap-2 w-full py-3 text-sm font-medium text-ink-muted">
                              <MapPin size={14} className="text-bcn-blue" />
                              {loc.city}
                            </button>
                          ))}
                          <button onClick={() => handleNav('/vestigingen')} className="block w-full py-3 text-sm font-semibold text-bcn-blue">{t('Bekijk alle vestigingen', 'View all locations')} →</button>
                        </>
                      ) : (
                        link.children.map((child) => (
                          <button key={child.href} onClick={() => handleNav(child.href)} className="block w-full text-left py-3 text-sm font-medium text-ink-muted">
                            {child.label}
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              {/* Contact as direct link */}
              <button onClick={() => handleNav('/contact')} className="block w-full text-left py-4 text-lg font-bold text-ink border-b border-bcn-50">
                {t('Contact', 'Contact')}
              </button>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-6 border-t border-bcn-100 space-y-3">
              <a href={`tel:${companyInfo.amsterdamPhone}`} className="flex items-center gap-3 text-ink">
                <Phone size={16} className="text-bcn-blue" />
                <span className="font-semibold text-sm">{companyInfo.amsterdamPhone}</span>
                <span className="text-xs text-ink-muted">Amsterdam/Almere</span>
              </a>
              <a href={`tel:${companyInfo.mainPhone}`} className="flex items-center gap-3 text-ink">
                <Phone size={16} className="text-bcn-blue" />
                <span className="font-semibold text-sm">{companyInfo.mainPhone}</span>
                <span className="text-xs text-ink-muted">{t('overig', 'other locations')}</span>
              </a>
            </div>

            {/* NL / EN */}
            <div className="mt-6 flex items-center gap-2 text-sm">
              <button onClick={() => onLanguageChange('nl')} aria-pressed={language === 'nl'} className={`px-3 py-1.5 rounded-lg transition-colors ${language === 'nl' ? 'font-semibold text-ink bg-bcn-ice' : 'font-medium text-ink-muted'}`}>NL</button>
              <span className="text-bcn-200">/</span>
              <button onClick={() => onLanguageChange('en')} aria-pressed={language === 'en'} className={`px-3 py-1.5 rounded-lg transition-colors ${language === 'en' ? 'font-semibold text-ink bg-bcn-ice' : 'font-medium text-ink-muted'}`}>EN</button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-5 py-4 border-t border-bcn-100 flex-shrink-0">
            <LinkButton to="/afspraak" size="lg" withArrow className="w-full">{t('Afspraak maken', 'Make an appointment')}</LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
