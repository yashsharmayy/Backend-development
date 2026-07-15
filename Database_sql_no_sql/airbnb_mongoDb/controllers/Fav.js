const Favourite = require("../models/favourites");

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;

  const favourite = new Favourite(homeId);

  favourite
    .save()
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getFavouritePage = (req, res, next) => {
  Favourite.getFavourites()
    .then((favourites) => {
      res.render("store/favourite-list", {
        favourites: favourites,
        title: "My Favourites",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postRemoveFavourite = (req, res, next) => {
  const { homeId } = req.body;

  Favourite.deleteById(homeId)
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
