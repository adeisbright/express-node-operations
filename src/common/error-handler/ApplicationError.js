const BaseError = require("./BaseError");
const httpStatusCode = require("../http-status-code");

/**
 * @description Handles all error that are server releated
 */
class ApplicationError extends BaseError {
  constructor(message) {
    super(message);
    this.name = "ApplicationError";
  }
  // return the statusCode
  get statusCode() {
    return httpStatusCode.INTERNAL_SERVER_ERROR;
  }
}

module.exports = ApplicationError;
