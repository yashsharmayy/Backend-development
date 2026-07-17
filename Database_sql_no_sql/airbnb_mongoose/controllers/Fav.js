const Favourite = require("../models/favourites");

exports.postAddToFavourite = (req, res, next) => {
  const favourite = new Favourite({
    homeId: req.body.id,
  });

  favourite
    .save()
    .then(() => {
      res.redirect("/homeList/favourites");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFavouritePage = (req, res, next) => {
  Favourite.find()
    .populate("HomeId")
    .then((homes) => {
      res.render("store/favourite-list", {
        title: "My Favourite Homes",
        homes: homes,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postRemoveFavourite = (req, res, next) => {
  Favourite.deleteOne({
    homeId: req.body.homeId,
  })
    .then(() => {
      res.redirect("/homeList/favourites");
    })
    .catch((err) => {
      console.log(err);
    });
};
