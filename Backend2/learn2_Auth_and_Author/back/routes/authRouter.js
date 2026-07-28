const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/UserController");

authRouter.post("/login", authController.registerUser);

module.exports = authRouter;
