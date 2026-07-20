//core module
const path = require("path");
//External module
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const DB_path =
  "mongodb://yashsharmayy:yashsharmayy@ac-adtdode-shard-00-00.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-01.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-02.eyklnrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0f7ai-shard-0&authSource=admin&appName=learner";

//local module (routes)
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const StoreRouter = require("./routes/storeRouter");
const AuthRouter = require("./routes/AuthRouter");
const rootDir = require("./utils/pathUtil");
const { get404 } = require("./controllers/host");
const { error } = require("console");
const { callbackify } = require("util");
const FavRouter = require("./routes/FavRouter");
const { default: mongoose } = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const store = new MongoDBStore({
  uri: DB_path,
  collection: "sessions",
});
app.use(express.urlencoded());
app.use(
  session({
    secret: "yashsharmayy",
    resave: false,
    saveUninitialized: true,
    store,
  }),
);

// app.use((req, res, next) => {
//   const cookie = req.get("cookie");

//   if (cookie) {
//     req.isLoggedIn = cookie.split("=")[1] === "true";
//   } else {
//     req.isLoggedIn = false;
//   }

//   // Make it available in all EJS files
//   res.locals.isLoggedIn = req.isLoggedIn;

//   next();
// });

app.use(userRouter);
app.use("/host", (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/homeList", StoreRouter);
app.use("/homeList", FavRouter);
app.use(AuthRouter);

app.use(get404);

const PORT = 3001;

mongoose
  .connect(DB_path)
  .then(() => {
    console.log();

    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to Mongo", err);
  });
