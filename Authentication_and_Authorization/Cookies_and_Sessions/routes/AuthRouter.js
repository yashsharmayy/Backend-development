const express = require("express");
const authController = require("../controllers/auth");

const AuthRouter = express.Router();

AuthRouter.get("/login", authController.getIndex);
AuthRouter.post("/login", authController.postIndex);

module.exports = AuthRouter;
