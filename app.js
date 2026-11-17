const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Movies Management API is running!");
});
app.use("/api/movies", movieRoutes);
module.exports = app;
