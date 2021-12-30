const winston = require("winston");
const { LoggingWinston } = require("@google-cloud/logging-winston");
const path = require("path");

const { combine, timestamp, prettyPrint } = winston.format;
const errorFile = path.join("./", "/logs/error.log");
const infoFile = path.join("./", "/logs/info.log");

const loggingWinston = new LoggingWinston();

const fileLogger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), prettyPrint()),
    transports: [
        new winston.transports.File({ filename: errorFile, level: "info" }),
    ],
    exitOnError: false,
    colorize: true,
});

const consoleLogger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
            level: "info",
        }),
    ],
    exitOnError: false,
});

const streamLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: infoFile,
            level: "info",
            colorize: true,
            json: false,
        }),
    ],
});

streamLogger.stream = {
    write: (message, encoding) => streamLogger.info(message),
};

const googleCloudLogger = winston.createLogger({
    level: "info",
    transports: [loggingWinston],
});

module.exports = {
    fileLogger,
    consoleLogger,
    streamLogger,
    googleCloudLogger,
};
