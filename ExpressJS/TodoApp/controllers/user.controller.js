const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { generateToken } = require("../utils/jwt.utils");

exports.registerUser = asyncHandler(async (req, res) => {
  //! totalNumberOfTasks ==> it should be updated automatically every time a user creates/deletes a task
  //! profilePicture ==> this is nor included in req.body
  let { name, email, password, role } = req.body;
  // {}

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

exports.loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  let existingUser = await userModel.findOne({ email });
  console.log(existingUser); // {name, age,........., password}

  if (!existingUser)
    throw new ErrorHandler(400, "User with this email not found. Please register first.");

  let isMatch = await existingUser.verifyPassword(password);
  //{name, age,........., password}.verifyPassword(123456)
  if (!isMatch) throw new ErrorHandler(400, "Invalid credentials");

  let token = await generateToken(existingUser._id);
  // console.log(token);

  res.cookie("cookieName", token, {
    maxAge: 1 * 60 * 60 * 1000,
  });
  res.status(200).json({ success: true, message: "User logged in successfully", token });
});

exports.logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("cookieName", "", { maxAge: 1 });
  res.status(200).json({ success: true, message: "User logged out successfully" });
});
