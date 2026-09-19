import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { TreatmentPaths } from '@/components/home/TreatmentPaths';
import { ProcessSection } from '@/components/home/ProcessSection';
import { LocationsSection } from '@/components/home/LocationsSection';
import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FaqPreview } from '@/components/home/FaqPreview';
import { FinalCta } from '@/components/home/FinalCta';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <TreatmentPaths />
      <ProcessSection />
      <LocationsSection />
      <ExpertiseSection />
      <ReviewsSection />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
