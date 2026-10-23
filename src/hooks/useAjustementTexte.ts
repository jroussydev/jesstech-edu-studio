import { useLayoutEffect, useRef } from 'react';
import { AJUSTEMENT, deborde, reduireJusquaTenir } from '../lib/ajustement.ts';
import type { Format } from '../types.ts';

/** Réduit les textes qui débordent d'une page (RG13) : `--kb` sur chaque `.bloc-texte`, puis `--kp` sur toute la page. */
function ajusterPage(feuille: HTMLElement) {
  feuille.style.setProperty('--kp', '1');
  feuille.querySelectorAll<HTMLElement>('.bloc-texte').forEach((bloc) => {
    reduireJusquaTenir(() => deborde(bloc), (k) => bloc.style.setProperty('--kb', String(k)), AJUSTEMENT.plancherBloc);
  });
  const contenu = feuille.firstElementChild;
  if (!contenu) return;
  reduireJusquaTenir(() => deborde(contenu), (k) => feuille.style.setProperty('--kp', String(k)), AJUSTEMENT.plancherPage);
}

/**
 * Ajuste les textes de la page référencée avant l'affichage, puis une seconde fois quand les polices sont chargées.
 * Refait à chaque changement de format ou de contenu (`cle` : numéro de page, et plus tard les graines régénérées par ↻).
 */
export function useAjustementTexte(format: Format, cle: string | number) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const feuille = ref.current;
    if (!feuille) return;
    let actif = true;
    ajusterPage(feuille);
    document.fonts.ready.then(() => {
      if (actif) ajusterPage(feuille);
    });
    return () => {
      actif = false;
    };
  }, [format, cle]);

  return ref;
}
