import { Apercu } from './app/Apercu.tsx';
import { BarreImpression } from './app/BarreImpression.tsx';
import { EnTete } from './app/EnTete.tsx';
import { Panneaux } from './app/Panneaux.tsx';

// Un seul écran en trois zones (docs/05-maquettes.md §1) ; sur téléphone, les panneaux passent sous l'aperçu.
export function App() {
  return (
    <div className="min-h-screen font-sans lg:grid lg:grid-cols-[1fr_20rem]">
      <div className="flex min-h-screen flex-col">
        <EnTete />
        <BarreImpression />
        <Apercu />
      </div>
      <Panneaux />
    </div>
  );
}
