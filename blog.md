# Comprendre React Router : La navigation côté client rendue simple

Lorsque l’on construit une application React, la navigation entre les différentes pages est une étape incontournable. C’est ici qu’intervient **React Router**, une bibliothèque essentielle pour la gestion des routes dans les SPA (Single Page Applications).

## 1. Pourquoi React Router ?

Dans une application traditionnelle, chaque clic sur un lien déclenche un rechargement complet de la page. React, étant une bibliothèque pour le développement de SPA, cherche à éviter cela en mettant à jour uniquement les composants nécessaires sans recharger toute la page. React Router permet de :

- Naviguer entre les pages sans rechargement
- Gérer des URL dynamiques
- Créer une expérience fluide pour l’utilisateur

## 2. Installation de React Router

React Router se compose de plusieurs packages. Pour une application web classique :

```bash
npm install react-router-dom
