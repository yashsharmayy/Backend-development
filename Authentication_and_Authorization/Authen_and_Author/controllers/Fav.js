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
    .populate("homeId")
    .then((favourites) => {
      const homes = favourites.map((fav) => fav.homeId);

      res.render("store/favourite-list", {
        title: "My Favourite Homes",
        homes: homes,
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
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
