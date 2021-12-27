const BaseError = require("./BaseError");
const httpStatusCode = require("../http-status-code");

class ApplicationError extends BaseError {
    constructor(message) {
        super(message);
        this.name = "ApplicationError";
    }
    get statusCode() {
        return httpStatusCode.INTERNAL_SERVER_ERROR;
    }
}

module.exports = ApplicationError;
