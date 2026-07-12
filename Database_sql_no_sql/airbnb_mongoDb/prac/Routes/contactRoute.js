// external module
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const hostRouter = express.Router();

hostRouter.get("/contact_us", (req, res, next) => {
  console.log(res.body);

  res.sendFile(path.join(__dirname, "../", "Pages", "Contactform.html"));
});

hostRouter.post("/contact_us", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "Pages", "success.html"));
});
module.exports = hostRouter;
