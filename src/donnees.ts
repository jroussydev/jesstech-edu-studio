// Seul endroit qui lit les fichiers de donnees/ (voir docs/04-architecture.md §2).
import catalogueJson from '../donnees/catalogue-jeux.json';
import cahierMathieuJson from '../donnees/cahiers/halloween-2026-mathieu.json';
import profilMathieuJson from '../donnees/profils/mathieu.json';
import missionsHalloweenJson from '../donnees/themes/halloween/missions.json';
import themeHalloweenJson from '../donnees/themes/halloween/theme.json';
import type { Cahier, Jeu, Mission, Profil, Theme } from './types.ts';

// TypeScript élargit les valeurs lues dans un JSON ('GS' devient string, 1 | 2 devient number) :
// on leur donne ici, une seule fois, le type du modèle. donnees.test.ts vérifie leur cohérence.
export const CATALOGUE = catalogueJson.jeux as Jeu[];
export const THEME = themeHalloweenJson as Theme;
export const MISSIONS = missionsHalloweenJson as Mission[];
export const PROFIL = profilMathieuJson as Profil;
export const CAHIER = cahierMathieuJson as unknown as Cahier;

// Images du thème servies par Vite (URL avec empreinte dans le build).
const IMAGES = import.meta.glob<string>('../donnees/themes/halloween/images/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** URL d'une image du thème à partir de son nom de fichier (ex. 'filou-cape.png'). */
export function imageTheme(fichier: string): string {
  const url = IMAGES[`../donnees/themes/halloween/images/${fichier}`];
  if (!url) throw new Error(`Image du thème introuvable : ${fichier}`);
  return url;
}
