const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("stream/consumers");
const { error } = require("console");

// fake database
// let homedetails = [];

const favDataPath = path.join(rootDir, "data", "favData.json");
module.exports = class Fav {
  constructor(ownerName, homeName, price, rating, location, photo) {
    this.ownerName = ownerName;
    this.homeName = homeName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
  }

  save() {
    Fav.fetchAll((favdetails) => {});
  }

  static fetchAll(callback) {}

  static findById(homeId, callback) {}
  static deleteById(homeId, callback) {}
};
