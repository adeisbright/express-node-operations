const { EventEmitter } = require("events");

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
        console.log(`A new ${this.errorType} : ${this.message}`);
    }
}

module.exports = ErrorAlert;
