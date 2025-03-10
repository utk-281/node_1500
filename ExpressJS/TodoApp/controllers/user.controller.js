const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = asyncHandler(async (req, res) => {
  //! totalNumberOfTasks ==> it should be updated automatically every time a user creates/deletes a task
  //! profilePicture ==> this is nor included in req.body
  let { name, email, password, role } = req.body;

  let existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new ErrorHandler(409, "User already exists with this email. Please login instead.");
  }

  let newUser = await userModel.create({ name, email, password, role });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    newUser,
  });
});
