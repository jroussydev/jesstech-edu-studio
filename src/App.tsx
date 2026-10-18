import { useEffect, useState } from 'react';
import { Apercu } from './app/Apercu.tsx';
import { BarreImpression } from './app/BarreImpression.tsx';
import { EnTete } from './app/EnTete.tsx';
import { Panneaux } from './app/Panneaux.tsx';
import { TaillePapier } from './app/TaillePapier.tsx';
import type { Assemblage, Format, ModeImpression } from './types.ts';

// Un seul écran en trois zones (docs/05-maquettes.md §1) ; sur téléphone, les panneaux passent sous l'aperçu.
export function App() {
  const [format, setFormat] = useState<Format>('A4');
  const [impression, setImpression] = useState<ModeImpression>('couleur');
  const [assemblage, setAssemblage] = useState<Assemblage>('jour');

  // Le mode bascule les variables de tokens.css, définies sur :root.
  useEffect(() => {
    document.documentElement.dataset.impression = impression;
  }, [impression]);

  return (
    <div className="ecran min-h-screen font-sans lg:grid lg:grid-cols-[1fr_20rem]">
      <TaillePapier format={format} />
      <div className="ecran-colonne flex min-h-screen flex-col">
        <EnTete />
        <BarreImpression
          format={format}
          impression={impression}
          assemblage={assemblage}
          onFormatChange={setFormat}
          onImpressionChange={setImpression}
          onAssemblageChange={setAssemblage}
        />
        <Apercu format={format} assemblage={assemblage} />
      </div>
      <Panneaux />
    </div>
  );
}
