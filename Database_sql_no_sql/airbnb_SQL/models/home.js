const db = require("../utils/databaseUtil");

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
    if (this.id) {
      return db.execute(
        `UPDATE homes
       SET ownerName = ?, homeName = ?, price = ?, rating = ?, location = ?, photo = ?, description = ?
       WHERE id = ?`,
        [
          this.ownerName,
          this.homeName,
          this.price,
          this.rating,
          this.location,
          this.photo,
          this.description,
          this.id,
        ],
      );
    } else {
      return db.execute(
        `INSERT INTO homes
      (ownerName, homeName, price, rating, location, photo, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          this.ownerName,
          this.homeName,
          this.price,
          this.rating,
          this.location,
          this.photo,
          this.description,
        ],
      );
    }
  }
  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute(`SELECT * FROM homes WHERE id = ?`, [homeId]);
  }
  static deleteById(homeId) {
    return db.execute(`DELETE FROM homes WHERE id = ?`, [homeId]);
  }
};
