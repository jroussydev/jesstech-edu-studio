interface PanneauProps {
  titre: string;
  tag?: string;        // pastille au-dessus du titre, à la couleur repère (RG9)
}

/** Panneau de bois du titre, comme « Filou, le petit renard ». */
export function Panneau({ titre, tag }: PanneauProps) {
  return (
    <div className="panneau">
      {tag && <span className="tag">{tag}</span>}
      <h2>{titre}</h2>
    </div>
  );
}
