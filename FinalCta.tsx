import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';

export function FinalCta() {
  return (
    <section className="bg-bcn-blue py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-10 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-light">Klaar om een afspraak te maken?</span>
        </Reveal>
        <Reveal stagger>
          <h2 className="mt-4 text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight text-balance">
            Kies uw vestiging en plan eenvoudig een afspraak.
          </h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton to="/afspraak" variant="light" size="lg" withArrow className="w-full sm:w-auto">Afspraak maken</LinkButton>
            <LinkButton to="/vestigingen" variant="secondary" size="lg" className="!border-white/30 !text-white hover:!bg-white/10 w-full sm:w-auto">Bekijk vestigingen</LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
