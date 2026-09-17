const exercices = {
  Algo: {
    0o1: {
      numero: "01",
      nom: "Surface et périmètre d'un rectangle",
      enonce:
        "Lire la longueur et la largeur d'un rectangle, calculer sa surface et son périmètre, afficher les deux résultats. Attention à convertir la saisie en nombre avant de calculer.",
      attendu: `
      La surface est de : 15
      Le périmètre est de : 16
      `,
      language: {
        code: `
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
      },
    },
    0o2: {
      numero: "02",
      nom: "Équation du premier degré",
      enonce:
        "Résoudre l'équation `a·x + b = 0`. Lire les coefficients a et b, puis afficher la solution. Gérer les deux cas particuliers : si a et b sont nuls, l'ensemble des solutions est ℝ ; si a est nul et b ne l'est pas, il est vide. Ne jamais diviser avant d'avoir testé a.",
      attendu: `
      La solution est de : 3
      `,
      language: {
        code: `
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
      },
    },
    0o3: {
      numero: "03",
      nom: "Diviseurs d'un nombre",
      enonce:
        "Lire un entier positif et afficher tous ses diviseurs. Un entier `div` divise `nb` si le reste de la division entière est nul. Aucun diviseur n'étant inférieur à 1 ni supérieur à nb, il suffit de parcourir cet intervalle.",
      attendu: `
      Les diviseurs de 6 sont : 1, 2, 3, 6
      `,
      language: {
        code: `
      ALGORITHME Diviseurs
      VARIABLES
          nb, div : ENTIER
      DÉBUT
          LIRE nb
          POUR div DE 1 À nb FAIRE
              SI nb MOD div = 0 ALORS
                  AFFICHER div
              FIN SI
          FIN POUR
      FIN
        `,
      },
    },
  },
  C: {
    0o1: {
      numero: "01",
      nom: "Surface et périmètre d'un rectangle",
      enonce:
        "Lire la longueur et la largeur d'un rectangle, calculer sa surface et son périmètre, afficher les deux résultats. Attention à convertir la saisie en nombre avant de calculer.",
      attendu: `
      La surface est de : 15
      Le périmètre est de : 16
      `,
      language: {
        code: `
      #include <stdio.h>

      int main() {
          float lg, lr, s, p;

          printf("Longueur : ");
          scanf("%f", &lg);
          printf("Largeur : ");
          scanf("%f", &lr);

          s = lg * lr;
          p = 2 * (lg + lr);

          printf("La surface est de : %.2f\n", s);
          printf("Le perimetre est de : %.2f\n", p);
          return 0;
        }
        `,
      },
    },
    0o2: {
      numero: "02",
      nom: "Équation du premier degré",
      enonce:
        "Résoudre l'équation `a·x + b = 0`. Lire les coefficients a et b, puis afficher la solution. Gérer les deux cas particuliers : si a et b sont nuls, l'ensemble des solutions est ℝ ; si a est nul et b ne l'est pas, il est vide. Ne jamais diviser avant d'avoir testé a.",
      attendu: `
      La solution est de : 3
      `,
      language: {
        code: `
      #include <stdio.h>

      int main() {
          float a, b, x;

          printf("Premier coefficient : ");
          scanf("%f", &a);
          printf("Deuxieme coefficient : ");
          scanf("%f", &b);

          if (a == 0) {
              if (b == 0) {
                  printf("L'ensemble des solutions est R\n");
              } else {
                  printf("L'ensemble des solutions est vide\n");
              }
          } else {
              x = -b / a;
              printf("La solution est de : %.2f\n", x);
          }
          return 0;
        `,
      },
    },
    0o3: {
      numero: "03",
      nom: "Diviseurs d'un nombre",
      enonce:
        "Lire un entier positif et afficher tous ses diviseurs. Un entier `div` divise `nb` si le reste de la division entière est nul. Aucun diviseur n'étant inférieur à 1 ni supérieur à nb, il suffit de parcourir cet intervalle.",
      attendu: `
      Les diviseurs de 6 sont : 1, 2, 3, 6
      `,
      language: {
        code: `
      #include <stdio.h>

      int main() {
          int nb, div;

          printf("Donner votre nombre : ");
          scanf("%d", &nb);

          for (div = 1; div <= nb; div++) {
              if (nb % div == 0) {
                  printf("Le diviseur est : %d\n", div);
              }
          }
          return 0;
        `,
      },
    },
  },
  Java: {
    0o1: {
      numero: "01",
      nom: "Surface et périmètre d'un rectangle",
      enonce:
        "Lire la longueur et la largeur d'un rectangle, calculer sa surface et son périmètre, afficher les deux résultats. Attention à convertir la saisie en nombre avant de calculer.",
      attendu: `
      La surface est de : 15
      Le périmètre est de : 16
      `,
      language: {
        code: `
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
      },
    },
    0o2: {
      numero: "02",
      nom: "Équation du premier degré",
      enonce:
        "Résoudre l'équation `a·x + b = 0`. Lire les coefficients a et b, puis afficher la solution. Gérer les deux cas particuliers : si a et b sont nuls, l'ensemble des solutions est ℝ ; si a est nul et b ne l'est pas, il est vide. Ne jamais diviser avant d'avoir testé a.",
      attendu: `
      La solution est de : 3
      `,
      language: {
        code: `
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
      },
    },
    0o3: {
      numero: "03",
      nom: "Diviseurs d'un nombre",
      enonce:
        "Lire un entier positif et afficher tous ses diviseurs. Un entier `div` divise `nb` si le reste de la division entière est nul. Aucun diviseur n'étant inférieur à 1 ni supérieur à nb, il suffit de parcourir cet intervalle.",
      attendu: `
      Les diviseurs de 6 sont : 1, 2, 3, 6
      `,
      language: {
        code: `
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
      },
    },
  },
  Javascript: {
    0o1: {
      numero: "01",
      nom: "Surface et périmètre d'un rectangle",
      enonce:
        "Lire la longueur et la largeur d'un rectangle, calculer sa surface et son périmètre, afficher les deux résultats. Attention à convertir la saisie en nombre avant de calculer.",
      attendu: `
      La surface est de : 15
      Le périmètre est de : 16
      `,
      language: {
        code: `
      let lg = parseFloat(prompt("Entrez la longueur du rectangle :"));
      let lr = parseFloat(prompt("Entrez la largeur du rectangle :"));

      let s = lg * lr;
      let p = 2 * (lg + lr);

      document.write("La surface est de : " + s + "<br>");
      document.write("Le périmètre est de : " + p);
        `,
      },
    },
    0o2: {
      numero: "02",
      nom: "Équation du premier degré",
      enonce:
        "Résoudre l'équation `a·x + b = 0`. Lire les coefficients a et b, puis afficher la solution. Gérer les deux cas particuliers : si a et b sont nuls, l'ensemble des solutions est ℝ ; si a est nul et b ne l'est pas, il est vide. Ne jamais diviser avant d'avoir testé a.",
      attendu: `
      La solution est de : 3
      `,
      language: {
        code: `
      let a = parseFloat(prompt("Entrez le premier coefficient :"));
      let b = parseFloat(prompt("Entrez le deuxième coefficient :"));

      if (a == 0) {
        if (b == 0) {
          alert("L'ensemble des solutions est R");
        } else {
          alert("L'ensemble des solutions est vide");
        }
      } else {
        let x = -b / a;
        document.write("La solution est de : " + x);
      }
        `,
      },
    },
    0o3: {
      numero: "03",
      nom: "Diviseurs d'un nombre",
      enonce:
        "Lire un entier positif et afficher tous ses diviseurs. Un entier `div` divise `nb` si le reste de la division entière est nul. Aucun diviseur n'étant inférieur à 1 ni supérieur à nb, il suffit de parcourir cet intervalle.",
      attendu: `
      Les diviseurs de 6 sont : 1, 2, 3, 6
      `,
      language: {
        code: `
      let nb = parseInt(prompt("Entrez un nombre :"));
      let tab = [];

      for (let div = 1; div <= nb; div++) {
        if (nb % div == 0) {
          tab.push(div);
        }
      }

      document.write("Les diviseurs de " + nb + " sont : " + tab.join(", "))
        `,
      },
    },
  },
  PHP: {
    0o1: {
      numero: "01",
      nom: "Surface et périmètre d'un rectangle",
      enonce:
        "Lire la longueur et la largeur d'un rectangle, calculer sa surface et son périmètre, afficher les deux résultats. Attention à convertir la saisie en nombre avant de calculer.",
      attendu: `
      La surface est de : 15
      Le périmètre est de : 16
      `,
      language: {
        code: `
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
    0o2: {
      numero: "02",
      nom: "Équation du premier degré",
      enonce:
        "Résoudre l'équation `a·x + b = 0`. Lire les coefficients a et b, puis afficher la solution. Gérer les deux cas particuliers : si a et b sont nuls, l'ensemble des solutions est ℝ ; si a est nul et b ne l'est pas, il est vide. Ne jamais diviser avant d'avoir testé a.",
      attendu: `
      La solution est de : 3
      `,
      language: {
        code: `
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
    0o3: {
      numero: "03",
      nom: "Diviseurs d'un nombre",
      enonce:
        "Lire un entier positif et afficher tous ses diviseurs. Un entier `div` divise `nb` si le reste de la division entière est nul. Aucun diviseur n'étant inférieur à 1 ni supérieur à nb, il suffit de parcourir cet intervalle.",
      attendu: `
      Les diviseurs de 6 sont : 1, 2, 3, 6
      `,
      language: {
        code: `
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
  },
};

const language = params.get("language") || "algo";
const exo = params.get("exo") || "1";
const exerciceSelectionne = exercices[language]?.[Number(exo)];
if (!exerciceSelectionne) {
  /* afficher un message ou arrêter */
}

console.log("Langage :", language);
console.log("Numéro :", numeroExercice);
console.log("Exercice :", exerciceSelectionne);

document.querySelector(".num-exo").textContent = exerciceSelectionne.numero;
document.querySelector(".nom-exo").textContent = exerciceSelectionne.nom;
document.querySelector(".desc-exo").textContent = exerciceSelectionne.enonce;
document.querySelector(".exo-attendu .attendu-exo").textContent =
  exerciceSelectionne.attendu;
document.querySelector(".exo-code-content pre").textContent =
  exerciceSelectionne.language.code;

document.querySelector(".language-button").textContent = addEventListener();
