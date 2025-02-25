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
let fetchAllUsers = async (req, res) => {
  let payload = await USER_SCHEMA.find();
  res.json({ success: true, message: "users fetched", payload });
};

//! fetch single user
let fetchUser = async (req, res) => {
  // console.log(req.url);
  //? /user/67bc4de7d6e027e460580ce0
  // console.log(req.params);
  // { id: '67bc4de7d6e027e460580ce0' }
  let { id } = req.params;

  let user = await USER_SCHEMA.findOne({ _id: id });
  res.json({ success: true, message: "user details fetched", user });
};

//! update user
let updateUser = async (req, res) => {
  let { id } = req.params;

  let updatedUser = await USER_SCHEMA.updateOne(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
      },
    }
  );

  res.json({ success: true, message: "user updated", updatedUser });
};

//! delete user
let deleteUser = async (req, res) => {
  let { id } = req.params;
  let user = await USER_SCHEMA.deleteOne({ _id: id });

  res.json({ success: true, message: "user deleted", user });
};

module.exports = {
  createUser,
  fetchAllUsers,
  fetchUser,
  updateUser,
  deleteUser,
};
