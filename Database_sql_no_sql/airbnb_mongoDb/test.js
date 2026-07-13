const { MongoClient } = require("mongodb");

const uri =
  // "mongodb+srv://yashsharmayy:yashsharmayy@learner.eyklnrd.mongodb.net/airbnb?retryWrites=true&w=majority&appName=learner";
  "mongodb://yashsharmayy:yashsharmayy@ac-adtdode-shard-00-00.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-01.eyklnrd.mongodb.net:27017,ac-adtdode-shard-00-02.eyklnrd.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0f7ai-shard-0&authSource=admin&appName=learner";

async function test() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("✅ Connected to MongoDB!");
    await client.close();
  } catch (err) {
    console.error("❌ Connection Error:");
    console.error(err);
  }
}

test();
