const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/UserController");

authRouter.post("/login", authController.registerUser);
authRouter.post("/post", authController.create_post);

module.exports = authRouter;
