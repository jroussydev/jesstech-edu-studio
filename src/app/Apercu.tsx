import { FORMATS, type Format } from '../types.ts';

const BOUTON_PAGE =
  'interface-seulement rounded-full border border-ligne px-3 py-2 text-xl disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

interface ApercuProps {
  format: Format;
}

export function Apercu({ format }: ApercuProps) {
  const { largeur, hauteur } = FORMATS[format];

  return (
    <section aria-label="Aperçu de la page" className="flex flex-1 items-center justify-center gap-3 p-4">
      <button type="button" aria-label="Page précédente" disabled className={BOUTON_PAGE}>◀</button>
      <div className="flex w-full max-w-md flex-col items-center gap-2">
        {/* Emplacement de la feuille (sous-étape 3.3) */}
        <div
          className="w-full border-[1.5rem] border-(--citrouille) bg-(--papier) shadow-lg"
          style={{ aspectRatio: `${largeur} / ${hauteur}` }}
        />
        <p className="interface-seulement text-sm opacity-75">page 1 / 29</p>
      </div>
      <button type="button" aria-label="Page suivante" className={BOUTON_PAGE}>▶</button>
    </section>
  );
}
