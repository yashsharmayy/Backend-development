exports.getLogin = (req, res) => {
  res.render("store/Login", {
    title: "Airbnb Home",
    isLoggedIn: req.session.isLoggedIn,
  });
};
exports.postlogin = (req, res) => {
  console.log(req.body);
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  // req.isLoggedIn = true;
  res.redirect("/");
};
exports.postlogout = (req, res) => {
  // console.log(req.body);
  // req.isLoggedIn = true;
  res.cookie("isLoggedIn", false);
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.send("Error while logging out");
    }
  });

  res.redirect("/login");
};
