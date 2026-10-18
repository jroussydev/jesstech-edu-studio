// Les 29 pages du cahier (docs/03-analyse-fonctionnelle.md §4), en attendant composer.ts.

export interface PageFactice {
  titre: string;
  detail: string;
  missionActivites?: number;   // page activités de cette mission : rendue en vrai si sa composition existe
}

function mission(numero: number): PageFactice[] {
  return [
    { titre: `Mission ${numero}`, detail: 'activités', missionActivites: numero },
    { titre: `Mission ${numero}`, detail: 'histoire et création' },
  ];
}

function imagier(semaine: number): PageFactice[] {
  return [
    { titre: `Imagier ${semaine}`, detail: 'gauche' },
    { titre: `Imagier ${semaine}`, detail: 'droite' },
  ];
}

export const PAGES_FACTICES: PageFactice[] = [
  { titre: 'Couverture', detail: 'page de garde' },
  { titre: 'Ouverture', detail: 'l’aventure de Filou' },
  { titre: 'Mes citrouilles', detail: 'progression' },
  ...imagier(1),
  ...[1, 2, 3, 4, 5].flatMap(mission),
  ...imagier(2),
  ...[6, 7, 8, 9, 10].flatMap(mission),
  { titre: 'Mission finale', detail: 'la dernière ligne droite' },
  { titre: 'Bravo', detail: 'la fête de la forêt' },
];
