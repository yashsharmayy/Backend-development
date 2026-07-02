const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("middleware 1", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("middleware 2", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("middleware 3", req.url, req.method);
  next();
});
app.get("/", (req, res, next) => {
  console.log("middleware 4", req.url, req.method);
  res.send("<h1>HOME PAGE </h1>");
});
app.get("/contact_us", (req, res, next) => {
  console.log("middleware 5", req.url, req.method);
  res.send(`
    <form action="/contact_us" method="POST">
      <input type="text" name="name" placeholder="Enter name"><br>
      <input type="email" name="email" placeholder="Enter email"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});
app.use(bodyParser.urlencoded());

app.post("/contact_us", (req, res) => {
  console.log("Handling POST request");
  res.send("<h1>Form Submitted</h1>");
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
