require("dotenv").config();
const express = require("express");
const { dateRouter } = require("./features/date");
const { errorHandler } = require("./middleware");
const app = express();

app.use(express.json());
app.use("/", dateRouter);
app.use(errorHandler);

module.exports = app;
