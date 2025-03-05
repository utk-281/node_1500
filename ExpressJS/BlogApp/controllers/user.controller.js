let USER_SCHEMA = require("../models/user.model");
let asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

exports.addUser = asyncHandler(async (req, res) => {
  let { name, email, password, phone } = req.body;

  let existingUser = await USER_SCHEMA.findOne({ email });
  if (existingUser) throw new ErrorHandler("user with this email already exists", 400);

  let newUser = await USER_SCHEMA.create({
    email,
    password,
    name,
    phone,
  });

  res.status(201).json({ success: true, message: "user created successfully", newUser });
});

exports.fetchAllUsers = asyncHandler(async (req, res) => {
  let users = await USER_SCHEMA.find();

  if (users.length === 0) throw new ErrorHandler("no users found", 404);

  res.status(200).json({
    success: true,
    message: "users fetched successfully",
    count: users.length,
    users,
  });
});

exports.fetchOneUser = asyncHandler(async (req, res) => {
  let user = await USER_SCHEMA.findById(req.params.id);

  if (!user) throw new ErrorHandler("no user found", 404);

  res.status(200).json({ success: true, message: "user fetched successfully", user });
});

exports.updateUser = asyncHandler(async (req, res) => {
  //   throw new Error("hi");
  //   return "hi";
  console.log(req.params.id);

  let updatedUser = await USER_SCHEMA.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  console.log(updatedUser);

  if (!updatedUser) throw new ErrorHandler("no user found", 404);

  res.status(200).json({ success: true, message: "user updated successfully", updatedUser });
});
