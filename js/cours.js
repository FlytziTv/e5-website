// Coloration des blocs de code de la page cours.
// Le dépliage des aperçus se fait en CSS (boutons radio) : ce fichier ne sert qu'aux couleurs,
// la page reste donc utilisable si JavaScript ou highlight.js ne se charge pas.

// typeof évite une erreur si la librairie n'a pas pu se charger (pas d'internet)
if (typeof hljs !== "undefined") {
  // highlightAll() colore tous les <pre><code> de la page.
  // Chaque bloc indique son langage avec une classe "language-xxx" dans le HTML :
  // language-plaintext = aucune couleur, pour les tableaux de correspondances.
  hljs.highlightAll();
}
