const Favourite = require("../models/favourites");

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;

  const favourite = new Favourite(homeId);

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
  Favourite.getFavourites()
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
  const homeId = req.body.homeId;

  Favourite.deleteFavourite(homeId)
    .then(() => {
      res.redirect("/homeList/favourites");
    })
    .catch((err) => {
      console.log(err);
    });
};
