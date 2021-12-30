const {NotAuthorizeError, BadRequestError} = require("../common");

const authenticateRequest = (req, res, next) => {
  if (req.headers["api-key"]) {
    if (req.headers["api-key"] === "123") {
      next();
    } else {
      next(
          new NotAuthorizeError(
              "The Key your provide cannot authorize this request",
          ),
      );
    }
  } else {
    next(new BadRequestError("Provide your API_KEY"));
  }
};

module.exports = authenticateRequest;
