require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");
const postRouter = require("./routes/postRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(postRouter);

connectDB();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
