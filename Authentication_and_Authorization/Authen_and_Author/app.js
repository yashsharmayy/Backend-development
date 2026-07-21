// Core modules
const path = require("path");

// External modules
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");

const User = require("./models/user");

// Local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const StoreRouter = require("./routes/storeRouter");
const AuthRouter = require("./routes/AuthRouter");
const FavRouter = require("./routes/FavRouter");
const { get404 } = require("./controllers/host");

const app = express();

const DB_PATH =
  "mongodb://yashsharmayy:yashsharmayy@ac-adtdode-shard-00-00.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-01.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-02.eyklnrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0f7ai-shard-0&authSource=admin&appName=learner";

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Session Store
const store = new MongoDBStore({
  uri: DB_PATH,
  collection: "sessions",
});

// Session
app.use(
  session({
    secret: "yashsharmayy",
    resave: false,
    saveUninitialized: false,
    store,
  }),
);

// ===== Global User Middleware =====
app.use(async (req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn || false;

  if (!req.session.user) {
    res.locals.user = null;
    return next();
  }

  try {
    const user = await User.findById(req.session.user);

    req.user = user;
    res.locals.user = user;

    console.log("Session User ID:", req.session.user);
    console.log("User From DB:", user);

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// Authentication middleware
const isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
};

// Routes
app.use(userRouter);

app.use("/host", isAuth, hostRouter);
app.use("/homeList", isAuth, StoreRouter);
app.use("/homeList", isAuth, FavRouter);

app.use(AuthRouter);

// 404
app.use(get404);

const PORT = 3001;

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
