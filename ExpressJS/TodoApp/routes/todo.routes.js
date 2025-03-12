const { Router } = require("express");
const { addTodo } = require("../controllers/todo.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");
const router = Router();

router.post("/add", authenticate, addTodo);

module.exports = router;
