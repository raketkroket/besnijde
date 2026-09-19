import { Reveal, ImageReveal } from '@/components/Reveal';
import { Image } from '@/components/Image';
import { LinkButton } from '@/components/Button';
import { copy, useLanguage } from '@/language';

const expertiseImage = 'https://images.pexels.com/photos/5998480/pexels-photo-5998480.jpeg?auto=compress&cs=tinysrgb&w=800';

export function ExpertiseSection() {
  const { language } = useLanguage();
  const t = (nl: string, en: string) => copy(language, nl, en);
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-bcn-deep text-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-20 items-center">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-bcn-light">{t('Expertise', 'Expertise')}</span>
            </Reveal>
            <Reveal stagger>
              <h2 className="font-editorial mt-4 text-[clamp(1.75rem,6vw,3.5rem)] font-bold text-white leading-[1.1] text-balance">
                {t('Ervaren artsen op elke locatie.', 'Experienced doctors at every location.')}
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-5 text-white/60 leading-relaxed text-pretty">
                {t('Op elk van onze negen vestigingen werken vaste, ervaren artsen die gespecialiseerd zijn in besnijdenissen bij jongens en mannen. Zij streven naar een optimaal resultaat met een zo gering mogelijk aantal complicaties.', 'Each of our nine locations has dedicated, experienced doctors specialising in circumcision for boys and men. They aim for an optimal outcome with as few complications as possible.')}
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-white/60 leading-relaxed text-pretty">
                {t('De behandeling wordt altijd uitgevoerd onder plaatselijke verdoving, met aandacht voor veiligheid en comfort van de patiënt.', 'Treatment is always performed under local anaesthetic, with attention to the patient\'s safety and comfort.')}
              </p>
            </Reveal>
            <Reveal className="mt-8">
              <LinkButton to="/over-bcn" variant="secondary" withArrow className="!border-white/20 !text-white hover:!bg-white/10">{t('Meer over BCN', 'More about BCN')}</LinkButton>
            </Reveal>
          </div>

          <div>
            <ImageReveal>
              <Image src={expertiseImage} alt={t('Arts in een moderne medische praktijk', 'Doctor in a modern medical practice')} aspect="aspect-[4/3]" rounded="rounded-none" />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
