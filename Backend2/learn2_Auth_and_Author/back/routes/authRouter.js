const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/UserController");

authRouter.post("/", authController.registerUser);

module.exports = authRouter;
