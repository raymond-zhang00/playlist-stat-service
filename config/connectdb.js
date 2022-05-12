// Perform db connection
const config = require("./config.json")
const { MongoClient } = require("mongodb");

function connectDB() {

  const client = new MongoClient(config.mongoURI);
  async function run() {
    try {
      await client.connect();

      console.log("MongoDB connected...")
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }
  run().catch(console.dir);

}

module.exports = connectDB;