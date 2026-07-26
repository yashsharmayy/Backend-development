const express = require("express");
const connectDB = require("./db/db");
const postRouter = require("./routes/postRoute");

const app = express();
app.use(express.json());

app.use(postRouter);
connectDB();
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
