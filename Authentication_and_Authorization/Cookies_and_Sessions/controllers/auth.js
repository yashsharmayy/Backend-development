exports.getIndex = (req, res) => {
  res.render("store/Login", {
    title: "Airbnb Home",
  });
};
exports.postIndex = (req, res) => {
  console.log(req.body);
  req.isLoggedIn = trueres.redirect("/");
};
