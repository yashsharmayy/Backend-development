//external module
const express = require("express");
// core module
const path = require("path");
//local module
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const storeController = require("../controllers/store");

userRouter.get("/", storeController.getHomepage);

module.exports = userRouter;
