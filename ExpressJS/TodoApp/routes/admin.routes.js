const { Router } = require("express");
const { authenticate } = require("../middlewares/authenticate.middleware");
const {
  fetchAllUser,
  fetchOneUser,
  updateUserRole,
  fetchAllTodos,
  fetchOneTodo,
} = require("../controllers/admin.controller");
const { authorize } = require("../middlewares/authorize.middleware");
const router = Router();

router.get("/all", authenticate, authorize, fetchAllUser);

router.get("/:id", authenticate, authorize, fetchOneUser);

router.patch("/update-role/:id", authenticate, authorize, updateUserRole);

router.get("/all", authenticate, authorize, fetchAllTodos);

router.get("/:id", authenticate, authorize, fetchOneTodo);

module.exports = router;
