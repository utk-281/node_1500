const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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

//! password hashing ==> done with the help of bcrypt module
//? pre hook
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  let salt = await bcrypt.genSalt(12); // generating a random string of size 12
  let hashedPassword = await bcrypt.hash(this.password, salt); // hashing the password with the salt using has()
  this.password = hashedPassword;
  console.log(this.password); // store the hashed password in db
});

//! if we want to add a method to the schema
//? method to compare the entered password with the hashed password
// userSchema.methods.methodName = function() {}

userSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = model("User", userSchema);

//! connect mongodb with node
