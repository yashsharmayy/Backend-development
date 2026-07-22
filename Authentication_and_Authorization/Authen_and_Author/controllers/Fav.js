const User = require("../models/user");

exports.getFavouritePage = async (req, res, next) => {
  const userId = req.session.user;
  const currentUser = await User.findById(userId).populate("favourites");

  console.log("Current User:", currentUser);

  res.render("store/favourite-list", {
    title: "My Favourite Homes",
    homes: currentUser.favourites,
    isLoggedIn: req.session.isLoggedIn,
    user: req.user,
  });
};
exports.postAddToFavourite = async (req, res, next) => {
  const homeId = req.body.id;
  const userId = req.session.user;
  const user = await User.findById(userId);
  if (!user.favourites.includes(homeId)) {
    user.favourites.push(homeId);
    await user.save();
  }
  res.redirect("/homeList/favourites");
};

exports.postRemoveFavourite = async (req, res, next) => {
  try {
    const homeId = req.body.homeId;

    await User.findByIdAndUpdate(req.session.user, {
      $pull: { favourites: homeId },
    });

    res.redirect("/homeList/favourites");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
