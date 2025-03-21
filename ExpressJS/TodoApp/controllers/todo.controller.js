const todoModel = require("../models/todo.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const userModel = require("../models/user.model");

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, dueDate, priority, status } = req.body;

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate,
    priority,
    status,
    createdBy: req.user._id,
  });

  // let user = await userModel.findById(req.user._id);

  // await userModel.updateOne({ _id: user._id }, { $inc: { totalNumberOfTasks: 1 } });

  await userModel.findByIdAndUpdate(req.user._id, { $inc: { totalNumberOfTasks: 1 } });

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

exports.deleteTodo = asyncHandler(async (req, res) => {
  // let todo = await todoModel.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });
  let todo = await todoModel.findOneAndDelete({
    $and: [{ _id: req.params.id }, { createdBy: req.user._id }],
  });

  if (!todo) throw new ErrorHandler(404, "no todo found");

  await userModel.findByIdAndUpdate(req.user._id, { $inc: { totalNumberOfTasks: -1 } });

  res.status(200).json({ success: true, message: "todo deleted successfully", todo });
});

exports.updateTodo = asyncHandler(async (req, res) => {
  let updatedTodo = await todoModel.findOneAndUpdate(
    {
      $and: [{ _id: req.params.id }, { createdBy: req.user._id }],
    },
    {
      $set: req.body,
    },
    { new: true, runValidators: true } // it will check the schema for validations against new data
  );

  if (!updatedTodo) throw new ErrorHandler(404, "no todo found");

  res.status(200).json({ success: true, message: "todo updated successfully", updatedTodo });
});
