const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://yashsharmayy:YOUR_PASSWORD@learner.eyklnrd.mongodb.net/airbnb?retryWrites=true&w=majority&appName=learner";

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
