import { Dessin } from '../../illustrations/Dessin.tsx';
import { illustrationPour, type Illustration } from '../../illustrations/index.tsx';
import { centre, genererLabyrinthe, impasses, type Grille, type Labyrinthe } from '../../lib/labyrinthe.ts';
import { melange } from '../../lib/melange.ts';
import type { Rng } from '../../lib/rng.ts';
import { parametreTexte } from '../parametres.ts';
import type { Generateur } from '../registre.ts';
import { HABILLAGE_PAR_DEFAUT, HABILLAGES } from './habillages.ts';

// Grille du prototype : cases de 22, place à gauche pour Filou et à droite pour l'arrivée.
const GRILLE: Grille = { cote: 22, ox: 38, oy: 6 };
const DECORATIONS_MAX = 3;
const TAILLE_DECORATION = 16;

export interface TirageLabyrinthe {
  labyrinthe: Labyrinthe;
  decorations: { case: number; cle: string }[];   // dessins du thème posés dans des impasses
}

/** Labyrinthe (mêmes murs que le prototype), puis décorations : tirées après, elles ne changent pas les murs. */
export function tirerLabyrinthe(rng: Rng, demi: boolean, decorationsDuTheme: string[]): TirageLabyrinthe {
  const labyrinthe = demi ? genererLabyrinthe(5, 6, rng) : genererLabyrinthe(7, 4, rng);
  if (decorationsDuTheme.length === 0) return { labyrinthe, decorations: [] };
  const cases = melange(impasses(labyrinthe), rng).slice(0, DECORATIONS_MAX);
  const cles = melange(decorationsDuTheme, rng);
  return { labyrinthe, decorations: cases.map((c, i) => ({ case: c, cle: cles[i % cles.length] })) };
}

/** « jusqu'au moulin », « jusqu'à la lune », « jusqu'à l'araignée ». */
function jusqua({ article, singulier }: Illustration): string {
  if (article === 'le') return `jusqu'au ${singulier}`;
  return article === "l'" ? `jusqu'à l'${singulier}` : `jusqu'à la ${singulier}`;
}

const ETIQUETTE = { fontSize: 8, fontWeight: 700, fill: 'var(--trait)', fontFamily: 'Andika, sans-serif', textAnchor: 'middle' } as const;

export const labyrinthe: Generateur = {
  type: 'labyrinthe',

  consigne: (config) => ({
    picto: 'chemin',
    texte: `Trace le chemin de Filou ${jusqua(illustrationPour(parametreTexte(config, 'arrivee')))}.`,
  }),

  rendre: (config, ctx) => {
    const arrivee = parametreTexte(config, 'arrivee');
    const Habillage = HABILLAGES[config.habillage ?? HABILLAGE_PAR_DEFAUT];
    if (!Habillage) throw new Error(`Labyrinthe : habillage « ${config.habillage} » inconnu.`);

    const { labyrinthe: laby, decorations } = tirerLabyrinthe(ctx.rng, ctx.demi, ctx.theme.decorations);
    const { cote, ox, oy } = GRILLE;
    const largeur = ox * 2 + laby.colonnes * cote;
    const hauteur = oy * 2 + laby.lignes * cote;
    const xArrivee = ox + laby.colonnes * cote + 2;
    const yArrivee = oy + (laby.lignes - 1) * cote + cote / 2 - 18;

    return (
      <svg viewBox={`0 0 ${largeur} ${hauteur}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Labyrinthe">
        <Habillage labyrinthe={laby} grille={GRILLE} />
        {decorations.map(({ case: c, cle }) => {
          const { x, y } = centre(laby, GRILLE, c);
          const demiTaille = TAILLE_DECORATION / 2;
          return <Dessin key={c} cle={cle} x={x - demiTaille} y={y - demiTaille} largeur={TAILLE_DECORATION} hauteur={TAILLE_DECORATION} />;
        })}
        <image
          href={ctx.filou}
          x="0"
          y={oy + cote / 2 - 20}
          width="36"
          height="40"
          preserveAspectRatio="xMidYMid meet"
          style={{ filter: 'var(--image-filtre)' }}
        />
        <text x="18" y={oy + cote / 2 + 29} {...ETIQUETTE}>Départ</text>
        <Dessin cle={arrivee} x={xArrivee} y={yArrivee} largeur={34} hauteur={34} />
        <text x={xArrivee + 17} y={yArrivee - 3} {...ETIQUETTE}>Arrivée</text>
      </svg>
    );
  },
};
