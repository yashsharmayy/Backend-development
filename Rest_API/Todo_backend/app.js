const express = require("express");

const todoItemRouter = require("./routes/todorouter");
const errorController = require("./controler/error");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/api/todo", todoItemRouter);

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
