//404

const Home = require("../models/home");

exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {
    title: "page 404",
  });
};

//home

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

exports.AdminHomeListrouter = (req, res) => {
  // const { ownerName, homeName, price, rating, location, photo } = req.body;
  // const home = new Home(ownerName, homeName, price, rating, location, photo);
  // home.save();
  Home.fetchAll().then(([homes]) => {
    res.render("host/admin-home-list", {
      title: "Admin home details",
      homes: homes,
    });
  });
};
//

exports.geteditpage = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      return res.redirect("/host/admin-home-list");
    }
    res.render("host/edit-home", {
      home: home,
      title: "Edit home",
      editing: editing,
    });
  });
};
exports.posteditpage = (req, res, next) => {
  const { id, ownerName, homeName, price, rating, location, photo } = req.body;
  const home = new Home(ownerName, homeName, price, rating, location, photo);
  home.id = id;
  home.save();
  res.redirect("/host/admin-home-list");
};

exports.postdeletepage = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId, "deleted");
  Home.deleteById(homeId, (err) => {
    if (err) {
      console.log("deleting error", err);
    }
    res.redirect("/host/admin-home-list");
  });
};

exports.registrationForm = registrationForm;
