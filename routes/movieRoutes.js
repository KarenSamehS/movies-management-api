const express = require("express");
const router = express.Router();
const validateMovie = require("../middleware/validateMovie");

const movieController = require("../controllers/movieController");

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies
 *     description: Retrieve all movies, with optional search and filtering.
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Search movies by name
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *         description: Filter movies by release year
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter movies by category
 *     responses:
 *       200:
 *         description: List of movies retrieved successfully
 *       500:
 *         description: Server error
 */

router.get("/", movieController.getAllMovies);
/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Movie ID
 *     responses:
 *       200:
 *         description: Movie retrieved successfully
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Server error
 */
router.get("/:id", movieController.getMovieById);
/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - year
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 example: Interstellar
 *               image_url:
 *                 type: string
 *                 example: https://example.com/movie.jpg
 *               description:
 *                 type: string
 *                 example: A science fiction movie
 *               year:
 *                 type: integer
 *                 example: 2014
 *               category:
 *                 type: string
 *                 example: Sci-Fi
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Invalid movie data
 *       500:
 *         description: Server error
 */
router.post("/", validateMovie, movieController.createMovie);
/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Update an existing movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Movie ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - year
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 example: Interstellar Updated
 *               image_url:
 *                 type: string
 *                 example: https://example.com/movie.jpg
 *               description:
 *                 type: string
 *                 example: Updated movie description
 *               year:
 *                 type: integer
 *                 example: 2014
 *               category:
 *                 type: string
 *                 example: Adventure
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       400:
 *         description: Invalid movie data
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Server error
 */
router.put("/:id", validateMovie, movieController.updateMovie);
/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Movie ID
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", movieController.deleteMovie);

module.exports = router;