require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const authRouter = require("./routes/authRouter");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

connectDB();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
