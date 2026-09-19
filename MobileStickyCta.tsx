import { useEffect, useState } from 'react';
import { LinkButton } from '@/components/Button';
import { useRouter } from '@/router';
import { copy, useLanguage } from '@/language';

export function MobileStickyCta() {
  const { path } = useRouter();
  const { language } = useLanguage();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (path === '/afspraak') return null;

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-3 bg-white/95 border-t border-bcn-100 pointer-events-none transition-transform duration-200 ${footerVisible ? 'translate-y-full' : 'translate-y-0'}`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="pointer-events-auto pb-2">
        <LinkButton to="/afspraak" size="lg" withArrow className="w-full !h-14 !py-0 !shadow-none">
          {copy(language, 'Afspraak maken', 'Make an appointment')}
        </LinkButton>
      </div>
    </div>
  );
}
