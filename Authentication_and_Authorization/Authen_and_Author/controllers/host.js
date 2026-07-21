//404

const Home = require("../models/home");

exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {
    title: "page 404",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

//home

const registrationForm = [];

exports.getAddhomepage = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "pages", "addHome.html"));
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));
  res.render("host/addHome", {
    title: "registration form",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddhomepage = (req, res, next) => {
  console.log("Home registration successfuly", req.body, req.body.name);
  registrationForm.push({ userName: req.body.name });

  // res.sendFile(path.join(__dirname, "../", "pages", "success.html"));
  // res.sendFile(path.join(rootDir, "views", "success.html"));
  res.render("host/success", {
    title: "success msg",
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

//homeList router

exports.AdminHomeListrouter = (req, res) => {
  // const { ownerName, homeName, price, rating, location, photo } = req.body;
  // const home = new Home(ownerName, homeName, price, rating, location, photo);
  // home.save();
  Home.find().then((homes) => {
    res.render("host/admin-home-list", {
      title: "Admin home details",
      homes: homes,
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
//

exports.geteditpage = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found");
      return res.redirect("/host/admin-home-list");
    }
    res.render("host/edit-home", {
      home: home,
      title: "Edit home",
      editing: editing,
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
exports.posteditpage = (req, res, next) => {
  const id = req.params.homeId;

  Home.findById(id)
    .then((home) => {
      home.ownerName = req.body.ownerName;
      home.homeName = req.body.homeName;
      home.price = req.body.price;
      home.rating = req.body.rating;
      home.location = req.body.location;
      home.photo = req.body.photo;
      home.description = req.body.description;

      return home.save();
    })
    .then(() => {
      res.redirect("/host/admin-home-list");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postdeletepage = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId, "deleted");
  Home.findByIdAndDelete(homeId)
    .then((homes) => {
      res.redirect("/host/admin-home-list");
    })
    .catch((error) => {
      console.log("error while deleting", error);
    });
};

exports.registrationForm = registrationForm;
