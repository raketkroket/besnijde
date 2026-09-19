import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { faqCategories } from '@/data/faq';
import { copy, useLanguage } from '@/language';

export function FaqPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/faq" className="text-ink">{t('Veelgestelde vragen', 'Frequently asked questions')}</Link>
            </nav>
            <h1 className="text-hero text-ink text-balance">{t('Veelgestelde vragen.', 'Frequently asked questions.')}</h1>
            <p className="mt-4 text-body-lg text-ink-muted max-w-xl">{t('Antwoorden per categorie.', 'Answers by category.')}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Categories */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-1">
                {faqCategories.map((cat, i) => (
                  <button
                    key={cat.category}
                    onClick={() => { setActiveCategory(i); setOpenIndex(0); }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === i ? 'bg-bcn-blue text-white' : 'text-ink-muted hover:bg-bcn-ice hover:text-bcn-deep'
                    }`}
                  >
                    {t(cat.category, ({ Afspraak: 'Appointments', 'Voor jongens': 'For boys', 'Voor mannen': 'For men', Voorbereiding: 'Preparation', Nazorg: 'Aftercare', Kosten: 'Costs', Vestigingen: 'Locations' } as Record<string, string>)[cat.category] || cat.category)}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="lg:col-span-9">
              <Reveal key={activeCategory}>
                <div className="divide-y divide-bcn-100 border-y border-bcn-100">
                  {faqCategories[activeCategory].items.map((item, i) => {
                    const isOpen = openIndex === i;
                    return (
                      <div key={i}>
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-ink group-hover:text-bcn-deep transition-colors">{item.question}</span>
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-bcn-blue text-white' : 'bg-bcn-ice text-bcn-deep'}`}>
                            {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                          </span>
                        </button>
                        <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '300px' : '0px' }}>
                          <p className="pb-5 text-ink-muted leading-relaxed pr-12 text-pretty">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              <Reveal className="mt-10">
                <div className="bg-bcn-ice rounded-xl2 p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-ink">{t('Staat uw vraag er niet bij?', 'Is your question not listed?')}</h3>
                    <p className="text-sm text-ink-muted mt-1">{t('Neem contact met ons op.', 'Please contact us.')}</p>
                  </div>
                  <LinkButton to="/contact" variant="secondary" withArrow>{t('Contact opnemen', 'Contact us')}</LinkButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
