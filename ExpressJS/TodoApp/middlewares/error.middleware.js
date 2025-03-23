const ErrorHandler = require("../utils/errorHandler.utils");

exports.error = (err, req, res, next) => {
  //! validation error
  if (err.name === "ValidationError") {
    let message = Object.values(err.errors).map((ele) => ele.message);
    err = new ErrorHandler(400, message);
  }

  //! JsonWebTokenError
  if (err.name === "JsonWebTokenError") {
    let message = "Please log in first",
      err = new ErrorHandler(401, message);
  }

  //! duplicate key error
  if (err.code === 11000) {
    let message = `${Object.keys(err.keyValue)} already exists`;
    err = new ErrorHandler(400, message);
  }

  //! invalid jwt token
  if (err.name === "JsonWebTokenError") {
    let message = "Invalid token. please log in again";
    err = new ErrorHandler(400, message);
  }

  //! global error handler
  (err.message = err.message || "Internal Server Error"), (err.statusCode = err.statusCode || 500);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObject: err,
    lineNo: err.stack,
  });
};

//! steps to use atlas ==>
//! 1) create a new project
//! 2) assign a name of the project and click on next
//! 3) click on create project
//! 4) click on create cluster
//! 5) provide the input data
//! 6) CLICK ON CREATE DEPLOYMENT
//! 7) SAVE THE USERNAME AND PASSWORD
//!8) click on create database user
//! (9)click on connect

// USERNAME ==>utkarshgupta281
// USERpASSWORD =>GG3CyTK8njWSsLEz
