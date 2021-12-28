const { EventEmitter } = require("events");
const { ErrorReporting } = require("@google-cloud/error-reporting");

class ErrorAlert extends EventEmitter {
    constructor(msg, type) {
        super();
        this.message = msg;
        this.errorType = type;
    }

    notify() {
        this.addListener("error", this.sendError);
        this.emit("error");
    }
    sendError() {
        if (process.env.NODE_ENV === "production") {
            const errors = new ErrorReporting();
            errors.report(`A new ${this.errorType} : ${this.message}`);
        } else {
            console.log(`A new ${this.errorType} : ${this.message}`);
        }
    }
}

module.exports = ErrorAlert;
