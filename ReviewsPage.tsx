import { Star, Quote } from 'lucide-react';
import { Link } from '@/router';
import { Reveal } from '@/components/Reveal';
import { LinkButton } from '@/components/Button';
import { reviews } from '@/data/reviews';
import { companyInfo } from '@/data/site';
import { copy, useLanguage } from '@/language';

export function ReviewsPage() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  return (
    <>
      <section className="pt-[80px] bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10 py-12 lg:py-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-xs text-ink-muted mb-8">
              <Link to="/" className="hover:text-bcn-deep">Home</Link>
              <span>/</span>
              <Link to="/reviews" className="text-ink">{t('Ervaringen', 'Reviews')}</Link>
            </nav>
            <h1 className="text-hero text-ink text-balance">{t('Ervaringen van onze patiënten.', 'Experiences from our patients.')}</h1>
            <p className="mt-4 text-body-lg text-ink-muted max-w-xl">{t('Persoonlijke aandacht en goede zorg staan centraal.', 'Personal attention and good care are central.')}</p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-bcn-deep">{companyInfo.googleRating}</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="#168FE3" className="text-bcn-blue" />)}
                  </div>
                  <div className="text-xs text-ink-muted">{t('Google beoordeling', 'Google rating')}</div>
                </div>
              </div>
              <div className="h-12 w-px bg-bcn-100 hidden sm:block" />
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-bcn-deep">{companyInfo.patientRating}</div>
                <div className="text-xs text-ink-muted">{t('Gemiddelde patiëntbeoordeling', 'Average patient rating')}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Reveal key={review.id}>
                <article className="bg-bcn-ice rounded-xl2 p-7 h-full">
                  <Quote size={24} className="text-bcn-300 mb-4" />
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={13} fill="#168FE3" className="text-bcn-blue" />)}
                  </div>
                  <p className="text-ink leading-relaxed text-sm text-pretty">{review.text}</p>
                  <div className="mt-5 pt-5 border-t border-bcn-200/50">
                    <div className="font-semibold text-ink text-sm">{review.name}</div>
                    <div className="text-xs text-ink-muted mt-0.5">{review.date}</div>
                    {review.location && <div className="text-xs text-bcn-deep mt-0.5">{review.location}</div>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <LinkButton to="/reviews/schrijf" variant="secondary" withArrow>{t('Schrijf een recensie', 'Write a review')}</LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
