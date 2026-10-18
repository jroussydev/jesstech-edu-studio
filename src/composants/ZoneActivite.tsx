import { REGISTRE, type ContexteActivite } from '../activites/registre.ts';
import { creerRng } from '../lib/rng.ts';
import type { ActiviteConfig } from '../types.ts';
import { Consigne } from './Consigne.tsx';

interface ZoneActiviteProps {
  numero: number;
  config: ActiviteConfig;
  graine: number;
  contexte: Omit<ContexteActivite, 'rng'>;
}

/** Zone encadrée d'une activité : sa consigne puis son contenu, produits par le générateur du registre. */
export function ZoneActivite({ numero, config, graine, contexte }: ZoneActiviteProps) {
  const generateur = REGISTRE[config.type];

  // Jeu du catalogue dont le générateur n'est pas encore porté : la zone reste visible à l'aperçu.
  if (!generateur) {
    return (
      <section className="zone zone-en-attente">
        <p>Activité « {config.type} » à venir</p>
      </section>
    );
  }

  // Le rng est créé ici, dans le rendu qui le consomme : React peut rendre deux fois le même composant
  // (StrictMode, ou un nouveau rendu de la zone seule), et chaque rendu doit repartir de la graine (RG3).
  const rng = creerRng(graine);

  return (
    <section className="zone">
      <Consigne numero={numero} consigne={generateur.consigne(config)} />
      <div className="contenu">{generateur.rendre(config, { ...contexte, rng })}</div>
    </section>
  );
}
