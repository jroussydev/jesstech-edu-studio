interface PageVideProps {
  titre: string;
  detail: string;
}

/** Page de test en attendant les vraies pages : vérifie les cqw et les couleurs du thème. */
export function PageVide({ titre, detail }: PageVideProps) {
  return (
    <div className="page-vide">
      <div className="page-vide-pastille" />
      <h2>{titre}</h2>
      <p>{detail}</p>
    </div>
  );
}
