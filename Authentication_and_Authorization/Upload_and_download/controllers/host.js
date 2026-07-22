const Home = require("../models/home");
const fs = require("fs");
const path = require("path");
//404
exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {
    title: "page 404",
    isLoggedIn: req.session.isLoggedIn,
    user: req.user,
  });
};

//home

const registrationForm = [];

exports.getAddhomepage = (req, res, next) => {
  res.render("host/addHome", {
    title: "registration form",
    isLoggedIn: req.session.isLoggedIn,
    user: req.user,
  });
};

exports.postAddhomepage = (req, res, next) => {
  console.log("Home registration successfuly", req.body, req.body.name);
  registrationForm.push({ userName: req.body.name });
  res.render("host/success", {
    title: "success msg",
    isLoggedIn: req.session.isLoggedIn,
    user: req.user,
  });
};

//homeList router

exports.AdminHomeListrouter = (req, res) => {
  Home.find().then((homes) => {
    res.render("host/admin-home-list", {
      title: "Admin home details",
      homes: homes,
      isLoggedIn: req.session.isLoggedIn,
      user: req.user,
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
      user: req.user,
    });
  });
};
exports.posteditpage = (req, res, next) => {
  const id = req.params.homeId;

  Home.findById(id)
    .then((home) => {
      if (!home) {
        return res.redirect("/host/admin-home-list");
      }

      home.ownerName = req.body.ownerName;
      home.homeName = req.body.homeName;
      home.price = req.body.price;
      home.rating = req.body.rating;
      home.location = req.body.location;
      home.description = req.body.description;

      // Update image only if a new one was uploaded
      if (req.file) {
        if (home.photo) {
          fs.unlink(
            path.join(__dirname, "..", "public", "uploads", home.photo),
            (err) => {
              if (err) console.log(err);
            },
          );
        }

        home.photo = req.file.filename;
      }

      return home.save();
    })
    .then(() => {
      res.redirect("/homels/homeCard");
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
