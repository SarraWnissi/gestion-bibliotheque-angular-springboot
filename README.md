# Library Management (Angular + Spring Boot)

Application full-stack pour gérer des **catégories** et des **livres** (CRUD) avec une API Spring Boot et une interface Angular.

---

## Aperçu
- Authentification simple (front) + protection des routes avec Guard.
- Liste des catégories.
- Liste des livres par catégorie.
- Ajout et suppression de livres.

---

## Stack technique
### Backend
- Spring Boot
- Spring Data JPA / Hibernate
- REST API
- MySQL (ou autre SGBD selon ta config)

### Frontend
- Angular
- HttpClient
- Routing + Guard
- FormsModule

---

## Fonctionnalités
- Login (front) avec stockage `localStorage`
- Accès protégé: `/categories`, `/livres/:id`, `/ajout`
- CRUD Livres:
  - Lire les livres d’une catégorie
  - Ajouter un livre
  - Supprimer un livre

---

## Identifiants de connexion (démo)
> Ces identifiants sont codés en dur côté Angular (pour test).
- Username: `ali`
- Password: `admin`

---

## API (Spring Boot)
Base URL: `http://localhost:8080`

| Méthode | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | Récupérer toutes les catégories |
| GET | `/livres/{id}` | Récupérer les livres d’une catégorie |
| POST | `/addLivre` | Ajouter un livre |
| DELETE | `/deleteLivre/{id}` | Supprimer un livre |

### Exemple JSON (ajout livre)
{
"titre": "Clean Code",
"qte": 5,
"cat": { "id": 1 }
}

---

## Installation & exécution

### 1) Backend (Spring Boot)
1. Ouvrir le projet dans IntelliJ / Eclipse
2. Configurer `application.properties` (DB + port)
3. Lancer l’application Spring Boot

L’API doit répondre sur: `http://localhost:8080`

### 2) Frontend (Angular)
npm install
ng serve -o


L’app Angular tourne sur: `http://localhost:4200`

---

## Routes Angular
- `/login` : page de connexion
- `/categories` : liste des catégories (protégée)
- `/livres/:id` : livres d’une catégorie (protégée)
- `/ajout` : ajout d’un livre (protégée)













