# 05 — Convention UI

## Styles
- Tailwind pour l'interface de l'application.
- CSS dédié pour ce qui demande un contrôle fin (exemple : pages imprimées).
- **Aucune couleur écrite en dur** : uniquement des variables (`var(--citrouille)`) ou les couleurs du thème Tailwind. Un changement de thème ou un mode noir et blanc ne touche que les variables.

## Mise en page
- Mobile d'abord, puis tablette, puis ordinateur.
- Tailles relatives (`rem`, `%`, `cqw`), pas de `px` fixes pour le texte.
- Un texte ne sort jamais de son bloc : prévoir les textes longs et les polices agrandies.

## Accessibilité
- Contraste suffisant entre texte et fond.
- Tout élément cliquable est un vrai `button` ou `a`, accessible au clavier, avec un focus visible.
- Images utiles : un `alt` qui décrit ; images décoratives : `alt=""`.
- Les icônes seules ont un libellé (`aria-label`).

## Typographie française
- Apostrophe typographique ’ et guillemets « » dans les textes affichés.
- Espace avant `: ; ! ?` dans les textes affichés.

## Impression
- Tester chaque page en couleur et en noir et blanc, et à 100 % (pas « ajuster à la page »).
