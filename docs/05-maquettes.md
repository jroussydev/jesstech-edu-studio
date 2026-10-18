# 05 — Maquettes · JessTech Edu Studio

> Version 0.2 — 18/10/2026 — statut : à valider

## 1. Interface de l'application (esquisse du 18/10/2026)
Esquisse : `docs/maquettes/esquisse-interface-2026-10-18.jpg`

Un seul écran, en trois zones :

```
┌──────────────────────────────────────────────┬──────────────────────┐
│ [Logo Filou]  Générateur de cahiers de vacances│  L'ENFANT            │
├──────────────────────────────────────────────┤  Prénom              │
│ Format [A4 ▾]   ( ) Couleur  ( ) Noir et blanc│  Classe [GS ▾]       │
│                                [Imprimer]    │  Difficultés ☐ ☐ ☐ … │
├──────────────────────────────────────────────┤                      │
│                                              │  LE CAHIER           │
│   ◀          APERÇU DE LA PAGE          ▶    │  Personnage (futur)  │
│                                              │  Vacances [Toussaint▾]│
│                 page 6 / 29                  │                      │
│                                              │  CETTE PAGE          │
│                                              │  [↻ Activité 1]      │
│                                              │  [↻ Activité 2]      │
│                                              │  [↻ Activité 3]      │
└──────────────────────────────────────────────┴──────────────────────┘
```

| Zone | Élément | Comportement |
|---|---|---|
| En-tête | Logo + titre « Générateur de cahiers de vacances » | Fixe |
| Barre d'impression | Format (A4, A5) | Liste déroulante ; l'aperçu change de format |
| | Couleur / Noir et blanc | Choix exclusif (boutons radio) ; bascule `data-impression` |
| | Imprimer | Lance l'impression du cahier entier (PDF via le navigateur) |
| Aperçu | Page à taille réelle, réduite à l'écran | Affiche une page à la fois |
| | ◀ ▶ | Page précédente / suivante ; compteur « page N / total » |
| Panneau « L'enfant » | Prénom | Texte ; apparaît sur la couverture et les en-têtes |
| | Classe | Liste : TPS, PS, MS, GS, CP… CM2 |
| | Difficultés | Cases à cocher (les 13 difficultés du catalogue) |
| Panneau « Le cahier » | Personnage | Plus tard (Filou seul en V1) : grisé |
| | Vacances | Liste : Toussaint (Halloween), Noël, Pâques… ; seules les vacances disponibles sont actives |
| Panneau « Cette page » | ↻ Activité 1, 2, 3 | Un bouton par activité **de la page affichée** : tire une autre version de cette activité (nouvelle graine, RG3). Absent sur les pages sans activité (couverture, imagier…) |

## 2. Ordre de construction (pour vérifier chaque étape à l'écran)
1. **Coquille** : la mise en page des trois zones, avec des valeurs factices. Les réglages Couleur / Noir et blanc et Format marchent déjà (variables de `tokens.css`, constante `FORMATS`).
2. **Aperçu** : une page vide au bon format, puis la navigation ◀ ▶.
3. **Contenu** : les pages réelles arrivent une à une dans l'aperçu (mission 4 d'abord).
4. **Formulaire** : prénom, classe et difficultés branchés sur le profil.
5. **Boutons ↻** : régénération des activités de la page affichée.

## 3. Pages du cahier
Références visuelles : prototypes `reference/apercu-cahier-mathieu.html` et `reference/apercu-cahier-clara.html` (mise en page, palette, typographie de chaque type de page).

## 4. À venir
- Maquette Figma propre de l'interface (à partir de cette esquisse).
- Décoration des pages (frises, histoire en post-it).
- Illustrations définitives de Filou (Procreate).
- Version téléphone : les panneaux passent sous l'aperçu.
