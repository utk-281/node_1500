//! 1) import the collection
let USER_SCHEMA = require("../models/users.model");

//! creating a user
exports.createUser = async (req, res) => {
  try {
    let { name, email, password, phoneNumber } = req.body;

    let existingUser = await USER_SCHEMA.findOne({ email });
    if (existingUser)
      return res.status(409).json({ success: false, message: "user already exists" });

    let newUser = await USER_SCHEMA.create({ name, email, password, phoneNumber });
    console.log(newUser);
    res.status(201).json({ success: true, message: "user added successfully", newUser });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message, myMessage: "error while adding a user" });
  }
};

//! fetch all users
exports.fetchAllUsers = async (req, res) => {
  try {
    let payload = await USER_SCHEMA.find();

    if (payload.length === 0)
      return res.status(404).json({ success: false, message: "no users present" });

    res
      .status(200)
      .json({ success: true, count: payload.length, message: "users fetched", payload });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message, myMessage: "error while fetching users" });
  }
};

//! fetch single user
exports.fetchUser = async (req, res) => {
  // console.log(req.url);
  //? /user/67bc4de7d6e027e460580ce0
  // console.log(req.params);
  // { id: '67bc4de7d6e027e460580ce0' }
  try {
    let { id } = req.params;

    let user = await USER_SCHEMA.findOne({ _id: id });
    if (!user) return res.status(404).json({ success: false, message: "no user present" });

    res.status(200).json({ success: true, message: "user details fetched", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      myMessage: "error while fetching single user",
    });
  }
};

//! update user
exports.updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await USER_SCHEMA.findOne({ _id: id });
    if (!user) return res.status(404).json({ success: false, message: "no user present" });

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
    res.status(200).json({ success: true, message: "user updated", updatedUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      myMessage: "error while updating a user",
    });
  }
};

//! delete user
exports.deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await USER_SCHEMA.findOne({ _id: id });
    if (!user) return res.status(404).json({ success: false, message: "no user present" });

    let deleteUser = await USER_SCHEMA.deleteOne({ _id: id });

    res.status(200).json({ success: true, message: "user deleted", deleteUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      myMessage: "error while deleting a user",
    });
  }
};

// module.exports = {
//   //   createUser,
//   fetchAllUsers,
//   fetchUser,
//   updateUser,
//   deleteUser,
// };
