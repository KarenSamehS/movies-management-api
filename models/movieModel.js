const db = require("../config/db");

const getAllMovies = (filters, callback) => {
    let sql = "SELECT * FROM movies WHERE 1=1";
    const values = [];

    if (filters.name) {
        sql += " AND name LIKE ?";
        values.push(`%${filters.name}%`);
    }

    if (filters.year) {
        sql += " AND year = ?";
        values.push(filters.year);
    }

    if (filters.category) {
        sql += " AND category = ?";
        values.push(filters.category);
    }

    db.query(sql, values, callback);
};

module.exports = {
    getAllMovies
};
const getMovieById = (id, callback) => {
    const sql = "SELECT * FROM movies WHERE id = ?";
    db.query(sql, [id], callback);
};
const createMovie = (movie, callback) => {
    const sql = `
        INSERT INTO movies (name, image_url, description, year, category)
        VALUES (?, ?, ?, ?, ?)
    `;

    const values = [
        movie.name,
        movie.image_url,
        movie.description,
        movie.year,
        movie.category
    ];

    db.query(sql, values, callback);
};
const updateMovie = (id, movie, callback) => {
    const sql = `
        UPDATE movies
        SET name = ?, image_url = ?, description = ?, year = ?, category = ?
        WHERE id = ?
    `;

    const values = [
        movie.name,
        movie.image_url,
        movie.description,
        movie.year,
        movie.category,
        id
    ];

    db.query(sql, values, callback);
};
const deleteMovie = (id, callback) => {
    const sql = "DELETE FROM movies WHERE id = ?";
    db.query(sql, [id], callback);
};
module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};