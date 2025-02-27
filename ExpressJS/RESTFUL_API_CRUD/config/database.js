let mongoose = require("mongoose");

let connectDB = async () => {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Database Connected");
};

module.exports = {
  connectDB,
};
