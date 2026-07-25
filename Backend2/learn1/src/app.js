const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is my 1st program");
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
