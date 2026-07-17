const mongoose = require("mongoose");

const Favschema = mongoose.Schema({
  homeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
    unique: true,
  },
});
module.exports = mongoose.model("Favourite", Favschema);

// const { ObjectId } = require("mongodb");

// module.exports = class Favourite {
//   constructor(homeId) {
//     this.homeId = new ObjectId(homeId);
//   }

//   save() {
//     const db = getDB();

//     return db.collection("favourites").insertOne(this);
//   }

//   static getFavourites() {
//     const db = getDB();

//     return db
//       .collection("favourites")
//       .aggregate([
//         {
//           $lookup: {
//             from: "homes",
//             localField: "homeId",
//             foreignField: "_id",
//             as: "home",
//           },
//         },
//         {
//           $unwind: "$home",
//         },
//         {
//           $replaceRoot: {
//             newRoot: "$home",
//           },
//         },
//       ])
//       .toArray();
//   }

//   static deleteFavourite(homeId) {
//     const db = getDB();

//     return db.collection("favourites").deleteOne({
//       homeId: new ObjectId(homeId),
//     });
//   }
// };
