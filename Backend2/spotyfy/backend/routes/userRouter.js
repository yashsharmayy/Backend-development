const express = require("express");

const userController = require("../controller/userController");
const userRouter = express.Router();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.LoginUser);

module.exports = userRouter;
