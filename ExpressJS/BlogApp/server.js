const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");
const { error } = require("./middlewares/error.middleware");

const blogRoutes = require("./routes/blog.routes");
const userRoutes = require("./routes/user.routes");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/v1/blogs", blogRoutes);
// http://localhost:9000/v1/blogs/add
// http://localhost:9000/v1/blogs/blogs
// http://localhost:9000/v1/blogs/one-blog
//? /v1/blogs ==> api versioning

app.use("/v1/users", userRoutes);

//! error middleware is used after all routes
app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port: ", PORT);
});
