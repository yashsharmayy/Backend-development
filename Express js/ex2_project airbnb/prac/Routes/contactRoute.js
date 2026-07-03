// external module
const express = require("express");
const bodyParser = require("body-parser");

const hostRouter = express.Router();

hostRouter.get("/contact_us", (req, res, next) => {
  res.send(`
    <form action="/contact_us" method="POST">
      <input type="text" name="name" placeholder="Enter name"><br>
      <input type="email" name="email" placeholder="Enter email"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

hostRouter.post("/contact_us", (req, res) => {
  console.log("Handling POST request", req.url, req.method, req.body);
  res.send("<h1>Form Submitted</h1>");
});
module.exports = hostRouter;
