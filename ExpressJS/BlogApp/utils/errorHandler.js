class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message), (this.statusCode = statusCode);
  }
}

module.exports = ErrorHandler;

// new ErrorHandler("message", 123)

//! to generate custom defined error
