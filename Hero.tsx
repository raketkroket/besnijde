import { LinkButton } from '@/components/Button';
import { Counter } from '@/components/Counter';
import { Image } from '@/components/Image';
import { Reveal, ImageReveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useReveal';
import { heroStats } from '@/data/site';
import heroImage from './images/p2.jpg';

export function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>(0.03);

  return (
    <section className="relative bg-white pt-[80px] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-bcn-ice/50 to-transparent hidden lg:block" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <span className="h-px w-6 sm:w-8 bg-bcn-blue" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-bcn-deep">
                  SPECIALISTISCHE ZORG SINDS 2001
                </span>
              </div>
            </Reveal>

            <Reveal stagger>
              <h1 className="text-[clamp(2.25rem,7vw,4.75rem)] font-bold text-ink leading-[1.05] tracking-tight text-balance">
                Ervaren zorg voor jongens en mannen.
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-5 sm:mt-6 text-base sm:text-body-lg text-ink-muted max-w-lg text-pretty leading-relaxed">
                Gespecialiseerde besnijdeniszorg door ervaren artsen, op negen locaties verspreid
                door Nederland.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <LinkButton to="/afspraak" size="lg" withArrow className="w-full sm:w-auto">
                  Afspraak maken
                </LinkButton>
                <LinkButton to="/vestigingen" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Vind een vestiging
                </LinkButton>
              </div>
            </Reveal>

            {/* Trust indicators */}
            <Reveal>
              <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-bcn-100">
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
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="order-2 relative">
            <div ref={parallaxRef} className="will-change-transform">
              <ImageReveal>
                <div className="relative">
                  <Image
                    src={heroImage}
                    alt="Arts in gesprek met ouder en kind in een moderne kliniek"
                    aspect="aspect-[16/9] sm:aspect-[4/3] lg:aspect-[4/5]"
                    rounded="rounded-xl2"
                    objectPosition="object-center sm:object-top lg:object-center"
                    priority
                  />
                  {/* Info module — desktop only, no overlap on mobile */}
                  <div className="hidden lg:block absolute bottom-4 left-4 bg-white rounded-xl2 shadow-card border border-bcn-100 p-5 max-w-[240px]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-bcn-blue" />
                      <span className="text-xs font-semibold text-bcn-deep">BCN</span>
                    </div>
                    <p className="text-sm font-medium text-ink leading-snug">
                      9 gespecialiseerde locaties door heel Nederland
                    </p>
                  </div>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
