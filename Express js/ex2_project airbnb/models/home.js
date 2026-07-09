const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { json } = require("stream/consumers");
const { error } = require("console");

// fake database
// let homedetails = [];

const homeDataPath = path.join(rootDir, "data", "homes.json");
module.exports = class Home {
  constructor(ownerName, homeName, price, rating, location, photo) {
    this.ownerName = ownerName;
    this.homeName = homeName;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.photo = photo;
  }

  save() {
    Home.fetchAll((homedetails) => {
      if (this.id) {
        // edit home
        homedetails = homedetails.map((home) =>
          home.id == this.id ? this : home,
        );
      } else {
        // add home

        this.id = Math.floor(Math.random() * 10000);
        homedetails.push(this);
      }

      fs.writeFile(homeDataPath, JSON.stringify(homedetails), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      console.log("file read: ", err, data);
      //   if (err) {
      //     homedetails = [];
      //   } else homedetails = JSON.parse(data);

      // if (!err) {
      //   homedetails = JSON.parse(data);
      // }
      // return homedetails;

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
