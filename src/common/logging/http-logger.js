const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const { streamLogger } = require("../logging/logger");
const filePath = path.join("./", "/logs/http.log");

const logStream = fs.createWriteStream(filePath, { flags: "a" });

const customFormat = (token, req, res) => {
    return [
        token["remote-addr"](req, res),
        token.date(req, res),
        token.method(req, res),
        "HTTP/",
        token["http-version"](req, res),
        token.url(req, res),
        token.status(req, res),
        "TTM",
        token["response-time"](req, res),
        "ms",
        "TRT",
        token["total-time"](req, res),
        "ms",
        token.res(req, res, "Content-length"),
        token["user-agent"](req, res),
    ].join(" ");
};
const httpLogger = morgan(customFormat, {
    immediate: false,
    //stream: logStream,
    stream: streamLogger.stream,
});

module.exports = httpLogger;
