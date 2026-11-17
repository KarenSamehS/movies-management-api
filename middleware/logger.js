const fs = require("fs");
const path = require("path");

const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${req.method} ${req.originalUrl}\n`;

    const logFilePath = path.join(__dirname, "../log.txt");

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });

    next();
};

module.exports = logRequest;