import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { LinkButton } from '@/components/Button';

const expertiseImage = 'https://images.pexels.com/photos/5998480/pexels-photo-5998480.jpeg?auto=compress&cs=tinysrgb&w=800';

export function ExpertiseSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-bcn-dark text-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-light">Expertise</span>
            </Reveal>
            <Reveal stagger>
              <h2 className="mt-4 text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-white leading-[1.1] tracking-tight text-balance">
                Ervaren artsen op elke locatie.
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-5 text-white/60 leading-relaxed text-pretty">
                Op elk van onze negen vestigingen werken vaste, ervaren artsen die gespecialiseerd zijn in besnijdenissen bij jongens en mannen. Zij streven naar een optimaal resultaat met een zo gering mogelijk aantal complicaties.
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-white/60 leading-relaxed text-pretty">
                De behandeling wordt altijd uitgevoerd onder plaatselijke verdoving, met aandacht voor veiligheid en comfort van de patiënt.
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <LinkButton to="/over-bcn" variant="secondary" withArrow className="!border-white/20 !text-white hover:!bg-white/10">Meer over BCN</LinkButton>
            </Reveal>
          </div>

          <div>
            <ImageReveal>
              <Image src={expertiseImage} alt="Arts in een moderne medische praktijk" aspect="aspect-[4/3]" rounded="rounded-xl2" />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
