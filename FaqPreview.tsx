import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { faqPreview } from '@/data/faq';

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-bcn-ice">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-ink leading-[1.1] tracking-tight text-balance">Veelgestelde vragen.</h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-ink-muted">Antwoorden op de meestgestelde vragen over de behandeling, voorbereiding en nazorg.</p>
            </Reveal>
            <Reveal className="mt-6">
              <LinkButton to="/faq" variant="secondary" withArrow>Bekijk alle vragen</LinkButton>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="divide-y divide-bcn-200/50 border-y border-bcn-200/50">
                {faqPreview.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={i}>
                      <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 py-5 text-left group" aria-expanded={isOpen}>
                        <span className="font-semibold text-ink group-hover:text-bcn-deep transition-colors">{item.question}</span>
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-bcn-blue text-white' : 'bg-white text-bcn-deep'}`}>{isOpen ? <Minus size={15} /> : <Plus size={15} />}</span>
                      </button>
                      <div className="overflow-hidden transition-all duration-300 ease-smooth" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                        <p className="pb-5 text-ink-muted leading-relaxed pr-4 sm:pr-12 text-pretty">{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
