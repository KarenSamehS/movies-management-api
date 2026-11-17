const app = require("./app");

const PORT = 3000;
const db = require("./config/db");

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }

    console.log("Connected to MySQL successfully!");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


