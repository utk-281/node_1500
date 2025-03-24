const mongoose = require("mongoose");
const { MONGODB_URL, ATLAS_URL } = require(".");
exports.connectDB = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log(`MongoDB connected`, MONGODB_URL);
};
