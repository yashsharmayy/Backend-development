const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb://ys4468570_db_user:RBE7mGVetcKsbXaz@ac-p4wlful-shard-00-00.76mtbav.mongodb.net:27017,ac-p4wlful-shard-00-01.76mtbav.mongodb.net:27017,ac-p4wlful-shard-00-02.76mtbav.mongodb.net:27017/?ssl=true&replicaSet=atlas-11neee-shard-0&authSource=admin&appName=backend2",
  );
  console.log("Connected to db");
}
module.exports = connectDB;
