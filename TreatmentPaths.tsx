import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { ArrowRight } from '@/components/ArrowIcon';
import { useRouter } from '@/router';
import boysTreatmentImage from './images/little.png';

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

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <Reveal className="mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-ink leading-[1.1] tracking-tight text-balance">
            Waar kunnen we u mee helpen?
          </h2>
        </Reveal>

        {/* Mobile: 1 column. Tablet: 2. Desktop: 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pathways.map((p) => (
            <Reveal key={p.number}>
              <button onClick={() => navigate(p.href)} className="group block w-full text-left">
                <div className="relative mb-5 overflow-hidden rounded-xl2">
                  <ImageReveal>
                    <Image
                      src={p.image}
                      alt={p.alt}
                      aspect="aspect-[5/4]"
                      rounded="rounded-xl2"
                      objectPosition="object-center"
                    />
                  </ImageReveal>
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-bcn-deep">
                    {p.number}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-bcn-deep transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-bcn-deep">{p.price}</span>
                    <span className="text-xs text-ink-muted ml-2">{p.priceNote}</span>
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
