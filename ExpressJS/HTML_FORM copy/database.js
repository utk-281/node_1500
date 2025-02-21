let mongodb = require("mongodb");

let connectDB = async () => {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("expressDB");
  let collection = database.collection("users");
  return collection;
};

module.exports = { connectDB };
