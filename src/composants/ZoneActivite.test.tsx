import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { tirerTrouveLeMeme } from '../activites/trouveLeMeme.tsx';
import { CAHIER, MISSIONS, PROFIL, THEME } from '../donnees.ts';
import type { OptionsFantome } from '../illustrations/Fantome.tsx';
import { creerRng } from '../lib/rng.ts';
import { PageActivites } from '../pages/PageActivites.tsx';
import type { ActiviteConfig } from '../types.ts';
import { ZoneActivite } from './ZoneActivite.tsx';

// Relit, dans le SVG rendu, les détails des quatre fantômes à comparer (placés à y = 14, le modèle à y = 8).
function fantomesProposes(html: string): OptionsFantome[] {
  return html
    .split('<svg x="')
    .filter((morceau) => /^\d+" y="14"/.test(morceau))
    .map((morceau) => ({
      yeux: morceau.includes('<ellipse cx="40"') ? 'ovale' : 'rond',
      bouche: morceau.includes('<circle cx="50" cy="65"') ? 'o' : 'sourire',
      bras: morceau.includes('M21 64'),
      noeud: morceau.includes('M50 16'),
    }));
}

const mission4 = MISSIONS.find((m) => m.numero === 4)!;
const config: ActiviteConfig = { type: 'trouveLeMeme', variante: 'détails fins (GS)' };
const contexte = { demi: false, profil: PROFIL, theme: THEME, mission: mission4, filou: 'filou.png' };

describe('ZoneActivite', () => {
  it('dessine les fantômes dans l’ordre tiré par tirerTrouveLeMeme', () => {
    const html = renderToStaticMarkup(<ZoneActivite numero={2} config={config} graine={404} contexte={contexte} />);
    expect(fantomesProposes(html)).toEqual(tirerTrouveLeMeme(creerRng(404)).choix);
  });

  it('donne le même dessin à chaque rendu des mêmes props (StrictMode rend deux fois)', () => {
    const zone = <ZoneActivite numero={2} config={config} graine={404} contexte={contexte} />;
    expect(renderToStaticMarkup(zone)).toBe(renderToStaticMarkup(zone));
  });
});

describe('PageActivites, mission 4 de Mathieu', () => {
  const html = renderToStaticMarkup(
    <PageActivites mission={mission4} composition={CAHIER.composition[4]} profil={PROFIL} theme={THEME} folio={12} />,
  );
  // Zones dans l'ordre d'affichage : labyrinthe (1), trouve le même (2), compter (3).
  const zones = html.split('<section class="zone').slice(1);

  it('place le modèle en 2ᵉ position, comme le PDF imprimé', () => {
    const m = { yeux: 'rond', bouche: 'sourire', bras: true, noeud: true };
    expect(fantomesProposes(zones[1])).toEqual([{ ...m, bras: false }, m, { ...m, bouche: 'o' }, { ...m, noeud: false }]);
  });

  it('dessine le labyrinthe en chemin de terre, de Filou au moulin', () => {
    expect(zones[0]).toContain('Trace le chemin de Filou jusqu&#x27;au moulin.');
    expect(zones[0]).toContain('stroke="var(--terre)"');
    expect(zones[0]).toContain('>Départ<');
    expect(zones[0]).toContain('>Arrivée<');
  });

  it('fait compter 7 fantômes parmi 5, 8 et 7, comme le PDF imprimé', () => {
    expect(zones[2]).toContain('Entoure le nombre de fantômes.');
    expect(zones[2].match(/viewBox="0 0 100 110"/g)).toHaveLength(7);
    expect([...zones[2].matchAll(/font-size="23"[^>]*>(\d+)</g)].map((r) => r[1])).toEqual(['5', '8', '7']);
  });
});
