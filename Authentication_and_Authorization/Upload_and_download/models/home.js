const mongoose = require("mongoose");

// const { getDB } = require("../../airbnb_mongoDb/utils/databaseUtil");

const homeSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  homeName: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  location: { type: String, required: true },
  photo: String,
  description: String,
});

module.exports = mongoose.model("Home", homeSchema);

// module.exports = class Home {
//   constructor(
//     ownerName,
//     homeName,
//     price,
//     rating,
//     location,
//     photo,
//     description,
//     _id,
//   ) {
//     this.ownerName = ownerName;
//     this.homeName = homeName;
//     this.price = price;
//     this.rating = rating;
//     this.location = location;
//     this.photo = photo;
//     this.description = description;
//     if (_id) {
//       this.id = _id;
//     }
//   }

//   save() {
//     const db = getDB();
//     if (this.id) {
//       const updateFields = {
//         ownerName: this.ownerName,
//         homeName: this.homeName,
//         price: this.price,
//         rating: this.rating,
//         location: this.location,
//         photo: this.photo,
//         description: this.description,
//       };
//       db.collection("homes").updateOne(
//         { _id: new ObjectId(String(this._id)) },
//         { $set: updateFields },
//       );
//     } else {
//       return db.collection("homes").insertOne(this);
//     }
//   }
//   static find() {
//     const db = getDB();
//     return db.collection("homes").find().toArray();
//   }

//   static findById(homeId) {
//     const db = getDB();
//     return db
//       .collection("homes")
//       .find({ _id: new ObjectId(String(homeId)) })
//       .next();
//   }
//   static deleteById(homeId) {
//     const db = getDB();
//     return db
//       .collection("homes")
//       .deleteOne({ _id: new ObjectId(String(homeId)) });
//   }
// };
