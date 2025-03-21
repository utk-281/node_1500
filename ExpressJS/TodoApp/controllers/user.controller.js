const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { generateToken } = require("../utils/jwt.utils");
const uploadOnCloudinary = require("../utils/uploadOnCloudinary");

exports.registerUser = asyncHandler(async (req, res) => {
  //! profilePicture ==> this is nor included in req.body

  // console.log(req.file);

  let { name, email, password, role } = req.body;

  let existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new ErrorHandler(409, "User already exists with this email. Please login instead.");
  }

  let uploadedResponse = await uploadOnCloudinary(req?.file?.path);
  // console.log(uploadedResponse);

  let newUser = await userModel.create({
    name,
    email,
    password,
    role,
    profilePicture: uploadedResponse?.secure_url,
  });
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

exports.updateUserProfile = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.user._id);

  console.log(user);

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.password = req.body.password || user.password;
  user.role = req.body.role || user.role;

  await user.save();
  console.log(user);
  res.status(200).json({ success: true, message: "user updated successfully", user });
});

exports.deleteUserPicture = asyncHandler(async (req, res) => {});

exports.getCurrentUser = asyncHandler(async (req, res) => {});

exports.deleteUserProfile = asyncHandler(async (req, res) => {});

exports.updateProfilePicture = asyncHandler(async (req, res) => {});
