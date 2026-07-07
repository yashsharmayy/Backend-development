//404

const Home = require("../models/home");
const { registrationForm } = require("./host");

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
exports.getFavpage = (req, res, next) => {
  res.render("store/favourite-list", {
    title: "favourite",
  });
};
exports.getBookpage = (req, res) => {
  res.render("store/booking", {
    title: "Bookinngs",
  });
};
exports.getReservepage = (req, res) => {
  res.render("store/reserve", {
    title: "Bookinngs",
  });
};
exports.getHomeListrouter = (req, res, next) => {
  res.render("store/homeForm", {
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
