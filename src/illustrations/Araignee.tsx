import { remplir, TRAIT } from './trait.ts';

interface AraigneeProps {
  aColorier?: boolean;
}

// Quatre pattes de chaque côté, comme dans le prototype.
const PATTES = [-1, 1]
  .flatMap((cote) => [18, 30, 42, 54].map((y, i) => `M${50 + cote * 10} ${52 + i * 3} Q${50 + cote * 30} ${y} ${50 + cote * 38} ${y + 16}`))
  .join('');

/** Araignée suspendue à son fil, dans un cadre 0 0 100 92. */
export function Araignee({ aColorier = false }: AraigneeProps) {
  const contourOeil = aColorier ? TRAIT : 'none';
  return (
    <>
      <path d="M50 0 V36" stroke={TRAIT} strokeWidth="1.6" />
      <path d={PATTES} fill="none" stroke={TRAIT} strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="56" r="16" fill={remplir('var(--bois-fonce)', aColorier)} stroke={TRAIT} strokeWidth="3" />
      <circle cx="44" cy="52" r="4" fill="var(--papier)" stroke={contourOeil} strokeWidth="1" />
      <circle cx="56" cy="52" r="4" fill="var(--papier)" stroke={contourOeil} strokeWidth="1" />
      <circle cx="44" cy="53" r="1.8" fill={TRAIT} />
      <circle cx="56" cy="53" r="1.8" fill={TRAIT} />
    </>
  );
}
