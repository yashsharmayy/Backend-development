require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");
const artistRouter = require("./routes/artistRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/music", artistRouter);

connectDB();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
