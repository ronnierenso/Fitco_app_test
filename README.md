# Fullstack Project

This is a fullstack project consisting of a backend and a frontend. The backend is built with [specify backend technology/framework] and the frontend is built with [specify frontend technology/framework].

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Starting the Backend](#starting-the-backend)
- [Starting the Frontend](#starting-the-frontend)

## Requirements

Make sure you have the following requirements installed on your machine:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Specify other requirements if necessary]

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies for the backend:

    ```sh
    cd backend
    npm install
    # or if you use yarn
    yarn install
    ```

3. Install dependencies for the frontend:

    ```sh
    cd ../frontend
    npm install
    # or if you use yarn
    yarn install
    ```
4. Install or run docker compose:

    ```sh
    cd ..
    docker compose  up -d
    ```

5. Rename .env.template to .env and set environment variables in frontend and backend


## Starting the Backend

To start the backend server, follow these steps:

1. Navigate to the backend directory:

    ```sh
    cd backend
    ```

2. Start the dev server:

    ```sh
    npm run start:dev
    # or if you use yarn
    yarn run start:dev
    ```

The backend server should be running on `http://localhost:3000` or the port specified in your configuration.

## Starting the Frontend

To start the frontend application, follow these steps:

1. Navigate to the frontend directory:

    ```sh
    cd frontend
    ```

2. Start the application:

    ```sh
    npm run dev
    # or if you use yarn
    yarn run dev
    ```

The frontend application should be running on `http://localhost:3001` or the port specified in your configuration.


