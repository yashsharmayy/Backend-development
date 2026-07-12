const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const mongo_URL =
  "mongodb+srv://yashsharmayy:yashsharmayy@learn.e0poopc.mongodb.net/?appName=learn&compressors=zlib";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(mongo_URL)
    .then((client) => {
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("error while connecting to mongo", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("mongo not connected");
  }
  return _db;
};
module.getDB = getDB;
module.exports = mongoConnect;
