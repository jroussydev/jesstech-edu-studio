import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { genererLabyrinthe } from '../../lib/labyrinthe.ts';
import { creerRng } from '../../lib/rng.ts';
import { HABILLAGES } from './habillages.ts';

const LABYRINTHE = genererLabyrinthe(5, 6, creerRng(598));
const GRILLE = { cote: 22, ox: 38, oy: 6 };

describe.each(Object.entries(HABILLAGES))('habillage %s', (_id, Habillage) => {
  const html = renderToStaticMarkup(<svg><Habillage labyrinthe={LABYRINTHE} grille={GRILLE} /></svg>);

  it('dessine quelque chose', () => {
    expect(html.length).toBeGreaterThan(100);
  });

  it('ne prend ses couleurs que dans les variables du thème (noir et blanc compris)', () => {
    const couleurs = [...html.matchAll(/(?:fill|stroke)="([^"]*)"/g)].map((r) => r[1]);
    expect(couleurs.length).toBeGreaterThan(0);
    for (const couleur of couleurs) expect(couleur).toMatch(/^(none|var\(--[a-z-]+\))$/);
  });
});
