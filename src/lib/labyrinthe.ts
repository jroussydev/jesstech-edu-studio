import type { Rng } from './rng.ts';

// Structure du labyrinthe, séparée de son dessin (les habillages) : cases rangées ligne par ligne.

/** Murs d'une case : true = mur présent. */
export interface Cellule { n: boolean; e: boolean; s: boolean; w: boolean }

export interface Labyrinthe {
  colonnes: number;
  lignes: number;
  cellules: Cellule[];
}

type Direction = keyof Cellule;
const OPPOSE: Record<Direction, Direction> = { n: 's', s: 'n', e: 'w', w: 'e' };

/** Labyrinthe parfait (un seul chemin entre deux cases), creusé en profondeur comme dans le prototype.
    Entrée ouverte à gauche de la première case, sortie à droite de la dernière. */
export function genererLabyrinthe(colonnes: number, lignes: number, rng: Rng): Labyrinthe {
  const cellules: Cellule[] = Array.from({ length: colonnes * lignes }, () => ({ n: true, e: true, s: true, w: true }));
  const visitee = cellules.map(() => false);
  const pile = [0];
  visitee[0] = true;

  while (pile.length > 0) {
    const i = pile[pile.length - 1];
    const x = i % colonnes;
    const y = Math.floor(i / colonnes);
    // Voisines non visitées dans l'ordre du prototype (n, e, s, w) : il fixe les tirages.
    const voisines: [Direction, number][] = [];
    if (y > 0 && !visitee[i - colonnes]) voisines.push(['n', i - colonnes]);
    if (x < colonnes - 1 && !visitee[i + 1]) voisines.push(['e', i + 1]);
    if (y < lignes - 1 && !visitee[i + colonnes]) voisines.push(['s', i + colonnes]);
    if (x > 0 && !visitee[i - 1]) voisines.push(['w', i - 1]);

    if (voisines.length === 0) {
      pile.pop();
      continue;
    }
    const [direction, j] = voisines[Math.floor(rng() * voisines.length)];
    cellules[i][direction] = false;
    cellules[j][OPPOSE[direction]] = false;
    visitee[j] = true;
    pile.push(j);
  }

  cellules[0].w = false;
  cellules[cellules.length - 1].e = false;
  return { colonnes, lignes, cellules };
}

/** Place du labyrinthe dans le SVG : côté d'une case et coin haut gauche de la grille. */
export interface Grille { cote: number; ox: number; oy: number }

/** Tracé SVG des murs (attribut d), dans l'ordre du prototype. */
export function tracerMurs({ colonnes, lignes, cellules }: Labyrinthe, { cote, ox, oy }: Grille): string {
  let d = '';
  for (let y = 0; y < lignes; y++) {
    for (let x = 0; x < colonnes; x++) {
      const c = cellules[y * colonnes + x];
      const X = ox + x * cote;
      const Y = oy + y * cote;
      // Chaque case trace son mur du haut et de gauche ; la dernière ligne et la dernière colonne ferment le bord.
      if (c.n) d += `M${X} ${Y}h${cote}`;
      if (c.w) d += `M${X} ${Y}v${cote}`;
      if (y === lignes - 1 && c.s) d += `M${X} ${Y + cote}h${cote}`;
      if (x === colonnes - 1 && c.e) d += `M${X + cote} ${Y}v${cote}`;
    }
  }
  return d;
}

export interface Point { x: number; y: number }

/** Murs un par un (segments d'une case de long), dans l'ordre de tracerMurs. */
export function murs({ colonnes, lignes, cellules }: Labyrinthe, { cote, ox, oy }: Grille): [Point, Point][] {
  const segments: [Point, Point][] = [];
  for (let y = 0; y < lignes; y++) {
    for (let x = 0; x < colonnes; x++) {
      const c = cellules[y * colonnes + x];
      const X = ox + x * cote;
      const Y = oy + y * cote;
      if (c.n) segments.push([{ x: X, y: Y }, { x: X + cote, y: Y }]);
      if (c.w) segments.push([{ x: X, y: Y }, { x: X, y: Y + cote }]);
      if (y === lignes - 1 && c.s) segments.push([{ x: X, y: Y + cote }, { x: X + cote, y: Y + cote }]);
      if (x === colonnes - 1 && c.e) segments.push([{ x: X + cote, y: Y }, { x: X + cote, y: Y + cote }]);
    }
  }
  return segments;
}

/** Centre d'une case dans le SVG. */
export function centre({ colonnes }: Labyrinthe, { cote, ox, oy }: Grille, i: number): Point {
  return { x: ox + (i % colonnes) * cote + cote / 2, y: oy + Math.floor(i / colonnes) * cote + cote / 2 };
}

/** Couloirs : segments entre les centres des cases reliées, plus l'entrée (bord gauche) et la sortie (bord droit). */
export function couloirs(labyrinthe: Labyrinthe, grille: Grille): [Point, Point][] {
  const { colonnes, cellules } = labyrinthe;
  const segments: [Point, Point][] = [];
  const debut = centre(labyrinthe, grille, 0);
  segments.push([{ x: grille.ox, y: debut.y }, debut]);
  cellules.forEach((c, i) => {
    if (!c.e && i % colonnes < colonnes - 1) segments.push([centre(labyrinthe, grille, i), centre(labyrinthe, grille, i + 1)]);
    if (!c.s && i + colonnes < cellules.length) segments.push([centre(labyrinthe, grille, i), centre(labyrinthe, grille, i + colonnes)]);
  });
  const fin = centre(labyrinthe, grille, cellules.length - 1);
  segments.push([fin, { x: grille.ox + colonnes * grille.cote, y: fin.y }]);
  return segments;
}

/** Impasses : cases fermées sur trois côtés, hors entrée et sortie (jamais sur le bon chemin). */
export function impasses({ cellules }: Labyrinthe): number[] {
  const derniere = cellules.length - 1;
  return cellules
    .map((c, i) => ({ i, murs: [c.n, c.e, c.s, c.w].filter(Boolean).length }))
    .filter(({ i, murs }) => murs === 3 && i !== 0 && i !== derniere)
    .map(({ i }) => i);
}
