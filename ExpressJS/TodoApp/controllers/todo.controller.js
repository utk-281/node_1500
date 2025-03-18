const todoModel = require("../models/todo.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const { json } = require("express");

exports.addTodo = asyncHandler(async (req, res) => {
  console.log(req.user);
  let { title, description, dueDate, priority, status } = req.body;

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate,
    priority,
    status,
    createdBy: req.user._id,
  });

  res.status(201).json({ message: "Todo added successfully", data: newTodo });
});

exports.fetchAllTodo = asyncHandler(async (req, res) => {
  let todo = await todoModel.find({ createdBy: req.user._id });

  if (todo.length === 0) throw new ErrorHandler(404, "no todo found");

  res.status(200).json({ success: true, count: todo.length, message: "todo fetched", todo });
});

exports.fetchOneTodo = asyncHandler(async (req, res) => {
  let todo = await todoModel.findOne({ _id: req.params.id, createdBy: req.user._id });

  if (!todo) throw new ErrorHandler(404, "no todo found");

  res.status(200).json({ success: true, count: todo.length, message: "todo fetched", todo });
});

// case-1 ==> same fields but multiple condition
// case-2 ==> different fields different condition

//! write the controller for deleteTodo
