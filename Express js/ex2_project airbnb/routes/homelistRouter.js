const express = require("express");
const path = require("path");
const storeController = require("../controllers/store");

const homelistRouter = express.Router();

homelistRouter.get("/homeForm", storeController.getHomeListrouter);
homelistRouter.post("/homeCard", storeController.postHomeListrouter);

// exports.homelistRouter = homelistRouter;
module.exports = homelistRouter;
