const express = require("express");
const path = require("path");

//local module
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "Pages", "home.html"));
});
module.exports = userRouter;
