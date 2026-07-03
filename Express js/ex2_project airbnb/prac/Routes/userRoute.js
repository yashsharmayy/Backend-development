const express = require("express");

//local module
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  console.log("middleware 4", req.url, req.method);
  res.send(`<h1>HOME PAGE </h1>
    <a href="/contact_us"><h1> Contact form </h1> </a>
    `);
});
module.exports = userRouter;
