const BaseError = require("./BaseError");
const httpStatusCode = require("../http-status-code");

class NotFoundError extends BaseError {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
        this.operational = true;
        this.priority = "Medium";
    }
    get statusCode() {
        return httpStatusCode.NOT_FOUND;
    }
}

module.exports = NotFoundError;
