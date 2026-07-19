exports.getLogin = (req, res) => {
  res.render("store/Login", {
    title: "Airbnb Home",
    isLoggedIn: req.isLoggedIn,
  });
};
exports.postlogin = (req, res) => {
  console.log(req.body);
  res.cookie("isLoggedIn", true);
  // req.isLoggedIn = true;
  res.redirect("/");
};
exports.postlogout = (req, res) => {
  console.log(req.body);
  res.cookie("isLoggedIn", false);
  // req.isLoggedIn = true;
  res.redirect("/login");
};
