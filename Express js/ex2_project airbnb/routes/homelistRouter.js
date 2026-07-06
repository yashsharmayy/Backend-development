const express = require("express");
const path = require("path");
const { title } = require("process");

const homelistRouter = express.Router();

const homedetails = [];

homelistRouter.get("/homeForm", (req, res, next) => {
  res.render("homeForm", {
    title: "home registration form",
  });
});
homelistRouter.post("/homeCard", (req, res) => {
  console.log("Home registration successfuly", req.body);

  homedetails.push(req.body);
  res.render("homeCard", {
    title: "home details",
    homes: homedetails,
  });
});

exports.homelistRouter = homelistRouter;
