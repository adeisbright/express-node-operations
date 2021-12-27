const { ErrorAlert, BaseError } = require("../common");

const errorHandler = (err, req, res, next) => {
    let errorAlert = new ErrorAlert(err.message, err.name);
    errorAlert.notify();

    res.status(err.statusCode).json({ message: err.message });
};

module.exports = errorHandler;
