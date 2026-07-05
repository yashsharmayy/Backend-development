//Core module
const path = require("path");

//external module
const express = require("express");

//local module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "pages", "addHome.html"));
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));
  res.render("addHome", {
    title: "registration form",
  });
});

const registrationForm = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home registration successfuly", req.body, req.body.name);
  registrationForm.push({ userName: req.body.name });

  // res.sendFile(path.join(__dirname, "../", "pages", "success.html"));
  // res.sendFile(path.join(rootDir, "views", "success.html"));
  res.render("success", {
    title: "success msg",
  });
});

exports.hostRouter = hostRouter;
exports.registrationForm = registrationForm;
