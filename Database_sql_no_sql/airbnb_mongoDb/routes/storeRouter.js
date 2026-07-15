const express = require("express");
const path = require("path");
const storeController = require("../controllers/store");

const StoreRouter = express.Router();

StoreRouter.get("/homeForm", storeController.getStoreRouter);

StoreRouter.post("/homeCard", storeController.postStoreRouter);

StoreRouter.get("/homeCard", storeController.getStoreRouternav);

StoreRouter.get("/booking", storeController.getBookpage);

StoreRouter.get("/reverse", storeController.getReservepage);

StoreRouter.get("/home/:homeId", storeController.getHomedetails);

module.exports = StoreRouter;
