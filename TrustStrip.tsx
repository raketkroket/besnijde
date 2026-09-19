import { Counter } from '@/components/Counter';
import { Reveal } from '@/components/Reveal';
import { trustStats } from '@/data/site';

export function TrustStrip() {
  return (
    <section className="bg-bcn-deep py-12 lg:py-16">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <Reveal stagger>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {stat.numericValue === 25 ? (
                    <Counter target={25} suffix="+" />
                  ) : stat.numericValue === 9 ? (
                    <Counter target={9} />
                  ) : stat.numericValue === 8.9 ? (
                    <Counter target={8.9} decimals={1} />
                  ) : (
                    <Counter target={90000} suffix="+" separator />
                  )}
                </div>
                <div className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-bcn-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
