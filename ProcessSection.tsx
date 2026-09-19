import { Reveal } from '@/components/Reveal';

const steps = [
  { number: '01', title: 'Kies een vestiging', description: 'Selecteer een van onze negen locaties in Nederland.' },
  { number: '02', title: 'Plan een afspraak', description: 'Kies een beschikbare datum en vul uw gegevens in.' },
  { number: '03', title: 'Behandeling', description: 'De behandeling wordt uitgevoerd door een ervaren arts onder plaatselijke verdoving.' },
  { number: '04', title: 'Nazorg', description: 'U ontvangt duidelijke nazorginstructies. Bij vragen staat BCN klaar.' },
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-bcn-ice">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-14">
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-ink leading-[1.1] tracking-tight text-balance">Van afspraak tot nazorg.</h2>
        </Reveal>

        {/* Desktop horizontal */}
        <div className="hidden lg:block relative">
          <Reveal><div className="absolute top-5 left-0 right-0 h-px bg-bcn-200" /></Reveal>
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step) => (
              <Reveal key={step.number}>
                <div className="relative">
                  <div className="relative w-10 h-10 rounded-full bg-white border-2 border-bcn-blue flex items-center justify-center text-sm font-bold text-bcn-deep mb-6">{step.number}</div>
                  <h3 className="text-lg font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-bcn-200" />
            <div className="space-y-8">
              {steps.map((step) => (
                <Reveal key={step.number}>
                  <div className="relative">
                    <div className="absolute -left-8 top-0.5 w-8 h-8 rounded-full bg-white border-2 border-bcn-blue flex items-center justify-center text-xs font-bold text-bcn-deep">{step.number}</div>
                    <h3 className="font-bold text-ink mb-1">{step.title}</h3>
                    <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
