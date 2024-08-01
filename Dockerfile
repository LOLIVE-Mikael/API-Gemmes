# Utiliser une image Node.js officielle comme image de base
FROM node:14

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances (package.json et package-lock.json)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY ./app /app

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
