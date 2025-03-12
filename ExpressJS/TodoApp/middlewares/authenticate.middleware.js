const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.authenticate = asyncHandler(async (req, res, next) => {
  //   let cookie = req.cookies;
  //   let cookie1 = req.cookie;
  //   console.log(cookie);
  //   console.log(cookie1);
  console.log(req.cookies);
});
