let BLOG_SCHEMA = require("../models/blog.model");
const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");

exports.createBlog = asyncHandler(async (req, res, next) => {
  let { title, description } = req.body;

  let newBlog = await BLOG_SCHEMA.create({ title, description });

  res.status(201).json({
    success: true,
    message: "blog created successfully",
    data: newBlog,
  });
});

exports.fetchAllBlogs = asyncHandler(async (req, res, next) => {
  let allBlogs = await BLOG_SCHEMA.find();

  if (allBlogs.length === 0) {
    return next(new ErrorHandler("no blogs found", 404));
  }

  res.status(200).json({
    success: true,
    message: "blogs fetched successfully",
    count: allBlogs.length,
    allBlogs,
  });
});

exports.fetchOneBlog = asyncHandler(async (req, res, next) => {
  let { id } = req.params;

  let blog = await BLOG_SCHEMA.findById(id);
  if (!blog) {
    return next(new ErrorHandler("no blog found", 404));
  }

  res.status(200).json({
    success: true,
    message: "blog fetched successfully",
    blog,
  });
});

exports.deleteBlog = asyncHandler(async (req, res) => {
  // let blog = await BLOG_SCHEMA.findById(req.params.id);
  // if (!blog) throw new ErrorHandler("no blog found", 404);

  let deletedBlog = await BLOG_SCHEMA.findByIdAndDelete(req.params.id);
  if (!deletedBlog) throw new ErrorHandler("no blog found", 404);

  res.status(200).json({
    success: true,
    message: "blog deleted successfully",
    deletedBlog,
  });
});

exports.updateBlog = asyncHandler(async (req, res) => {
  let updateBlog = await BLOG_SCHEMA.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updateBlog) throw new ErrorHandler("no blog found", 404);

  res.status(200).json({
    success: true,
    message: "blog updated successfully",
    updateBlog,
  });
});
