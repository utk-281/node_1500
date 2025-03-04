const express = require("express");
const { PORT } = require("./config");
const { connectDB } = require("./config/database");

const blogRoutes = require("./routes/blog.routes");
const { error } = require("./middlewares/error.middleware");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(blogRoutes);

//! error middleware is used after all routes
app.use(error);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Express server listening on port: ", PORT);
});
