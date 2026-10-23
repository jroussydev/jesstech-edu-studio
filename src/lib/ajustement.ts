/** Réglages de l'ajustement des textes (RG13), repris du prototype : pas de réduction, planchers et tolérance en px. */
export const AJUSTEMENT = { pas: 0.03, plancherBloc: 0.55, plancherPage: 0.7, tolerance: 3 };

export interface Mesures {
  scrollWidth: number;
  scrollHeight: number;
  clientWidth: number;
  clientHeight: number;
}

/** Un bloc déborde quand son contenu dépasse sa boîte de plus de la tolérance, en hauteur ou en largeur. */
export function deborde(m: Mesures, tolerance = AJUSTEMENT.tolerance): boolean {
  return m.scrollHeight > m.clientHeight + tolerance || m.scrollWidth > m.clientWidth + tolerance;
}

/**
 * Remet le coefficient à 1, puis le réduit d'un pas tant que le texte déborde, sans descendre sous le plancher.
 * `appliquer` écrit le coefficient (variable `--kb` ou `--kp`) ; `debordeEncore` mesure après chaque écriture.
 * Renvoie le coefficient retenu.
 */
export function reduireJusquaTenir(
  debordeEncore: () => boolean,
  appliquer: (k: number) => void,
  plancher: number,
  pas = AJUSTEMENT.pas,
): number {
  let k = 1;
  appliquer(k);
  while (debordeEncore() && k > plancher) {
    k = Math.max(plancher, Math.round((k - pas) * 100) / 100);
    appliquer(k);
  }
  return k;
}
