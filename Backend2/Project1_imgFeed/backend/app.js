require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");
const postRouter = require("./routes/postRoute");

const app = express();

app.use(express.json());

app.use(postRouter);

connectDB();

app.listen(6000, () => {
  console.log("Server running");
});
