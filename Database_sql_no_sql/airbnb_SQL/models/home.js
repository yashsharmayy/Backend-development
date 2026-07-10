const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(ownerName, homeName, price, rating, location, photo) {
    this.ownerName = ownerName;
    this.homeName = homeName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
  }

  save(callback) {}

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId, callback) {}
  static deleteById(homeId, callback) {}
};
