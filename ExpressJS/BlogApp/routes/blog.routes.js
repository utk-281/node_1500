const { Router } = require("express");
const { createBlog, fetchAllBlogs, fetchOneBlog } = require("../controllers/blog.controller");
const router = Router();

router.post("/add", createBlog);
router.get("/blogs", fetchAllBlogs);
router.get("/blog/:id", fetchOneBlog);

module.exports = router;

//!  flow ==>
// try catch --> displaying the error message
// asyncHandler() --> displaying the error
// error middleware --> handled the error that generated
// ErrorHandler{} --> to generate custom error
