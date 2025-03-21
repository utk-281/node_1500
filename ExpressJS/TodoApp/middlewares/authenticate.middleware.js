const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { JWT_SECRET } = require("../config");
const userModel = require("../models/user.model");

exports.authenticate = asyncHandler(async (req, res, next) => {
  //! checking the cookie
  let cookie = req?.cookies?.cookieName;

  console.log(cookie);

  if (!cookie || cookie === null)
    throw new ErrorHandler(401, "PLease login to access this resource");

  //! decrypting the cookie
  let decodedCookie = jwt.verify(cookie, JWT_SECRET);
  // console.log(decodedCookie);

  //! finding the user based on id
  let myUser = await userModel.findById(decodedCookie.id);

  if (!myUser) throw new ErrorHandler(400, "please login again");

  req.user = myUser;
  next();
});

// req.cookies = {
//   cookieName: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDE1ZWYxNTFkNzVkOTFmYjVmODkzOCIsImlhdCI6MTc0MjIwNDg4MiwiZXhwIjoxNzQyMjkxMjgyfQ.4UnyQU-tPg6syWkhZDjVIocJJM0eANWSK4v79xqrm3w'
// }

/* decodedCookie==> { id: '67d15ef151d75d91fb5f8938', iat: 1742206174, exp:1742292574 } */
