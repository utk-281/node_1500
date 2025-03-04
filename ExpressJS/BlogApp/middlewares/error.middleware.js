// new Errorhandler("already present", 123)
// new Errorhandler()
//

exports.error = (err, req, res, next) => {
  //! validation error
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }

  //! cast error
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Invalid ObjectId, pass the correct ObjectId";
  }

  //! global error handler
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObj: err,
  });
};
