// Couleurs communes aux dessins du thème (variables de tokens.css uniquement).

export const TRAIT = 'var(--trait)';

/** Remplissage d'une forme : sa couleur, ou le papier quand le dessin est à colorier. */
export function remplir(couleur: string, aColorier: boolean): string {
  return aColorier ? 'var(--papier)' : couleur;
}
