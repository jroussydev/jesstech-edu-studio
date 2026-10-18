import { useEffect, useState } from 'react';
import { Apercu } from './app/Apercu.tsx';
import { BarreImpression } from './app/BarreImpression.tsx';
import { EnTete } from './app/EnTete.tsx';
import { Panneaux } from './app/Panneaux.tsx';
import type { Format, ModeImpression } from './types.ts';

// Un seul écran en trois zones (docs/05-maquettes.md §1) ; sur téléphone, les panneaux passent sous l'aperçu.
export function App() {
  const [format, setFormat] = useState<Format>('A4');
  const [impression, setImpression] = useState<ModeImpression>('couleur');

  // Le mode bascule les variables de tokens.css, définies sur :root.
  useEffect(() => {
    document.documentElement.dataset.impression = impression;
  }, [impression]);

  return (
    <div className="min-h-screen font-sans lg:grid lg:grid-cols-[1fr_20rem]">
      <div className="flex min-h-screen flex-col">
        <EnTete />
        <BarreImpression
          format={format}
          impression={impression}
          onFormatChange={setFormat}
          onImpressionChange={setImpression}
        />
        <Apercu format={format} />
      </div>
      <Panneaux />
    </div>
  );
}
