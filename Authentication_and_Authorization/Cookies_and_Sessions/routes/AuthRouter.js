const express = require("express");
const path = require("path");
const authController = require("../controllers/auth");

const AuthRouter = express.Router();

AuthRouter.get("/login", authController.getIndex);

module.exports = AuthRouter;
