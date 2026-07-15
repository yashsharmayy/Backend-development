const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = new ObjectId(homeId);
  }

  save() {
    const db = getDB();

    return db.collection("favourites").insertOne(this);
  }

  static getFavourites() {
    const db = getDB();

    return db
      .collection("favourites")
      .aggregate([
        {
          $lookup: {
            from: "homes",
            localField: "homeId",
            foreignField: "_id",
            as: "home",
          },
        },
        {
          $unwind: "$home",
        },
        {
          $replaceRoot: {
            newRoot: "$home",
          },
        },
      ])
      .toArray();
  }

  static deleteFavourite(homeId) {
    const db = getDB();

    return db.collection("favourites").deleteOne({
      homeId: new ObjectId(homeId),
    });
  }
};
