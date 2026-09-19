import { LinkButton } from '@/components/Button';
import { useRouter } from '@/router';
import { copy, useLanguage } from '@/language';

export function MobileStickyCta() {
  const { path } = useRouter();
  const { language } = useLanguage();
  if (path === '/afspraak') return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pt-3 bg-white/95 border-t border-bcn-100 pointer-events-none"
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
