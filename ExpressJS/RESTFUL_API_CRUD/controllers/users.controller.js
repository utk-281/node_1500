//! 1) import the collection
let USER_SCHEMA = require("../models/users.model");

//! creating a user
let createUser = async (req, res) => {
  console.log(req.body); // undefined
  let { name, email, password, phoneNumber } = req.body;
  let newUser = await USER_SCHEMA.create({ name, email, password, phoneNumber });
  res.json({ success: true, message: "user added successfully", newUser });
};

//! fetch all users
let fetchAllUsers = (req, res) => {};

//! fetch single user
let fetchUser = (req, res) => {};

//! update user
let updateUser = (req, res) => {};

//! delete user
let deleteUser = (req, res) => {};

module.exports = {
  createUser,
};
