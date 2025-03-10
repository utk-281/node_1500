const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
    totalNumberOfTasks: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["normalUser", "admin"],
      default: "normalUser",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
