import { useEchelle } from '../hooks/useEchelle.ts';
import { Feuille } from '../pages/Feuille.tsx';
import { PageVide } from '../pages/PageVide.tsx';
import { FORMATS, type Format } from '../types.ts';
import { Reduction } from './Reduction.tsx';

// La page n'est jamais affichée à plus de 81 % de sa taille réelle (comme le prototype).
const PLAFOND_ECHELLE = 0.81;

const BOUTON_PAGE =
  'interface-seulement rounded-full border border-ligne px-3 py-2 text-xl disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

interface ApercuProps {
  format: Format;
}

export function Apercu({ format }: ApercuProps) {
  const { largeur, hauteur } = FORMATS[format];
  const { ref, echelle } = useEchelle(largeur, PLAFOND_ECHELLE);

  return (
    <section aria-label="Aperçu de la page" className="flex flex-1 items-center justify-center gap-3 p-4">
      <button type="button" aria-label="Page précédente" disabled className={BOUTON_PAGE}>◀</button>
      <div ref={ref} className="flex min-w-0 flex-1 flex-col items-center gap-2">
        <Reduction largeur={largeur} hauteur={hauteur} echelle={echelle}>
          <Feuille format={format}>
            <PageVide titre="Page 1" detail={`${format} · ${largeur} × ${hauteur} px`} />
          </Feuille>
        </Reduction>
        <p className="interface-seulement text-sm opacity-75">page 1 / 29</p>
      </div>
      <button type="button" aria-label="Page suivante" className={BOUTON_PAGE}>▶</button>
    </section>
  );
}
