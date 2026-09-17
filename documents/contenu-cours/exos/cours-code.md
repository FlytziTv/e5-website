# 1 — Le squelette d'un programme

Chaque langage a son point d'entrée. **C** : compilé en binaire, tout part de `main()`, bibliothèques via `#include`. **Java** : compilé en bytecode exécuté par la JVM, tout vit dans une classe et démarre par `main`. **JavaScript** : interprété **côté client**, dans le navigateur — visible et modifiable par l'utilisateur. **PHP** : interprété **côté serveur** entre `<?php ?>` — le navigateur ne reçoit que le HTML produit. Cette distinction client/serveur est la première chose à retenir.

```java
// C — compilé, point d'entrée main()
#include <stdio.h>

int main() {
    // instructions
    return 0;
}

// Java — tout est dans une classe
public class Programme {
    public static void main(String[] args) {
        // instructions
    }
}
```

```html
<!-- JavaScript — côté client -->
<script>
  // instructions
</script>

<!-- PHP — côté serveur -->
<?php
    // instructions
?>
```

---

# 2 — Variables et types

Une variable est un emplacement nommé en mémoire. **C et Java** : typage statique, le type est déclaré et ne change jamais (`int`, `float`/`double`, `char`, plus `String` et `boolean` en Java). **JS et PHP** : typage dynamique, le type est déduit de la valeur. Piège permanent : toute saisie utilisateur arrive en **chaîne de caractères**, donc `"5" + "3"` donne `"53"`. Il faut convertir explicitement.

```java
// C                          // Java
int nb = 10;                  int nb = 10;
float surface = 15.5;         double surface = 15.5;
char lettre = 'A';            String nom = "Stacy";
                              final double PI = 3.14;
```

```javascript
// JS — let / const          // PHP — préfixe $
let nb = 10;                 $nb = 10;
const PI = 3.14;             $pi = 3.14;

let x = parseFloat(saisie);  $x = floatval($saisie);  // conversion
```

---

# 3 — Entrées et sorties

Lire et afficher dépend du contexte d'exécution. **C** : `scanf` / `printf`, pilotés par formats (`%d` entier, `%f` réel) et `&` devant la variable lue. **Java** : un objet `Scanner` sur `System.in` pour lire, `System.out.println()` pour afficher. **JS** : `prompt()` renvoie du texte, sortie via `alert()`, `document.write()` ou `console.log()`. **PHP** : pas de saisie directe — les données viennent d'un formulaire HTML, récupérées dans `$_POST` et validées par `isset()` avant traitement.

```java
// C — formats et esperluette
int nb;
printf("Donnez un nombre : ");
scanf("%d", &nb);
printf("Saisi : %d\n", nb);

// Java — Scanner
import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Donnez un nombre : ");
int nb = sc.nextInt();          // nextDouble() / nextLine()
System.out.println("Saisi : " + nb);
```

```php
// JS — prompt renvoie du texte
let nb = parseInt(prompt("Donnez un nombre :"));
alert("Saisi : " + nb);

// PHP — le formulaire est l'entrée
<form method="POST">
    <input type="text" name="nb">
    <input type="submit" name="Valider" value="Valider">
</form>
<?php
    if (isset($_POST["Valider"])) {
        echo "Saisi : " . intval($_POST["nb"]);
    }
?>
```

---

# 4 — Les opérateurs

Arithmétique identique partout, parenthèses pour lever toute ambiguïté. Deux pièges : la division par zéro, à toujours tester avant, et la division entière en **C et Java** (`7 / 2` vaut `3`). Le **modulo** `%` donne le reste : c'est l'outil de la divisibilité et de la parité. Ne jamais confondre `=` (affecte) et `==` (compare) ; `===` compare aussi le type en JS et PHP, et en Java on compare les chaînes avec `.equals()`, jamais avec `==`. Concaténation : `+` en C-like et JS, `.` en PHP.

```
Arithmétique   +   -   *   /   %(modulo)
Comparaison    ==   !=   <   >   <=   >=
Identité       ===  !==        (JS et PHP)
Chaînes        .equals()       (Java)
Logique        &&(ET)   ||(OU)   !(NON)
Affectation    =        ≠ ==
```

```javascript
6 % 3        // → 0   3 divise 6
6 % 4        // → 2   4 ne divise pas 6
n % 2 == 0   // n est pair

7 / 2        // → 3 en C et Java (division entière)
             // → 3.5 en JS et PHP
```

---

# 5 — Les structures conditionnelles

`if / else` a la même syntaxe dans les quatre langages. On **imbrique** pour des cas hiérarchisés, on **chaîne** avec `else if` pour des cas de même niveau, on utilise `switch` pour comparer une variable à des valeurs fixes. Règle d'or : les cas particuliers et les cas d'erreur passent **avant** le cas général — c'est ce qui protège le calcul qui suit.

```java
// Syntaxe commune C / Java / JS / PHP
if (a == 0) {
    // cas particulier d'abord
} else if (a > 0) {
    // autre cas
} else {
    // cas restant
}
```

```javascript
// Imbrication : sécuriser AVANT de calculer
if (a == 0) {
    if (b == 0) { message = "Une infinité de solutions"; }
    else        { message = "Aucune solution"; }
} else {
    x = -b / a;        // ici a ≠ 0 : division sûre
}
```

---

# 6 — Les boucles

Une seule question détermine le choix : **connaît-on le nombre de répétitions ?** Oui → `for`, qui réunit initialisation, condition et incrémentation sur une ligne. Non → `while`, ou `do...while` si le bloc doit s'exécuter au moins une fois. Risque constant : la **boucle infinie**, quand la condition d'arrêt ne peut jamais devenir fausse. La syntaxe est identique partout, à la déclaration du compteur près.

```java
// POUR — (1: init ; 2: condition ; 3: incrémentation)
for (int i = 1; i <= n; i++) { }    // C et Java
for (let i = 1; i <= n; i++) { }    // JS
for ($i = 1; $i <= $n; $i++) { }    // PHP

// TANT QUE — modifier la condition ici, sinon boucle infinie
while (condition) { }
```

```javascript
// Boucle + condition : parcourir en filtrant
let resultats = [];
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        resultats.push(i);
    }
}
console.log(resultats.join(", "));
```

---

# 7 — Récapitulatif des syntaxes

Les quatre langages partagent la même logique — séquence, condition, répétition — et ne diffèrent que par l'habillage. Maîtriser l'algorithme, c'est n'avoir plus qu'un tableau de correspondances à apprendre. Conventions valables partout : indentation par bloc, noms explicites, commentaires utiles, point-virgule en fin d'instruction.

```
             Déclarer   Lire                Afficher
C            int nb;    scanf("%d", &nb)    printf("%d", nb)
Java         int nb;    sc.nextInt()        System.out.println(nb)
JavaScript   let nb;    prompt("...")       console.log(nb)
PHP          $nb        $_POST["nb"]        echo $nb;

Conversion   C: %d / %f   Java: Integer.parseInt()
             JS: parseInt()   PHP: intval()
Concaténer   Java et JS: "a" + b   PHP: "a" . $b
Exécution    C: natif   Java: JVM   JS: client   PHP: serveur
```

```
Le tronc commun :

  variables  →  stocker
  E / S      →  lire et afficher
  condition  →  choisir
  boucle     →  répéter

Tout le reste n'est que syntaxe.
```
