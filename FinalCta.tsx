import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { copy, useLanguage } from '@/language';

export function FinalCta() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  return (
    <section className="bg-bcn-blue py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-light">{t('Klaar om een afspraak te maken?', 'Ready to make an appointment?')}</span>
        </Reveal>
        <Reveal stagger>
          <h2 className="mt-4 text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight text-balance">
            {t('Kies uw vestiging en plan eenvoudig een afspraak.', 'Choose your location and easily schedule an appointment.')}
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton to="/afspraak" variant="light" size="lg" withArrow className="w-full sm:w-auto">{t('Afspraak maken', 'Make an appointment')}</LinkButton>
            <LinkButton to="/vestigingen" variant="secondary" size="lg" className="!border-white/30 !text-white hover:!bg-white/10 w-full sm:w-auto">{t('Bekijk vestigingen', 'View locations')}</LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
