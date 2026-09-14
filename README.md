# E5 Website

Site statique en HTML / CSS.

## Structure

```
e5-website/
├── index.html      # Page d'accueil
├── css/            # Feuilles de style
│   └── style.css
├── js/             # Scripts
│   └── script.js
├── images/         # Images, logos, favicon
├── documents/      # PDF et autres fichiers à télécharger
└── fonts/          # Polices personnalisées
```


## Lancer le site

### Option 1 : Sans Docker (développement rapide)

Ouvrir `index.html` dans un navigateur, ou utiliser l'extension **Live Server** de VS Code.

### Option 2 : Avec Docker

Le site est servi via un conteneur **nginx** léger (`nginx:alpine`), qui monte les fichiers du projet en lecture seule. Le conteneur est nommé **`e-enseignement`**.

**Prérequis :**
- [Docker](https://docs.docker.com/get-docker/) installé
- [Docker Compose](https://docs.docker.com/compose/install/) installé (généralement inclus avec Docker Desktop)

**Setup :**

```bash
git clone <url-repo>
cd e5-website
docker compose up -d
