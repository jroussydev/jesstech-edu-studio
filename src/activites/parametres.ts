import type { ActiviteConfig } from '../types.ts';

/** Paramètre texte d'une activité (ex. objet : 'fantome') ; signale un paramètre absent. */
export function parametreTexte(config: ActiviteConfig, nom: string): string {
  const valeur = config.params?.[nom];
  if (typeof valeur !== 'string') throw new Error(`Activité « ${config.type} » : paramètre « ${nom} » manquant.`);
  return valeur;
}
