import { remplir, TRAIT } from './trait.ts';

interface ChauveSourisProps {
  aColorier?: boolean;
}

/** Chauve-souris du prototype, dans un cadre 0 6 100 64. */
export function ChauveSouris({ aColorier = false }: ChauveSourisProps) {
  const fond = remplir('var(--bois-fonce)', aColorier);
  const yeux = aColorier ? TRAIT : 'var(--papier)';
  return (
    <>
      <path
        d="M50 40 Q30 18 6 30 Q16 38 14 50 Q26 44 32 54 Q40 46 50 52 Q60 46 68 54 Q74 44 86 50 Q84 38 94 30 Q70 18 50 40 Z"
        fill={fond}
        stroke={TRAIT}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <ellipse cx="50" cy="46" rx="11" ry="14" fill={fond} stroke={TRAIT} strokeWidth="3" />
      <path d="M42 34 L41 24 L47 32 M58 34 L59 24 L53 32" fill={fond} stroke={TRAIT} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="45" cy="44" r="2.6" fill={yeux} />
      <circle cx="55" cy="44" r="2.6" fill={yeux} />
    </>
  );
}
