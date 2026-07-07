//404

const Home = require("../models/home");

exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {
    title: "page 404",
  });
};

//home

exports.getHomepage = (req, res, next) => {
  // old routing
  //   res.sendFile(path.join(__dirname, "../", "pages", "Home.html"));
  // new routing
  // res.sendFile(path.join(rootDir, "pages", "Home.html"));

  //using ejs
  res.render("store/HomePage", {
    registrationForm: registrationForm,
    title: "airbnb home",
  });
};

const registrationForm = [];

exports.getAddhomepage = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "pages", "addHome.html"));
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));
  res.render("host/addHome", {
    title: "registration form",
  });
};

exports.postAddhomepage = (req, res, next) => {
  console.log("Home registration successfuly", req.body, req.body.name);
  registrationForm.push({ userName: req.body.name });

  // res.sendFile(path.join(__dirname, "../", "pages", "success.html"));
  // res.sendFile(path.join(rootDir, "views", "success.html"));
  res.render("host/success", {
    title: "success msg",
  });
};

//homeList router

exports.getHomeListrouter = (req, res, next) => {
  res.render("host/homeForm", {
    title: "home registration form",
  });
};

exports.postHomeListrouter = (req, res) => {
  const { ownerName, homeName, price, rating, location, photo } = req.body;
  const home = new Home(ownerName, homeName, price, rating, location, photo);
  home.save();
  Home.fetchAll((homes) => {
    res.render("store/homeCard", {
      title: "home details",
      homes: homes,
    });
  });
};

exports.registrationForm = registrationForm;
