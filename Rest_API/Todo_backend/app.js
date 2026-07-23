const express = require("express");

const todoItemRouter = require("./routes/todorouter");
const errorController = require("./controler/error");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const DB_PATH =
  "mongodb://yashsharmayy:yashsharmayy@ac-adtdode-shard-00-00.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-01.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-02.eyklnrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0f7ai-shard-0&authSource=admin&appName=learner";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/todo", todoItemRouter);
app.get("/", (req, res) => {
  res.send("Backend is working");
});
const PORT = 5999;

mongoose
  .connect(DB_PATH)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
