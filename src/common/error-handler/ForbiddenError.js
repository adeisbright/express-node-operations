const BaseError = require("./BaseError");
const httpStatusCode = require("../http-status-code");

class ForbiddenError extends BaseError {
    constructor(message) {
        super(message);
        this.name = "ForbiddenError";
    }
    get statusCode() {
        return httpStatusCode.FORBIDDEN;
    }
}

module.exports = ForbiddenError;
