import { remplir, TRAIT } from './trait.ts';

// Les détails qui changent d'un fantôme à l'autre (« trouve le même »).
export interface OptionsFantome {
  yeux?: 'rond' | 'ovale';
  bouche?: 'sourire' | 'o';
  bras?: boolean;
  noeud?: boolean;
}

interface FantomeProps extends OptionsFantome {
  aColorier?: boolean;
}

/** Fantôme du prototype, dans un cadre 0 0 100 110. */
export function Fantome({ yeux = 'rond', bouche = 'sourire', bras = false, noeud = false, aColorier = false }: FantomeProps) {
  const epaisseur = aColorier ? 3.4 : 3;
  return (
    <>
      <path
        d="M20 102 V45 A30 30 0 0 1 80 45 V102 L70 94 L60 102 L50 94 L40 102 L30 94 Z"
        fill={remplir('var(--fantome)', aColorier)}
        stroke={TRAIT}
        strokeWidth={epaisseur}
        strokeLinejoin="round"
      />
      {bras && (
        <path d="M21 64 Q7 58 10 45 M79 64 Q93 58 90 45" fill="none" stroke={TRAIT} strokeWidth={epaisseur} strokeLinecap="round" />
      )}
      {yeux === 'ovale' ? (
        <>
          <ellipse cx="40" cy="48" rx="3.5" ry="7" fill={TRAIT} />
          <ellipse cx="60" cy="48" rx="3.5" ry="7" fill={TRAIT} />
        </>
      ) : (
        <>
          <circle cx="40" cy="48" r="5" fill={TRAIT} />
          <circle cx="60" cy="48" r="5" fill={TRAIT} />
        </>
      )}
      {bouche === 'o' ? (
        <circle cx="50" cy="65" r="5" fill="none" stroke={TRAIT} strokeWidth={epaisseur} />
      ) : (
        <path d="M41 62 Q50 71 59 62" fill="none" stroke={TRAIT} strokeWidth={epaisseur} strokeLinecap="round" />
      )}
      {noeud && (
        <>
          <path
            d="M50 16 L39 8 L39 24 Z M50 16 L61 8 L61 24 Z"
            fill={remplir('var(--citrouille)', aColorier)}
            stroke={TRAIT}
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="16" r="3.5" fill={TRAIT} />
        </>
      )}
    </>
  );
}
