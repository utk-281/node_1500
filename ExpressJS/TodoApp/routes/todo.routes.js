const { Router } = require("express");
const { addTodo, fetchAllTodo, fetchOneTodo } = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/add", authenticate, addTodo); // injecting middleware between routes
router.get("/all", authenticate, fetchAllTodo);

router.get("/:id", authenticate, fetchOneTodo);

module.exports = router;
