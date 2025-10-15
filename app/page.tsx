import FirstViewSection from './components/FirstViewSection';
import ConceptSection from './components/ConceptSection';
import PuddingSection from './components/PuddingSection';
import AfternoonTeaPlanSection from './components/AfternoonTeaPlanSection';

export default function Home() {
  return (
    <main>
      <FirstViewSection />
      <ConceptSection />
      <PuddingSection />
      <AfternoonTeaPlanSection />
    </main>
  );
}