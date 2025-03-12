const todoModel = require("../models/todo.model");
const asyncHandler = require("express-async-handler");

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, dueDate, priority, status } = req.body;

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate,
    priority,
    status,
  });

  res.status(201).json({ message: "Todo added successfully", data: newTodo });
});
