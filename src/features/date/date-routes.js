const express = require("express");
const { computeDate } = require("./date-controller");
const { authenticateRequest } = require("../../middleware");
const dateRouter = express.Router();

dateRouter.post("/get-tomorrow", authenticateRequest, computeDate);

module.exports = dateRouter;
