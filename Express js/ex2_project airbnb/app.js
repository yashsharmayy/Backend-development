//core module
const path = require("path");
//External module
const express = require("express");

//local module (routes)
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {
    title: "page 404",
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
