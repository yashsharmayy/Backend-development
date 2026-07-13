const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const mongo_URL =
  "mongodb+srv://yashsharmayy:yashsharmayy@learner.eyklnrd.mongodb.net/?appName=learner";
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(mongo_URL)
    .then((client) => {
      console.log("mongo connect successfuly");

      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("error while connecting to mongo", err);
    });
};

const getDB = () => {
  // if (!_db) {
  //   // throw new Error("mongo not connected");
  // }
  return _db;
};
exports.getDB = getDB;
exports.mongoConnect = mongoConnect;
