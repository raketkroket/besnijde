import { Star, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { reviews } from '@/data/reviews';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

export function ReviewsSection() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-ink leading-[1.1] tracking-tight text-balance">{t('Ervaringen van onze patiënten.', 'Experiences from our patients.')}</h2>
              <p className="mt-3 text-ink-muted">{t('Persoonlijke aandacht en goede zorg staan centraal.', 'Personal attention and good care are central.')}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="#168FE3" className="text-bcn-blue" />)}</div>
              <div className="text-sm"><span className="font-bold text-ink">{companyInfo.googleRating}</span><span className="text-ink-muted"> {t('op Google', 'on Google')}</span></div>
            </div>
          </div>
        </Reveal>

        {/* Mobile: 1 column. Tablet+: grid */}
        <Reveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {reviews.slice(0, 3).map((review) => (
              <article key={review.id} className="border-t-2 border-bcn-blue bg-bcn-ice/60 p-6 sm:p-7">
                <Quote size={24} className="text-bcn-blue mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={13} fill="#168FE3" className="text-bcn-blue" />)}
                </div>
                <p className="text-ink leading-relaxed text-sm text-pretty">{review.text}</p>
                <div className="mt-5 pt-5 border-t border-bcn-200/50">
                  <div className="font-semibold text-ink text-sm">{review.name}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{review.date}</div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <LinkButton to="/reviews" variant="secondary" withArrow>{t('Bekijk alle ervaringen', 'View all reviews')}</LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
