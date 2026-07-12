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

  save() {}
  static fetchAll() {}

  static findById(homeId) {}
  static deleteById(homeId) {}
};
