const express = require("express");
const path = require("path");
const FavController = require("../controllers/Fav");

const FavRouter = express.Router();

FavRouter.post("/favourites", FavController.postAddToFavourite);

FavRouter.get("/favourites", FavController.getFavouritePage);

FavRouter.post("/favourites/delete", FavController.postRemoveFavourite);

module.exports = FavRouter;
