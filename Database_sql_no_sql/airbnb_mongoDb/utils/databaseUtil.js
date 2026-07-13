const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const mongo_URL =
  "mongodb://yashsharmayy:yashsharmayy@ac-adtdode-shard-00-00.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-01.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-02.eyklnrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0f7ai-shard-0&authSource=admin&appName=learner";
// "mongodb+srv://yashsharmayy:yashsharmayy@learner.eyklnrd.mongodb.net/?appName=learner";
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
