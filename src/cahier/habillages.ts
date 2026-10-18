import type { CompositionMission, Jeu, Niveau } from '../types.ts';
import { niveauDansPlage } from './niveaux.ts';

/** Complète les habillages manquants d'un cahier, sans jamais répéter un habillage d'un même jeu (RG14).
    Les habillages déjà écrits sont gardés et comptent comme utilisés. Les autres sont pris dans l'ordre
    du catalogue (RG19), parmi ceux conseillés pour la classe ; quand tous ont servi, un nouveau tour commence.
    Missions parcourues dans l'ordre des numéros, activités dans l'ordre de la composition. */
export function attribuerHabillages(
  composition: Record<number, CompositionMission>,
  catalogue: Jeu[],
  niveau: Niveau,
): Record<number, CompositionMission> {
  const numeros = Object.keys(composition).map(Number).sort((a, b) => a - b);
  const utilises = new Map<string, Set<string>>();   // jeu → habillages déjà pris
  const dejaPris = (type: string) => utilises.get(type) ?? utilises.set(type, new Set()).get(type)!;

  for (const numero of numeros) {
    for (const activite of composition[numero].activites) {
      if (activite.habillage) dejaPris(activite.type).add(activite.habillage);
    }
  }

  const resultat: Record<number, CompositionMission> = {};
  for (const numero of numeros) {
    const mission = composition[numero];
    resultat[numero] = {
      ...mission,
      activites: mission.activites.map((activite) => {
        const habillages = catalogue.find((j) => j.id === activite.type)?.habillages;
        if (activite.habillage || !habillages?.length) return activite;

        const conseilles = habillages.filter((h) => niveauDansPlage(niveau, h.niveaux));
        const candidats = conseilles.length > 0 ? conseilles : habillages;
        const pris = dejaPris(activite.type);
        if (candidats.every((h) => pris.has(h.id))) candidats.forEach((h) => pris.delete(h.id));
        const choisi = candidats.find((h) => !pris.has(h.id))!;
        pris.add(choisi.id);
        return { ...activite, habillage: choisi.id };
      }),
    };
  }
  return resultat;
}
