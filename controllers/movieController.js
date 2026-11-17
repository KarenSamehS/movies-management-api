const movieModel = require("../models/movieModel");

const getAllMovies = (req, res) => {
    const filters = req.query;

    movieModel.getAllMovies(filters, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Error fetching movies"
            });
        }

        res.status(200).json(results);
    });
};
const getMovieById = (req, res) => {
    const id = req.params.id;

    movieModel.getMovieById(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Error fetching movie"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json(results[0]);
    });
};

const createMovie = (req, res) => {
    const movie = req.body;

    movieModel.createMovie(movie, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error creating movie"
            });
        }

        res.status(201).json({
            message: "Movie created successfully",
            movieId: result.insertId
        });
    });
};
const updateMovie = (req, res) => {
    const id = req.params.id;
    const movie = req.body;

    movieModel.updateMovie(id, movie, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error updating movie"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie updated successfully"
        });
    });
};
const deleteMovie = (req, res) => {
    const id = req.params.id;

    movieModel.deleteMovie(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting movie"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie deleted successfully"
        });
    });
};
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie, 
    updateMovie,
    deleteMovie
};