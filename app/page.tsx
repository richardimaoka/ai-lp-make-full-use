import FirstViewSection from './components/FirstViewSection';
import ConceptSection from './components/ConceptSection';
import PuddingSection from './components/PuddingSection';
import AfternoonTeaPlanSection from './components/AfternoonTeaPlanSection';
import SnsShareSection from './components/SnsShareSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main>
      <FirstViewSection />
      <ConceptSection />
      <PuddingSection />
      <AfternoonTeaPlanSection />
      <SnsShareSection />
      <AccessSection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}