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

  //! global error handler
  (err.message = err.message || "Internal Server Error"), (err.statusCode = err.statusCode || 500);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObject: err,
    lineNo: err.stack,
  });
};
