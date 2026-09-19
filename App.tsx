import { useEffect } from 'react';
import { RouterProvider, useRouter } from '@/router';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MobileStickyCta } from '@/components/MobileStickyCta';
import { HomePage } from '@/pages/HomePage';
import { LocationsOverviewPage } from '@/pages/LocationsOverviewPage';
import { LocationPage } from '@/pages/LocationPage';
import { AppointmentPage } from '@/pages/AppointmentPage';
import { BoysTreatmentPage } from '@/pages/BoysTreatmentPage';
import { ManTreatmentPage } from '@/pages/ManTreatmentPage';
import { FaqPage } from '@/pages/FaqPage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { AdvicePage } from '@/pages/AdvicePage';
import { DoctorsInfoPage } from '@/pages/DoctorsInfoPage';
import { AboutPage } from '@/pages/AboutPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { ContactPage } from '@/pages/ContactPage';
import { DownloadsPage } from '@/pages/DownloadsPage';
import { getLocation } from '@/data/locations';
import { LanguageProvider } from '@/language';

const titleMap: Record<string, string> = {
  '/': 'Besnijdenis Centrum Nederland — Specialistische zorg sinds 2001',
  '/vestigingen': 'Vestigingen — Besnijdenis Centrum Nederland',
  '/besnijdenis-jongen': 'Besnijdenis voor jongens — Besnijdenis Centrum Nederland',
  '/besnijdenis-volwassen-man': 'Besnijdenis voor mannen — Besnijdenis Centrum Nederland',
  '/advies-en-correcties': 'Advies & correcties — Besnijdenis Centrum Nederland',
  '/informatie-voor-artsen': 'Informatie voor artsen — Besnijdenis Centrum Nederland',
  '/over-bcn': 'Over BCN — Besnijdenis Centrum Nederland',
  '/privacy': 'Privacy — Besnijdenis Centrum Nederland',
  '/faq': 'Veelgestelde vragen — Besnijdenis Centrum Nederland',
  '/reviews': 'Ervaringen — Besnijdenis Centrum Nederland',
  '/afspraak': 'Afspraak maken — Besnijdenis Centrum Nederland',
  '/contact': 'Contact — Besnijdenis Centrum Nederland',
  '/downloads': 'Downloads — Besnijdenis Centrum Nederland',
};

function Routes() {
  const { path } = useRouter();

  useEffect(() => {
    document.title = titleMap[path] || 'Besnijdenis Centrum Nederland';
  }, [path]);

  const locationMatch = path.match(/^\/vestigingen\/(.+)$/);
  if (locationMatch) {
    const loc = getLocation(locationMatch[1]);
    if (loc) return <LocationPage location={loc} />;
  }

  switch (path) {
    case '/': return <HomePage />;
    case '/vestigingen': return <LocationsOverviewPage />;
    case '/besnijdenis-jongen': return <BoysTreatmentPage />;
    case '/besnijdenis-volwassen-man': return <ManTreatmentPage />;
    case '/advies-en-correcties': return <AdvicePage />;
    case '/informatie-voor-artsen': return <DoctorsInfoPage />;
    case '/over-bcn': return <AboutPage />;
    case '/privacy': return <PrivacyPage />;
    case '/faq': return <FaqPage />;
    case '/reviews': return <ReviewsPage />;
    case '/afspraak': return <AppointmentPage />;
    case '/contact': return <ContactPage />;
    case '/downloads': return <DownloadsPage />;
    default: return <HomePage />;
  }
}

function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main><Routes /></main>
          <Footer />
          <MobileStickyCta />
        </div>
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
