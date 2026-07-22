const express = require("express");
const authController = require("../controllers/auth");
const AuthRouter = express.Router();

AuthRouter.get("/login", authController.getLogin);
AuthRouter.post("/login", authController.postlogin);
AuthRouter.post("/logout", authController.postlogout);

AuthRouter.get("/signup", authController.getsignup);
AuthRouter.post("/signup", authController.postsignup);

module.exports = AuthRouter;
