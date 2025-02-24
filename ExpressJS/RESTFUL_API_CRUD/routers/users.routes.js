//! destructure Router component
//! invoke top level function
//! export the variable

const { Router } = require("express");
const { createUser } = require("../controllers/users.controller");
const router = Router();

router.post("/create-user", createUser);

module.exports = router;
