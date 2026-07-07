//external module
const express = require("express");
// core module
const path = require("path");
//local module
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const controller = require("../controllers/Home");

userRouter.get("/", controller.getHomepage);

module.exports = userRouter;
