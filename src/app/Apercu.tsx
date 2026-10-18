import { useState } from 'react';
import { calculerFaces, completerLivret, libelleFace, tailleFace } from '../cahier/assemblage.ts';
import { CAHIER, MISSIONS, PROFIL, THEME } from '../donnees.ts';
import { useEchelle } from '../hooks/useEchelle.ts';
import { Face } from '../pages/Face.tsx';
import { PageActivites } from '../pages/PageActivites.tsx';
import { PageVide } from '../pages/PageVide.tsx';
import type { Assemblage, Format } from '../types.ts';
import { PAGES_FACTICES, type PageFactice } from './pagesFactices.ts';
import { Reduction } from './Reduction.tsx';

// La feuille n'est jamais affichée à plus de 81 % de sa taille réelle (comme le prototype).
const PLAFOND_ECHELLE = 0.81;

const DESSINS: PageFactice = { titre: 'Mes dessins', detail: 'page libre' };
const QUATRIEME: PageFactice = { titre: '4ᵉ de couverture', detail: 'dos du livret' };

const BOUTON_PAGE =
  'interface-seulement rounded-full border border-ligne px-3 py-2 text-xl disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

interface ApercuProps {
  format: Format;
  assemblage: Assemblage;
}

export function Apercu({ format, assemblage }: ApercuProps) {
  // Le livret plié est complété au multiple de 4 pages (RG22).
  const livret = format === 'A5' && assemblage === 'livret';
  const pages = livret ? completerLivret(PAGES_FACTICES, DESSINS, QUATRIEME) : PAGES_FACTICES;
  const faces = calculerFaces(pages.length, format, assemblage);
  const { largeur, hauteur } = tailleFace(format);
  const { ref, echelle } = useEchelle(largeur, PLAFOND_ECHELLE);

  // L'index demandé est ramené dans les bornes quand le nombre de faces change (A4 ↔ A5).
  const [indexDemande, setIndexDemande] = useState(0);
  const index = Math.min(indexDemande, faces.length - 1);
  const compteur = libelleFace(faces, index, format);

  // En attendant composer.ts : les pages activités composées sont rendues en vrai, les autres restent des pages de test.
  const rendrePage = (numero: number) => {
    const page = pages[numero - 1];
    const mission = MISSIONS.find((m) => m.numero === page.missionActivites);
    const composition = mission && CAHIER.composition[mission.numero];
    if (mission && composition) {
      return <PageActivites mission={mission} composition={composition} profil={PROFIL} theme={THEME} folio={numero} />;
    }
    return <PageVide titre={page.titre} detail={`page ${numero} · ${page.detail}`} />;
  };

  return (
    <section aria-label="Aperçu de la feuille" className="apercu flex flex-1 items-center justify-center gap-3 p-4">
      <button
        type="button"
        aria-label="Feuille précédente"
        disabled={index === 0}
        onClick={() => setIndexDemande(index - 1)}
        className={BOUTON_PAGE}
      >
        ◀
      </button>
      <div ref={ref} className="apercu-feuille flex min-w-0 flex-1 flex-col items-center gap-2">
        {/* Toutes les faces sont rendues pour l'impression ; seule la face courante est visible à l'écran. */}
        <Reduction largeur={largeur} hauteur={hauteur} echelle={echelle}>
          {faces.map((face, i) => (
            <Face key={i} format={format} face={face} rendrePage={rendrePage} cacheeAEcran={i !== index} />
          ))}
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
