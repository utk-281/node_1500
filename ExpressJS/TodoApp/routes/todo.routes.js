const { Router } = require("express");
const {
  addTodo,
  fetchAllTodo,
  fetchOneTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/add", authenticate, addTodo); // injecting middleware between routes
router.get("/all", authenticate, fetchAllTodo);

router.get("/:id", authenticate, fetchOneTodo);
router.delete("/:id", authenticate, deleteTodo);

router.patch("/:id", authenticate, updateTodo);

module.exports = router;
