# Utiliser une image Node.js officielle comme image de base
FROM node:18

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances (package.json et package-lock.json)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers TypeScript et le code source de l'application
COPY . .


# Compiler TypeScript en JavaScript
RUN npm run build

# Exposer le port sur lequel l'application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application (assurez-vous que le fichier de sortie est dans /dist)
CMD ["node", "app/dist/app.js"]
