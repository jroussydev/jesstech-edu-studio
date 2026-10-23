interface NoteParentProps {
  texte: string;
}

/** Note « Pour l'adulte » en bas de page (RG12). */
export function NoteParent({ texte }: NoteParentProps) {
  return (
    <p className="parent bloc-texte">
      <b>Pour l’adulte :</b> {texte}
    </p>
  );
}
