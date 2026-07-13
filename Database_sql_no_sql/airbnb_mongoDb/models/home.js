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
  ) {
    this.ownerName = ownerName;
    this.homeName = homeName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
    this.description = description;
  }

  save() {
    const db = getDB();
    return db.collection("homes").insertOne(this);
  }
  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db.collection("homes").find({ _id: homeId }).next();
  }
  static deleteById(homeId) {}
};
