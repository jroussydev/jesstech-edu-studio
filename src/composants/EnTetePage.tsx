import { Panneau } from './Panneau.tsx';

interface EnTetePageProps {
  tag: string;
  titre: string;
  prenom: string;
}

/** En-tête d'une page du cahier : panneau de titre et prénom de l'enfant. */
export function EnTetePage({ tag, titre, prenom }: EnTetePageProps) {
  return (
    <div className="entete">
      <Panneau tag={tag} titre={titre} />
      <div className="prenom">
        Prénom<b>{prenom}</b>
      </div>
    </div>
  );
}
