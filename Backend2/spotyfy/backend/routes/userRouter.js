const express = require("express");

const userController = require("../controller/userController");
const authMiddleware = require("../middleware/auth.middelware");
const userRouter = express.Router();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.LoginUser);
userRouter.post("/logout", userController.Logoutuser);
userRouter.get("/check", authMiddleware.authUser, (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
