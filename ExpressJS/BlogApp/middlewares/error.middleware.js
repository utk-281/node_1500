// new Errorhandler("already present", 123)
// new Errorhandler()
//

exports.error = (err, req, res, next) => {
  //! validation error
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }

  //! duplicate key error
  if (err.code === 11000) {
    err.statusCode = 409;
    err.message = `${Object.values(err.keyValue).map((ele) => ele)} already present`;
  }

  if (err.name === "CastError") {
    (err.statusCode = 400), (err.message = "Invalid Mongodb Id");
  }

  //! global error handler
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    // errObj: err,
  });
};
