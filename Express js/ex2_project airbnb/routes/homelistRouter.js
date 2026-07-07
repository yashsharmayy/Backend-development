const express = require("express");
const path = require("path");
const { title } = require("process");
const controller = require("../controllers/Home");

const homelistRouter = express.Router();

homelistRouter.get("/homeForm", controller.getHomeListrouter);
homelistRouter.post("/homeCard", controller.postHomeListrouter);

exports.homelistRouter = homelistRouter;
