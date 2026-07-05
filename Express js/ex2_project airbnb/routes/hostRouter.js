//Core module
const path = require("path");

//external module
const express = require("express");

//local module
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "pages", "addHome.html"));
  res.sendFile(path.join(rootDir, "pages", "addHome.html"));
});

const registrationForm = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home registration successfuly", req.body, req.body.name);
  registrationForm.push({ userName: req.body.name });

  // res.sendFile(path.join(__dirname, "../", "pages", "success.html"));
  res.sendFile(path.join(rootDir, "pages", "success.html"));
});

exports.hostRouter = hostRouter;
exports.registrationForm = registrationForm;
