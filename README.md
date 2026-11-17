# Movies Management API

A RESTful API built with Node.js, Express.js, and MySQL for managing movie records.

## Features

- Create, read, update, and delete movies.
- Search movies by name.
- Filter movies by year and category.
- Request logging middleware.
- Input validation and error handling.
- Interactive API documentation using Swagger.

## Technologies Used

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv
- swagger-jsdoc
- swagger-ui-express

## Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd movies-management
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Database Setup

1. Open MySQL Workbench.
2. Create the database:

   ```sql
   CREATE DATABASE movies_management;
   ```

3. Create the movies table:

   ```sql
   USE movies_management;

   CREATE TABLE movies (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       image_url VARCHAR(500),
       description TEXT,
       year INT NOT NULL,
       category VARCHAR(100) NOT NULL
   );
   ```

## Environment Variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=movies_management
DB_PORT=3306
```

Replace `your_mysql_password` with your own MySQL password.

**Note:** Never commit your `.env` file to GitHub.

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/movies` | Retrieve all movies |
| GET | `/api/movies/:id` | Retrieve a movie by ID |
| POST | `/api/movies` | Create a new movie |
| PUT | `/api/movies/:id` | Update a movie |
| DELETE | `/api/movies/:id` | Delete a movie |

### Search and Filtering

The GET all movies endpoint supports optional query parameters:

| Parameter | Description | Example |
|---|---|---|
| name | Search by movie name | `?name=Interstellar` |
| year | Filter by release year | `?year=2014` |
| category | Filter by category | `?category=Sci-Fi` |

You can combine filters:

`GET /api/movies?year=2014&category=Sci-Fi`

### Example Request — Create a Movie

**POST** `/api/movies`

```json
{
    "name": "Interstellar",
    "image_url": "https://example.com/interstellar.jpg",
    "description": "A science fiction movie.",
    "year": 2014,
    "category": "Sci-Fi"
}
```

## API Documentation

Interactive Swagger documentation is available at:

`http://localhost:3000/api-docs`

## Database Schema

The database schema diagram is available in `database-schema.png`.

## Running the Application

1. Make sure MySQL is running.
2. Make sure your database and `.env` file are configured.
3. Start the development server:

   ```bash
   npm run dev
   ```

4. The API will be available at:

   `http://localhost:3000`

5. Open Swagger documentation:

   `http://localhost:3000/api-docs`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the server using Nodemon |
| `npm start` | Start the server normally |

## Request Logging

All incoming HTTP requests are recorded in `log.txt`.

Each entry contains a timestamp, HTTP method, and requested URL.

## Error Responses

The API uses appropriate HTTP status codes:

- `200` — Successful request.
- `201` — Resource created.
- `400` — Invalid request data.
- `404` — Resource or route not found.
- `500` — Internal server error.