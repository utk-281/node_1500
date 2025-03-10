const mongoose = require("mongoose");
const { MONGODB_URL } = require(".");
// const { MONOGDB_URL } = require("./index");
exports.connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log(`MongoDB connected`);
};
