import { Fragment } from 'react';
import type { Mot } from '../types.ts';

interface FilouExpliqueProps {
  filou: string;        // URL de Filou dans le costume de la mission
  libelleFilou: string;
  mots: Mot[];
  texte: string;
  question?: string;
}

/** Encadré « Filou t'explique » : le mot du jour et ce qu'il veut dire, lu par l'adulte (F12). */
export function FilouExplique({ filou, libelleFilou, mots, texte, question }: FilouExpliqueProps) {
  return (
    <aside className="explique bloc-texte">
      <div className="haut">
        <img src={filou} alt={libelleFilou} />
        <div>
          <h3>Filou t’explique</h3>
          <div className="mot">
            {mots.map((mot) => (
              <Fragment key={mot.id}>
                <span className="maj">{mot.maj}</span>
                <span className="min">{mot.min}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <p>{texte}</p>
      {question && <p className="question">{question}</p>}
    </aside>
  );
}
