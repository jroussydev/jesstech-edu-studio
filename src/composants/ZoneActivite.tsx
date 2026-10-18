import { REGISTRE, type ContexteActivite } from '../activites/registre.ts';
import type { ActiviteConfig } from '../types.ts';
import { Consigne } from './Consigne.tsx';

interface ZoneActiviteProps {
  numero: number;
  config: ActiviteConfig;
  contexte: ContexteActivite;
}

/** Zone encadrée d'une activité : sa consigne puis son contenu, produits par le générateur du registre. */
export function ZoneActivite({ numero, config, contexte }: ZoneActiviteProps) {
  const generateur = REGISTRE[config.type];

  // Jeu du catalogue dont le générateur n'est pas encore porté : la zone reste visible à l'aperçu.
  if (!generateur) {
    return (
      <section className="zone zone-en-attente">
        <p>Activité « {config.type} » à venir</p>
      </section>
    );
  }

  return (
    <section className="zone">
      <Consigne numero={numero} consigne={generateur.consigne(config)} />
      <div className="contenu">{generateur.rendre(config, contexte)}</div>
    </section>
  );
}
