const todoModel = require("../models/todo.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler.utils");
const userModel = require("../models/user.model");
const { parse, format } = require("date-fns");

exports.addTodo = asyncHandler(async (req, res) => {
  let { title, description, dueDate, priority, status } = req.body;

  console.log(req.body.dueDate); // --> string

  // yyyy/mm/dd --> date comparison

  // dueDate ==> dd/mm/yyyy
  let parsedDate = parse(dueDate, "dd/MM/yyyy", new Date()); // input, format, reference

  //! user will enter date in this format ==> dd/mm/yyyy
  //! parse --> store in db yyyy/mm/dd

  let newTodo = await todoModel.create({
    title,
    description,
    dueDate: parsedDate,
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
  // let allTodo = await todoModel.find({ createdBy: req.user._id }); // _doc field

  let filter = { createdBy: req.user._id };

  if (req.query.status) {
    filter.status = req.query.status; // ?status=true/false&
  }

  if (req.query.priority) {
    filter.priority = req.query.priority; // ?priority=high/medium/low&status=true
  }

  let sortOption = {};
  if (req.query.sort) {
    const [field, value] = req.query.sort.split("_"); // ["dueDate", "asc"];
    if (field === "dueDate" && (value === "asc" || value === "desc")) {
      let order = value === "asc" ? 1 : -1;
      sortOption[field] = order;
    }
  } // ?sort=dueDate_asc/dueDate_desc

  console.log(filter);
  console.log(sortOption);

  // findOne({filter})
  let allTodo = await todoModel.find(filter).sort(sortOption);

  // [ {}, {}, {}, ..... ] --> allTodos : _doc

  let todos = allTodo.map((todo) => ({
    ...todo._doc,
    dueDate: format(todo.dueDate, "EEEE, dd MMMM yyyy"),
    createdAt: format(todo.createdAt, "dd/MM/yyyy"),
    updatedAt: format(todo.updatedAt, "dd/MM/yyyy"),
  }));

  if (allTodo.length === 0) throw new ErrorHandler(404, "no todo found");

  res.status(200).json({ success: true, count: allTodo.length, message: "todo fetched", todos });
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

// https://www.youtube.com/watch?v=_4CPp670fK4 ==> project
