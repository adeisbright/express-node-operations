const BaseError = require("./BaseError");
const httpStatusCode = require("../http-status-code");

class NotAuthorizeError extends BaseError {
  constructor(message) {
    super(message);
    this.name = "NotAuthorizeError";
  }
  get statusCode() {
    return httpStatusCode.UNAUTHORIZED;
  }
}

module.exports = NotAuthorizeError;
