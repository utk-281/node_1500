let mongoose = require("mongoose");

let connectDB = async () => {
  mongoose.connect("mongodb://localhost:27017/CRUD_API");
  console.log("Database Connected");
};

module.exports = {
  connectDB,
};
