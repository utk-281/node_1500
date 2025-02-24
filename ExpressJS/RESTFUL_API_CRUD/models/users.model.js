//! 1) import the mongoose model
//! 2) create a structure for the model
//! 3) create a model/collection and export it

let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },
  { timestamps: true } // todo
);

/* 
createdAt ==> 
updatedAt ==>  ,
__v : it is added by mongoose for it's internal operations
*/

module.exports = mongoose.model("User", userSchema); // db-name ==> CRUD_API, collection ==> users (plural and lowercase)
