import { useState } from 'react';
import { facesA4, facesParJour, tailleFace } from '../cahier/assemblage.ts';
import { useEchelle } from '../hooks/useEchelle.ts';
import { Face } from '../pages/Face.tsx';
import { PageVide } from '../pages/PageVide.tsx';
import type { Format } from '../types.ts';
import { PAGES_FACTICES } from './pagesFactices.ts';
import { Reduction } from './Reduction.tsx';

// La feuille n'est jamais affichée à plus de 81 % de sa taille réelle (comme le prototype).
const PLAFOND_ECHELLE = 0.81;

const BOUTON_PAGE =
  'interface-seulement rounded-full border border-ligne px-3 py-2 text-xl disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

interface ApercuProps {
  format: Format;
}

export function Apercu({ format }: ApercuProps) {
  // En A5, seul l'assemblage « une feuille par jour » existe pour l'instant (livret : sous-étape 3.8).
  const faces = format === 'A4' ? facesA4(PAGES_FACTICES.length) : facesParJour(PAGES_FACTICES.length);
  const { largeur, hauteur } = tailleFace(format);
  const { ref, echelle } = useEchelle(largeur, PLAFOND_ECHELLE);

  // L'index demandé est ramené dans les bornes quand le nombre de faces change (A4 ↔ A5).
  const [indexDemande, setIndexDemande] = useState(0);
  const index = Math.min(indexDemande, faces.length - 1);
  const face = faces[index];

  const numeros = face.pages.filter((numero) => numero !== null);
  const compteur =
    format === 'A4'
      ? `page ${index + 1} / ${faces.length}`
      : `feuille ${index + 1} / ${faces.length} · ${numeros.length > 1 ? 'pages' : 'page'} ${numeros.join('–')}`;

  const rendrePage = (numero: number) => {
    const page = PAGES_FACTICES[numero - 1];
    return <PageVide titre={page.titre} detail={`page ${numero} · ${page.detail}`} />;
  };

  return (
    <section aria-label="Aperçu de la feuille" className="flex flex-1 items-center justify-center gap-3 p-4">
      <button
        type="button"
        aria-label="Feuille précédente"
        disabled={index === 0}
        onClick={() => setIndexDemande(index - 1)}
        className={BOUTON_PAGE}
      >
        ◀
      </button>
      <div ref={ref} className="flex min-w-0 flex-1 flex-col items-center gap-2">
        <Reduction largeur={largeur} hauteur={hauteur} echelle={echelle}>
          <Face format={format} face={face} rendrePage={rendrePage} />
        </Reduction>
        <p className="interface-seulement text-sm opacity-75">{compteur}</p>
      </div>
      <button
        type="button"
        aria-label="Feuille suivante"
        disabled={index === faces.length - 1}
        onClick={() => setIndexDemande(index + 1)}
        className={BOUTON_PAGE}
      >
        ▶
      </button>
    </section>
  );
}
