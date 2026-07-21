//404

const Home = require("../models/home");
const { registrationForm } = require("./host");

exports.getHomepage = (req, res, next) => {
  Home.find().then((registrationForm) => {
    res.render("store/HomePage", {
      registrationForm,
      title: "airbnb home",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getBookpage = (req, res) => {
  res.render("store/booking", {
    title: "Bookings",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};
exports.getReservepage = (req, res) => {
  res.render("store/reserve", {
    title: "Reserve",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};
exports.getHomedetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("at home details page", homeId);
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/homes");
    } else {
      console.log("home details", home);
      res.render("store/home-details", {
        title: "home view",
        home: home,
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      });
    }
  });
};
exports.getStoreRouter = (req, res, next) => {
  res.render("store/homeForm", {
    title: "home registration form",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};
exports.postStoreRouter = (req, res) => {
  const { ownerName, homeName, price, rating, location, photo, description } =
    req.body;

  const home = new Home({
    ownerName,
    homeName,
    price,
    rating,
    location,
    photo,
    description,
  });
  home
    .save()
    .then(() => {
      res.redirect("/homeList/homeCard");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getStoreRouternav = (req, res) => {
  Home.find().then((homes) => {
    res.render("store/homeCard", {
      title: "home details",
      homes: homes,
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
