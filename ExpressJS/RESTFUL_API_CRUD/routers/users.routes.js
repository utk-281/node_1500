//! destructure Router component
//! invoke top level function
//! export the variable

const { Router } = require("express");
const {
  createUser,
  fetchAllUsers,
  fetchUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");
const router = Router();

router.post("/create-user", createUser);

router.get("/all-users", fetchAllUsers);

router.get("/user/:id", fetchUser);

router.patch("/update-user/:id", updateUser);

router.delete("/delete-user/:id", deleteUser);

module.exports = router;
