const {
    ErrorAlert,
    BaseError,
    consoleLogger,
    fileLogger,
} = require("../common");

const errorHandler = (err, req, res, next) => {
    let errorAlert = new ErrorAlert(err.message, err.name);
    errorAlert.notify();
    const errorMessage = `${req.ip} : ${req.method} ${req.url} ${err.statusCode} :${err.name} ${err.message} `;

    fileLogger.log({
        message: errorMessage,
        level: "error",
    });

    res.status(err.statusCode).json({ message: err.message });
};

module.exports = errorHandler;
