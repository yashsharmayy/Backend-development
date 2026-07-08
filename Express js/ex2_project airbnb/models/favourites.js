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
    Fav.fetchAll((favdetails) => {
      favdetails.push(this);
      fs.writeFile(favDataPath, JSON.stringify(favdetails), (error) => {
        console.log("file writing concluded for fav", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(favDataPath, (err, data) => {
      console.log("file read: ", err, data);

      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id == homeId);
      callback(homeFound);
    });
  }
};
