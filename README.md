# `pokedex-express-backend`

This project is a Pokedex-inspired API developed using Express.js, designed to provide fictional characters called "Pokeneas". Pokeneas are unique creatures from Antioquia, each with distinct attributes such as an ID, name, height, skill, image, and a phrase.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Authors](#authors)

## Installation

To get started, clone this repository and install the dependencies.

```bash
git clone git@github.com:kristianrpo/pokedex-express-backend.git
cd pokedex-express-backend
npm install
```

## Usage
To run the API, use the following command:
```bash
npm start
```
By default, the server will start on the port specified in your .env file or port 3000 if not specified.

## Endpoints
The application provides two main GET endpoints for retrieving information about Pokeneas. Each endpoint returns different data formats for a randomly selected Pokenea.

### 1. GET `/api/v1/pokenea/basic-info`

- **Description**: Returns basic information about a randomly selected Pokenea.
- **Response Format**:
  ```json
  {
    "id": 1,
    "name": "Sample Pokenea",
    "height": 1.5,
    "skill": "Sample Skill",
    "containerId": "abcd1234"
  }

### 2. GET `/api/v1/pokenea/insight`
- **Description**: Returns detailed insight information about a randomly selected Pokenea, including an image URL and a phrase.
- **Response Format**:
  ```json
  {
    "image": "www.image.com",
    "phrase": "Sample Pokenea",
    "containerId": 1.5
  }

## Project Structure
This API follows a modular architecture to separate different responsibilities and make the codebase easier to manage.
```bash
.
├── src
│   ├── controllers   # Contains controllers that handle request logic and interact with services.
│   ├── data          # Holds data files for the application, such as sample data for Pokeneas.
│   ├── presenters    # Manages presentation logic, responsible for formatting and transforming data for client responses.
│   ├── routes        # Defines the API routes, mapping endpoints to their respective controllers.
│   ├── utils         # Includes reusable utility functions that support various parts of the application.
│   ├── app.js        # Sets up and configures the Express app.
│   └── server.js     # Initializes and starts the server, setting it to listen on the defined port.
├── .env              # Environment variables file (not included in version control for security).
├── .env.example      # Template for environment variables, showing required configuration options.
├── .gitignore        # Lists files and directories to exclude from version control.
├── .prettierrc       # Configuration file for Prettier, ensuring consistent code formatting.
├── eslint.config.mjs # Configuration file for ESLint, defining linting rules for code quality.
├── package.json      # Specifies project dependencies and scripts for setup, testing, and deployment.
└── README.md         # Documentation file that explains the project, setup, and usage.

```

## Environment variables
This project uses environment variables to manage configuration. Create a .env file in the root directory based on .env.example.

## Authors
This project was developed by [Kristian Restrepo][1] and [Evelyn Zapata][2].

[1]: https://github.com/kristianrpo 
[2]: https://github.com/EvelynZapata20 