const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const app = express();
const logRequest = require("./middleware/logger");
app.use(logRequest);
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/api/movies", movieRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.send("Movies Management API is running!");
});

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});


module.exports = app;
