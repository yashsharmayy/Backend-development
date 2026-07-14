const { ObjectId } = require("mongodb");
const { getDB } = require("../../airbnb_mongoDb/utils/databaseUtil");

module.exports = class Home {
  constructor(
    ownerName,
    homeName,
    price,
    rating,
    location,
    photo,
    description,
    _id,
  ) {
    this.ownerName = ownerName;
    this.homeName = homeName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
    this.description = description;
    if (_id) {
      this.id = _id;
    }
  }

  save() {
    const db = getDB();
    if (this._id) {
      db.collection("homes").updateOne(
        { _id: new ObjectId(String(this._id)) },
        { $set: this },
      );
    } else {
      return db.collection("homes").insertOne(this);
    }
  }
  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }
  static deleteById(homeId) {
    const db = getDB();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
