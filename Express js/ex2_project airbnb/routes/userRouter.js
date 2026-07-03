//external module
const express = require("express");
// core module
const path = require("path");
//local module
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  // old routing
  //   res.sendFile(path.join(__dirname, "../", "pages", "Home.html"));
  // new routing
  res.sendFile(path.join(rootDir, "pages", "Home.html"));
});

module.exports = userRouter;
