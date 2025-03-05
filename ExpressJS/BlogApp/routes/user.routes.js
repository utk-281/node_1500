let { Router } = require("express");
const {
  addUser,
  fetchAllUsers,
  fetchOneUser,
  updateUser,
} = require("../controllers/user.controller");

let router = Router();

router.post("/add", addUser);
router.get("/users", fetchAllUsers);
router.get("/user/:id", fetchOneUser);

router.patch("/update-user/:id", updateUser);

module.exports = router;
