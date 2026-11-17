const validateMovie = (req, res, next) => {
    const { name, year, category } = req.body;

    if (!name || !year || !category) {
        return res.status(400).json({
            message: "Name, year, and category are required"
        });
    }
if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({
        message: "Movie name must be a non-empty string"
    });
}

if (!Number.isInteger(Number(year)) || Number(year) <= 0) {
    return res.status(400).json({
        message: "Year must be a valid positive integer"
    });
}
if (Number(year) > new Date().getFullYear()) {
    return res.status(400).json({
        message: "Year cannot be in the future"
    });
}
if (typeof category !== "string" || category.trim() === "") {
    return res.status(400).json({
        message: "Category must be a non-empty string"
    });
}
    next();
};

module.exports = validateMovie;