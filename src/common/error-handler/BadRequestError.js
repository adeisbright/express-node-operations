const BaseError = require("./BaseError");
const httpStatusCode = require("../http-status-code");

class BadRequestError extends BaseError {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
  }
  get statusCode() {
    return httpStatusCode.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
