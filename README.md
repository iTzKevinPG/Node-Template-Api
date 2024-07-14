# 📘 Template-api

API template for managing items with multi-tenant capabilities, built using Node.js and PostgreSQL.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

What things you need to install the software and how to install them:

- node.js - Download and install from [nodejs.org](https://nodejs.org/)

- PostgreSQL - Follow the installation guide for your system

### 🔧 Installation

A step by step series of examples that tell you how to get a development env running:

1. Clone the repository:

```bash
git clone repository-url

cd mngfield-template-api
```

2. Install NPM packages:

```bash
npm install
```

3. Set up your environment variables:
Copy `.env.example` to `.env` and fill it with your database and API settings.

```json
DB_USER=
DB_HOST=
DB_DATABASE=
DB_PASSWORD=
DB_PORT=
PORT=
```

4. Run database migrations:

Use knex for managing database migrations with the following commands:

- Apply migrations:
Run all pending migrations to update your database schema:

```bash
npx knex migrate:latest
```

- Create a new migration:
To add a new migration file for changes such as creating a new table or altering an existing one:

```bash
npx knex migrate:make name_of_migration
```

- Roll back the last batch of migrations:
If you need to undo the last batch of migrations applied:

```bash
npx knex migrate:rollback
```

- Roll back all migrations:
To revert all migrations to the initial state (use with caution):

```bash
npx knex migrate:rollback --all
```

5. Start the server:


## 📁 Project Structure

```json
mngfield-template-api/
├── db/
│   ├── migrations/
│   └── create_initial_tables.js
├── src/
│   ├── api/
│   │   ├── controllers/
│   │   │   └── itemController.js
│   │   ├── middlewares/
│   │   │   ├── responseHandler.js
│   │   │   └── tenantContext.js
│   │   ├── services/
│   │   │   └── itemService.js
│   │   └── models/
│   │       └── Item.js
│   ├── config/
│   │   └── database.js
│   ├── constants/
│   │   └── errorMessages.js
│   └── routes/
│       └── itemRoutes.js
├── test/
└── app.js
```

### 🧱 Components Explanation

- **Controllers**: Handle HTTP requests and responses.
- **Middlewares**: Intercepts and processes the request before reaching the controller.
- **Services**: Contains business logic, interacts directly with models.
- **Models**: Represents data and handles database interactions.
- **Routes**: Defines API endpoints and links them to the controllers.
- **Config**: Configuration settings for the application, including database configurations.
- **Constants**: Contains constant values like error messages used across the application.
- **Migrations**: Scripts for creating and updating database tables.

## 🔧 Built With

- [Node.js](https://nodejs.org/) - The runtime environment
- [Express](https://expressjs.com/) - The web framework used
- [PostgreSQL](https://www.postgresql.org/) - The database used

## ✅ Running the Tests

Explain how to run the automated tests for this system:

```bash
npm test
```

## 🏗️ Architecture

1. Microservices Architecture

    Description: Each component of the system can be developed, deployed, and scaled independently, promoting modularity and flexibility in deployment and maintenance.

2. Modified MVC Model (Model-View-Controller)

    Description: An adaptation of the MVC pattern where models handle data logic, controllers manage user interactions and responses (views) are presented in JSON format.

3. Service Layer

    Description: Centralizes business logic, improving reusability and testability, and relieving controllers of non-essential responsibilities.

4. Middlewares

    Description: Used to intercept and process requests before they reach controllers, managing functionalities such as authentication, logging, and context configuration.

5. REST Principles

    Description: The API uses RESTful methods and principles to enhance communication, utilizing standardized HTTP methods for CRUD operations on resources.

6. Database Migrations

    Description: Management of changes and versions in the database schema using knex, allowing robust and reproducible control over migrations.

7. Dependency Management

    Description: Dependency management through npm, ensuring that all necessary libraries are properly installed and updated.

8. Separation of Concerns

    Description: Each part of the code focuses on a single responsibility, facilitating maintainability, scalability, and debugging of the software.

9. Testing and Security

    Description: The structure is prepared to integrate automated testing and security measures, crucial for developing robust and secure applications.

10. Configuration and Constants

    Description: Centralization of configuration and constant error messages, facilitating global changes and adjustments in application behavior or responses.

