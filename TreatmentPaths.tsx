import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { ArrowRight } from '@/components/ArrowIcon';
import { useRouter } from '@/router';
import boysTreatmentImage from './images/little.png';
import { copy, useLanguage } from '@/language';

const pathways = [
  {
    number: '01',
    title: 'Besnijdenis voor jongens',
    description: 'Zorgvuldige behandeling voor jongens tot 16 jaar, onder plaatselijke verdoving.',
    price: '€325',
    priceNote: 'tot 16 jaar',
    href: '/besnijdenis-jongen',
    image: boysTreatmentImage,
    alt: 'Arts in gesprek met moeder en dochter in een moderne kliniek',
  },
  {
    number: '02',
    title: 'Besnijdenis voor mannen',
    description: 'Professionele behandeling voor volwassen mannen, medisch of religieus.',
    price: '€495',
    priceNote: 'vanaf 16 jaar',
    href: '/besnijdenis-volwassen-man',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Arts in gesprek met patiënt in een heldere kliniek',
  },
  {
    number: '03',
    title: 'Advies & correcties',
    description: 'Onderzoek en advies na een eerdere besnijdenis elders.',
    price: 'Bel',
    priceNote: 'voor een afspraak',
    href: '/advies-en-correcties',
    image: 'https://images.pexels.com/photos/7578798/pexels-photo-7578798.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Arts die medische informatie bespreekt met een patiënt',
  },
];

export function TreatmentPaths() {
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  const translatedPaths = pathways.map((path) => ({
    ...path,
    title: t(path.title, ({ 'Besnijdenis voor jongens': 'Circumcision for boys', 'Besnijdenis voor mannen': 'Circumcision for men', 'Advies & correcties': 'Advice & corrections' } as Record<string, string>)[path.title]),
    description: t(path.description, ({ 'Zorgvuldige behandeling voor jongens tot 16 jaar, onder plaatselijke verdoving.': 'Careful treatment for boys up to age 16, under local anaesthetic.', 'Professionele behandeling voor volwassen mannen, medisch of religieus.': 'Professional treatment for adult men, for medical or religious reasons.', 'Onderzoek en advies na een eerdere besnijdenis elders.': 'Assessment and advice after a circumcision performed elsewhere.' } as Record<string, string>)[path.description]),
    priceNote: t(path.priceNote, ({ 'tot 16 jaar': 'up to age 16', 'vanaf 16 jaar': 'age 16 and over', 'voor een afspraak': 'to make an appointment' } as Record<string, string>)[path.priceNote]),
  }));

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-ink leading-[1.1] tracking-tight text-balance">
            {t('Waar kunnen we u mee helpen?', 'How can we help you?')}
          </h2>
        </Reveal>

        <div className="border-t border-bcn-200">
          {translatedPaths.map((p) => (
            <Reveal key={p.number}>
              <button onClick={() => navigate(p.href)} className="group grid w-full grid-cols-1 gap-5 border-b border-bcn-200 py-7 text-left sm:grid-cols-[minmax(10rem,0.7fr)_1.3fr] sm:items-center sm:gap-8 lg:grid-cols-[2rem_minmax(13rem,0.65fr)_1fr_auto] lg:gap-9 lg:py-9">
                <span className="hidden text-sm font-semibold text-bcn-blue lg:block">{p.number}</span>
                <div className="relative overflow-hidden">
                  <ImageReveal>
                    <Image
                      src={p.image}
                      alt={p.alt}
                      aspect="aspect-[16/9] sm:aspect-[5/4]"
                      rounded="rounded-none"
                      objectPosition="object-center"
                      imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </ImageReveal>
                </div>
                <div>
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.12em] text-bcn-blue lg:hidden">{p.number}</span>
                  <h3 className="font-editorial text-2xl font-bold leading-tight text-ink group-hover:text-bcn-deep transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-md">{p.description}</p>
                </div>
                <div className="flex items-center justify-between gap-5 lg:justify-end">
                  <div>
                    <span className="text-lg font-bold text-bcn-deep">{p.price}</span>
                    <span className="ml-2 text-xs text-ink-muted">{p.priceNote}</span>
                  </div>
                  <ArrowRight size={18} className="text-bcn-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
