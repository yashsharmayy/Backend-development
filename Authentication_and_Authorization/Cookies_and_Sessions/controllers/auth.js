//404

exports.getIndex = (req, res, next) => {
  res.render("store/HomePage", {
    registrationForm: registrationForm,
    title: "airbnb home",
  });
};
