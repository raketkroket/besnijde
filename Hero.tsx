import { LinkButton } from '@/components/Button';
import { Counter } from '@/components/Counter';
import { Image } from '@/components/Image';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useReveal';
import { heroStats } from '@/data/site';
import { copy, useLanguage } from '@/language';
import heroImage from './images/p2.jpg';

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.03);
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);

  return (
    <section className="relative bg-white pt-[72px] lg:pt-[80px] overflow-hidden">
      {/* Restrained desktop field behind the media. */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-curve absolute top-0 right-0 hidden h-full w-[45%] bg-bcn-ice lg:block" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-9 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="h-px w-6 sm:w-8 bg-bcn-blue" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">
                  {t('SPECIALISTISCHE ZORG SINDS 2001', 'SPECIALIST CARE SINCE 2001')}
                </span>
              </div>
            </Reveal>

            <Reveal stagger>
              <h1 className="font-editorial text-[clamp(2.375rem,10vw,4.75rem)] font-bold text-ink leading-[1.02] text-balance">
                {t('Ervaren zorg voor jongens en mannen.', 'Experienced care for boys and men.')}
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-5 sm:mt-6 text-base sm:text-body-lg text-ink-muted max-w-lg text-pretty leading-relaxed">
                {t('Gespecialiseerde besnijdeniszorg door ervaren artsen, op negen locaties verspreid door Nederland.', 'Specialist circumcision care provided by experienced doctors at nine locations throughout the Netherlands.')}
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <LinkButton to="/afspraak" size="lg" withArrow className="w-full sm:w-auto">
                  {t('Afspraak maken', 'Make an appointment')}
                </LinkButton>
                <LinkButton to="/vestigingen" variant="secondary" size="lg" className="w-full sm:w-auto">
                  {t('Vind een vestiging', 'Find a location')}
                </LinkButton>
              </div>
            </Reveal>

            {/* Trust indicators */}
            <Reveal>
              <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 pt-7 editorial-rule">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-bcn-deep tracking-tight">
                      {stat.numericValue === 2001 ? (
                        <span>2001</span>
                      ) : stat.numericValue >= 1000 ? (
                        <Counter target={stat.numericValue} suffix={stat.suffix} separator />
                      ) : (
                        <Counter target={stat.numericValue} suffix={stat.suffix} />
                      )}
                    </div>
                    <div className="mt-0.5 text-[11px] sm:text-xs text-ink-muted leading-snug">
                      {t(stat.label, ({ behandelingen: 'treatments', vestigingen: 'locations', sinds: 'since' } as Record<string, string>)[stat.label] || stat.label)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="order-2 lg:pl-3">
            <div ref={parallaxRef} className="will-change-transform">
              <ImageReveal>
                <div className="relative">
                  <Image
                    src={heroImage}
                    alt={t('Arts in gesprek met ouder en kind in een moderne kliniek', 'Doctor speaking with a parent and child in a modern clinic')}
                    aspect="aspect-[16/9] sm:aspect-[3/2] lg:aspect-[4/5]"
                    rounded="rounded-lg"
                    objectPosition="object-center sm:object-[center_32%] lg:object-center"
                    priority
                  />
                  <div className="hidden lg:block absolute bottom-5 left-5 max-w-[240px] rounded-lg border border-white/70 bg-white/95 p-4 shadow-card backdrop-blur-sm">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-bcn-blue" />
                      <span className="text-xs font-semibold text-bcn-deep">BCN</span>
                    </div>
                    <p className="text-sm font-medium leading-snug text-ink">
                      {t('9 gespecialiseerde locaties door heel Nederland', '9 specialist locations throughout the Netherlands')}
                    </p>
                  </div>
                </div>
              </ImageReveal>
            </div>
            <div className="mt-4 flex items-start gap-3 lg:hidden">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-bcn-blue" />
              <p className="text-sm font-medium leading-snug text-ink">
                {t('9 gespecialiseerde locaties door heel Nederland', '9 specialist locations throughout the Netherlands')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
