//external module
const express = require("express");
// core module
const path = require("path");
//local module
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const { registrationForm } = require("../routes/hostRouter");
const { title } = require("process");

userRouter.get("/", (req, res, next) => {
  // old routing
  //   res.sendFile(path.join(__dirname, "../", "pages", "Home.html"));
  // new routing
  // res.sendFile(path.join(rootDir, "pages", "Home.html"));

  //using ejs
  res.render("Home", {
    registrationForm: registrationForm,
    title: "airbnb home",
  });
});

module.exports = userRouter;
