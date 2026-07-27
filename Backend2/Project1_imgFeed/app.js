require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");
const postRouter = require("./routes/postRoute");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  console.log("Content-Type:", req.headers["content-type"]);

  next();
});

app.use(postRouter);
connectDB();
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
