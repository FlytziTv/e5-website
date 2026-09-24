// Pour chaque langage :
// - extension : affichée dans l'en-tête du code (Ex01.c)
// - coloration : nom du langage pour highlight.js ("php-template" = PHP mélangé à du HTML)
// Les clés doivent être identiques aux data-language des boutons du HTML (majuscules comprises)
const langages = {
  Algo: { extension: "algo", coloration: "algo" },
  C: { extension: "c", coloration: "c" },
  Java: { extension: "java", coloration: "java" },
  JavaScript: { extension: "js", coloration: "javascript" },
  PHP: { extension: "php", coloration: "php-template" },
};

// Chaque exercice a un énoncé commun et un code par langage
const exercices = {
  1: {
    numero: "01",
    nom: "Surface et périmètre d'un rectangle",
    enonce:
      "Lire la longueur et la largeur d'un rectangle, calculer sa surface (<code>lg * lr</code>) et son périmètre (<code>2 * (lg + lr)</code>), afficher les deux résultats. Attention à convertir la saisie en nombre avant de calculer.",
    attendu: `
      La surface est de : 15
      Le périmètre est de : 16
    `,
    codes: {
      Algo: `
        ALGORITHME Rectangle
        VARIABLES
            lg, lr, s, p : RÉEL
        DÉBUT
            LIRE lg
            LIRE lr
            s ← lg * lr
            p ← 2 * (lg + lr)
            AFFICHER "La surface est de : ", s
            AFFICHER "Le périmètre est de : ", p
        FIN
      `,
      C: `
        #include <stdio.h>

        int main() {
            float lg, lr, s, p;

            printf("Longueur : ");
            scanf("%f", &lg);
            printf("Largeur : ");
            scanf("%f", &lr);

            s = lg * lr;
            p = 2 * (lg + lr);

            printf("La surface est de : %.2f\\n", s);
            printf("Le perimetre est de : %.2f\\n", p);
            return 0;
        }
      `,
      Java: `
        import java.util.Scanner;

        public class Rectangle {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                System.out.print("Longueur : ");
                double lg = sc.nextDouble();
                System.out.print("Largeur : ");
                double lr = sc.nextDouble();

                double s = lg * lr;
                double p = 2 * (lg + lr);

                System.out.println("La surface est de : " + s);
                System.out.println("Le périmètre est de : " + p);
            }
        }
      `,
      JavaScript: `
        let lg = parseFloat(prompt("Entrez la longueur du rectangle :"));
        let lr = parseFloat(prompt("Entrez la largeur du rectangle :"));

        let s = lg * lr;
        let p = 2 * (lg + lr);

        document.write("La surface est de : " + s + "<br>");
        document.write("Le périmètre est de : " + p);
      `,
      PHP: `
        <form method="POST">
            Longueur : <input type="text" name="lg"><br>
            Largeur  : <input type="text" name="lr"><br>
            <input type="submit" name="Calculer" value="Calculer">
        </form>

        <?php
        if (isset($_POST["Calculer"])) {
            $lg = floatval($_POST["lg"]);
            $lr = floatval($_POST["lr"]);

            $s = $lg * $lr;
            $p = 2 * ($lg + $lr);

            printf("La surface est de : %.2f <br>", $s);
            printf("Le périmètre est de : %.2f", $p);
        }
        ?>
      `,
    },
  },
  2: {
    numero: "02",
    nom: "Équation du premier degré",
    enonce:
      "Résoudre l'équation <code>a·x + b = 0</code>. Lire les coefficients <code>a</code> et <code>b</code>, puis afficher la solution. Gérer les deux cas particuliers : si <code>a</code> et <code>b</code> sont nuls, l'ensemble des solutions est <code>ℝ</code> ; si <code>a</code> est nul et <code>b</code> ne l'est pas, il est vide. Ne jamais diviser avant d'avoir testé <code>a</code>.",
    attendu: `
      La solution est de : 3
    `,
    codes: {
      Algo: `
        ALGORITHME Equation
        VARIABLES
            a, b, x : RÉEL
        DÉBUT
            LIRE a
            LIRE b
            SI a = 0 ALORS
                SI b = 0 ALORS
                    AFFICHER "L'ensemble des solutions est R"
                SINON
                    AFFICHER "L'ensemble des solutions est vide"
                FIN SI
            SINON
                x ← -b / a
                AFFICHER "La solution est de : ", x
            FIN SI
        FIN
      `,
      C: `
        #include <stdio.h>

        int main() {
            float a, b, x;

            printf("Premier coefficient : ");
            scanf("%f", &a);
            printf("Deuxieme coefficient : ");
            scanf("%f", &b);

            if (a == 0) {
                if (b == 0) {
                    printf("L'ensemble des solutions est R\\n");
                } else {
                    printf("L'ensemble des solutions est vide\\n");
                }
            } else {
                x = -b / a;
                printf("La solution est de : %.2f\\n", x);
            }
            return 0;
        }
      `,
      Java: `
        import java.util.Scanner;

        public class Equation {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                System.out.print("Premier coefficient : ");
                double a = sc.nextDouble();
                System.out.print("Deuxième coefficient : ");
                double b = sc.nextDouble();

                if (a == 0) {
                    if (b == 0) {
                        System.out.println("L'ensemble des solutions est R");
                    } else {
                        System.out.println("L'ensemble des solutions est vide");
                    }
                } else {
                    double x = -b / a;
                    System.out.println("La solution est de : " + x);
                }
            }
        }
      `,
      JavaScript: `
        let a = parseFloat(prompt("Entrez le premier coefficient :"));
        let b = parseFloat(prompt("Entrez le deuxième coefficient :"));

        if (a == 0) {
          if (b == 0) {
            document.write("L'ensemble des solutions est R");
          } else {
            document.write("L'ensemble des solutions est vide");
          }
        } else {
          let x = -b / a;
          document.write("La solution est de : " + x);
        }
      `,
      PHP: `
        <form method="POST">
            Premier coeff  : <input type="text" name="a"><br>
            Deuxième coeff : <input type="text" name="b"><br>
            <input type="submit" name="Resoudre" value="Résoudre">
        </form>

        <?php
        if (isset($_POST["Resoudre"])) {
            $a = floatval($_POST["a"]);
            $b = floatval($_POST["b"]);

            if ($a == 0) {
                if ($b == 0) {
                    echo "L'ensemble des solutions est R";
                } else {
                    echo "L'ensemble des solutions est vide";
                }
            } else {
                $x = -$b / $a;
                echo "La solution est de : " . $x;
            }
        }
        ?>
      `,
    },
  },
  3: {
    numero: "03",
    nom: "Diviseurs d'un nombre",
    enonce:
      "Lire un entier positif et afficher tous ses diviseurs. Un entier <code>div</code> divise <code>nb</code> si le reste de la division entière est nul (<code>nb % div == 0</code>). Aucun diviseur n'étant inférieur à <code>1</code> ni supérieur à <code>nb</code>, il suffit de parcourir cet intervalle.",
    attendu: `
      Le diviseur est : 1
      Le diviseur est : 2
      Le diviseur est : 3
      Le diviseur est : 6
    `,
    codes: {
      Algo: `
        ALGORITHME Diviseurs
        VARIABLES
            nb, div : ENTIER
        DÉBUT
            LIRE nb
            POUR div DE 1 À nb FAIRE
                SI nb MOD div = 0 ALORS
                    AFFICHER "Le diviseur est : ", div
                FIN SI
            FIN POUR
        FIN
      `,
      C: `
        #include <stdio.h>

        int main() {
            int nb, div;

            printf("Donner votre nombre : ");
            scanf("%d", &nb);

            for (div = 1; div <= nb; div++) {
                if (nb % div == 0) {
                    printf("Le diviseur est : %d\\n", div);
                }
            }
            return 0;
        }
      `,
      Java: `
        import java.util.Scanner;

        public class Diviseurs {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                System.out.print("Donnez votre nombre : ");
                int nb = sc.nextInt();

                for (int div = 1; div <= nb; div++) {
                    if (nb % div == 0) {
                        System.out.println("Le diviseur est : " + div);
                    }
                }
            }
        }
      `,
      JavaScript: `
        let nb = parseInt(prompt("Entrez un nombre :"));

        for (let div = 1; div <= nb; div++) {
          if (nb % div == 0) {
            document.write("Le diviseur est : " + div + "<br>");
          }
        }
      `,
      PHP: `
        <form method="POST">
            Nombre : <input type="text" name="nb"><br>
            <input type="submit" name="Afficher" value="Afficher les diviseurs">
        </form>

        <?php
        if (isset($_POST["Afficher"])) {
            $nb = intval($_POST["nb"]);

            for ($div = 1; $div <= $nb; $div++) {
                if ($nb % $div == 0) {
                    echo "Le diviseur est : " . $div . "<br>";
                }
            }
        }
        ?>
      `,
    },
  },
  4: {
    numero: "04",
    nom: "Procédure mesDiviseurs",
    enonce:
      "Reprendre l'exercice des diviseurs en isolant le traitement dans une procédure <code>mesDiviseurs(nb)</code> qui affiche chaque diviseur du nombre reçu. Le programme principal se contente de lire un entier et d'appeler la procédure. À l'appel, le paramètre effectif <code>unNb</code> est copié dans le paramètre formel <code>nb</code>.",
    attendu: `
      1 est un diviseur de 6
      2 est un diviseur de 6
      3 est un diviseur de 6
      6 est un diviseur de 6
    `,
    codes: {
      Algo: `
        PROCÉDURE mesDiviseurs(nb : ENTIER)
        VARIABLES
            div : ENTIER
        DÉBUT
            POUR div DE 1 À nb FAIRE
                SI nb MOD div = 0 ALORS
                    AFFICHER div, " est un diviseur de ", nb
                FIN SI
            FIN POUR
        FIN

        ALGORITHME ProcDiviseurs
        VARIABLES
            unNb : ENTIER
        DÉBUT
            LIRE unNb
            mesDiviseurs(unNb)
        FIN
      `,
      C: `
        #include <stdio.h>

        void mesDiviseurs(int nb) {
            int div;

            for (div = 1; div <= nb; div++) {
                if (nb % div == 0) {
                    printf("%d est un diviseur de %d\\n", div, nb);
                }
            }
        }

        int main() {
            int unNb;

            printf("Donner un nombre entier : ");
            scanf("%d", &unNb);

            mesDiviseurs(unNb);    // appel de la procédure
            return 0;
        }
      `,
      Java: `
        import java.util.Scanner;

        public class ProcDiviseurs {
            static void mesDiviseurs(int nb) {
                for (int div = 1; div <= nb; div++) {
                    if (nb % div == 0) {
                        System.out.println(div + " est un diviseur de " + nb);
                    }
                }
            }

            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                System.out.print("Donnez un nombre entier : ");
                int unNb = sc.nextInt();

                mesDiviseurs(unNb);    // appel de la procédure
            }
        }
      `,
      JavaScript: `
        function mesDiviseurs(nb) {
          for (let div = 1; div <= nb; div++) {
            if (nb % div == 0) {
              document.write(div + " est un diviseur de " + nb + "<br>");
            }
          }
        }

        let unNb = parseInt(prompt("Saisir un nombre entier :"));
        mesDiviseurs(unNb);
      `,
      PHP: `
        <form method="POST">
            Nombre : <input type="text" name="nb"><br>
            <input type="submit" name="Afficher" value="Afficher les diviseurs">
        </form>

        <?php
        function mesDiviseurs($nb) {
            for ($div = 1; $div <= $nb; $div++) {
                if ($nb % $div == 0) {
                    echo $div . " est un diviseur de " . $nb . "<br>";
                }
            }
        }

        if (isset($_POST["Afficher"])) {
            $unNb = intval($_POST["nb"]);
            mesDiviseurs($unNb);
        }
        ?>
      `,
    },
  },
  5: {
    numero: "05",
    nom: "Prix minimum, maximum et moyen",
    enonce:
      "Saisir 10 prix dans un tableau, puis le parcourir une seule fois pour trouver le prix le plus bas, le plus haut et la moyenne. <code>min</code> et <code>max</code> partent de la première case (partir de 0 fausserait le minimum) ; la moyenne est la somme divisée par le nombre de prix. En JS et PHP, les prix sont saisis sur une seule ligne, séparés par <code>;</code>.",
    attendu: `
      Le prix minimum est de : 5
      Le prix maximum est de : 30
      Le prix moyen est de : 15
    `,
    codes: {
      Algo: `
        ALGORITHME Tableau
        VARIABLES
            tab : TABLEAU[1..10] DE RÉEL
            min, max, moyen : RÉEL
            i : ENTIER
        DÉBUT
            POUR i DE 1 À 10 FAIRE
                LIRE tab[i]
            FIN POUR
            min ← tab[1]
            max ← tab[1]
            moyen ← 0
            POUR i DE 1 À 10 FAIRE
                SI tab[i] < min ALORS
                    min ← tab[i]
                FIN SI
                SI tab[i] > max ALORS
                    max ← tab[i]
                FIN SI
                moyen ← moyen + tab[i]
            FIN POUR
            moyen ← moyen / 10
            AFFICHER "Le prix minimum est de : ", min
            AFFICHER "Le prix maximum est de : ", max
            AFFICHER "Le prix moyen est de : ", moyen
        FIN
      `,
      C: `
        #include <stdio.h>

        int main() {
            float tab[10];
            float min, max, moyen;
            int i;

            for (i = 0; i < 10; i++) {        // indices 0 à 9
                printf("Saisir un prix : ");
                scanf("%f", &tab[i]);
            }

            min = tab[0];
            max = tab[0];
            moyen = 0;

            for (i = 0; i < 10; i++) {
                if (tab[i] < min) {
                    min = tab[i];
                }
                if (tab[i] > max) {
                    max = tab[i];
                }
                moyen += tab[i];
            }
            moyen /= 10;

            printf("Le prix minimum est de : %.2f\\n", min);
            printf("Le prix maximum est de : %.2f\\n", max);
            printf("Le prix moyen est de : %.2f\\n", moyen);
            return 0;
        }
      `,
      Java: `
        import java.util.Scanner;

        public class Tableau {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);
                double[] tab = new double[10];

                for (int i = 0; i < tab.length; i++) {
                    System.out.print("Saisir un prix : ");
                    tab[i] = sc.nextDouble();
                }

                double min = tab[0];
                double max = tab[0];
                double moyen = 0;

                for (int i = 0; i < tab.length; i++) {
                    if (tab[i] < min) {
                        min = tab[i];
                    }
                    if (tab[i] > max) {
                        max = tab[i];
                    }
                    moyen += tab[i];
                }
                moyen /= tab.length;

                System.out.println("Le prix minimum est de : " + min);
                System.out.println("Le prix maximum est de : " + max);
                System.out.println("Le prix moyen est de : " + moyen);
            }
        }
      `,
      JavaScript: `
        let saisie = prompt("Saisir les prix séparés par ; :");
        let tab = saisie.split(";").map(Number);    // "12;8" → [12, 8]

        let min = tab[0];
        let max = tab[0];
        let moyen = 0;

        for (let i = 0; i < tab.length; i++) {
          if (tab[i] < min) {
            min = tab[i];
          }
          if (tab[i] > max) {
            max = tab[i];
          }
          moyen += tab[i];
        }
        moyen /= tab.length;

        document.write("Le prix minimum est de : " + min + "<br>");
        document.write("Le prix maximum est de : " + max + "<br>");
        document.write("Le prix moyen est de : " + moyen);
      `,
      PHP: `
        <form method="POST">
            Prix séparés par ; : <input type="text" name="tab"><br>
            <input type="submit" name="Calculer" value="Calculer">
        </form>

        <?php
        if (isset($_POST["Calculer"])) {
            $tab = array_map("floatval", explode(";", $_POST["tab"]));
            $n = count($tab);

            $min = $tab[0];
            $max = $tab[0];
            $moyen = 0;

            for ($i = 0; $i < $n; $i++) {
                if ($tab[$i] < $min) {
                    $min = $tab[$i];
                }
                if ($tab[$i] > $max) {
                    $max = $tab[$i];
                }
                $moyen += $tab[$i];
            }
            $moyen /= $n;

            printf("Le prix minimum est de : %.2f <br>", $min);
            printf("Le prix maximum est de : %.2f <br>", $max);
            printf("Le prix moyen est de : %.2f", $moyen);
        }
        ?>
      `,
    },
  },
  6: {
    numero: "06",
    nom: "Copier-coller un fichier",
    enonce:
      "Lire le nom d'un fichier source et celui d'un fichier destination, puis recopier le contenu de la source dans la destination, caractère par caractère, jusqu'à la fin du fichier. Ouvrir la source en lecture, la destination en écriture, et fermer les deux à la fin. Si la source est introuvable, le signaler et ne rien faire d'autre.",
    attendu: `
      Opération copier-coller terminée
    `,
    codes: {
      Algo: `
        ALGORITHME CopierColler
        VARIABLES
            fs, fd : FICHIER
            nomS, nomD : CHAÎNE
            car : CARACTÈRE
        DÉBUT
            LIRE nomS
            LIRE nomD
            fs ← OUVRIR(nomS, "lecture")
            SI fs = NUL ALORS
                AFFICHER "Fichier source introuvable"
            SINON
                fd ← OUVRIR(nomD, "écriture")
                TANT QUE NON FIN_FICHIER(fs) FAIRE
                    LIRE(fs, car)
                    ÉCRIRE(fd, car)
                FIN TANT QUE
                FERMER(fs)
                FERMER(fd)
                AFFICHER "Opération copier-coller terminée"
            FIN SI
        FIN
      `,
      C: `
        #include <stdio.h>

        int main() {
            FILE *fs, *fd;
            char nomS[30], nomD[30];
            int car;                          // int : doit pouvoir recevoir EOF

            printf("Nom du fichier source : ");
            scanf("%s", nomS);                // pas de & : une chaîne est déjà une adresse
            printf("Nom du fichier destination : ");
            scanf("%s", nomD);

            fs = fopen(nomS, "r");
            if (fs == NULL) {
                printf("Fichier source introuvable\\n");
                return 1;
            }
            fd = fopen(nomD, "w");

            while ((car = fgetc(fs)) != EOF) {
                fputc(car, fd);
            }

            fclose(fs);
            fclose(fd);
            printf("Operation copier-coller terminee\\n");
            return 0;
        }
      `,
      Java: `
        import java.io.FileReader;
        import java.io.FileWriter;
        import java.io.IOException;
        import java.util.Scanner;

        public class CopierColler {
            public static void main(String[] args) {
                Scanner sc = new Scanner(System.in);

                System.out.print("Nom du fichier source : ");
                String nomS = sc.nextLine();
                System.out.print("Nom du fichier destination : ");
                String nomD = sc.nextLine();

                // try (...) ferme les deux fichiers automatiquement
                try (FileReader fs = new FileReader(nomS);
                     FileWriter fd = new FileWriter(nomD)) {
                    int car;
                    while ((car = fs.read()) != -1) {    // -1 = fin du fichier
                        fd.write(car);
                    }
                    System.out.println("Opération copier-coller terminée");
                } catch (IOException e) {
                    System.out.println("Erreur de fichier : " + e.getMessage());
                }
            }
        }
      `,
      JavaScript: `
        // Le navigateur n'a pas accès au disque : ce script tourne avec Node.js
        // Lancement : node copier.js cours.txt copie.txt
        const fs = require("fs");

        let nomS = process.argv[2];
        let nomD = process.argv[3];

        if (!fs.existsSync(nomS)) {
          console.log("Fichier source introuvable");
        } else {
          let contenu = fs.readFileSync(nomS, "utf8");   // lit tout le fichier
          fs.writeFileSync(nomD, contenu);                // crée ou écrase
          console.log("Opération copier-coller terminée");
        }
      `,
      PHP: `
        <form method="POST">
            Fichier source      : <input type="text" name="nomS"><br>
            Fichier destination : <input type="text" name="nomD"><br>
            <input type="submit" name="Copier" value="Copier">
        </form>

        <?php
        if (isset($_POST["Copier"])) {
            $nomS = basename($_POST["nomS"]);    // reste dans le dossier du script
            $nomD = basename($_POST["nomD"]);

            if (!file_exists($nomS)) {
                echo "Fichier source introuvable";
            } else {
                $fs = fopen($nomS, "r");
                $fd = fopen($nomD, "w");

                while (($car = fgetc($fs)) !== false) {
                    fwrite($fd, $car);
                }

                fclose($fs);
                fclose($fd);
                echo "Opération copier-coller terminée";
            }
        }
        ?>
      `,
    },
  },
};

// Nettoie un texte écrit entre backticks (template literal).
// Pourquoi : le texte garde les sauts de ligne et l'indentation du fichier JS,
// il s'afficherait décalé dans la page.
function nettoyerTexte(texte) {
  // split("\n") : découpe le texte en tableau, une case par ligne
  const lignes = texte.split("\n");

  // shift() retire la 1re case du tableau, pop() la dernière
  // trim() enlève les espaces : une ligne "vide" devient ""
  while (lignes.length > 0 && lignes[0].trim() === "") {
    //Tnt que la 1re ligne est vide, on la supprime
    lignes.shift();
  }
  while (lignes.length > 0 && lignes[lignes.length - 1].trim() === "") {
    lignes.pop();
  }

  // On cherche le plus petit décalage parmi les lignes non vides.
  // filter() garde certaines lignes, map() transforme chaque ligne,
  // search(/\S/) donne la position du 1er caractère qui n'est pas un espace,
  // ...tableau (spread) passe chaque case comme argument à Math.min
  const indentation = Math.min(
    ...lignes
      .filter((ligne) => ligne.trim() !== "")
      .map((ligne) => ligne.search(/\S/)),
  );

  // slice(n) coupe les n premiers caractères, join("\n") recolle les lignes
  return lignes.map((ligne) => ligne.slice(indentation)).join("\n");
}

// Construit la fin d'URL, ex : "?language=C&exo=2".
// URLSearchParams s'occupe d'encoder les caractères spéciaux à notre place.
function lienExercice(langage, numero) {
  return "?" + new URLSearchParams({ language: langage, exo: numero });
}

// window.location.search = la partie de l'URL après "?"
// C'est l'URL qui mémorise le langage et l'exercice choisis :
// on peut recharger la page ou partager le lien sans rien perdre.
const params = new URLSearchParams(window.location.search);

// params.get() renvoie null si le paramètre n'existe pas.
// langages[null] vaut undefined, et !undefined vaut true : on met une valeur par défaut.
let language = params.get("language");
if (!langages[language]) {
  language = "Algo";
}

// Number() convertit le texte "2" en nombre 2 (les paramètres d'URL sont toujours du texte)
let numeroExercice = Number(params.get("exo"));
if (!exercices[numeroExercice]) {
  numeroExercice = 1;
}

const exerciceSelectionne = exercices[numeroExercice];

// querySelector() trouve le 1er élément qui correspond au sélecteur CSS.
// textContent (et pas innerHTML) : le code PHP contient des balises <form>,
// textContent les affiche comme du texte au lieu de les interpréter.
document.querySelector(".num-exo").textContent =
  "Ex" + exerciceSelectionne.numero;
document.querySelector(".nom-exo").textContent = exerciceSelectionne.nom;
// innerHTML (et non textContent) : l'énoncé contient des balises <code> à interpréter.
// Sans risque ici, le texte vient de nos données et pas de l'utilisateur.
document.querySelector(".desc-exo").innerHTML = exerciceSelectionne.enonce;
document.querySelector(".exo-attendu .attendu-exo").textContent = nettoyerTexte(
  exerciceSelectionne.attendu,
);
document.querySelector(".exo-code-header p").textContent =
  "Ex" + exerciceSelectionne.numero + "." + langages[language].extension;

// Le code va dans <pre><code> : <pre> garde les espaces, <code> reçoit les couleurs
const blocCode = document.querySelector(".exo-code-content code");
blocCode.textContent = nettoyerTexte(exerciceSelectionne.codes[language]);

// Coloration du code avec highlight.js (chargé dans le HTML avant ce fichier).
// typeof évite une erreur si la librairie n'a pas pu se charger (pas d'internet) :
// le code s'affiche alors simplement sans couleurs.
if (typeof hljs !== "undefined") {
  // highlight.js ne connaît pas notre pseudo-code : on lui décrit ses mots-clés
  hljs.registerLanguage("algo", () => ({
    // $pattern : ce qui forme un mot. [A-Za-zÀ-ÿ] inclut les accents (DÉBUT, RÉEL),
    // le _ permet de reconnaître FIN_FICHIER comme un seul mot
    keywords: {
      $pattern: /[A-Za-zÀ-ÿ_]+/,
      keyword:
        "ALGORITHME PROCÉDURE VARIABLES DÉBUT FIN SI ALORS SINON POUR DE À FAIRE TANT QUE NON MOD NUL",
      built_in: "LIRE AFFICHER OUVRIR FERMER ÉCRIRE FIN_FICHIER",
      type: "ENTIER RÉEL TABLEAU FICHIER CHAÎNE CARACTÈRE",
    },
    // Modes tout prêts de highlight.js pour colorer les "textes" et les nombres
    contains: [hljs.QUOTE_STRING_MODE, hljs.NUMBER_MODE],
  }));

  // La classe "language-xxx" indique à highlight.js quel langage colorer
  blocCode.className = "language-" + langages[language].coloration;
  // highlightElement() découpe le code en <span> avec des classes (hljs-keyword...)
  // que le thème CSS colore
  hljs.highlightElement(blocCode);
}

// Bouton "Executer".
// on simule l'exécution en affichant le résultat attendu dans "Sortie".
const boutonExecuter = document.querySelector(".exo-code-button");
const sortie = document.querySelector(".exo-code-sortie-content");

// Avant le clic, la sortie invite à exécuter le code
sortie.textContent = "Cliquez sur Executer pour lancer le programme";

// addEventListener("click", fonction) : la fonction est appelée à chaque clic.
// () => { ... } est une fonction fléchée, une écriture courte de function() { ... }
boutonExecuter.addEventListener("click", () => {
  sortie.textContent = nettoyerTexte(exerciceSelectionne.attendu);
});

// Boutons de langage.
// querySelectorAll() renvoie TOUS les éléments trouvés, forEach() les parcourt un par un.
document.querySelectorAll(".language-button").forEach((bouton) => {
  // dataset.language lit l'attribut HTML data-language="..." du bouton
  if (bouton.dataset.language === language) {
    // classList.add() ajoute une classe CSS : ici pour colorer le bouton actif
    bouton.classList.add("language-button-active");
  }

  // Au clic on change l'URL : le navigateur recharge la page avec le nouveau langage,
  // et on garde le même numéro d'exercice
  bouton.addEventListener("click", () => {
    window.location.search = lienExercice(
      bouton.dataset.language,
      numeroExercice,
    );
  });
});

// Liste des exercices, générée à partir de l'objet exercices.
// Pourquoi : ajouter un exercice dans les données suffit, pas besoin de toucher au HTML.
const listeExercices = document.querySelector(".list-exercices");

// for...in parcourt les clés d'un objet : ici "1", "2", "3"...
for (const numero in exercices) {
  const exercice = exercices[numero];
  // Object.keys() donne la liste des clés de codes ; - 1 car l'algo n'est pas un langage
  const nbLangages = Object.keys(exercice.codes).length - 1;

  // createElement() crée une balise en mémoire, pas encore visible dans la page.
  // On utilise un lien <a> : clic, clic molette et clavier fonctionnent tout seuls.
  const lien = document.createElement("a");
  lien.className = "list-exercices-item";
  lien.href = lienExercice(language, numero);

  // numero est du texte (clé d'objet), numeroExercice un nombre : on convertit avant de comparer
  if (Number(numero) === numeroExercice) {
    lien.classList.add("list-exercices-item-active");
  }

  lien.innerHTML = `
    <div>
      <p class="num-exo-list">Ex${exercice.numero}</p>
      <p class="nom-exo-list">${exercice.nom}</p>
    </div>
    <p>${nbLangages} langages</p>
  `;

  // appendChild() place l'élément dans la page : le lien dans le <li>, le <li> dans la liste
  const item = document.createElement("li");
  item.appendChild(lien);
  listeExercices.appendChild(item);
}
