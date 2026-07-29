require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);

connectDB();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
