//404

const Fav = require("../models/favourites");
const Home = require("../models/home");
const { registrationForm } = require("./host");

exports.getHomepage = (req, res, next) => {
  Home.fetchAll().then(([registrationForm]) => {
    res.render("store/HomePage", {
      registrationForm: registrationForm,
      title: "airbnb home",
    });
  });
};
exports.getFavpage = (req, res) => {
  Fav.fetchAll((homes) => {
    res.render("store/favourite-list", {
      title: "Favourite List",
      homes: homes,
    });
  });
};

exports.postFavpage = (req, res) => {
  const homeId = req.body.id;

  Home.findById(homeId, (home) => {
    if (!home) {
      return res.redirect("/homeList/homeCard");
    }

    const fav = new Fav(
      home.ownerName,
      home.homeName,
      home.price,
      home.rating,
      home.location,
      home.photo,
    );

    fav.id = home.id;

    fav.save();

    res.redirect("/homeList/favourite-list");
  });
};

exports.postremoveFavpage = (req, res) => {
  const homeId = req.params.homeId;
  Fav.deleteById(homeId, (err) => {
    if (err) {
      console.log("error in remove fav");
    }
    res.redirect("/homeList/favourite-list");
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
exports.getHomedetails = (req, res) => {
  const homeId = req.params.homeId;
  console.log("at home details page", homeId);
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/homes");
    } else {
      console.log("home details", home);
      res.render("store/home-details", {
        title: "home view",
        home: home,
      });
    }
  });
};
exports.getStoreRouter = (req, res, next) => {
  res.render("store/homeForm", {
    title: "home registration form",
  });
};
exports.postStoreRouter = (req, res) => {
  const { ownerName, homeName, price, rating, location, photo } = req.body;
  const home = new Home(ownerName, homeName, price, rating, location, photo);
  home.save(() => {
    res.redirect("/homeList/homeCard");
  });
};
exports.getStoreRouternav = (req, res) => {
  Home.fetchAll().then(([homes]) => {
    res.render("store/homeCard", {
      title: "home details",
      homes: homes,
    });
  });
};
