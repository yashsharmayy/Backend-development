// core module
// const http = require("http");
// local module
const userHandler = require("./user");
// External module
const express = require("express");

const app = express();
app.use("/", (req, res, next) => {
  console.log("1st middleware", req.url, req.method);
  res.send(`<h1>Welcome to my hero route</h1>
    <a href="/submit" ><h2>Click here for submit</h2></a>
    `);
  next();
});
app.use("/", (req, res, next) => {
  console.log("1st middleware", req.url, req.method);
  // res.send(`<h1>Welcome to my hero 2 route</h1>
  //   <a href="/submit" ><h2>Click here for submit</h2></a>
  //   `); // could not send request with same route again give an error
  // but can send middleware
  next();
});
app.use("/submit", (req, res, next) => {
  console.log("2st middleware", req.url, req.method);
  res.send("<h1>Logged in successfuly </h1>");
});

//before express
// const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//   userHandler();
// });

// const PORT = "3001";
// server.listen(PORT, () => {
//   console.log(`server running on http://localhost:${PORT}`);
// });

// after express
const PORT = "3001";
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
