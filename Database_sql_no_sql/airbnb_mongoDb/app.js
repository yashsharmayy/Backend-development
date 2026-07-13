//core module
const path = require("path");
//External module
const express = require("express");

//local module (routes)
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const StoreRouter = require("./routes/storeRouter");
const rootDir = require("./utils/pathUtil");
const { get404 } = require("./controllers/host");
const { error } = require("console");
const { mongoConnect } = require("../airbnb_mongoDb/utils/databaseUtil");
const { callbackify } = require("util");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);
app.use("/homeList", StoreRouter);

app.use(get404);
const PORT = 3001;
mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
  });
});
