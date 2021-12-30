const express = require("express");
const {fetchDate} = require("./date-controller");
const {authenticateRequest} = require("../../middleware");
const dateRouter = express.Router();

dateRouter.get("/get-date", authenticateRequest, fetchDate);

module.exports = dateRouter;
