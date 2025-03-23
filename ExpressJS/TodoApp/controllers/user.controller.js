const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { generateToken } = require("../utils/jwt.utils");
const { uploadOnCloudinary, deleteFromCloudinary } = require("../utils/uploadOnCloudinary");

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

  // let newUser = new userModel({
  //   name,
  //   email,
  //   password,
  //   role,
  //   profilePicture: uploadedResponse?.secure_url,
  // });

  // await newUser.save();

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
  let userUpdate = await userModel.findOneAndUpdate(req.user._id, req.body, { new: true });

  // let user = await userModel.findById(req.user._id);

  // user.name = req.body.name || user.name;
  // user.email = req.body.email || user.email;
  // user.password = req.body.password || user.password;

  //! assign new/updated value

  // await user.save();
  res.status(200).json({ success: true, message: "user updated successfully", userUpdate });
});

exports.updatePassword = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.user._id);

  user.password = req.body.password;

  await user.save();

  res.status(200).json({ success: true, message: "password updated successfully" });
});

exports.deleteUserPicture = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.user._id);

  let url = user.profilePicture;

  let urlParts = url.split("/");

  let public_id = urlParts[urlParts.length - 1].split(".")[0];

  console.log(public_id);

  let id = "taskify/" + public_id;

  let deletedImage = await deleteFromCloudinary(id);
  console.log(deletedImage);

  user.profilePicture =
    "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg";

  await user.save();

  res.status(200).json({ success: true, message: "profile picture deleted successfully" });
});

exports.getCurrentUser = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.user._id);
  res.status(200).json({ success: true, data: user });
});

exports.deleteUserProfile = asyncHandler(async (req, res) => {});

exports.updateProfilePicture = asyncHandler(async (req, res) => {
  let user = await userModel.findById(req.user._id);
  let defaultPic = "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg";

  if (user.profilePicture !== defaultPic) {
    let url = user.profilePicture;
    let urlParts = url.split("/");

    let public_id = urlParts[urlParts.length - 1].split(".")[0];
    let id = "taskify/" + public_id;
    await deleteFromCloudinary(id);
  }
  let newLocalFilePath = req.file.path;
  let uploadedResponse = await uploadOnCloudinary(newLocalFilePath);
  user.profilePicture = uploadedResponse?.secure_url;

  await user.save();

  res.status(200).json({ success: true, message: "profile picture updated successfully" });
});

// https://res.cloudinary.com/dmqwvd39n/image/upload/v1742553298/taskify/zr8so72lymkfwkstxzfc.jpg

// in user model store profile picture like this
/* profilePicture:{
   url: {
      type:String
    },
    public_id:{
      type:String
    }

} */
