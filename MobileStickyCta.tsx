import { LinkButton } from '@/components/Button';
import { useRouter } from '@/router';
import { copy, useLanguage } from '@/language';

export function MobileStickyCta() {
  const { path } = useRouter();
  const { language } = useLanguage();
  if (path === '/afspraak') return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-2 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="pointer-events-auto pb-3">
        <LinkButton to="/afspraak" size="lg" withArrow className="w-full shadow-card">
          {copy(language, 'Afspraak maken', 'Make an appointment')}
        </LinkButton>
      </div>
    </div>
  );
}
