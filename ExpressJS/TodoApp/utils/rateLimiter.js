const rateLimit = require("express-rate-limit");

let rateLimiter = (req, time) => {
  return rateLimit({
    time: time,
    max: req,
    standardHeaders: "draft-8",
    legacyHeaders: false,
  });
};

module.exports = { rateLimiter };
